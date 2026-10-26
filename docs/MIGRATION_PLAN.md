# MIGRATION PLAN — DARKWESSOS v0.2.0

Datum: 2026-10-26. Status: TEST. Aktivni zadatak: TASK-002.

## Granice i trenutno stanje

Ovaj PR izvršava samo fazu 1 za dostupnu građu: inventar 15 fajlova osnovne
strukture v0.1.0, ovaj plan, prazne migracijske foldere i zadani radni kontekst.
Stara građa izvan te strukture još nije dostavljena; inventar nije potvrda da
su pregledani vanjski arhivi ili sve ranije verzije projekta.

`USTAV.md` i `CURRENT_FULL_ROOT.md` ostaju neizmijenjeni. Nema novih kanonskih
odluka, kopiranja stare građe, premještanja, spajanja verzija, brisanja ili
dodavanja biblioteka. Svaki stari fajl i svaka verzija ostaju zaseban izvor.
KENO je jedini autoritet za kanon; neslaganja se dokumentuju.

## FAZA 1: Inventar

- Pregledati dostupne fajlove i za svaki zabilježiti putanju, vrstu, predloženo
  odredište, postojeći status, rizik i napomene u `docs/MIGRATION_INVENTORY.md`.
- Zabilježiti izvorni commit kako bi pregledana verzija ostala provjerljiva.
  Prethodni TASK-001 kontekst čuva se u Git historiji, a aktivni kontekst se
  ažurira tačno prema ovom zadatku.
- Za nedostavljenu građu navesti ograničenje opsega, bez izmišljanja naziva,
  sadržaja, izvora ili kanonskog statusa. Po dostavi dodati zasebne redove za
  pojedinačne fajlove i verzije.
- Kreirati sedam direktorija u `MIGRATION/`. Prazne direktorije Git bilježi
  pomoću `.gitkeep` markera, koji nemaju sadržaj ni kanonski status.
- Rezultat ove faze predati kroz Pull Request na
  `feature/v0.2.0-migration-inventory`, bez mergea.

## FAZA 2: Klasifikacija

- Za svaki dostavljeni izvor provjeriti porijeklo, datum/verziju i izričite
  oznake statusa. Bez potvrde status ostaje UNKNOWN.
- Razlikovati CANON, TEST, IDEA i PROPOSAL. Oznaka CANON zahtijeva provjerljiv
  izvor i izričitu KENO odluku; naziv fajla ili foldera nije dokaz.
- Pripremiti prijedloge odredišta po tabeli ispod. Sve nepotvrđene procjene
  jasno označiti; ne spajati različite verzije ni sadržaj iz različitih izvora.

| Folder | Namjena u kasnijim fazama |
| --- | --- |
| `MIGRATION/INBOX/` | Odvojene kopije pristigle građe koja još čeka klasifikaciju. |
| `MIGRATION/CANON_CANDIDATES/` | Materijali predloženi za KENO pregled; sama lokacija ne daje status CANON. |
| `MIGRATION/RESEARCH/` | Istraživanja i bilješke koje ne uspostavljaju kanonske činjenice. |
| `MIGRATION/STORY_DRAFTS/` | Rukopisi, scene i njihove zasebne verzije. |
| `MIGRATION/WORKSHOP/` | Zasebni radionički materijali, ideje, testovi i prijedlozi. |
| `MIGRATION/SOURCE/` | Izvorni dokumenti i podaci o porijeklu; prepis ili tumačenje ostaju odvojeni od izvora. |
| `MIGRATION/ARCHIVE/` | Verzije koje KENO označi kao zastarjele ili za arhivu; čuvaju se bez brisanja. |

## FAZA 3: Kopiranje u nove foldere

- Izvršavati tek kao zasebnu kasniju fazu, nakon inventara i klasifikacije.
  Kopirati prema pregledanom prijedlogu; izvorne fajlove zadržati na starim
  lokacijama i bez izmjene sadržaja.
- Prije kopiranja evidentirati jedinstveni identitet izvora, originalni naziv,
  punu putanju, verziju/commit i SHA-256 sadržaja. Povezati svaki odredišni fajl
  sa svojim redom inventara i provjeriti podudarnost sadržaja nakon kopiranja.
- Za iste nazive ili različite verzije koristiti zasebne poddirektorije po
  izvoru i verziji; ne prepisivati postojeće fajlove niti automatski uklanjati
  duplikate. I identične kopije s različitim porijeklom ostaju zasebni izvori.
- Bilježiti stvarno odredište i rezultat provjere, bez izmjene kanonskih dokumenata.

## FAZA 4: Pregled konflikata

- Porediti zasebne izvore i navesti konkretna mjesta neslaganja, verzije,
  statuse i rizike u `CONTINUITY/DISAGREEMENT_LOG.md`, uz reference na inventar.
- Razlikovati razlike među verzijama, hipoteze i potvrđene odluke.
  Ne birati automatski noviju verziju niti pretvarati hipotezu u kanon.
- Pripremiti pitanja i mogućnosti za KENO, uz očuvanje svih izvornih fajlova.

## FAZA 5: KENO odluka

- KENO odlučuje koji materijali ili dijelovi mogu biti CANON, koje verzije su
  zastarjele i šta ostaje istraživanje, IDEA, TEST ili PROPOSAL.
- Evidentirati odluku, datum, izvor/verziju i tačan obuhvat. Neriješene stavke
  ostaju otvorene; smještanje u CANON_CANDIDATES nije odobrenje.
- Sačuvati odbačene i ranije verzije kao zasebne izvore, bez brisanja.

## FAZA 6: Ažuriranje CURRENT_FULL_ROOT.md

- Ova faza nije dio TASK-002 niti ovog PR-a. Sadašnji prazan šablon ostaje
  netaknut; ovaj plan sam po sebi ne odobrava njegovo kasnije popunjavanje.
- Tek nakon izričite KENO odluke u posebnom zadatku pripremiti izmjenu
  kanonskog pregleda, s referencama na odobrene izvore i odluke.
- Uključiti samo odobren sadržaj; provjeriti otvorene konflikte i historiju
  porijekla te predati zaseban PR na pregled.

## Provjera faze 1

- Inventar pokriva svih 15 fajlova na zabilježenom izvornom commitu.
- Svaki red ima sve tražene kolone i dopuštene oznake statusa i rizika.
- Dodani su samo migracijski dokumenti i sedam praznih markera; jedini
  izmijenjeni postojeći fajl je `CONTINUITY/ACTIVE_TASK_CONTEXT.md`.
- `USTAV.md`, `CURRENT_FULL_ROOT.md` i svi drugi postojeći fajlovi imaju
  neizmijenjen sadržaj; nema obrisanih ni preimenovanih fajlova.
