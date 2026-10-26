import asyncio
from datetime import datetime
import hashlib
import os
from pathlib import Path
import subprocess
import sys

from fastmcp import Client
import pytest

import server


def test_read_existing_ustav(root):
    result = server.read_canon("USTAV.md")
    assert result == {
        "path": "USTAV.md", "content": (root / "USTAV.md").read_text(),
        "status": "READ_OK", "updated_at": result["updated_at"],
        "source": "local://DARKWESSOS/USTAV.md",
    }
    assert datetime.fromisoformat(result["updated_at"]).tzinfo is not None


def test_missing_file(root):
    with pytest.raises(server.WorkspaceError, match="^FILE_NOT_FOUND: missing.md$"):
        server.read_canon("missing.md")


@pytest.mark.parametrize("path", ["../outside.md", "STORY/../../outside.md", "/etc/passwd", "C:\\outside.md", "STORY/../USTAV.md", "USTAV.md\x00"])
def test_escape_is_denied(root, path):
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
        server.read_canon(path)


def test_absolute_path_inside_root_is_also_denied(root):
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
        server.read_canon(str(root / "USTAV.md"))


def test_non_markdown_is_denied(root):
    (root / "notes.txt").write_text("ordinary test text")
    with pytest.raises(server.WorkspaceError, match="^UNSUPPORTED_FILE_TYPE: only .md files are allowed$"):
        server.read_canon("notes.txt")


@pytest.mark.parametrize("path", [".env", ".env.md", ".ssh/id_rsa.md", "secrets/key.md", "token.md", "private/config.md", "docs/credentials.md"])
def test_sensitive_paths_denied_even_if_missing(root, path):
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
        server.read_canon(path)


def test_symlinks_to_inside_and_outside_are_denied(root, tmp_path):
    outside = tmp_path / "outside.md"
    outside.write_text("OUTSIDE_SENTINEL")
    (root / "external.md").symlink_to(outside)
    (root / "internal.md").symlink_to(root / "USTAV.md")
    (root / "linked_directory").symlink_to(tmp_path, target_is_directory=True)
    for path in ["external.md", "internal.md", "linked_directory/outside.md"]:
        with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
            server.read_canon(path)
    assert server.search_workspace("OUTSIDE_SENTINEL")["status"] == "NO_MATCH"


def test_hard_link_to_outside_is_denied(root, tmp_path):
    outside = tmp_path / "outside.md"
    outside.write_text("HARDLINK_SENTINEL")
    os.link(outside, root / "hardlink.md")
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED: hard-linked"):
        server.read_canon("hardlink.md")
    assert server.search_workspace("HARDLINK_SENTINEL")["status"] == "NO_MATCH"


def test_symlink_swap_between_validation_and_open(root, tmp_path, monkeypatch):
    outside = tmp_path / "outside.md"
    outside.write_text("OUTSIDE_SENTINEL")
    workspace = server.Workspace.from_env()
    original_open = os.open

    def swap(name, flags, *args, **kwargs):
        if name == "USTAV.md":
            (root / name).unlink()
            (root / name).symlink_to(outside)
        return original_open(name, flags, *args, **kwargs)

    monkeypatch.setattr(server.os, "open", swap)
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
        workspace.read_canon("USTAV.md")


def test_missing_root_refuses_startup(monkeypatch):
    monkeypatch.delenv("DARKWESSOS_ROOT", raising=False)
    with pytest.raises(server.ConfigurationError, match="DARKWESSOS_ROOT is required"):
        server.create_server()


def test_cli_refuses_to_start_without_root(monkeypatch):
    monkeypatch.delenv("DARKWESSOS_ROOT", raising=False)
    result = subprocess.run([sys.executable, "-B", str(Path(server.__file__))],
                            capture_output=True, text=True, timeout=20)
    assert result.returncode == 2
    assert "CONFIG_ERROR: DARKWESSOS_ROOT is required" in result.stderr
    assert result.stdout == ""


