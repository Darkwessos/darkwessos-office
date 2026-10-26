# MIGRATION INVENTORY — DARKWESSOS v0.2.0

Datum pregleda: 2026-10-26. Radni status inventara: TEST. Nema novih kanonskih odluka.

## Opseg i porijeklo

Pregledan je sadržaj svih 15 praćenih fajlova repozitorija
`Darkwessos/darkwessos-office` na grani `main`, commit
`dc975326c92909566849f9056883156adbb77631` (merge strukture v0.1.0).
Putanje u tabeli relativne su korijenu repozitorija; `old_location` označava
direktorij izvornog fajla u tom commitu. Svaki red predstavlja zaseban izvor.

Zatečena građa sastoji se od organizacijskih uputa i praznih predložaka.
Stari rukopisi, istraživanja i druge verzije DARKWESSOS građe nisu dostavljeni
u pregledani repozitorij ni pronađeni među dostupnim fajlovima u `/workspace`.
Vanjske lokacije i nedostavljeni materijali nisu obuhvaćeni ovim pregledom;
njihovo postojanje, sadržaj i status ostaju neprovjereni. Inventar se dopunjava
pojedinačnim zapisom za svaki stvarno dostavljeni fajl i svaku njegovu verziju.

## Oznake

- `status`: CANON | TEST | IDEA | PROPOSAL | UNKNOWN. Prenosi se samo izričito
  utvrđen status izvora. `UNKNOWN` znači da takav status nije naveden ili
  provjeren; prazni predlošci i organizacijska pravila time ne postaju kanon.
- `risk`: LOW | MEDIUM | HIGH. Procjena rizika budućeg migracijskog postupanja:
  LOW za prazne predloške i pomoćne upute, MEDIUM za kontekst koji se ažurira,
  HIGH za zaštićene dokumente čije bi mijenjanje moglo uticati na kanonski okvir.
- `proposed_new_location` je prijedlog za kasniju fazu, bez izvršenog kopiranja
  ili premještanja. Postojeći predlošci mogu ostati na svojim mjestima.

## Inventar dostupnih fajlova

| old_file | old_location | material_type | proposed_new_location | status | risk | notes |
| --- | --- | --- | --- | --- | --- | --- |
| `AGENTS.md` | `./` | Pravila rada | `AGENTS.md` — ostaje | UNKNOWN | LOW | Organizacijske upute; ne sadrži staru priču niti potvrđuje kanon. |
| `ACTIVE_TASK_CONTEXT.md` | `CONTINUITY/` | Radni kontekst TASK-001 | `CONTINUITY/ACTIVE_TASK_CONTEXT.md` — ostaje | IDEA | MEDIUM | Izvorni status je IDEA. Ovim PR-om se ažurira na TASK-002 / TEST prema zadatku; prethodna verzija ostaje dostupna u navedenom izvornom commitu. Kontekst nije kanon. |
| `DISAGREEMENT_LOG.md` | `CONTINUITY/` | Prazna evidencija neslaganja | `CONTINUITY/DISAGREEMENT_LOG.md` — ostaje | UNKNOWN | LOW | Sadrži samo uputu za bilježenje; nema unesenih neslaganja. |
| `TASK_BRIEFS.md` | `CONTINUITY/` | Prazan predložak zadataka | `CONTINUITY/TASK_BRIEFS.md` — ostaje | UNKNOWN | LOW | Nema popunjenih zadataka ni dokaza o njihovom izvršenju. |
| `CURRENT_FULL_ROOT.md` | `./` | Zaštićen prazan kanonski predložak | `CURRENT_FULL_ROOT.md` — ostaje | UNKNOWN | HIGH | Izričito označen PRAZAN TEMPLATE; ne sadrži kanonski pregled. Ne mijenjati u ovoj fazi. |
| `README.md` | `./` | Opis strukture v0.1.0 | `README.md` — ostaje | UNKNOWN | LOW | Opisuje organizaciju i granice verzije; nije stara pripovjedna građa. |
| `izvori.md` | `SOURCE/` | Prazna evidencija izvora | `SOURCE/izvori.md` — ostaje | UNKNOWN | LOW | Navodi da nema unesenih izvora. Vanjski izvori se ne mogu rekonstruisati iz ovog fajla. |
| `rukopis.md` | `STORY/` | Prazan predložak rukopisa | `STORY/rukopis.md` — ostaje | UNKNOWN | LOW | Nema teksta rukopisa. Dostavljene stare rukopise zasebno predlagati za MIGRATION/STORY_DRAFTS/ nakon klasifikacije. |
| `.gitkeep` | `STORY/scene/` | Tehnički marker direktorija | `STORY/scene/.gitkeep` — ostaje | UNKNOWN | LOW | Prazan fajl; nije scena niti kreativni izvor. |
| `USTAV.md` | `./` | Zaštićen organizacijski šablon | `USTAV.md` — ostaje | UNKNOWN | HIGH | Izričito osnovni organizacijski šablon v0.1.0; ne uvodi činjenice u kanon priče. Ne mijenjati u ovoj fazi. |
| `ATLAS.md` | `WORKSHOP/` | Prazan radionički predložak | `WORKSHOP/ATLAS.md` — ostaje | UNKNOWN | LOW | Samo naslovi: zadatak, nalazi i ideje, izvori, otvorena pitanja. Nema geografskih ni hronoloških nalaza. |
| `LOREN.md` | `WORKSHOP/` | Prazan radionički predložak | `WORKSHOP/LOREN.md` — ostaje | UNKNOWN | LOW | Samo naslovi; nema unesenog lorea ni potvrđenih izvora. |
| `PERO.md` | `WORKSHOP/` | Prazan radionički predložak | `WORKSHOP/PERO.md` — ostaje | UNKNOWN | LOW | Samo naslovi; nema proze ni dijaloga. |
| `SCENAR.md` | `WORKSHOP/` | Prazan radionički predložak | `WORKSHOP/SCENAR.md` — ostaje | UNKNOWN | LOW | Samo naslovi; nema scena ni dramaturških prijedloga. |
| `RADNI_TOK.md` | `docs/` | Pravila razrade i odobravanja | `docs/RADNI_TOK.md` — ostaje | UNKNOWN | LOW | Opisuje IDEA → TEST → PROPOSAL → KENO odluka → CANON; ne odobrava konkretan sadržaj. |

## Otvorene stavke za KENO

- Dostaviti stare materijale ili njihove tačne dostupne lokacije, uz oznake verzija
  i poznato porijeklo. Do tada nema osnove za inventar tih pojedinačnih fajlova.
- Odrediti koji izvori ili dijelovi imaju provjerljivu KENO odluku za CANON.
  Trenutno nijedan red nije označen kao CANON.
- Označiti zastarjele verzije i istraživačke materijale; zastarjelost ne znači
  brisanje, a istraživanje ili kandidatura ne znači kanonsku potvrdu.

U fazi 1 ništa iz tabele nije kopirano, premješteno, spojeno ili obrisano.
Novi migracijski dokumenti i novi `.gitkeep` markeri nisu stari izvori i zato
nisu redovi ovog početnog inventara.
