---
task_id: TASK-003
title: "Klasifikacija sedam putanja iz migracionog inventara"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/TASK-003-classification.md
  - docs/MIGRATION_INVENTORY.md
  - SOURCE/izvori.md
  - SOURCE/04_SOURCE_MASTER.md
  - SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md
  - CURRENT_FULL_ROOT.md
  - USTAV.md
  - ROOT_LITE.md
  - README.md
open_questions:
  - "Koje konkretne SOURCE dijelove KENO želi zadržati kao TEST ili razviti u PROPOSAL / CANON_CANDIDATE?"
  - "Prihvata li KENO predložene UNKNOWN oznake pet cijelih nekanonskih dokumenata uz njihove poznate funkcije?"
  - "Prihvata li KENO dokumentarni PRIMARY/DUPLICATE odnos dva JUG odlomka bez brisanja?"
  - "Postoji li konkretna novija putanja za dokaziv SUPERSEDED_BY odnos?"
next_step: "KENO pregled sedam prijedloga i pitanja u docs/TASK-003-classification.md."
canon_status: null
---

## Šta je ažurirano

- NON_CANON kontekst TASK-003; TASK-002 je zaključen kao radni inventar.
- PR #6 mergeovan je uz izričito KENO odobrenje; osnova ovog zadatka je main
  commit `c7ee52f7c1bbf7af6bb1f68335f70dfe6083de71` od 2026-10-26.
- KENO review zabilježen je kao COMMENT (review ID 5649848449). Formalni APPROVE
  GitHub je odbio jer je povezani nalog Darkwessos ujedno autor PR-a. Merge je uspio.
- Napravljen je docs/TASK-003-classification.md sa svih sedam putanja i poljima
  current_status, proposed_status, reason, risk, duplicate_of, superseded_by i KENO question.
- Postojeći USTAV i CURRENT ostaju CANON. Za pet drugih cijelih dokumenata
  predložen je UNKNOWN; pojedinačni TEST blokovi SOURCE razvoja čuvaju svoj status.
- Potvrđeni JUG odlomak u IDEJNOM PLANU označen je PRIMARY, a njegova kopija
  u DOPUNI JUG kao DUPLICATE s tačnom vezom; oznake su samo u klasifikaciji.
- Za cijele fajlove nije dokazan duplicate_of ili superseded_by: vrijednosti
  ostaju null. Nijedan novi sadržaj nije samostalno proglašen CANON_CANDIDATE.
- U ovom zadatku dodaje se samo klasifikacija i ažurira ovaj kontekst.
  Inventar, kanon i SOURCE građa ostaju neizmijenjeni. Nema brisanja ni spajanja verzija.
- Prethodni TASK-002 kontekst i inventar ostaju dostupni u merge commitu PR-a #6.

## Odluke KENO

- Nema novih kanonskih odluka o sadržaju svijeta.
- KENO je izričito odobrio PR #6 kao radni inventar i njegov merge.
- KENO je potvrdio da postojeći odobreni USTAV i CURRENT ostaju CANON;
  CANON_CANDIDATE koristi se samo za novi predloženi sadržaj koji čeka odluku.
- Konkretne odluke za nove SOURCE stavke i predložene odnose ostaju otvorene.

## Sljedeći korak

- Pregledati docs/TASK-003-classification.md, sedam redova i pripremljena KENO pitanja.
- Za eventualni novi prijedlog navesti tačan odjeljak, izvor i željeni status;
  bez potvrde ostaje UNKNOWN ili postojeći izričiti TEST.
- Predati TASK-003 na grani feature/task-003-classification kroz novi PR.
  Ne mergeovati taj PR; CURRENT_FULL_ROOT.md se ne mijenja u ovom zadatku.
