---
task_id: TASK-003
title: "Klasifikacija sedam putanja iz migracionog inventara"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/TASK-003-classification.md
  - docs/MIGRATION_INVENTORY.md
  - CURRENT_FULL_ROOT.md
  - USTAV.md
open_questions:
  - "Da li ROOT_LITE.md treba ostati kao navigacioni pregled?"
  - "Da li README.md treba klasifikovati kao dokumentacija, a ne lore?"
  - "Da li SOURCE master i Dopuna ideja trebaju detaljnu provjeru sadržaja?"
next_step: "Nakon mergea PR #7, otvoriti TASK-004 za detaljnu provjeru UNKNOWN stavki."
canon_status: null
---

## Šta je ažurirano

- U docs/TASK-003-classification.md evidentirane su KENO odluke za svih sedam putanja.
- Svaka stavka ima keno_decision: CONFIRMED, final_status, decision_date: "2026-10-26"
  i decision_author: KENO.
- Potvrđeno je pet UNKNOWN oznaka: SOURCE/04_SOURCE_MASTER.md,
  SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md, SOURCE/izvori.md, ROOT_LITE.md i README.md.
  Potvrda UNKNOWN oznake ne zaključava sadržaj i ne pretvara ga u CANON.
- CURRENT_FULL_ROOT.md i USTAV.md ostaju postojeći CANON, bez izmjene sadržaja.
- JUG PRIMARY je odlomak idejnog plana u SOURCE/04_SOURCE_MASTER.md,
  linije 66589–67897; DUPLICATE je ponovljeni izvod u
  SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md, linije 5371–6679.
- Potvrđena je tekstualna jednakost 1.309 linija s dodatnom kopijom u Addendumu,
  linije 3962–5270. Porijeklo je DOCUMENTED; canon_decision: null.
- Postojeće TEST oznake pojedinačnih blokova ostaju nepromijenjene.
- Ažuriraju se samo klasifikacija i ovaj kontekst; nema promjena ROOT-a,
  USTAVA, SOURCE građe ili inventara, brisanja ili spajanja verzija.
- Prethodni TASK-003 prijedlozi i TASK-002 kontekst ostaju sačuvani u Git historiji.

## Odluke KENO

- KENO je 2026-10-26 potvrdio svih sedam klasifikacija i JUG odnos,
  uz zadržavanje postojećih TEST oznaka pojedinačnih blokova.
- Odluka je objavljena kao COMMENT review u PR-u #7:
  https://github.com/Darkwessos/darkwessos-office/pull/7#pullrequestreview-5649971863
- Nema novih kanonskih odluka o sadržaju svijeta; postojeći USTAV i CURRENT
  zadržavaju autoritet. Nijedan UNKNOWN nije pretvoren u CANON.
- PRIMARY/DUPLICATE opisuje porijeklo i ponavljanje zapisa, ne kanonski status.
- Izričiti nalog ovog koraka je novi commit u PR-u #7, bez mergea.

## Sljedeći korak

- Pregledati novi commit i Files changed PR-a #7; ovaj korak ne izvršava merge.
- Nakon zasebnog mergea otvoriti TASK-004 — detaljna provjera pet UNKNOWN stavki:
  za svaki fajl predložiti final_status (CANON | TEST | IDEA | PROPOSAL | ARCHIVE |
  DOCUMENTATION), reason, risk, duplicate_of, superseded_by i KENO question.
- Eventualna promjena CURRENT_FULL_ROOT.md ide tek kroz zaseban TASK-005,
  uz izričitu KENO odluku. TASK-004 i TASK-005 nisu započeti ovim commitom.
