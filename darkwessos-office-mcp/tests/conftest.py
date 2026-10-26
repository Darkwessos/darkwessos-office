from pathlib import Path
import shutil

import pytest


@pytest.fixture
def root(tmp_path, monkeypatch):
    """Tests mutate only a temporary copy of synthetic Markdown fixtures."""
    folder = tmp_path / "DARKWESSOS"
    shutil.copytree(Path(__file__).parent / "fixtures" / "DARKWESSOS", folder)
    monkeypatch.setenv("DARKWESSOS_ROOT", str(folder))
    return folder
