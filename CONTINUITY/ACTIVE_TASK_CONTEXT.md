---
task_id: TASK-007
title: "Primjena odobrene dokumentacijske korekcije ROOT-LITE linije 930"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/TASK-006-root-lite-revision-proposal.md
  - docs/TASK-007-root-lite-revision-application.md
  - ROOT_LITE.md
  - CURRENT_FULL_ROOT.md
open_questions:
  - "Da li postoje preostale navigacijske nedosljednosti za provjeru u TASK-008?"
next_step: "Nakon mergea TASK-007 PR-a slijedi TASK-008 — provjera konzistentnosti ROOT-LITE nakon korekcije."
canon_status: null
---

## Trenutni kontekst

- PR #10 je uz izričit KENO nalog squash-mergeovan kao e16eb3105c84b2bfbf6df030ec9bbd2e85fcfbb3.
- TASK-006 je odobrio tačan dokumentacijski tekst za ROOT-LITE liniju 930.
- TASK-007 primjenjuje taj tekst; svi drugi ROOT-LITE redovi ostaju nepromijenjeni.
- Izvještaj primjene je docs/TASK-007-root-lite-revision-application.md.
- CURRENT_FULL_ROOT.md, USTAV.md, SOURCE građa i raniji izvještaji ostaju netaknuti.
- Nema novih kanonskih odluka.

## Kontekst promjene

- source: TASK-006
- keno_decision: APPROVE
- decision_date: "2026-10-26"
- decision_author: KENO
- reference: CURRENT_FULL_ROOT.md §22.3–§22.5
- change_type: DOCUMENTATION_REVISION
- application_status: APPLIED
- canon_decision: null

## Odluke KENO i redoslijed

- Najnoviji KENO nalog odobrava merge PR-a #10, pripremu TASK-007 PR-a,
  provjeru da je u ROOT-LITE-u promijenjena samo linija 930 i zatim merge TASK-007.
- Ranija uputa da TASK-007 PR ostane bez mergea zamijenjena je tim izričitim nalogom.
- Merge TASK-007 zavisi od provjere tačnog teksta, jedno-linijskog ROOT-LITE diffa
  i ograničenja promjene na ROOT-LITE, izvještaj primjene i aktivni kontekst.
- TASK-008 je sljedeći zaseban zadatak; njegova puna provjera još nije izvršena.
