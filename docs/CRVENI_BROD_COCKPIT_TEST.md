# DARKWESSOS Office — CRVENI BROD (radni kandidat)

Upgrade existing React/Vite + BlockNote + Dexie Office; no database schema change.
CRVENI BROD is a temporary UI landing screen; activeContext remains exactly as stored.

## Flow
- Launch → CRVENI BROD, latest non-deleted edited scene.
- Nastavi pisanje → existing STORY editor for that scene; no scenes → blank-writing entry.
- Four doors → STORY / WORKSHOP / ATLAS / MORE.
- Header button → CRVENI BROD after pending writes flush.
- Native Android Back on cockpit → previous stored Office page; other behavior unchanged.

## Safety
- No change to USTAV, CURRENT FULL ROOT, ROOT-LITE, SOURCE or manuscript.
- No new Dexie tables or changed backup schema; previous backups remain compatible.
- Atlas image remains VISUAL ONLY.
- No new AI service, synchronisation or automatic story commits.

## Validation before release
- npm ci && npm test && npm run build && npm run build:native
- Android: open → write → Home → Resume → force-stop → resume.
- Verify export/import, restored scenes, empty manuscript and storage failures.
- Draft only until physical Android acceptance.
