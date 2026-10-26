# MIGRATION INVENTORY — DARKWESSOS v0.2.0

> Početni inventar ispod je historijski snimak v0.1.0, ne opis današnjeg ROOT-a.
> Aktuelni pregled nakon PR-ova #4 i #5 nalazi se u odjeljku
> „Dopuna TASK-002 — pregled nakon SOURCE uvoza“ na kraju ovog dokumenta.

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

## Dopuna TASK-002 — pregled nakon SOURCE uvoza

Datum: 2026-10-26. Status pregleda: TEST / NON_CANON.
Klasifikacija je prijedlog za KENO pregled; nije nova autorska odluka.
Početni inventar je sačuvan iznad bez prepisivanja njegovih historijskih redova.

### Opseg, commitovi i PR-ovi

- Repozitorij: `Darkwessos/darkwessos-office`, grana `main`.
- Pregledani završni snapshot: `df5a46cbd203c45e877b929ce6b7a271ec9d0498`.
- Osnova poređenja: `9d3b835d6fe117fecff25a7b65afd67bdc549606`, nakon PR-a #2.
- Commit `53e3be8108e89296b49ff0609fb871bbd1ff0770`: dodaje samo
  `SOURCE/04_SOURCE_MASTER.md`; odgovara uvozu kroz [PR #4](https://github.com/Darkwessos/darkwessos-office/pull/4).
- Commit `df5a46cbd203c45e877b929ce6b7a271ec9d0498`: šest promijenjenih putanja;
  odgovara usklađivanju kroz [PR #5](https://github.com/Darkwessos/darkwessos-office/pull/5).
  PR #5 bilježi KENO odobrenje „Uskladi“ i preslikavanje postojećih dokumenata.
  To je DOCUMENTED trag prethodnog odobrenja, a ne nova odluka ovog pregleda.
- [Poređenje dva commita](https://github.com/Darkwessos/darkwessos-office/compare/9d3b835d6fe117fecff25a7b65afd67bdc549606...df5a46cbd203c45e877b929ce6b7a271ec9d0498):
  sedam različitih putanja — tri dodane i četiri izmijenjene; bez brisanja
  ili preimenovanja. Ostalih 20 fajlova nije promijenjeno.
- PR #3 je zatvoren bez mergea kao pogrešno proširen opseg i zamijenjen PR-om #4;
  njegova grana nije tretirana kao dio pregledanog `main` sadržaja.

Brojanje: 27 praćenih fajlova u rekurzivnom Git stablu, od čega 19 nepraznih
dokumenata i osam praznih `.gitkeep` markera. Ugniježđeni dokumenti citirani
unutar Markdown arhive nisu brojani kao zasebni Git fajlovi. Originalni
master ZIP i binarni DOCX/PDF nisu dostupni u ovom snapshotu i nisu testirani.

### Predložena klasifikacija svih novih ili ažuriranih fajlova

`UNKNOWN` je ovdje izostanak jedinstvenog kanonskog statusa cijelog fajla;
ne poništava pojedinačne historijske odluke ili postojeće oznake unutar njega.
`CANON` u dva reda ispod samo evidentira zatečeni autoritativni dokument prema
njegovom sadržaju i dokumentiranom prethodnom odobrenju. Ne znači da su njegovi
OPEN, RADNO, TEST ili HISTORY dijelovi zaključani. Nijedan novi izvor ovim
inventarom ne dobija kanonsko odobrenje.

| old_file | old_location | material_type | proposed_new_location | status | risk | notes |
| --- | --- | --- | --- | --- | --- | --- |
| `04_SOURCE_MASTER.md` | `SOURCE/` | Historijska genealogija S, konsolidovana građa i registri | `SOURCE/04_SOURCE_MASTER.md` — ostaje | UNKNOWN | HIGH | Dodan kroz PR #4; neizmijenjen u PR-u #5. Uvod i odjeljak S izričito kažu da nije operativni kanon. Miješa historijske LOCK, radne mogućnosti i izvode; potreban pregled pojedinačnih tvrdnji prema važećem ROOT-u. |
| `05_ADDENDUM_DOPUNE_IDEJE.md` | `SOURCE/` | Historijski A/P, ideje, idejni plan i JUG izvod | `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md` — ostaje | UNKNOWN | HIGH | Dodan u PR-u #5. A/P bilježe historijske odluke; IDEJE, IDEJNI PLAN i novi JUG materijal ostaju TEST prema svojim oznakama. Nije opravdano cijeli zbirni fajl označiti CANON ili IDEA. |
| `izvori.md` | `SOURCE/` | Navigacijski indeks i pravilo porijekla | `SOURCE/izvori.md` — ostaje | UNKNOWN | LOW | Izmijenjen u PR-u #5; dvije lokalne veze vode do postojećih SOURCE fajlova. Ne sadrži novu odluku o priči. |
| `CURRENT_FULL_ROOT.md` | `./` | Postojeći KENO-odobren CURRENT, s odvojenim radnim i historijskim dijelovima | `CURRENT_FULL_ROOT.md` — ostaje, bez izmjene | CANON | HIGH | U PR-u #5 zamijenjen prazan šablon dokumentom od 154.023 B. Header: CURRENT, izričito odobrio KENO 25.10.2026. Ovo evidentira postojeći autoritet; razvojni dodatak J i HISTORY nisu novi LOCK. |
| `USTAV.md` | `./` | Migrirani vrhovni akt i pravila statusa | `USTAV.md` — ostaje, bez izmjene | CANON | HIGH | U PR-u #5 organizacijski šablon zamijenjen migriranim aktom. Odjeljak 6 potvrđuje da migracija ne stvara novi kanon i da prisustvo u ROOT-u nije automatski LOCK. Evidencija postojećeg autoriteta, bez nove odluke. |
| `ROOT_LITE.md` | `./` | Navigacijski pregled | `ROOT_LITE.md` — ostaje | UNKNOWN | MEDIUM | Dodan u PR-u #5. Uvod izričito kaže da nije kanonski autoritet. Historijski naziv CURRENT fajla u tekstu je identifikator; lokalna operativna putanja je `CURRENT_FULL_ROOT.md` prema README-u i SOURCE indeksu. |
| `README.md` | `./` | Opis strukture i indeks autoriteta | `README.md` — ostaje | UNKNOWN | LOW | Izmijenjen u PR-u #5 da više ne opisuje prazan ROOT. Opisuje prethodnu sinhronizaciju, bez novih odluka o priči. |

### Statusi unutar zbirnih SOURCE fajlova

Ovo su statusi pročitanih blokova, ne nove oznake upisane u izvorne fajlove.
Linije se odnose na pregledani završni snapshot.

| Izvor / mjesto | Predloženi status | Dokaz i ograničenje |
| --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md`, uvod, S od linije 23 i konsolidovana baza od 4656 | UNKNOWN | Historijski/dokumentarni kontejner sa više statusa; upozorenje da historijski LOCK nije automatski CURRENT. Nije izvršen audit svake pripovjedne tvrdnje u svih 73.298 linija. |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md`, A od linije 13 i P od 1456 | UNKNOWN | Sadrže dokumentirane historijske LOCK odluke i otvorene stavke. Važenje svake konkretne odluke provjerava se prema USTAVU i CURRENT-u, bez blanket promocije. |
| Isti fajl, IDEJE od 2907 i ponovljeni izvod od 6731 | TEST | „Razvojna hipoteza · TEST / OPEN“; tekst izričito ostavlja prijedlog TEST. Naslov IDEJE sam po sebi ne mijenja ovaj status u IDEA. |
| Isti fajl, IDEJNI PLAN od 3230 | TEST | „IDEJNI / TEST / RADNI SAVE POINT“ i „Sve novo ... ostaje TEST / ISTRAŽIVAČKI PRIJEDLOG“. Već zaključano zadržava postojeći status. |
| Isti fajl, DOPUNA JUG od 5321 | TEST | SOURCE/PROVENANCE, neautoritativno; novi razvoj ostaje TEST. Nije dokaz da je JUG postao kanon niti da se dogodio nečiji dolazak u Darkwood. |

Nije pronađena osnova da se samo zbog ovog uvoza bilo koji blok unaprijedi u
CANON ili PROPOSAL. Postojeći izričiti status ima prednost nad nazivom fajla.

### Provjera mjesta, duplikata i prepisivanja

- VERIFIED: SOURCE fajlovi su u `SOURCE/`, operativni dokumenti u korijenu;
  indeksi `README.md` i `SOURCE/izvori.md` upućuju na postojeće lokalne fajlove.
  Nije izvršeno premještanje u `MIGRATION/` niti uvoz zatvorene grane PR-a #3.
- VERIFIED: poređenje Git blob SHA vrijednosti svih 27 fajlova pokazuje da
  među nepraznim fajlovima nema bajtno identičnih duplikata. Osam identičnih
  praznih markera čuva različite direktorije i nije duplirana pripovjedna građa.
- VERIFIED: Addendum ponavlja JUG odjeljke 15–49 u linijama 3962–5270 i
  5371–6679: 1.309 istih tekstualnih linija. Provjereno direktnim poređenjem;
  SHA-256 oba bloka, s LF i završnim novim redom:
  `f92e9f7524378a3abc646dc2b947f1b3754a41070645761b8f7c3647ae0dcd0c`.
  Različiti dokumentarni omotači čuvaju porijeklo; ništa nije uklonjeno.
- VERIFIED: naslov „ZAGOR — TRI FRAGMENTA JEDNE ISTORIJE“ pojavljuje se u
  Addendumu na linijama 2931 i 6745, u dva označena izvoda. Potvrđeno je
  ponavljanje naslova; nije tvrđena bajtna jednakost cijelih izvoda.
- VERIFIED: SOURCE MASTER već sadrži ugniježđene historijske zapise,
  registre i idejne izvode. Njihovo prisustvo nije zaseban uvoz novih Git fajlova.
  Ovaj pregled nije iscrpna semantička deduplikacija svih arhivskih blokova.
- VERIFIED: ROOT i USTAV jesu zamijenili stare šablone u prethodnom PR-u #5;
  taj zahvat se ne prikriva tvrdnjom „ROOT je ostao prazan“. Prethodni sadržaj
  dostupan je u roditeljskom commitu `53e3be8108e89296b49ff0609fb871bbd1ff0770`.
- DOCUMENTED: PR #5 opisuje zamjenu kao KENO-odobreno preslikavanje bez redakcije.
  Git blob SHA vrijednosti PR-a #5 odgovaraju fajlovima na pregledanom `main`.
  Jednakost s nedostavljenim originalnim master paketom nije nezavisno testirana.
- VERIFIED: stari ACTIVE_TASK_CONTEXT još je govorio da je ROOT prazan.
  Početni inventar i MIGRATION_PLAN opisuju fazu prije SOURCE uvoza i čitaju se
  kao historijski plan. Ova dopuna i ažurirani aktivni kontekst bilježe novo stanje.
  Nije utvrđeno neželjeno brisanje putanja; namjera prethodnih sadržajnih izmjena
  dokumentirana je u PR-u, uz navedeno ograničenje pristupa originalima.

### Identitet pregledanih glavnih dokumenata

VERIFIED: za preuzete UTF-8 sadržaje izračunati su stvarni Git blob SHA-1 i
SHA-256 te upoređeni s Git stablom. SOURCE MASTER zadržava i svojih 663 CR
znaka; nije normalizovan u LF pri provjeri. Hash cijelog zbirnog fajla nije
hash njegovog unutrašnjeg izvoda ili izvornog DOCX-a.

| Putanja | Bajtovi | Git blob SHA-1 | SHA-256 |
| --- | --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md` | 2151769 | `fe19c566aef84386730bf9858f9d78e26cc69b3e` | `107dd07097ec909d85f796e1c624b0877fe49f73d1ef1f01abe1a1c568ca83c3` |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md` | 156617 | `ce87b04e42f106a5e2a85952a4c4ea943f563e00` | `2a2a2f65d4696e890040767d10d0413a4c231afd0c66d2e97ed689f95f37c374` |
| `CURRENT_FULL_ROOT.md` | 154023 | `c1bc1f55dc9a75e20393d2dc473b61952eaa193a` | `343ad71852e4544a6d92ccb3f9fbe158ea917e63282847dfb000b2c04796728a` |
| `USTAV.md` | 7262 | `dd7940147ab6e1994e81c1fd11ef0df66ddba130` | `792d96e1aaa579d4950626c269b78ba883297250b1fcca64047fa036e67ad488` |
| `ROOT_LITE.md` | 27818 | `24dcf88ff26d07e33e861b754f03030c2e4e58bb` | `8bad9402b6f0e788d4171c345032f4fc09691bc300b419cfb39efc15b30784e9` |

### Otvorena KENO odluka i sljedeći korak

- **Prihvatiti kao CANON:** nijedan novi prijedlog nije odobren ovim pregledom.
- **Ostaviti kao TEST:** preporuka je sačuvati izričite TEST oznake ideja,
  idejnog plana i JUG izvoda; već postojeći LOCK dijelovi zadržavaju svoj status.
- **Ostaviti kao IDEA / PROPOSAL:** nema osnove za automatsku reklasifikaciju;
  KENO može odabrati konkretan izvor i dio za naredni korak.
- **Odbaciti / označiti zastarjelim:** nema nove KENO odluke; ništa se ne briše.
- **Šta mijenja CURRENT_FULL_ROOT.md:** ništa u ovom TASK-002 PR-u.

Pregledati ovu klasifikaciju i `Files changed`. Tek zasebna izričita KENO
odluka, s izvorom, datumom i tačnim obuhvatom, dopušta malu promjenu ROOT-a
u odvojenom commitu/PR-u. Ovaj PR čuva kontinuitet i čeka KENO pregled;
ne uključuje merge.
