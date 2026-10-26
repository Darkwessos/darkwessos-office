---
task_id: TASK-004
title: "Detaljna provjera UNKNOWN stavki"
status: TEST
updated_at: "2026-10-26"
source_refs:
  - docs/TASK-004-unknown-review.md
  - docs/TASK-003-classification.md
  - docs/MIGRATION_INVENTORY.md
  - SOURCE/04_SOURCE_MASTER.md
  - SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md
  - SOURCE/izvori.md
  - ROOT_LITE.md
  - README.md
  - CURRENT_FULL_ROOT.md
  - USTAV.md
open_questions:
  - "Prihvata li KENO ARCHIVE kao ulogu oba SOURCE kontejnera uz očuvanje pojedinačnih TEST i drugih statusa?"
  - "Prihvata li KENO DOCUMENTATION za SOURCE/izvori.md, ROOT_LITE.md i README.md?"
  - "Treba li zasebno pripremiti dokumentacijsku korekciju ROOT-LITE stavke o Tyrionovoj alternativi prema postojećem CURRENT-u?"
next_step: "KENO pregled pet prijedloga i nalaza NAV-01 u PR-u TASK-004; bez mergea ili promjene kanona."
canon_status: null
---

## Šta je ažurirano

- PR #7 je squash-mergeovan uz izričit KENO nalog kao commit
  f1774c9422452bc6f973bec7e5f33858bf28eedd, s porukom
  "TASK-003: klasifikacija sedam putanja i KENO odluke".
- Tačno je provjeren završni diff PR-a #7: samo klasifikacija i kontekst,
  svih sedam KENO potvrda i dokumentarni JUG odnos, bez promjene izvora.
- Napravljen je docs/TASK-004-unknown-review.md za svih pet UNKNOWN putanja,
  s current_status, proposed_status, reason, risk, duplicate_of,
  superseded_by i KENO question.
- Predloženo je ARCHIVE za dva historijska SOURCE kontejnera i DOCUMENTATION
  za indeks izvora, ROOT-LITE i README. Prijedlozi još nisu KENO odluke;
  svih pet current_status ostaje UNKNOWN.
- Izvršen je pregled strukture, porijekla, statusa i ponavljanja SOURCE
  dokumenata, cjelovito čitanje tri manja dokumenta, provjera lokalnih linkova
  i ciljano poređenje ROOT-LITE-a s relevantnim USTAV/CURRENT odjeljcima.
- Nalaz NAV-01 bilježi mogući zastarjeli navigacijski ostatak o Tyrionovoj
  alternativi u ROOT-LITE-u. Nijedan autoritativni ili izvorni dokument nije popravljan.
- Potvrđena su ponavljanja tijela izvoda između SOURCE kontejnera; za cijele
  fajlove duplicate_of i superseded_by ostaju null.
- JUG PRIMARY ostaje SOURCE MASTER, linije 66589–67897; DUPLICATE ostaje
  Dopuna JUG u Addendumu, linije 5371–6679. Tekstualno je potvrđeno 1.309
  jednakih linija, uz očuvanu dodatnu kopiju u Addendumu.
- Promjene TASK-004 su samo novi pregled i ovaj aktivni kontekst. Nema
  brisanja, spajanja verzija, izmjena ROOT-a, USTAVA, SOURCE građe ili ranijih klasifikacija.
- Binarni originali i master ZIP nisu testirani; pregled nije nezavisna
  potvrda svake pripovjedne tvrdnje SOURCE MASTER-a.

## Odluke KENO

- KENO je odobrio završni pregled i squash merge PR-a #7 te otvaranje TASK-004.
- Potvrde TASK-003 ostaju sačuvane: pet UNKNOWN, postojeći CANON za USTAV i
  CURRENT, JUG odnos porijekla i neizmijenjene TEST oznake pojedinačnih blokova.
- Za nove prijedloge ARCHIVE/DOCUMENTATION u TASK-004 odluke su PENDING.
- Nema novih kanonskih odluka; UNKNOWN nije automatski pretvoren u CANON.
- ARCHIVE kao prijedlog ne znači premještanje, brisanje ili ukidanje TEST razvoja.

## Sljedeći korak

- Predati rezultat na feature/task-004-unknown-review kroz zaseban PR, bez mergea.
- KENO prihvata ili koriguje pet predloženih uloga i razmatra NAV-01.
- Eventualna korekcija navigacije priprema se odvojeno, prema postojećem autoritetu.
- Eventualni novi kanonski sadržaj ide tek u zaseban TASK-005 uz izričitu KENO
  odluku; CURRENT_FULL_ROOT.md se ne mijenja u TASK-004.
