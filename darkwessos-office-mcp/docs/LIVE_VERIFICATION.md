# PR #12 — operator acceptance gate (read-only)

**Status: PENDING_LIVE_TEST.** This checklist is NOT evidence that a Secure MCP Tunnel or ChatGPT custom plugin has been installed.

This runbook validates the existing `darkwessos-office-mcp/server.py` and its **exactly three** tools:
`read_canon`, `search_workspace`, and `load_active_task_context`.
It does not modify USTAV, CURRENT FULL ROOT, SOURCE, manuscript, or canon status.

## Evidence levels (do not conflate)

| Gate | Evidence | Current meaning |
|---|---|---|
| G0 – source | PR #12 merged and server source reviewed | repository presence only |
| G1 – CI | GitHub Actions run URL + passed test count | synthetic local and stdio-process MCP tests, NOT a ChatGPT connection |
| G2 – host | real target machine, Python 3.12 + POSIX and test fixture accessible | host setup |
| G3 – tunnel | `doctor` reports readiness + running client's health/active polling | tunnel transport ready |
| G4 – workspace | tunnel bound to intended Platform org and ChatGPT workspace, permissions confirmed | authorized reachability |
| G5 – ChatGPT end-to-end | ChatGPT custom plugin discovers exactly the three tools and a **real** `read_canon` call returns expected fixture content | **LIVE VERIFIED** |

Never report `LIVE VERIFIED` from a test suite, a screenshot alone, a `doctor` report alone, or a fake tool response.

## Prerequisites

- A Linux/macOS/WSL machine (the original server refuses an unsafe non-POSIX fallback), Python 3.12, and a checked-out repository.
- `tunnel-client` installed from the **official latest release**: https://github.com/openai/tunnel-client/releases/latest
- An OpenAI Platform tunnel ID linked to the target ChatGPT workspace, with appropriate organization permissions.
- Runtime API key with Tunnels Read + Use, set **locally** via environment/secret manager, never pasted into a chat, screenshot, repo, or shell command argument.
- A trusted operator to install the **private** custom MCP plugin in the intended ChatGPT workspace.

Official procedures:
https://developers.openai.com/api/docs/guides/secure-mcp-tunnels
https://developers.openai.com/plugins/deploy/connect-chatgpt

## 1. Prove G1 (GitHub CI)

Open the GitHub Actions tab on the candidate PR; verify **DARKWESSOS read-only MCP regression** completed successfully.
Record the workflow URL, commit SHA, Python version, and passed test count. This workflow installs packages using `constraints-ci.txt` and runs the existing tests, including the stdio subprocess test.

If the workflow is unavailable/disabled or fails, G1 stays **PENDING/FAIL**. Do not infer PASS from PR #12's historical report.

## 2. Prove G2 (host) on synthetic fixtures

On the machine where `tunnel-client` will run:

```sh
cd /ABSOLUTE/PATH/darkwessos-office/darkwessos-office-mcp
python3.12 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt -c constraints-ci.txt
python -B -m pytest -q -p no:cacheprovider
export DARKWESSOS_ROOT="$PWD/tests/fixtures/DARKWESSOS"
```

Use the synthetic fixture FIRST. Do not point the tunnel at real/private sources until the operator deliberately chooses an approved, minimal, segregated document root. The original server returns complete document text: read-only does not mean the data are non-sensitive.

The stdio server, when launched by the MCP client, uses:
```sh
"$PWD/.venv/bin/python" -B "$PWD/server.py"
```
Do not run it manually expecting a normal terminal prompt: it waits for MCP protocol messages.

## 3. Prove G3 (tunnel)

In OpenAI Platform tunnel settings (https://platform.openai.com), reuse a suitable existing tunnel or create an appropriate one. Select the exact target Platform organization **and** ChatGPT workspace.

Review the local CLI help and select the intended profile:

```sh
tunnel-client help quickstart
# TUNNEL_ID and CONTROL_PLANE_API_KEY are already set securely in THIS local shell.
tunnel-client init \
  --sample sample_mcp_stdio_local \
  --profile darkwessos-readonly \
  --tunnel-id "$TUNNEL_ID" \
  --mcp-command "$PWD/.venv/bin/python -B $PWD/server.py"

tunnel-client doctor --profile darkwessos-readonly --explain
tunnel-client run --profile darkwessos-readonly
```

Do not paste the runtime key into command arguments or files. `CONTROL_PLANE_API_KEY` must be available to `tunnel-client` from its local secured environment; avoid capturing the shell environment, secret-bearing logs or credential values in evidence.

The active client should report healthy/ready/actively polling via its local admin UI (`/ui`) or supported health endpoints. A `doctor` pass without `run` is insufficient.

## 4. Prove G4–G5 (ChatGPT)

1. ChatGPT → Plugins → + → Add custom MCP server → **Tunnel**.
2. Choose the SAME tunnel ID, name it **DARKWESSOS Read-only (test)**, review authentication and risk warning, and create a private plugin.
3. Confirm it advertises **exactly** `read_canon`, `search_workspace`, `load_active_task_context`; there must be **no write/update/delete/exec** tools.
4. In a new ChatGPT conversation select the new plugin with `@`. Request: **Call read_canon for USTAV.md. Return the status, source path and the first sentence of the actual synthetic fixture.**
5. Record sanitized evidence: tool name, argument `{"relative_path":"USTAV.md"}`, observed `READ_OK`, source path and expected synthetic text, timestamp, and redacted run identifiers. No secrets or private canonical text.
6. Negative check: ask the tool to read `../outside.md` and confirm `ACCESS_DENIED`. Confirm no file was modified.

If G5 fails, preserve error details without credentials and check `tunnel-client doctor --profile darkwessos-readonly --explain`, workspace association, and permissions. **Never claim G5 PASS unless an actual ChatGPT tool call succeeds.**

## Recorded evidence

- PR candidate: **pending recording**
- CI workflow URL / SHA / count: **PENDING**
- Host G2: **PENDING**
- Tunnel readiness and active polling G3: **PENDING**
- Workspace association G4: **PENDING**
- ChatGPT MCP discovery/call G5: **PENDING_LIVE_TEST**
- Security negative test: **PENDING**
- Canon changed: **NO** (no write-capable tools introduced here)

This runbook supplies an acceptance method, not fake proof. The host and workspace stages require access to the operator's actual machine and UI.
