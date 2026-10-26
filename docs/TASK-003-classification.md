# TASK-003 — Klasifikacija sedam putanja iz migracionog inventara

Datum: 2026-10-26. Radni status: TEST / NON_CANON. `canon_status: null`.

KENO je 2026-10-26 potvrdio klasifikaciju svih sedam putanja i dokumentarni
JUG odnos PRIMARY/DUPLICATE. Potvrda UNKNOWN oznake znači da je odluka o
zadržavanju tog radnog statusa donesena; sadržaj još čeka detaljnu provjeru.
Nema nove odluke o sadržaju svijeta. Postojeći USTAV i CURRENT ostaju CANON.
`CANON_CANDIDATE` ostaje rezervisan za konkretan novi predloženi sadržaj;
ovim zapisom nijedan novi sadržaj ne dobija taj status ili CANON.

## Osnova i granica pregleda

- [Migracioni inventar](MIGRATION_INVENTORY.md), dopuna TASK-002 iz
  [PR-a #6](https://github.com/Darkwessos/darkwessos-office/pull/6).
- PR #6 mergeovan je commitom `c7ee52f7c1bbf7af6bb1f68335f70dfe6083de71`.
  Taj commit je osnova ovog zadatka; njegove putanje i verzije su provjerene.
- Izvorni pregled sadržaja odnosi se na snapshot
  `df5a46cbd203c45e877b929ce6b7a271ec9d0498`; PR #6 je mijenjao samo inventar
  i aktivni kontekst. Sedam klasifikovanih fajlova imaju isti sadržaj nakon mergea.
- Sedam putanja su putanje prethodnog uvoza kroz PR-ove #4 i #5. Ovaj TASK-003
  mijenja samo ovaj novi dokument i `CONTINUITY/ACTIVE_TASK_CONTEXT.md`.
- Nisu pregledani nedostavljeni binarni originali ili cijeli master ZIP.
  Hash identitet nije potvrda kanonskog statusa, a ovaj zadatak nije audit svake
  pripovjedne tvrdnje unutar zbirnog SOURCE MASTER-a.

## Kako čitati statuse i odnose

`current_status` prenosi status iz dopune inventara. `proposed_status` je
preporuka za ovu fazu; UNKNOWN ostaje dok sadržaj nema jedinstven dokaziv status.
UNKNOWN za zbirni fajl ne poništava njegove pojedinačne historijske LOCK ili
TEST oznake. Za indekse znači da kanonski status cijelog fajla nije primjenjiv;
njihova navigacijska funkcija jeste poznata.

CANON označava postojeći autoritet USTAVA i CURRENT dokumenta. OPEN, RADNO,
TEST, VISUAL ONLY i HISTORY dijelovi CURRENT-a zadržavaju svoje oznake.
CANON_CANDIDATE nije odobrenje i ne zamjenjuje postojeći CANON.

PRIMARY i DUPLICATE su odnosi porijekla i ponavljanja na tačno određenom
obuhvatu; ne određuju kanonski autoritet. SUPERSEDED_BY zahtijeva dokaz da je
konkretna novija verzija zamijenila staru, uz noviju putanju. Sam datum,
sličnost ili prisustvo u arhivi nisu dovoljan dokaz.

`null` u `duplicate_of` i `superseded_by` znači da nije utvrđena takva veza
za cijeli fajl. Poznato ponavljanje odlomka odvojeno je evidentirano ispod;
ne pretvara cijeli Addendum u duplikat. Rizik označava posljedice pogrešne
klasifikacije ili kasnije izmjene, ne opasnost od čitanja dokumenta.

## Sedam putanja — početni prijedlozi

Tabela čuva početnu procjenu i pitanja prije odluke. Važeće potvrde i razlozi
KENO nalaze se u narednom odjeljku; pet UNKNOWN oznaka ostaje namjerno otvoreno
za detaljnu provjeru sadržaja kroz TASK-004.

| path | current_status | proposed_status | reason | risk | duplicate_of | superseded_by | KENO question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md` | UNKNOWN | UNKNOWN | Historijska genealogija S, konsolidovani izvodi i registri, s miješanim statusima. Uvod izričito isključuje automatski operativni autoritet. Nema osnove za blanket CANON, TEST ili SUPERSEDED_BY cijelog fajla. | HIGH | null | null | Koji tačan odjeljak ili tvrdnju želiš sljedeće uporediti s CURRENT-om i ima li za nju zasebna odluka KENO? |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md` | UNKNOWN | UNKNOWN | Zbirka historijskih A/P odluka i otvorenog razvoja. IDEJE, IDEJNI PLAN i novi JUG razvoj imaju TEST oznake; to nije jedinstven status cijelog dokumenta. Potvrđeni DUPLICATE odnosi se samo na odlomak naveden ispod. | HIGH | null | null | Koje konkretne TEST stavke iz ideja ili JUG izvoda želiš zadržati kao TEST, razviti kao PROPOSAL ili zasebno predložiti za CANON_CANDIDATE? |
| `SOURCE/izvori.md` | UNKNOWN | UNKNOWN | Navigacijski indeks dvije SOURCE datoteke, uz jasnu hijerarhiju autoriteta. Ne sadrži novu odluku o priči i nije duplikat tih izvora. | LOW | null | null | Da li ovaj fajl ostavljamo samo kao indeks porijekla, bez kandidature za novi kanonski sadržaj? |
| `CURRENT_FULL_ROOT.md` | CANON | CANON | Postojeći KENO-odobren CURRENT, izričito očuvan u nalogu za TASK-003. Ne predlaže se nova verzija, CANON_CANDIDATE oznaka cijelog fajla ili izmjena njegovih unutrašnjih statusa. | HIGH | null | null | Nema nove odluke za ovu putanju u TASK-003: KENO je izričito odredio da postojeći CURRENT ostaje CANON. Eventualni novi sadržaj razmatra se zasebno. |
| `USTAV.md` | CANON | CANON | Postojeći vrhovni akt, izričito očuvan u nalogu za TASK-003. Odjeljak 6 razdvaja migraciju i prisustvo u ROOT-u od novog LOCK-a. | HIGH | null | null | Nema nove odluke za ovu putanju u TASK-003: KENO je izričito odredio da postojeći USTAV ostaje CANON. |
| `ROOT_LITE.md` | UNKNOWN | UNKNOWN | Poznata navigacijska funkcija, bez samostalnog kanonskog autoriteta. Izričito zabranjuje automatsko pretvaranje OPEN/RADNO u LOCK. Nije dokazana zamjena cijelog fajla novijom dostupnom putanjom. | MEDIUM | null | null | Da li ROOT-LITE ostaje isključivo navigacija prema postojećem CURRENT-u, uz odvojen budući pregled ako se uoči konkretno neslaganje? |
| `README.md` | UNKNOWN | UNKNOWN | Organizacijski opis i navigacijski indeks prethodne sinhronizacije, bez zasebne odluke o svijetu. Poznata funkcija nije razlog za CANON_CANDIDATE. | LOW | null | null | Da li README ostaje organizacijska dokumentacija bez kanonskog statusa ili imaš konkretnu nekanonsku dopunu opisa? |

## KENO odluka — 2026-10-26

Autor odluke: KENO. [Review komentar u PR-u #7](https://github.com/Darkwessos/darkwessos-office/pull/7#pullrequestreview-5649971863)
prenosi izričitu odluku iz razgovora. GitHub review je COMMENT, bez pokušaja
formalnog samo-odobravanja PR-a.

Svih sedam odluka o klasifikaciji je CONFIRMED. `final_status: UNKNOWN`
bilježi potvrđenu odluku da se status sadržaja još ne zaključava; to nije
potvrda novog kanona. USTAV i CURRENT zadržavaju prethodni autoritet.

```yaml
decisions:
  - path: "SOURCE/04_SOURCE_MASTER.md"
    keno_decision: CONFIRMED
    final_status: UNKNOWN
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Status još nije potvrđen; čeka se detaljna provjera sadržaja."
  - path: "SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md"
    keno_decision: CONFIRMED
    final_status: UNKNOWN
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Status još nije potvrđen; čeka se detaljna provjera sadržaja."
  - path: "SOURCE/izvori.md"
    keno_decision: CONFIRMED
    final_status: UNKNOWN
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Status još nije potvrđen; čeka se detaljna provjera sadržaja."
  - path: "CURRENT_FULL_ROOT.md"
    keno_decision: CONFIRMED
    final_status: CANON
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Postojeći autoritativni CURRENT FULL ROOT ostaje CANON. Nema nove promjene ROOT-a u ovom PR-u."
  - path: "USTAV.md"
    keno_decision: CONFIRMED
    final_status: CANON
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Postojeći USTAV ostaje CANON. Nema nove promjene USTAV-a u ovom PR-u."
  - path: "ROOT_LITE.md"
    keno_decision: CONFIRMED
    final_status: UNKNOWN
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Status još nije potvrđen; čeka se detaljna provjera sadržaja."
  - path: "README.md"
    keno_decision: CONFIRMED
    final_status: UNKNOWN
    decision_date: "2026-10-26"
    decision_author: KENO
    reason: "Status još nije potvrđen; čeka se detaljna provjera sadržaja."
```

Postojeće TEST oznake pojedinačnih blokova ostaju nepromijenjene. Nema
promjene ROOT-a, USTAVA ili SOURCE građe, niti automatskog pretvaranja
UNKNOWN u CANON.

```yaml
jug_relation:
  primary: "SOURCE/04_SOURCE_MASTER.md — odlomak idejnog plana"
  duplicate: "SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md — ponovljeni izvod"
  identical_lines: 1309
  status: DOCUMENTED
  canon_decision: null
```

KENO je potvrdio porijeklo i odnos zapisa, bez novog kanonskog odobrenja.
Tačni obuhvati i provjera tekstualne jednakosti navedeni su ispod.

## Dokazni oslonci za klasifikaciju

Linije se odnose na neizmijenjene izvorne fajlove u osnovnom commitu ovog zadatka.

| Putanja / mjesto | Pročitani dokaz | Zaključak i ograničenje |
| --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md`, uvod, S od linije 23 i konsolidovana baza od 4656 | Namjena je genealogija; historijski LOCK ne prelazi automatski u CURRENT. | UNKNOWN cijelog kontejnera; ne poništava odluke koje su već potvrđene u važećem autoritetu. |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md`, A od 13 i P od 1456 | Dokumentarni historijski izvodi. | UNKNOWN za jedinstveni status tih miješanih blokova; konkretna odluka provjerava se prema USTAVU/CURRENT-u. |
| Isti fajl, IDEJE od 2907 i izvod od 6731 | Razvojna hipoteza TEST / OPEN. | Zadržati TEST za taj razvoj; ponovljeni naslov nije dokaz identičnosti cijelog izvoda. |
| Isti fajl, IDEJNI PLAN od 3230 | Idejni / TEST / radni save point; sve novo ostaje TEST do KENO odluke. | Zadržati TEST za nove mogućnosti, bez promjene ranije odobrenog sadržaja. |
| Isti fajl, DOPUNA JUG od 5321 | Neautoritativni SOURCE/PROVENANCE izvod idejnog plana, odjeljci 15–49. | TEST za novi razvoj; dokumentarna kopija ne stvara novi autoritet. |
| `SOURCE/izvori.md`, cijeli indeks | SOURCE je porijeklo i razvojna građa; USTAV/CURRENT imaju prednost. | Indeks, bez novog kanona. |
| `CURRENT_FULL_ROOT.md`, header, operativni uvod, razvojni dodatak J i HISTORY | CURRENT izričito odobrio KENO 25.10.2026.; radni i historijski slojevi su odvojeni. | Postojeći CANON dokument uz očuvane unutrašnje statuse. |
| `USTAV.md`, odjeljak 6 | KENO odlučuje; migracija ne stvara novi kanon. | Postojeći CANON, bez izmjene. |
| `ROOT_LITE.md`, uvod | Navigacijski sloj, nije kanonski autoritet; CURRENT ima prednost. | UNKNOWN kanonski status cijelog indeksa; funkcija navigacije je potvrđena. |
| `README.md`, autoritativni dokumenti i integritet/opseg | Razdvaja autoritete, SOURCE i radne cjeline. | Organizacijska dokumentacija, bez zasebnog kanonskog odobravanja sadržaja. |

## PRIMARY / DUPLICATE — potvrđeni odnos odlomaka

Nema bajtno identičnih nepraznih cijelih Git fajlova među pregledanih 27
putanja. Osam praznih `.gitkeep` markera čuva različite direktorije; nisu
scene ni izvori priče i nisu dio sedam putanja za klasifikaciju.

Potvrđeno je ponavljanje JUG odjeljaka 15–49 između SOURCE MASTER-a i
Addenduma. Raniji prikaz označavao je primarni prikaz unutar samog Addenduma;
KENO odluka precizira PRIMARY referencu na odlomak idejnog plana u SOURCE
MASTER-u. Oznaka ne mijenja status bilo kojeg cijelog fajla.

| Obuhvat | relation | duplicate_of | superseded_by | Obrazloženje |
| --- | --- | --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md`, linije 66589–67897, u arhivskom izvodu `idejni plan (1).docx` (odjeljak počinje na 65869) | PRIMARY | null | null | Referenca potvrđena odlukom KENO. Izvorni odlomak idejnog plana, odjeljci 15–49, prema porijeklu zapisa. PRIMARY ne daje CANON status i ne tvrdi da je binarni original testiran. |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md`, linije 5371–6679, unutar DOPUNE JUG | DUPLICATE | `SOURCE/04_SOURCE_MASTER.md`, linije 66589–67897 | null | Ponovljeni izvod od 1.309 jednakih tekstualnih linija. KENO je potvrdio odnos, bez brisanja ili novog kanonskog odobrenja. |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md`, linije 3962–5270, unutar IDEJNOG PLANA | DUPLICATE | `SOURCE/04_SOURCE_MASTER.md`, linije 66589–67897 | null | Dodatno sačuvano pojavljivanje istog odlomka, ranije korišteno za poređenje unutar Addenduma. Ostaje sačuvano s izvornim statusima. |

Metod: direktno poređenje 1.309 tekstualnih linija sva tri obuhvata. Za
poređenje se CRLF tretira kao LF; izvorni fajlovi i njihovi završeci redova
nisu mijenjani. SOURCE MASTER odjeljak navodi izvorni DOCX SHA-256
`a5a8f70c387d3689f2e27f95b77e251b8ef9252b64334360db997bccac5167d3`,
isti dokumentarni identitet naveden uz IDEJNI PLAN i DOPUNU JUG u Addendumu.
To je provjera zapisa o porijeklu, ne nezavisan test binarnog originala.
SHA-256 zajedničkog bloka, s LF i završnim novim redom:
`f92e9f7524378a3abc646dc2b947f1b3754a41070645761b8f7c3647ae0dcd0c`.

KENO potvrda: odnos PRIMARY/DUPLICATE je prihvaćen 2026-10-26, uz očuvanje
svih kopija i postojećih TEST oznaka pojedinačnih blokova.
`canon_decision: null` — nije doneseno novo kanonsko odobrenje.

## SUPERSEDED_BY — bez automatskog zaključka

Za nijednu od sedam sadašnjih putanja nije potvrđena novija zamjenska putanja;
zato `superseded_by` ostaje null. Historijski SOURCE nije kao cjelina zamijenjen
CURRENT-om: ostaje izvor porijekla. Stariji šabloni ROOT-a i USTAVA postoje
u Git historiji, ali nisu zasebne aktuelne putanje iz ove klasifikacije.

KENO pitanje: postoji li konkretna starija verzija i dostupna novija putanja
koju želiš evidentirati kao zamjenu? Ako postoji, treba navesti oboje i tačan
obuhvat; do tada nema nove oznake SUPERSEDED_BY ili premještanja u arhivu.

## Potvrđene odluke i sljedeći korak

- Svih sedam putanja ima `keno_decision: CONFIRMED`, datum 2026-10-26 i autora KENO.
- USTAV i CURRENT ostaju CANON; za pet ostalih putanja potvrđen je UNKNOWN,
  uz detaljnu provjeru sadržaja koja tek slijedi.
- Dokumentarni JUG odnos PRIMARY/DUPLICATE je potvrđen; postojeće TEST oznake
  ostaju nepromijenjene.
- Nije odabran novi CANON_CANDIDATE niti UNKNOWN pretvoren u CANON.
- Za cijele fajlove nije dokazan duplicate_of ili superseded_by; ostaju null.

PR #7 s ovim commitom ostaje otvoren i ne mergeuje se u ovom koraku.
Nakon zasebnog mergea slijedi TASK-004 — detaljna provjera pet UNKNOWN
stavki, uz prijedlog `final_status` (CANON | TEST | IDEA | PROPOSAL | ARCHIVE |
DOCUMENTATION), razlog, rizik, odnose i pitanje KENO za svaki fajl.
To je budući zadatak, nije izvršen ovim commitom.

Ako provjera pokaže potrebu za promjenom CURRENT-a, priprema se zaseban
TASK-005 uz izričitu KENO odluku. Nema izmjene ROOT-a, USTAVA ili SOURCE građe,
brisanja ili automatskog spajanja verzija.
