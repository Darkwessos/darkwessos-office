import server


def test_find_task_id_and_frontmatter(root):
    result = server.search_workspace("task-001")
    match = result["results"][0]
    assert result["status"] == "SEARCH_OK"
    assert match["path"] == "CONTINUITY/ACTIVE_TASK_CONTEXT/TASK-001.md"
    assert match["task_id"] == "TASK-001"
    assert match["title"] == "Sintetički zadatak za čitanje"
    assert match["status"] == "TEST"
    assert match["canon_status"] is None
    assert match["source_refs"] == ["USTAV.md", "CURRENT_FULL_ROOT.md"]
    assert "TASK-001" in match["snippet"]


def test_search_current_root_case_insensitive(root):
    result = server.search_workspace("hArReNhAl")
    assert result["status"] == "SEARCH_OK"
    assert result["results"][0]["path"] == "CURRENT_FULL_ROOT.md"


def test_no_match(root):
    assert server.search_workspace("no-such-term-98765") == {
        "results": [], "status": "NO_MATCH", "query": "no-such-term-98765"}


def test_empty_query_does_not_enumerate_contents(root):
    assert server.search_workspace("  ")["status"] == "NO_MATCH"


def test_at_most_twenty_results_and_300_character_snippets(root):
    for index in range(25):
        (root / "docs" / f"example-{index:02d}.md").write_text("x" * 350 + "UNIQUE_MATCH" + "y" * 400)
    result = server.search_workspace("unique_match")
    assert len(result["results"]) == 20
    assert all(len(item["snippet"]) <= 300 and "UNIQUE_MATCH" in item["snippet"] for item in result["results"])


def test_hidden_and_sensitive_documents_are_not_searched(root):
    for directory in ["secrets", ".ssh", ".git", "config"]:
        (root / directory).mkdir()
        (root / directory / "note.md").write_text("SYNTHETIC_PRIVATE_MARKER")
    (root / "token.md").write_text("SYNTHETIC_PRIVATE_MARKER")
    assert server.search_workspace("SYNTHETIC_PRIVATE_MARKER")["results"] == []


def test_directory_symlink_is_not_traversed(root, tmp_path):
    outside = tmp_path / "outside"
    outside.mkdir()
    (outside / "note.md").write_text("BOUNDARY_MARKER")
    (root / "STORY" / "linked").symlink_to(outside, target_is_directory=True)
    assert server.search_workspace("BOUNDARY_MARKER")["status"] == "NO_MATCH"


def test_query_is_literal_not_regex(root):
    assert server.search_workspace(".*")["status"] == "NO_MATCH"


def test_malformed_frontmatter_does_not_hide_raw_text(root):
    (root / "docs" / "broken.md").write_text("---\nstatus: [\n---\nFIND_BROKEN\n")
    match = server.search_workspace("FIND_BROKEN")["results"][0]
    assert match["status"] is None


def test_unreadable_encoding_skipped(root):
    (root / "docs" / "binary.md").write_bytes(b"\xff\xfe")
    assert server.search_workspace("Harrenhal")["status"] == "SEARCH_OK"
