# TASK-004 — Detaljna provjera UNKNOWN stavki

Datum: 2026-10-26. Status: TEST / NON_CANON. `canon_status: null`.
Odluke KENO za prijedloge ovog zadatka: PENDING.

## Osnova, rezultat i granice

[PR #7](https://github.com/Darkwessos/darkwessos-office/pull/7) squash-mergeovan
je uz izričito KENO odobrenje kao commit
`f1774c9422452bc6f973bec7e5f33858bf28eedd`, s porukom
„TASK-003: klasifikacija sedam putanja i KENO odluke“. Taj main snapshot je
osnova ovog pregleda. [TASK-003](TASK-003-classification.md) potvrđuje pet
UNKNOWN oznaka, postojeći CANON USTAVA/CURRENT-a i dokumentarni JUG odnos.

Preporuka za KENO: dva historijska SOURCE kontejnera označiti ARCHIVE, a
tri dokumentacijska fajla DOCUMENTATION. To su **predloženi statusi cijelih
fajlova**, ne već donesene odluke i ne izmjene statusa pojedinačnih priča,
LOCK-ova, TEST ideja ili OPEN pitanja. `current_status` ostaje UNKNOWN.
Nijedan fajl ili novi sadržaj nije predložen za automatski CANON.

ARCHIVE ovdje znači čuvanje porijekla i historijskih verzija na postojećoj
putanji. Ne znači brisanje, premještanje, odbacivanje korisne ideje ili
ukidanje ranije odobrenog sadržaja koji već postoji u važećem autoritetu.
DOCUMENTATION označava indeks, navigaciju ili organizacijski opis bez
samostalne nadležnosti za kanon.

Provjera je obuhvatila identitet svih 28 praćenih fajlova prema Git blob SHA
vrijednostima, kompletan strukturni pregled oba zbirna SOURCE dokumenta,
njihove izvore, statuse, registre i ponavljanja, ciljanu sadržajnu provjeru
statusno osjetljivih blokova i cjelovito čitanje tri manja dokumenta.
ROOT-LITE je ciljano poređen s relevantnim USTAV/CURRENT ograničenjima i
historijskim ROOT-LITE izvodom. To nije nezavisna potvrda svake pripovjedne
tvrdnje svih 73.298 linija SOURCE MASTER-a. Binarni DOCX/PDF i originalni
master ZIP nisu u pregledanom Git stablu i nisu testirani.

## Pet prijedloga za KENO odluku

`duplicate_of` i `superseded_by` odnose se na cijeli fajl. null znači da nije
dokazana jednakost ili zamjena cijelog dokumenta. Potvrđena ponavljanja i
lokalna statusna neslaganja navedena su odvojeno, s tačnim obuhvatom.

| path | current_status | proposed_status | reason | risk | duplicate_of | superseded_by | KENO question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md` | UNKNOWN | ARCHIVE | Izričito historijska genealogija S, 13 ugniježđenih arhivskih zapisa i registri; čuva i stare LOCK, radne ideje, CUT, OPEN i historijske verzije. Njegov uvod isključuje automatski operativni autoritet. | HIGH | null | null | Prihvataš li ARCHIVE kao ulogu cijelog SOURCE kontejnera, uz očuvanje putanje, svih verzija i pojedinačnih statusa? |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md` | UNKNOWN | ARCHIVE | Dokumentarni kontejner šest izvoda: historijski A/P, ideje, idejni plan i JUG. Miješani statusi i sačuvano porijeklo opravdavaju ARCHIVE za cijeli fajl; novi razvojni blokovi zadržavaju TEST. | HIGH | null | null | Prihvataš li ARCHIVE za cijeli kontejner uz zadržavanje TEST oznaka ideja, idejnog plana i JUG razvoja te zaseban izbor svake buduće kandidature? |
| `SOURCE/izvori.md` | UNKNOWN | DOCUMENTATION | Deset linija indeksa sa dvije SOURCE veze, hijerarhijom i opisom opsega; nema nove scene, činjenice svijeta ili odluke. Svih pet Markdown veza vodi na postojeće fajlove. | LOW | null | null | Prihvataš li DOCUMENTATION za indeks porijekla, bez vlastitog kanonskog autoriteta? |
| `ROOT_LITE.md` | UNKNOWN | DOCUMENTATION | Izričito navigacijski sloj s prvenstvom CURRENT-a; prenosi pregled LOCK/OPEN/RADNO, ali ih sam ne uspostavlja. Uočena je stavka o Tyrionovoj alternativi koju treba posebno razjasniti. | MEDIUM | null | null | Prihvataš li DOCUMENTATION za navigaciju i želiš li zaseban prijedlog dokumentacijske korekcije stavke o Tyrionovoj alternativi, prema već važećem CURRENT-u? |
| `README.md` | UNKNOWN | DOCUMENTATION | Organizacijski opis projekta, uloga, dokumenata i granica prethodne sinhronizacije. Svih 12 lokalnih Markdown veza je dostupno; dokument ne uspostavlja novi lore. | LOW | null | null | Prihvataš li DOCUMENTATION za README, kao opis rada i navigaciju bez samostalnog lore/kanonskog statusa? |

Rizik se odnosi na posljedice pogrešnog korištenja ili buduće klasifikacije.
HIGH kod SOURCE-a proizlazi iz mogućnosti da se historijski LOCK, CUT ili
otvorena hipoteza pogrešno prenesu u sadašnji kanon. Predlaganje ARCHIVE ne
smanjuje niti povećava stvarni autoritet pojedinačne ranije KENO odluke.

## 1. SOURCE/04_SOURCE_MASTER.md — sadržaj i porijeklo

Fajl ima 2.151.769 bajtova i 73.298 linija. Uvod na linijama 1–18 izričito
kaže da je to genealogija, a ne operativni kanon. S/A/P označavaju porijeklo,
ne prvenstvo nad USTAVOM i CURRENT-om. Uvodna referenca na originalni ZIP je
arhivska lokacija iz izvornog paketa, ne dokaz dostupnog lokalnog ZIP-a.

Struktura je provjerena kroz cijeli fajl:

- S — izvorni SOURCE MASTER od linije 23, s arhivskim tekstualnim izvodom
  `zagor source fajl.docx`. U njemu postoje različiti statusi, uključujući
  LOCK/HARD LOCK, RADNO, TEST, OPEN, CUT i VISUAL ONLY.
- Konsolidovana SOURCE baza od linije 4656 ima 13 odjeljaka označenih
  `ARHIVSKI DOKUMENT`. To su ugniježđeni zapisi unutar jednog Git fajla.
- Registar od linije 72619 navodi 14 originala i razdvaja
  PRIMARY_HISTORICAL, SUPPLEMENTARY i DERIVED_OR_NAVIGATION. Broj originala
  je DOCUMENTED tvrdnja registra, ne rezultat otvaranja nedostavljenog ZIP-a.
- S/A/P indeks od linije 72659 povezuje poglavlja s izvorima.
- Migracijski trag od linije 72856 izričito kaže da je historijski zapis.
  Bilježi, između ostalog, razliku S28–30 naspram A02/P03 za Natov minimum,
  A09 naspram P12 za vijeće i S71 naspram P05/P31 za obaveznu cijenu magije.
  Te bilješke nisu nove odluke koje bi preskočile današnji CURRENT.
- Od linije 72902 slijede citatni trag i CSV prikazi putanja/registara.

Provjerenih 13 arhivskih zapisa čine: `DARKWESSOS_SOURCE_DOPUNA_6_IZVORA_2026-10-25.md`,
`04_SOURCE_LORE.md`, `02_ZAGOR_SOURCE_ARHIVA_VERIFIED.md`, `zagor source fajl.docx`,
`SOURCE ARHIVA v1.0.docx`, `Ideje.docx`, `IDEJE_PUNI_TEKST_IZVOD.md`,
`idejni plan (1).docx`, `INDEX_IZVORA.csv`, `POST-ADDENDUM AUTORITATIVNI PAKET_.docx`,
`ROOT-LITE_v1.5_TYWIN_HARRENHAL_TYRION_ROUTE_SOURCE_SYNC(2).md`,
`SOURCE_FULL.md` i `ZAGOR_SOURCE_DOPUNA_JUG_2026-10-14(1).md`.

Posebno je važan odjeljak `04_SOURCE_LORE.md` od linije 31074: objedinjuje
10 izvora i sam sebe opisuje kao kompaktni prenos. Njegovi historijski
CONFIRMED/UNVERIFIED/HOLD zapisi odnose se na tadašnju evidenciju izvora;
ne postaju sadašnja KENO odluka niti tvrdnja o trenutnoj konekciji ili pristupu.

Zaključak: ARCHIVE najbolje opisuje ulogu cijelog fajla. Pojedinačne ideje
mogu ostati živi TEST/OPEN materijal; odabir odlomka za novi prijedlog traži
posebnu referencu i KENO odluku. `duplicate_of: null` jer se cijeli kontejner
ne podudara s drugim punim fajlom. `superseded_by: null` jer CURRENT ne briše
njegovu funkciju porijekla niti zamjenjuje sve njegove podatke.

## 2. SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md — šest različitih izvoda

Fajl ima 156.617 bajtova i 7.037 linija. Pregledani su porijeklo, omotači,
statusni iskazi i odnosi svih šest blokova, uz sadržajno poređenje sa SOURCE
MASTER-om i relevantnim važećim ograničenjima:

| Blok / početak | Dokazni oslonac | Tretman sadržaja |
| --- | --- | --- |
| A — POST-SOURCE ADDENDUM, linija 13 | Historijski izvod `post adendum (1).docx`, s originalnim identitetom i upozorenjem da historijski LOCK nije automatski CURRENT. | Čuvati historijske odluke; pojedinačno provjeravati njihovo današnje važenje. |
| P — POST-ADDENDUM paket, linija 1456 | Historijski izvod, sa LOCK i otvorenim tačkama. | Bez automatskog kanonskog uvoza cijelog paketa. |
| IDEJE, linija 2907 | „Razvojna hipoteza · TEST / OPEN“ i izričita napomena da prijedlog ostaje TEST. | TEST, bez promocije samo zbog naslova ili uvoza. |
| IDEJNI PLAN, linija 3230 | „IDEJNI / TEST / RADNI SAVE POINT“, „OVO NIJE CANON PATCH“ i novo ostaje TEST do KENO odluke. | Sačuvati TEST novog razvoja i ranije odobrene oznake gdje su već utvrđene. |
| DOPUNA JUG, linija 5321 | Neautoritativni izvod odjeljaka 15–49 idejnog plana; zadržava statuse izvora. | Potvrđeni DUPLICATE odnos zapisa, bez novog odobrenja sadržaja. |
| IDEJE — puni tekst izvod, linija 6731 | Poseban dokumentarni omotač izvoda iz Ideje.docx. | Sačuvati porijeklo i TEST/OPEN; nije zaseban novi LOCK. |

Istraživačke formulacije mogu sadržavati moguće Branove tragove, Drogov
autoritet ili buduće susrete. Važeći CURRENT, linije 3403–3419, čuva BRAN
AFTERMATH kao HOLD i Drogo/div kao OPEN, uz izričito napuštenu konstrukciju
pobjede radi autoriteta. JUG/idejni zapis ne vraća takvu konstrukciju u
aktivni plan. Ovo je kontrola primjene postojećeg autoriteta, ne nova zabrana
ili izbor buduće scene.

ARCHIVE je prijedlog za ulogu **cijelog historijskog kontejnera**. Oznaka TEST
ostaje na njegovim razvojnim blokovima; nije predloženo da svih šest različitih
izvora postane jedna TEST ideja ili jedna kanonska odluka.

## 3. SOURCE/izvori.md — indeks, ne izvor nove priče

Pročitano svih 10 linija. Fajl sadrži dvije veze prema SOURCE dokumentima,
tri veze prema postojećim USTAV/CURRENT/ROOT-LITE dokumentima, hijerarhiju
autoriteta i napomenu da puni DOCX/ZIP arhivi nisu u toj mapi.

VERIFIED: svih pet lokalnih Markdown veza razriješeno je prema direktoriju
`SOURCE/` i vodi na postojeći fajl. Navedena veličina SOURCE MASTER-a od
2.151.769 bajtova odgovara stvarnom sadržaju. DOCUMENTATION zato opisuje
njegovu poznatu funkciju, uz očuvanje činjenice da nije lore odluka.
Nije kopija samih izvora i nema potvrđenu noviju zamjensku putanju.

## 4. ROOT_LITE.md — navigacija i precizan nalaz za pregled

Pročitano svih 1.214 linija / 27.818 bajtova. Uvod izričito kaže da je
navigacijski sloj i da CURRENT ima prednost. Dokument ima kauzalni kostur,
tri magistrale, blokove likova/scena, epistemološku mapu, OPEN/RADNO listu,
guardraile i operativno pravilo za pisanje. Završni „BUILD: PASS“ je
DOCUMENTED historijska oznaka dokumenta, ne rezultat novog testa ovog zadatka.

Ciljano poređenje s USTAVOM i CURRENT-om potvrđuje očuvane granice: Bran/Nat
nisu GPS, Fishleg nije u prvom prolazu, Tyrion nije član Zagorove ekspedicije,
BRAN AFTERMATH je HOLD, a Tywin samostalno određuje Tyrionov pravac. To je
ograničen provjeren uzorak, ne tvrdnja da je svaki sažetak semantički identičan
svakom dijelu FULL ROOT-a.

### Nalaz NAV-01 — Tyrionova alternativa

- VERIFIED tekstualni nalaz: ROOT-LITE linija 930, unutar aktivne OPEN/RADNO
  liste, navodi „organski izvor Tyrionove alternative“.
- CURRENT linije 1399–1405 preciziraju da informacija o Frey alternativi
  pripada ekspediciji, dok Tyrionove ceste ostaju otvorene unutar unaprijed
  Tywinom odabranog pravca. §22, naročito linije 3374–3397, izričito odbacuje
  potrebu da Tyrion poslije iste barijere traži alternativu.
- CURRENT linije 3503–3511 čuvaju srodnu staru formulaciju isključivo u
  neoperativnom HISTORY odjeljku. ROOT-LITE §13, linije 715–747, već navodi
  novu čistu Tywinovu kauzalnost.
- INFERRED: preostala kratka OPEN stavka može pogrešno održavati staru
  konstrukciju. To je konkretan kandidat za dokumentacijsku korekciju;
  sama rečenica ne dokazuje novi sukob zaključanih odluka ili uzrok rute.
- Rizik: MEDIUM. Preporuka je zaseban, KENO-pregledan prijedlog uklanjanja
  ili preciziranja te stavke prema postojećem CURRENT-u. Ni ROOT-LITE ni
  CURRENT nisu mijenjani ovim pregledom. Nema osnove za promjenu kanona.

### Verzija i porijeklo

ROOT-LITE header nosi „v0.1“ i „VERZIJA: 1.4“, uz navigacijski sync
25.10.2026. U SOURCE MASTER-u, odjeljak od linije 69676 čuva historijski
`ROOT-LITE_v1.5_...` sa starim CURRENT pointerom. Direktno poređenje pokazuje
razlike u headeru, pointeru i sadržaju; to nisu isti puni tekstovi. Veći broj
historijske verzije nije dokaz da ona sada zamjenjuje `ROOT_LITE.md`.
Zato `duplicate_of` i `superseded_by` za cijeli današnji fajl ostaju null.

Naziv `DARKWESSOS_CURRENT_FULL_ROOT_2026-10-25.md` u njegovom tekstu je
historijski identifikator CURRENT-a, dok je dostupna lokalna putanja
`CURRENT_FULL_ROOT.md`. To razgraničenje treba čuvati pri budućoj navigaciji.

## 5. README.md — organizacijska dokumentacija

Pročitano svih 31 linija / 2.273 bajta. Dokument opisuje projekt, uloge,
pet glavnih dokumenata, autoritativni redoslijed, radne cjeline i opseg
sinhronizacije od 26.10.2026. Nema zasebne scene ili nove odluke o svijetu.

VERIFIED: svih 12 lokalnih Markdown veza vodi na postojeće fajlove ili
direktorije. Tvrdnja o preslikavanju originalnog master paketa ostaje
DOCUMENTED: ova sesija potvrđuje sadašnje Git sadržaje, ali nije nezavisno
otvorila taj binarni paket. Zato prijedlog DOCUMENTATION ne označava svaki
historijski opis kao upravo ponovljen test integriteta originala.

## Ponavljanja sadržaja — bez brisanja i spajanja

Git blob poređenje svih 28 praćenih putanja ne nalazi identične neprazne
cijele fajlove. Osam praznih `.gitkeep` markera očekivano ima isti sadržaj.
Zato oba zbirna SOURCE fajla imaju `duplicate_of: null` na nivou cijelog fajla.

Za svih šest Addendum izvoda pregledan je tekst poslije dokumentarnog
omotača, do `ORIGINAL_TEXT_END`. Nakon uklanjanja samo vanjskih praznih
redova i tretiranja CRLF kao LF, pet tijela pronađeno je kao tačan tekstualni
podniz SOURCE MASTER-a. A je pronađen tek nakon normalizacije razmaka:

| Addendum tijelo | Broj linija tijela | Pojavljivanja u MASTER-u počinju na liniji | Rezultat |
| --- | --- | --- | --- |
| P paket | 1421 | 68249 | VERIFIED tekstualna jednakost tijela, ne cijelih fajlova. |
| Ideje.docx | 293 | 25613, 65257, 65570 | VERIFIED ponavljanja tijela. |
| Idejni plan | 2061 | 65879 | VERIFIED ponavljanje tijela. |
| Dopuna JUG | 1379 | 17101, 47228, 48620, 50009, 59123, 71230 | VERIFIED ponavljanja tijela. |
| IDEJE puni tekst izvod | 297 | 25609, 65566 | VERIFIED ponavljanja tijela s drugim omotačem. |
| A addendum | 1413 | Nije utvrđen isti tekst uz očuvane unutrašnje razmake | VERIFIED podudaranje nakon normalizacije svih razmaka; nije dokaz bajtne jednakosti niti razlog za uklanjanje verzije. |

Metod ne potvrđuje izgled DOCX-a, slike ili binarnu jednakost originala.
Pet potvrđenih ponavljanja označava odnos izvoda; ne mijenja odabrani
KENO PRIMARY ili status cijelog kontejnera. Nije izvršeno uklanjanje duplikata.

### Očuvani KENO JUG odnos

```yaml
jug_relation:
  primary: "SOURCE/04_SOURCE_MASTER.md — odlomak idejnog plana"
  duplicate: "SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md — ponovljeni izvod"
  identical_lines: 1309
  status: DOCUMENTED
  canon_decision: null
```

PRIMARY ostaje SOURCE MASTER, linije 66589–67897. DUPLICATE ostaje Addendum,
linije 5371–6679. Dodatna kopija u Addendumu, linije 3962–5270, takođe ostaje
sačuvana. Direktno poređenje potvrđuje 1.309 jednakih linija sva tri obuhvata.
SHA-256 zajedničkog bloka, s LF i završnim novim redom:
`f92e9f7524378a3abc646dc2b947f1b3754a41070645761b8f7c3647ae0dcd0c`.
Ovo je ranije potvrđen odnos porijekla, bez novog kanonskog odobrenja.

## Identitet pet pregledanih fajlova

VERIFIED: stvarno izračunati SHA-256, veličine i linije; Git blob SHA svih
28 lokalnih fajlova provjeren je prema osnovnom main stablu. Izvorni bajtovi,
uključujući 663 CR znaka SOURCE MASTER-a, ostaju sačuvani. Tekstualna
normalizacija korištena za poređenje nije upisana u izvorne fajlove.

| Putanja | Bajtovi | Linije | SHA-256 |
| --- | --- | --- | --- |
| `SOURCE/04_SOURCE_MASTER.md` | 2151769 | 73298 | `107dd07097ec909d85f796e1c624b0877fe49f73d1ef1f01abe1a1c568ca83c3` |
| `SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md` | 156617 | 7037 | `2a2a2f65d4696e890040767d10d0413a4c231afd0c66d2e97ed689f95f37c374` |
| `SOURCE/izvori.md` | 752 | 10 | `830362983fb4b7b3cf77c546cd1a0b9fda02d94c35716b5c7125bcd4fa701feb` |
| `ROOT_LITE.md` | 27818 | 1214 | `8bad9402b6f0e788d4171c345032f4fc09691bc300b419cfb39efc15b30784e9` |
| `README.md` | 2273 | 31 | `8641d93049b33c9c13da7f2f535995ce7ea9c3812d9a9cbbeb5800a4ed4b9dff` |

## Otvorena KENO odluka i predaja

KENO treba prihvatiti ili korigovati pet predloženih uloga, bez promjene
sadržaja pregledanih izvora. Dosadašnji potvrđeni status je UNKNOWN za svih
pet; ARCHIVE i DOCUMENTATION su prijedlozi ovog TASK-004, ne unesene konačne
odluke. Postojeći USTAV i CURRENT ostaju CANON.

Nalaz NAV-01 treba posebno razmotriti kao dokumentacijski zahvat. Izostanak
novije zamjenske putanje ostavlja `superseded_by: null` za svih pet fajlova;
pojedinačna historijska formulacija ne čini cijeli SOURCE ili ROOT-LITE
zastarjelim. Nijedan novi sadržaj nije promovisan u CANON.

Rezultat zadatka su samo ovaj dokument i ažurirani aktivni kontekst. Novi
PR na `feature/task-004-unknown-review` predaje se na pregled bez mergea.
Nema izmjena ROOT-a, USTAVA, SOURCE građe, ROOT-LITE-a, README-a ili ranijih
inventara/klasifikacija, nema brisanja ni spajanja verzija. Eventualni novi
kanonski sadržaj ide u zaseban TASK-005 tek uz izričitu KENO odluku.
