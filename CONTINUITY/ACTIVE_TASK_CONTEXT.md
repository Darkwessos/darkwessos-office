---
task_id: TASK-006
title: "Priprema dokumentacijske korekcije ROOT-LITE linije 930"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/TASK-005-root-lite-tyrion-review.md
  - docs/TASK-006-root-lite-revision-proposal.md
  - ROOT_LITE.md
  - CURRENT_FULL_ROOT.md
open_questions:
  - "Da li TASK-007 primjenjuje odobrenu dokumentacijsku korekciju na ROOT_LITE.md liniju 930?"
next_step: "TASK-007 — primijeniti odobrenu dokumentacijsku korekciju na ROOT_LITE.md liniju 930."
canon_status: null
---

## KENO odluka

- Predlog dokumentacijske korekcije je odobren.
- Stvarna izmjena ROOT_LITE.md još nije izvršena.
- TASK-007 će primijeniti odobreni tekst.
- CURRENT_FULL_ROOT.md, USTAV.md i SOURCE građa ostaju netaknuti.
- Nema novih kanonskih odluka.

## Evidencija odluke

- keno_decision: APPROVE
- final_status: DOCUMENTATION_REVISION_APPROVED
- decision_date: "2026-10-26"
- decision_author: KENO
- risk: MEDIUM
- canon_decision: null
- next_action: TASK-007_APPLY_ROOT_LITE_REVISION
- Tačan odobreni tekst i reference na CURRENT §22.3–§22.5 ostaju u TASK-006 izvještaju.

## Redoslijed primjene

- Ovaj korak ažurira samo TASK-006 izvještaj i aktivni kontekst novim commitom u PR-u #10.
- PR #10 se ne mergeuje ovim korakom; merge izvršava KENO.
- Tek nakon KENO mergea PR-a #10 priprema se TASK-007 na grani feature/task-007-apply-root-lite-revision.
- TASK-007 dodaje docs/TASK-007-root-lite-revision-application.md, mijenja samo liniju 930 u ROOT_LITE.md i ažurira ovaj kontekst.
- TASK-007 bilježi source: TASK-006, keno_decision: APPROVE, decision_date: "2026-10-26", reference: CURRENT_FULL_ROOT.md §22.3–§22.5, change_type: DOCUMENTATION_REVISION i canon_decision: null.
- TASK-007 ide kroz zaseban Pull Request bez mergea.
- Nakon pregleda i mergea TASK-007 slijedi TASK-008 — provjera konzistentnosti ROOT-LITE nakon korekcije.
