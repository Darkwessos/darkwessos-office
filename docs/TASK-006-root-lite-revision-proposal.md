# TASK-006 — ROOT-LITE dokumentacijska korekcija

## Status

- task_id: TASK-006
- status: TEST
- updated_at: 2026-10-26
- canon_status: null
- keno_decision: APPROVE
- decision_date: "2026-10-26"
- decision_author: KENO

KENO je 2026-10-26 porukom „Approve“ odobrio tačan predloženi dokumentacijski
tekst iz ovog izvještaja. Odluka se odnosi na dokumentacijsku korekciju,
bez nove kanonske odluke. Primjena ide kroz zaseban TASK-007;
ROOT-LITE nije izmijenjen u TASK-006. PR #10 se ovim korakom ne mergeuje.

## Predmet korekcije

- fajl: ROOT_LITE.md
- linija: 930
- tema: Tyrionova alternativa
- nalaz iz TASK-005: NEEDS_REVISION
- rizik: MEDIUM

Izvori za ovaj predlog su ROOT-LITE linija 930 i kontekst, cijeli CURRENT
§22, [TASK-005 izvještaj](TASK-005-root-lite-tyrion-review.md), posebno TYR-01,
i [aktivni kontekst](../CONTINUITY/ACTIVE_TASK_CONTEXT.md).
Snapshot izvora: `5521d6353e3b850c796eedeb41826f07f6f321d8`. Linije se odnose na taj snapshot.

## Trenutni tekst

- exact_current_text:

```text
— organski izvor Tyrionove alternative;
```

Okolni kontekst, ROOT_LITE.md linije 924–934, doslovno:

```text
— kasniji način i trenutak Littlefinger reveal/payoffa;

— tačan organski izvor informacije o Frey alternativi;

— Tyrionova tačna početna ruta;

— organski izvor Tyrionove alternative;

— tačne ceste/raskrsnice;

— vremenski odnos dolazaka kod Freya;
```

Stavka je u odjeljku „E. TRENUTNI VAŽNI OPEN / RADNO“ (884), uz uputu
„Ne rješavati ove tačke u ROOT-LITE.“ (886). ROOT-LITE §13, linije 731–747,
već opisuje Tywinov nezavisan izbor rute i staru zajedničku blokadu
označava SUPERSEDED. Ovo je korekcija lokalne navigacijske nepreciznosti.

## Referenca na CURRENT FULL ROOT

- current_root_section: §22
- exact_current_root_reference: CURRENT_FULL_ROOT.md §22.3, linije 3350–3361;
  §22.4, linije 3374–3381; §22.5, linije 3390–3397.

§22.3, linije 3350–3361, doslovno:

```text
Nakon što Political Echo Vijeća I aktivira/pojača Tywinov Dany/Lannister interes, Tywin upućuje Tyriona na praktično odabran pravac koji unaprijed zaobilazi rastuće lokalne napetosti i potencijalno problematične koridore.

Tyrion zato NE treba:
— prvo krenuti pogrešnom rutom;
— naići na Route 1 barijeru;
— biti naknadno preusmjeren Littlefingerovom eskalacijom;
— dobiti drugi poseban route-finding beat;
— zavisiti od whispersa koji ga tek naknadno usmjeravaju.

Tywinov odabrani pravac prirodno vodi Tyriona prema Frey području kao logičnoj tranzitnoj / operativnoj tački na njegovom nezavisnom Dany/Lannister putovanju.

Tyrionova početna putanja zato ostaje potpuno nezavisna od Zagorove ekspedicije i od Littlefingerove Route 1 taktike.
```

§22.4, linije 3374–3381, doslovno:

```text
SUPERSEDED su ranije formulacije po kojima:
— ista Route 1 / Littlefingerova blokada remeti Tyrionov planirani pravac;
— Littlefingerova eskalacija lokalnog spora nenamjerno preusmjerava Tyriona;
— Tyrion mora tek nakon te barijere tražiti praktičnu alternativu prema Freyu.

Ovaj supersede NE mijenja činjenicu da Littlefingerova eskalacija proizvodi stvarnu blokadu Rute 1 za Zagorovu ekspediciju.
Ne mijenja Jonov legitimni pokušaj otvaranja puta.
Ne mijenja samostalnu odluku ekspedicije da nakon toga procijeni alternativu prema Freyu.
```

§22.5, linije 3390–3397, doslovno:

```text
— konkretni redovni izvještaji i lokalni problemi koje prati;
— tačna karta / cesta / raskrsnice Tyrionove početne putanje;
— tačan razlog za izbor pojedinog konkretnog puta unutar zaključane funkcije izbjegavanja rastućih lokalnih problema;
— vremenski odnos Tyrionovog i ekspedicijskog dolaska kod Freya;
— tačna scenska izvedba Tywinove procjene;
— tačan dijalog, uključujući konačnu formulaciju naloga Tyrionu.

Ne koristiti OPEN prostor da se ponovo uvede Littlefinger kao uzrok Tyrionove rute.
```

