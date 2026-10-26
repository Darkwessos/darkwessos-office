# DARKWESSOS — SOURCE PREDAJA ZA INVENTAR I PR

**Datum paketa:** 26.10.2026.  
**Svrha:** predaja stvarne SOURCE građe drugom saradniku radi dopune inventara i pripreme zasebnog PR-a. **Ne predstavlja novo kanonsko izdanje.**

## Otvori prvo

1. `00_PREDAJA/ZAHTJEV_ZA_SARADNIKA.md` — cilj i ograničenja.
2. `01_SOURCE_BAZA/00_START/PROCITAJ_PRVO.md` — mapa izvornog SOURCE paketa.
3. `01_SOURCE_BAZA/04_REGISTAR/SOURCE_REGISTER.csv` i `ORIGINALNE_PUTANJE_SVA_POJAVLJIVANJA.csv` — porijeklo svakog izvora i svako arhivsko pojavljivanje.
4. `00_PREDAJA/INVENTAR_PREDAJE.csv` / `INTEGRITET_PREDAJE.json` — provjera kopija u **ovom** paketu.
5. `02_AUTORITET_REFERENCA_SAMO_CITANJE/01_USTAV.md`, pa `02_CURRENT_FULL_ROOT.md` — isključivo za poređenje statusa, bez izmjene.

## Šta je stvarno uključeno

- **14 originalnih zasebnih SOURCE datoteka**, bez bajtnih izmjena, u podmapama `ORIGINALI`; izvorno S, A, P + 3 dopunska + 8 izvedenih/navigacijskih originalnih datoteka.
- **14 odvojenih tekstualnih izvoda** radi lakše pretrage. Izvodi ne zamjenjuju DOCX/ostale originalne formate.
- **12 drugih SOURCE dokumenata**: originalni `00_START` vodiči (3), registri (8) i originalni legacy izvještaj (1). Ukupno SOURCE direktorij sadrži **40 datoteka**.
- **8 glavnih MD fajlova**, razdvojenih na autoritativne reference i dokumentarne kompilacije.
- **2 netaknuta prethodna ZIP-a** s ranijim historijskim varijantama, uključujući ranije mastere i druge binarne priloge.
- **3 dodatna priloga** iz trenutne sesije, uključujući nove radne navigacijske upute.

Napomena: ovih 14 originala odnosi se na SOURCE registar, **ne** na ukupan broj svih historijskih datoteka u dublje ugniježđenim master arhivama. Registar `ORIGINALNE_PUTANJE_SVA_POJAVLJIVANJA.csv` i netaknuti ZIP-ovi pomažu njihovoj daljoj obradi.

## Kanon i zaštita

Autoritet: **USTAV SAGE → CURRENT FULL ROOT → ROOT-LITE samo navigacija → SOURCE kao porijeklo → HISTORY kao historija.** KENO je jedini konačni autoritet. S→A→P su historijski slojevi, a stari LOCK ne postaje aktuelni LOCK samim arhiviranjem.

Saradnik smije predložiti izmjene izvornog **inventara, putanja i metapodataka** kroz novi PR, ali ne smije bez odobrenja mijenjati USTAV, CURRENT FULL ROOT, postojeći kanon, rukopis ili izvorne binarne datoteke. Puni sadržaj svakog originala i historijska verzija moraju se čuvati pojedinačno, a izvedeni pregledi posebno označiti.

Paket je sačinjen isključivo iz trenutno priloženih datoteka. **Nije provjeren direktni sadržaj udaljenog Projekta, GitHuba ili svih ranijih razgovora.** Ovdje nije kreiran PR.

## Kontrola integriteta

`INTEGRITET_PREDAJE.json` sadrži SHA-256 svih priloženih datoteka iz ovog paketa (ne uključuje sam manifest) i sažetak 14/14 SOURCE SHA provjera. Ne mijenjaj ih; sve nove klasifikacije čuvaj odvojeno.
