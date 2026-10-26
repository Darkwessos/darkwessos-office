# TASK-005 — Provjera ROOT-LITE Tyrionove alternative

Datum: 2026-10-26. DARKWESSOS v0.2.0.
Status: TEST / NON_CANON. `canon_status: null`. `canon_decision: null`.
KENO odluka o prijedlogu: PENDING.

## Rezultat za KENO pregled

Predloženi status je **NEEDS_REVISION**, rizik **MEDIUM**: ROOT-LITE linija
930 zadržava nepreciznu OPEN stavku o Tyrionovoj alternativi, dok njegov §13
već prenosi nezavisan Tywinov izbor početne rute. CURRENT §22 izričito
superseda naknadno preusmjeravanje Tyriona istom barijerom.

Predlaže se buduća dokumentacijska korekcija prema postojećem autoritetu.
Ovaj izvještaj ne usvaja prijedlog, ne zatvara legitimne OPEN detalje rute
i ne mijenja ROOT-LITE, CURRENT, USTAV ili SOURCE. REVIEW_REQUIRED ostaje
do KENO odluke o narednom zahvatu.

## Osnova i dostupni izvori

[PR #8](https://github.com/Darkwessos/darkwessos-office/pull/8) je nakon završne provjere,
uz izričit KENO nalog, squash-mergeovan kao
[`621b0ba018286fbeacc5c6e68e2af82c82180e59`](https://github.com/Darkwessos/darkwessos-office/commit/621b0ba018286fbeacc5c6e68e2af82c82180e59),
s naslovom „TASK-004: klasifikacija UNKNOWN stavki i KENO odluke“.
Sve reference i brojevi linija ispod odnose se na taj nepromjenjivi snapshot.

| Izvor | Git blob SHA | Relevantni obuhvat |
| --- | --- | --- |
| [ROOT_LITE.md](https://github.com/Darkwessos/darkwessos-office/blob/621b0ba018286fbeacc5c6e68e2af82c82180e59/ROOT_LITE.md#L930) | `24dcf88ff26d07e33e861b754f03030c2e4e58bb` | Uvod 7–33; §13, 715–747; OPEN lista od 884, posebno 924–934. |
| [CURRENT_FULL_ROOT.md](https://github.com/Darkwessos/darkwessos-office/blob/621b0ba018286fbeacc5c6e68e2af82c82180e59/CURRENT_FULL_ROOT.md#L3300) | `c1bc1f55dc9a75e20393d2dc473b61952eaa193a` | Cijeli §22, 3300–3397; §6, 1342–1405; HISTORY, 3503–3512. |
| [SOURCE/04_SOURCE_MASTER.md](https://github.com/Darkwessos/darkwessos-office/blob/621b0ba018286fbeacc5c6e68e2af82c82180e59/SOURCE/04_SOURCE_MASTER.md#L9345) | `fe19c566aef84386730bf9858f9d78e26cc69b3e` | Stari ROOT-LITE od 8419, posebno 9148–9156 i 9345; patch 21791–21886; arhivski v1.5 od 69676, posebno 70421–70449 i 70626–70634. |
| [SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md](https://github.com/Darkwessos/darkwessos-office/blob/621b0ba018286fbeacc5c6e68e2af82c82180e59/SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md#L2278) | `ce87b04e42f106a5e2a85952a4c4ea943f563e00` | Historijski P omotač 1456–1473; §17, 2094–2130; historijski §22, 2278–2328. |
| [TASK-004 izvještaj](TASK-004-unknown-review.md) | `deb68ffb3f15055da7ae7b093be266c0ab280bc2` | KENO potvrde, root_lite_review i nalaz NAV-01. |
| [USTAV.md](https://github.com/Darkwessos/darkwessos-office/blob/621b0ba018286fbeacc5c6e68e2af82c82180e59/USTAV.md#L66) | `dd7940147ab6e1994e81c1fd11ef0df66ddba130` | §6, 66–78: autoritet, statusi i porijeklo. |

Izvori su stvarno preuzeti preko GitHub konektora. SOURCE MASTER preuzet
je po blob SHA jer Contents odgovor nije sadržavao tekst. Potpuni tekstovi
korišteni su za ciljanu pretragu, a navedeni odjeljci pročitani su u kontekstu.
Ovo nije audit svake tvrdnje SOURCE baze. Binarni DOCX/PDF originali i ZIP
arhiva nisu nezavisno testirani.

## Nalaz TYR-01

`proposed_status` odnosi se na navigacijsku stavku; ne preoznačava cijeli
ROOT-LITE fajl, SOURCE kontejnere ili Tyrionovu priču.

```yaml
finding_id: TYR-01
task_id: TASK-005
status: TEST
evidence_status: VERIFIED
review_status: REVIEW_REQUIRED
exact_root_lite_quote: "— organski izvor Tyrionove alternative;"
exact_current_root_reference: "CURRENT_FULL_ROOT.md §22, linije 3300–3397; naročito §22.3, 3348–3370, §22.4, 3372–3381, i §22.5, 3383–3397."
comparison: >-
  ROOT-LITE linija 930 drži organski izvor Tyrionove alternative među
  aktivnim OPEN pitanjima. CURRENT §22.3 uvodi unaprijed odabranu Tywinovu
  rutu, §22.4 izričito superseda traženje alternative nakon iste barijere,
  a §22.5 ostavlja otvorene konkretne ceste, izvještaje i izvedbu.
interpretation: >-
  INFERRED: stavka je zaostali navigacijski ostatak starog mehanizma.
  Sama kratka rečenica ne imenuje barijeru; taj smisao potvrđuje njen
  historijski kontekst. Njome se ne može ponovo otvoriti supersedana
  kauzalnost niti zahtijevati izmjena CURRENT-a.
proposed_status: NEEDS_REVISION
risk: MEDIUM
keno_question: >-
  Odobravaš li zaseban dokumentacijski patch kojim se uklanja samo stavka
  "— organski izvor Tyrionove alternative;" iz ROOT-LITE OPEN liste,
  uz očuvanje OPEN detalja Tyrionove početne rute i zasebne Frey alternative
  ekspedicije, bez izmjene CURRENT-a, USTAVA ili SOURCE-a?
recommended_next_step: >-
  KENO pregled nalaza i odluka o prijedlogu. Tek nakon izričitog odobrenja
  pripremiti zaseban PR s minimalnom dokumentacijskom korekcijom ROOT-LITE
  stavke. Ovaj PR sadrži samo izvještaj i kontekst i ne mergeuje se ovim zadatkom.
keno_decision: PENDING
final_status: null
canon_decision: null
```

## Tačni citati i poređenje

### 1. Današnji ROOT-LITE

Linija 930 doslovno glasi:

> — organski izvor Tyrionove alternative;

Nalazi se pod „E. TRENUTNI VAŽNI OPEN / RADNO“ (884), uz uputu „Ne rješavati
ove tačke u ROOT-LITE.“ (886). Okolni tekst, 924–934:

```text
— kasniji način i trenutak Littlefinger reveal/payoffa;

— tačan organski izvor informacije o Frey alternativi;

— Tyrionova tačna početna ruta;

— organski izvor Tyrionove alternative;

— tačne ceste/raskrsnice;

— vremenski odnos dolazaka kod Freya;
```

Isti dokument u §13, linija 739, već kaže:

> — Littlefingerova blokada Rute 1 NIJE uzrok Tyrionove rute niti njegovog preusmjeravanja.

Linije 731–737 prenose lanac Political Echo → Tywinova procjena →
unaprijed odabran pravac → nezavisni zadatak → Frey područje.
Linija 747 već označava staru zajedničku blokadu kao SUPERSEDED.
Problem je lokalna nedosljednost navigacije uz već očuvan novi lanac.

### 2. CURRENT §22 — postojeća mjerodavna odluka

§22 ima datum 05.10.2026., autora KENO i „STATUS: IN. LOCK FUNKCIJE“
(3300–3307). Uvod CURRENT-a dokumentuje KENO odobrenje od 25.10.2026.

§22.3, linije 3352–3357:

```text
Tyrion zato NE treba:
— prvo krenuti pogrešnom rutom;
— naići na Route 1 barijeru;
— biti naknadno preusmjeren Littlefingerovom eskalacijom;
— dobiti drugi poseban route-finding beat;
— zavisiti od whispersa koji ga tek naknadno usmjeravaju.
```

§22.4, linije 3374–3381:

```text
SUPERSEDED su ranije formulacije po kojima:
— ista Route 1 / Littlefingerova blokada remeti Tyrionov planirani pravac;
— Littlefingerova eskalacija lokalnog spora nenamjerno preusmjerava Tyriona;
— Tyrion mora tek nakon te barijere tražiti praktičnu alternativu prema Freyu.

Ovaj supersede NE mijenja činjenicu da Littlefingerova eskalacija proizvodi stvarnu blokadu Rute 1 za Zagorovu ekspediciju.
Ne mijenja Jonov legitimni pokušaj otvaranja puta.
Ne mijenja samostalnu odluku ekspedicije da nakon toga procijeni alternativu prema Freyu.
```

§22.5, linije 3389–3397:

```text
— tačan opseg njegove praktične kontrole;
— konkretni redovni izvještaji i lokalni problemi koje prati;
— tačna karta / cesta / raskrsnice Tyrionove početne putanje;
— tačan razlog za izbor pojedinog konkretnog puta unutar zaključane funkcije izbjegavanja rastućih lokalnih problema;
— vremenski odnos Tyrionovog i ekspedicijskog dolaska kod Freya;
— tačna scenska izvedba Tywinove procjene;
— tačan dijalog, uključujući konačnu formulaciju naloga Tyrionu.

Ne koristiti OPEN prostor da se ponovo uvede Littlefinger kao uzrok Tyrionove rute.
```

Kontrola §6, linije 1399–1405:

```text
OPEN ostaju Tyrionove tačne ceste/raskrsnice/mostovi/naselja unutar
Tywinovog unaprijed odabranog operativno čišćeg pravca, konkretni
Tywinovi izvještaji i scenska izvedba, tačna geografija barijere ZA
ZAGOROVU EKSPEDICIJU, organski izvor informacije o Frey alternativi ZA
EKSPEDICIJU, vremenski odnos dolazaka kod Freya i Littlefingerov tačan
informacijski instrument prema Freyu. Ne stvarati jednu osobu ili
glasnika koji namjerno šalje obje strane prema Freyu.
```

CURRENT razdvaja alternativu ZA EKSPEDICIJU od Tyrionovih konkretnih cesta
unutar već odabranog pravca. Pod naslovom „HISTORIJSKI SUPERSEDED —
§6 OPEN ruta“ (3503), staro pitanje „izvor informacije o alternativi za
Tyriona“ (3507) sačuvano je isključivo kao historija.

### 3. SOURCE MASTER — porijeklo i zabilježena korekcija

Stari izvod „CURRENT ROOT-LITE“ počinje na 8419, s izvornim pointerom
`ROOT-LITE_v0.1_ACCEPT_FREEZE_CHICO_TYRION_PAYOFF_SYNC-1.md` (8421)
unutar dokumentarnog transporta. Njegov §13, 9148–9156, kaže:

```text
— Tyrion je već na vlastitom putu.

— Ista lokalna blokada nenamjerno remeti i njegov postojeći pravac.

— Littlefinger to nije planirao.

— Tyrion sam traži praktičnu alternativu.

— Alternativa ga može dovesti prema istom Frey području.
```

U istoj staroj OPEN listi, linija 9345, nalazi se doslovno ista rečenica
kao današnja ROOT-LITE linija 930. Direktno poređenje potvrđuje tekstualnu
jednakost tih linija; ne tvrdi se jednakost cijelih fajlova.

Patch „TYWIN / HARRENHAL / TYRIONOVA ČISTA RUTA“ postoji u MASTER-u na
21791–21886. Direktno poređenje s CURRENT-om 3302–3397 potvrđuje jednakost
svih 96 linija tog bloka. Vanjski Markdown naslov §22 na CURRENT liniji
3300 nije uključen u poređenje.

Arhivski ROOT-LITE v1.5 počinje na 69676 i izričito je označen „nije CURRENT“
na 69681. Njegova OPEN lista, 70626–70634, već precizira:

```text
— kasniji način i trenutak Littlefinger reveal/payoffa;

— tačan organski izvor informacije o Frey alternativi;

— tačne ceste/raskrsnice unutar Tywinom odabranog operativno čišćeg pravca;

— konkretni redovni izvještaji / terenski pokazatelji koje Tywin koristi pri izboru rute;

— vremenski odnos dolazaka kod Freya;
```

VERIFIED je sadržaj tih izvoda. INFERRED je da je današnja linija 930
zaostali trag stare formulacije. Precizan postupak kojim je ostala u fajlu
nije nezavisno utvrđen. Veći broj arhivske verzije sam po sebi ne daje
autoritet nad CURRENT-om.

### 4. Addendum — historijska konstrukcija

P omotač (1456–1473) izričito označava historijski zapis i isključuje
automatski prenos historijskog LOCK-a. Njegov interni §22 „BARIJERA →
FREY → TYRION“ nije današnji CURRENT §22. Linije 2310–2324:

```text
Tyrion je nezavisno na Dany/Lannister zadatku.

Ne prati Zagorovu ekspediciju.

ISTA barijera preusmjerava i njega prema istoj Frey geografiji.

Četiri odvojena uzroka:

UZROK PUTOVANJA = odluke/zadaci likova.

UZROK PROMJENE RUTE = barijera.

UZROK FREY INTERESA = Littlefingerova informacija.

UZROK TYRIONOVOG PRISUSTVA = Dany zadatak + ista barijera.
```

To potvrđuje stari barrier-detour mehanizam u izvornoj građi. CURRENT
§22.4 određuje njegov današnji tretman. Addendum ostaje ARCHIVE s vlastitim
historijskim oznakama; nije prepisan, obrisan ili promovisan u CANON.
Njegove pojedinačne TEST oznake i JUG PRIMARY/DUPLICATE odnos ostaju sačuvani.

## Tumačenje, rizik i granica prijedloga

- **VERIFIED:** ista sporna rečenica postoji u današnjem i starijem ROOT-LITE
  izvodu; CURRENT §22 superseda Tyrionov naknadni barrier-detour;
  današnji ROOT-LITE §13 već prenosi novi lanac.
- **DOCUMENTED:** TASK-004 sadrži KENO potvrdu DOCUMENTATION uloge
  ROOT-LITE-a, dva ARCHIVE SOURCE kontejnera i REVIEW_REQUIRED za NAV-01.
  USTAV §6 zadržava KENO kao konačnog autora odluke.
- **INFERRED:** minimalna dokumentacijska korekcija dovoljna je za ovaj
  nalaz. NEEDS_REVISION je prijedlog za stavku. SUPERSEDED je već postojeći
  CURRENT tretman starog mehanizma, ne nova odluka ovog izvještaja.
- **UNKNOWN:** cijeli historijski postupak nastanka mješavine starog
  OPEN pitanja i ažuriranog §13 nije rekonstruisan.

Rizik je MEDIUM jer aktivna OPEN stavka može buduće pisanje usmjeriti ka
napuštenom mehanizmu. CURRENT i ROOT-LITE §13 već ograničavaju to čitanje.
Nalaz sam po sebi ne zahtijeva novu kanonsku odluku ili CANON_REVIEW.
Ako KENO želi vratiti staru kauzalnost, to bi bio zaseban zahtjev izvan
ovog zadatka.

UNCHANGED bi ostavio navigacijsku nepreciznost. NEEDS_REVISION opisuje
buduću korekciju bez preoznačavanja cijelog ROOT-LITE-a kao SUPERSEDED.
Tačne ceste/raskrsnice, Tywinovi izvještaji, dijalog i vrijeme dolazaka
ostaju OPEN prema CURRENT-u.

## Predaja i naredni korak

Promjene su ograničene na ovaj novi izvještaj i
`CONTINUITY/ACTIVE_TASK_CONTEXT.md`, na grani
`feature/task-005-root-lite-tyrion-review`. TASK-004 izvještaj ostaje
neizmijenjen. Provjera Git stabla obuhvata tačno dvije dozvoljene putanje,
bez obrisanih fajlova ili izmjena CURRENT-a, USTAVA, ROOT-LITE-a i SOURCE-a.

KENO treba odgovoriti na `keno_question` iz TYR-01. Preporuka za budući
zaseban patch je uklanjanje samo stavke iz linije 930, uz očuvanje Frey
alternative ekspedicije (926) i OPEN detalja Tyrionove rute (928/932,
CURRENT §22.5). Ta korekcija ovdje nije izvršena.
PR se predaje na pregled i **ne mergeuje se** u ovom zadatku.
