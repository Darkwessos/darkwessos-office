from datetime import datetime

import pytest

import server


def test_load_task_001(root):
    result = server.load_active_task_context("TASK-001")
    assert result["status"] == "LOAD_OK"
    assert result["task_id"] == result["frontmatter"]["task_id"] == "TASK-001"
    assert result["frontmatter"]["canon_status"] is None
    assert result["path"] == "CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-001.md"
    assert result["source"] == "local://DARKWESSOS/CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-001.md"
    assert result["content"] == (root / result["path"]).read_text()
    assert datetime.fromisoformat(result["updated_at"]).tzinfo is not None


def test_context_not_found(root):
    with pytest.raises(server.WorkspaceError, match="^TASK_CONTEXT_NOT_FOUND: TASK-999$"):
        server.load_active_task_context("TASK-999")


@pytest.mark.parametrize("task_id", ["../TASK-001", "TASK-001/../../USTAV", "task-001", "TASK-1", "TASK-0000", "TASK-ABC", "TASK-٠٠١", "TASK-001\n", ""])
def test_invalid_task_id(root, task_id):
    with pytest.raises(server.WorkspaceError, match="^INVALID_TASK_ID$"):
        server.load_active_task_context(task_id)


def test_context_symlink_cannot_escape(root, tmp_path):
    outside = tmp_path / "outside.md"
    outside.write_text("OUTSIDE_CONTEXT_MARKER")
    target = root / "CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-002.md"
    target.symlink_to(outside)
    with pytest.raises(server.WorkspaceError, match="^ACCESS_DENIED:"):
        server.load_active_task_context("TASK-002")


@pytest.mark.parametrize("header", ["status: [", "[]", "x: &a [*a]"])
def test_malformed_or_recursive_yaml_rejected(root, header):
    (root / "CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-002.md").write_text(f"---\n{header}\n---\nbody\n")
    with pytest.raises(server.WorkspaceError, match="^INVALID_FRONTMATTER$"):
        server.load_active_task_context("TASK-002")


def test_yaml_dates_and_source_refs_are_json_serializable(root):
    import json
    (root / "CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-002.md").write_text(
        "---\ntask_id: TASK-002\nupdated_at: 2026-10-26\nsource_refs: [USTAV.md]\n---\nbody\n")
    result = server.load_active_task_context("TASK-002")
    assert result["frontmatter"]["updated_at"] == "2026-10-26"
    assert result["frontmatter"]["source_refs"] == ["USTAV.md"]
    json.dumps(result)