## Analiza

- why_outdated: Izraz „organski izvor Tyrionove alternative“ ostavlja
  među aktivnim OPEN pitanjima trag stare konstrukcije u kojoj ista
  barijera naknadno preusmjerava Tyriona. CURRENT §22.3 unaprijed određuje
  Tywinov izbor pravca, §22.4 izričito superseda stari mehanizam, a §22.5
  ostavlja otvorene samo njegovu konkretnu izvedbu i navedene detalje.
  Sama kratka rečenica ne spominje barijeru; tumačenje njenog porijekla
  oslanja se na dokumentovano poređenje u TASK-005, ne na novu kanonsku odluku.
- what_must_change: U zasebnom budućem zahvatu, samo uz KENO odobrenje,
  zamijeniti ovu jednu navigacijsku stavku preciznim razlikovanjem OPEN
  izvještaja/scenske izvedbe i već supersedanog starog mehanizma.
  Eksplicitna referenca na CURRENT §22 vodi čitaoca do važećeg autoriteta.
- what_must_not_change: Ne mijenjati Tywinov unaprijed odabrani pravac,
  nezavisni Dany/Lannister zadatak, Route 1 lanac ekspedicije, Frey alternativu
  ekspedicije ili legitimne OPEN detalje Tyrionovih cesta, izvještaja,
  dijaloga i vremena dolazaka. Ne određivati konkretne izvještaje, ceste,
  geografske tačke, scenu ili dijalog. Ne mijenjati dokumente izvora ili
  njihove statuse; stvarna ROOT-LITE korekcija nije dio TASK-006.

## Predloženi tekst

- proposed_text:

```text
— konkretni Tywinovi izvještaji i scenska izvedba unaprijed odabranog Tyrionovog pravca; stari mehanizam preusmjeravanja Tyriona istom Route 1 / Littlefingerovom blokadom je SUPERSEDED (CURRENT_FULL_ROOT.md §22);
```

Ovo je jedna predložena zamjenska linija, bez dodavanja novih stavki.
Prvi dio ostaje OPEN/RADNO prema §22.5; drugi prenosi već važeći
SUPERSEDED iz §22.4. Ne stvara novo OPEN pitanje o tome da li je stari
mehanizam važeći. Predložena referenca na CURRENT §22 je dio iste linije.

TASK-005 je preporučio uklanjanje stare stavke. TASK-006 sada razrađuje
zamjenski tekst prema zahtjevu za preciznom novom formulacijom: čuva korisnu
OPEN navigaciju i izričito upućuje na postojeće ograničenje. Taj izbor je
urednički predlog koji je KENO odobrio 2026-10-26.

## Obrazloženje

- reason: Izvještaji i scenska izvedba ostaju OPEN u §22.5, dok je Tywinov
  unaprijed odabrani pravac zaključana funkcija §22.3. SUPERSEDED se
  odnosi isključivo na stari mehanizam Tyrionovog preusmjeravanja istom
  Route 1 / Littlefingerovom blokadom, već naveden u §22.4.
- impact: Čitalac dobija jasan pointer prema važećem CURRENT-u i više ne
  dobija navigacijski podsticaj da traži novi izvor naknadne Tyrionove
  alternative. Kontinuitet ostaje isti; ne dodaju se nova ruta, događaj,
  informator ili uzrok. Frey alternativa ekspedicije ostaje odvojena.
- risk: MEDIUM
- canon_decision: null

## KENO pitanje

- Da li odobravaš predloženu dokumentacijsku korekciju ROOT_LITE.md linije 930?
- Odgovor KENO: „Approve“ — APPROVE, 2026-10-26.
- Obuhvat: tačan proposed_text iz ovog izvještaja; bez izmjene kanona.
- canon_decision: null

## Preporučena odluka

- recommended_decision: APPROVE
- reason_for_recommendation: Predložena linija sažima postojeći §22,
  jasno razlikuje OPEN detalje od SUPERSEDED mehanizma i sadrži
  eksplicitnu referencu na važeći ROOT, bez nove kanonske odluke.
  Odobrenje treba da se odnosi samo na ovaj dokumentacijski tekst;
  eventualna primjena ide u zaseban TASK-007. KENO je prihvatio predlog;
  keno_decision je APPROVE. Stvarna izmjena nije izvršena ovim commitom.

## Granice

- CURRENT_FULL_ROOT.md: NE MIJENJATI
- USTAV.md: NE MIJENJATI
- SOURCE/04_SOURCE_MASTER.md: NE MIJENJATI
- SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md: NE MIJENJATI
- SOURCE/izvori.md: NE MIJENJATI
- ROOT_LITE.md: NE MIJENJATI U OVOM ZADATKU
- Nema brisanja fajlova
- Nema novih kanonskih odluka

TASK-006 dodaje samo ovaj predlog i zamjenjuje sadržaj aktivnog konteksta
tačno zadanim tekstom. PR se otvara prema main na grani
`feature/task-006-root-lite-revision-proposal` i ne mergeuje se.
