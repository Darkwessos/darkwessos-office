# PR: Inventarizacija i arhiviranje SOURCE građe (26.10.2026.)

## Svrha

Dodaje zaseban dokumentacioni SOURCE inventar i registrovane izvorne kopije bez promjene važećeg kanona.

## Sadržaj

- 14 SOURCE originala bez mijenjanja bajtova, sa zasebnim tekstualnim izvodima.
- S/A/P izvorna genealogija, dopune i izvodi, izvedeni pregledi/navigacija, registri, arhivski prikaz.
- Evidencija naziva, porijekla, SHA-256 i napomena o ograničenjima.
- 44 postojeće datoteke iz `01_SOURCE_BAZA/` i `00_PREDAJA/`, plus tri tehničke GitHub datoteke.

## Granice PR-a

- Nema promjene: USTAV, CURRENT FULL ROOT, ROOT-LITE, rukopis, potvrđeni statusi niti kanonske odluke.
- Historijski SOURCE nije odobrenje za LOCK/REOPEN.
- Svi originali i historijske varijante moraju se voditi odvojeno; isti hash nije nezavisan izvor.
- Potpuna dubinska genealogija velikih ZIP arhiva nije završena ovim PR-om.

## QA za pregled prije merge-a

- [ ] Upoređene aktuelne putanje u GitHub repozitoriju i riješeni eventualni konflikti.
- [ ] Provjerene SHA-256 vrijednosti originala iz priloženog registra i `SHA256_GITHUB_UPLOAD.txt`.
- [ ] Provjereno da je diff ograničen na SOURCE inventar i prateće metapodatke.
- [ ] Potvrđeno da nema izmjena u važećim kanonskim fajlovima.
- [ ] KENO pregledao i odobrio spajanje arhivskog PR-a.

**Status:** nacrt opisa PR-a; PR nije otvoren.