def test_missing_or_symlink_root_is_rejected(root, tmp_path, monkeypatch):
    link = tmp_path / "root-link"
    link.symlink_to(root, target_is_directory=True)
    for folder in [link, tmp_path / "missing"]:
        monkeypatch.setenv("DARKWESSOS_ROOT", str(folder))
        with pytest.raises(server.ConfigurationError, match="CONFIG_ERROR:"):
            server.create_server()


def snapshot(folder):
    return {str(path.relative_to(folder)): (hashlib.sha256(path.read_bytes()).hexdigest(),
            path.stat().st_mtime_ns, path.stat().st_mode)
            for path in folder.rglob("*") if path.is_file()}


def test_all_tools_leave_documents_unchanged(root):
    before = snapshot(root)
    server.read_canon("USTAV.md")
    server.search_workspace("TASK-001")
    server.load_active_task_context("TASK-001")
    assert snapshot(root) == before


def test_tools_use_only_read_flags_and_never_shell(root, monkeypatch):
    workspace = server.Workspace.from_env()
    original_open = os.open
    opened = []

    def read_only(name, flags, *args, **kwargs):
        assert not flags & (os.O_WRONLY | os.O_RDWR | os.O_CREAT | os.O_TRUNC | os.O_APPEND)
        opened.append(name)
        return original_open(name, flags, *args, **kwargs)

    def no_shell(*args, **kwargs):
        raise AssertionError("Tools must not invoke subprocesses")

    monkeypatch.setattr(server.os, "open", read_only)
    monkeypatch.setattr(subprocess, "run", no_shell)
    monkeypatch.setattr(subprocess, "Popen", no_shell)
    monkeypatch.setattr(os, "system", no_shell)
    workspace.read_canon("USTAV.md")
    workspace.search_workspace("Harrenhal")
    workspace.load_active_task_context("TASK-001")
    assert "USTAV.md" in opened


def test_mcp_discovery_and_three_calls(root):
    async def exercise():
        async with Client(server.create_server()) as client:
            tools = await client.list_tools()
            assert {tool.name for tool in tools} == {"read_canon", "search_workspace", "load_active_task_context"}
            for tool in tools:
                hints = tool.annotations.model_dump(by_alias=True)
                assert hints["readOnlyHint"] is True
                assert hints["destructiveHint"] is False
                assert hints["openWorldHint"] is False
            for name, args, status in [
                ("read_canon", {"relative_path": "USTAV.md"}, "READ_OK"),
                ("search_workspace", {"query": "TASK-001"}, "SEARCH_OK"),
                ("load_active_task_context", {"task_id": "TASK-001"}, "LOAD_OK"),
            ]:
                result = await client.call_tool(name, args)
                assert result.data["status"] == status
            with pytest.raises(Exception, match="ACCESS_DENIED"):
                await client.call_tool("read_canon", {"relative_path": "../outside.md"})
    before = snapshot(root)
    asyncio.run(exercise())
    assert snapshot(root) == before


def test_stdio_protocol_three_tools(root):
    async def exercise():
        config = {"mcpServers": {"darkwessos": {
            "command": sys.executable,
            "args": ["-B", str(Path(server.__file__))],
            "env": {"DARKWESSOS_ROOT": str(root), "PYTHONDONTWRITEBYTECODE": "1"},
        }}}
        async with Client(config, timeout=20) as client:
            assert len(await client.list_tools()) == 3
            for name, args, status in [
                ("read_canon", {"relative_path": "USTAV.md"}, "READ_OK"),
                ("search_workspace", {"query": "Harrenhal"}, "SEARCH_OK"),
                ("load_active_task_context", {"task_id": "TASK-001"}, "LOAD_OK"),
            ]:
                assert (await client.call_tool(name, args)).data["status"] == status
    before = snapshot(root)
    asyncio.run(exercise())
    assert snapshot(root) == before
