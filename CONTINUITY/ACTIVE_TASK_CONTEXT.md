---
task_id: TASK-002
title: "Migracija postojeće DARKWESSOS građe"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/MIGRATION_INVENTORY.md
  - SOURCE/izvori.md
  - SOURCE/04_SOURCE_MASTER.md
  - SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md
  - CURRENT_FULL_ROOT.md
  - USTAV.md
open_questions:
  - "Koji fajlovi ili njihovi dijelovi imaju potvrdu za CANON?"
  - "Koji su zastarjeli?"
  - "Koji su samo istraživanje?"
next_step: "Pregledati klasifikaciju i donijeti KENO odluke."
canon_status: null
---

## Šta je ažurirano

- NON_CANON kontekst TASK-002; inventar je dopunjen pregledom stvarnog GitHub stanja.
- Pregledani main: `df5a46cbd203c45e877b929ce6b7a271ec9d0498` (2026-10-26).
- Prethodni PR #4 dodao je SOURCE MASTER; PR #5 uskladio je USTAV, CURRENT,
  ROOT-LITE, Addendum i indekse. U odnosu na main nakon PR-a #2 promijenjeno
  je sedam putanja, bez brisanja ili preimenovanja.
- Inventar sadrži predloženi status za svaku promijenjenu putanju, odvojene
  statuse SOURCE blokova, provjeru duplikata i identiteta sadržaja.
- SOURCE i Addendum su dokumentarno porijeklo s miješanim statusima; ideje,
  idejni plan i JUG razvoj ostaju TEST gdje je to izričito navedeno.
- CURRENT_FULL_ROOT.md više nije prazan šablon: header bilježi KENO-odobren
  CURRENT od 25.10.2026., prenesen u prethodnom PR-u #5. Otvoreni, radni i
  historijski dijelovi time ne postaju LOCK.
- U ovom zadatku mijenjaju se samo inventar i ovaj kontekst. Nema novih
  kanonskih odluka, promjena ROOT-a ili izvornih fajlova.
- Prethodni kontekst i početni inventar ostaju sačuvani u Git historiji;
  početni historijski inventar zadržan je i unutar dopunjenog dokumenta.

## Odluke KENO

- Nema novih kanonskih odluka.
- Prethodno odobrenje „Uskladi“ dokumentirano je u PR-u #5; ovaj kontekst
  evidentira taj trag, bez samostalnog odobravanja dodatnog sadržaja.

## Sljedeći korak

- Pregledati predloženu klasifikaciju u docs/MIGRATION_INVENTORY.md i PR Files changed.
- KENO određuje šta prihvata kao CANON, šta ostaje TEST/IDEA/PROPOSAL i šta
  označava zastarjelim; UNKNOWN ostaje gdje nedostaje jasan status.
- Eventualnu odobrenu promjenu CURRENT_FULL_ROOT.md pripremiti odvojeno,
  s tačnim izvorom i odlukom. Ovaj PR ostaje za pregled, bez mergea.
