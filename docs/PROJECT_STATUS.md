# DARKWESSOS Office — zajednički status projekta

> **Stanje provjereno:** 02.11.2026. · **Izvor:** [GitHub repozitorij](https://github.com/Darkwessos/darkwessos-office) · **Baseline `main`:** [`9e707b05`](https://github.com/Darkwessos/darkwessos-office/commit/9e707b05f4185b28335725d8269b1e41cdf4e64a).
>
> Ovaj dokument je **datirani pregled**, ne automatski ažurna baza i **nije** kanonski autoritet za književnu građu. Ažurirati ga nakon stvarnih promjena. Za svaku tvrdnju provjeriti odgovarajući commit, PR i testove.

## Oznake za isporuku softvera

- **IMPLEMENTED:** kod je spojen u `main`; navesti dokaz i preostale ograničavajuće testove.
- **TESTING:** implementacija postoji na razvojnoj grani ili u PR-u, ali nije prihvaćena kao isporučena.
- **EXPERIMENT:** izdvojeni prototip ili ispitivanje pristupa; nije funkcija trenutnog Officea.
- **PROPOSAL:** ideja, koncept, arhitekturni prijedlog ili dizajnerski smjer bez potvrđene implementacije.
- **BLOCKED:** konkretna zavisnost sprečava napredak; navesti šta tačno nedostaje. Ne koristiti za običan OPEN u priči.

Ovo nisu statusi kanona. `TEST`, `RADNO`, `OPEN` i `LOCK` u sagi ostaju odvojeni. **Spremiti ideju ≠ prihvatiti radni prijedlog ≠ kanonski zaključati.** ROOT je živa građa; samo KENO odlučuje o kanonu.

## IMPLEMENTED — potvrđeno u `main`

| Dio | Dokaz | Granica potvrde |
|---|---|---|
| React/TypeScript/Vite + Capacitor Android MVP 0.2 | [PR #15](https://github.com/Darkwessos/darkwessos-office/pull/15), [`src/App.tsx`](../src/App.tsx), [Android izvještaj](../ANDROID-REPORT.md) | APK izgrađen u CI; provjera na fizičkom telefonu ostaje otvorena |
| PISAC: BlockNote, lokalne scene, bilješke i revizije | [`src/Story.tsx`](../src/Story.tsx), [`src/db.ts`](../src/db.ts), [`src/persistence.ts`](../src/persistence.ts) | Ne znači da je svaki Android lifecycle scenario potvrđen |
| RADIONICA: tri skupa kartica, izbor konteksta i vizuelni prijedlog | [`src/Workshop.tsx`](../src/Workshop.tsx), [`src/cards.ts`](../src/cards.ts) | Ne generiše AI situacije |
| ATLAS: ilustrirana mapa i demonstracijski markeri | [`src/Atlas.tsx`](../src/Atlas.tsx), [`public/atlas.webp`](../public/atlas.webp) | Markeri su DEMO/VISUAL ONLY, ne provjerena geografija ni puna živa mapa |
| Sigurnosni JSON izvoz/uvoz, provjera kontrolne sume, Markdown izvoz | [`src/backup.ts`](../src/backup.ts), [`src/backupData.ts`](../src/backupData.ts), [`src/native.ts`](../src/native.ts), [testovi](../tests/storage.test.ts) | Restore zamjenjuje lokalni skup podataka; potrebno provjeriti stvarni vanjski backup i povrat na uređaju |
| CI Android debug APK | [uspješan build](https://github.com/Darkwessos/darkwessos-office/actions/runs/41243985855), [`ANDROID-REPORT.md`](../ANDROID-REPORT.md) | CI nije isto što i fizički Android acceptance |

## TESTING — otvoreni PR-ovi; nisu isporučeni u `main`

| PR | Šta predlaže | Poznato / još treba |
|---|---|---|
| [#16 CRVENI BROD](https://github.com/Darkwessos/darkwessos-office/pull/16) | Početni autorski cockpit i povratak posljednjoj sceni | DRAFT/OPEN; [CI uspješan](https://github.com/Darkwessos/darkwessos-office/actions/runs/41421629104). Pregled, integracija i test na telefonu nisu završeni |
| [#17 ŽIVA MAPA pilot](https://github.com/Darkwessos/darkwessos-office/pull/17) | Atlas → Pisac i NON_CANON radni položaj | DRAFT/OPEN; [CI uspješan](https://github.com/Darkwessos/darkwessos-office/actions/runs/41442553814). Nije puna Leaflet karta; potreban pregled i Android test |
| [#14 Office v0.1](https://github.com/Darkwessos/darkwessos-office/pull/14) | Raniji UI/Office pristup | DRAFT/OPEN; porediti s novijim MVP 0.2 prije bilo kakvog mergea |
| [#13 MCP follow-up](https://github.com/Darkwessos/darkwessos-office/pull/13) | Reproducibilni CI i live-tunnel prihvat | DRAFT/OPEN; ne podrazumijeva da je MCP uživo dostupan svuda |

## PROPOSAL / EXPERIMENT — nije u trenutnom APK-u

- **PROPOSAL:** DARKWESSOS AI Gateway, konfigurabilni provajderi, Qwen/Ollama generator novih situacija; AI prijedlog se sprema kao radni `TEST` u postojeći `db.cards`, tek nakon KENO potvrde. Nema nove `situations` baze u planu pilota.
- **PROPOSAL:** PIJANI KOMPAS kao nenametljiv pogled na napetosti, mjesta, otvorena pitanja i tragove; bez automatskog rangiranja vrijednosti ili odabira sudbine ideje.
- **PROPOSAL:** FigCraft prostorne kartice, Vijeće stručnih saradnika i višestruki AI prozorčići; bez zamjene React Officea drugim UI-jem.
- **PROPOSAL:** Living Nord Vivid — življi dizajnerski akcenti, bez automatske zamjene postojećih tokena.
- **EXPERIMENT:** odvojeni Grok/KATA Atlas–Karte i kreativni paketi; prototipski kod i materijali nisu automatski spojeni u ovaj repozitorij.
- **EXPERIMENT:** PocketStrike kao istraživačka referenca za više AI provajdera, MCP i lokalni Android GGUF. Nije dio Office APK-a.

## Otvorene provjere i odgovornost

- **Fizički Android test**: PISAC upis → force-stop → identičan povrat; export → promjena → import → identičan povrat; Back bez gubitka teksta; test PR #16 i #17 ponašanja nakon integracije. **Odgovoran za konačni prihvat: KENO**; izvršilac testova još nije imenovan.
- **Pregled PR #16/#17**: provjeriti međusobnu kompatibilnost, pravi diff, puni build i ručni UI prije mergea. **Reviewer: nije dodijeljen.**
- **AI pilot**: dokazati mrežni / native adapter, JSON validaciju, ručno kreiranje, prihvatanje/odbijanje i lokalni restore bez promjene kanona. **Izvršilac: nije dodijeljen.**

Nijedna od ovih otvorenih provjera sama po sebi ne znači da pisanje u Officeu treba stati. One su uslovi za tvrdnju da je odgovarajuća *nova funkcija* završena.

## Jednostavan zajednički tok

1. **Razgovor i ideja:** slobodni; po potrebi GitHub Discussion ili Issue. Nema obaveznog formulara za svaku kreativnu iskru.
2. **Dogovorena izmjena:** Issue s kratkim ciljem i kriterijem provjere; kod ide u zasebnu granu i PR. Ne pisati direktno u `main`.
3. **PR:** jasno navesti **šta mijenja**, **šta ne mijenja**, **kako je testirano**, **šta nije testirano**, te eventualni povezani Issue.
4. **Arhitektonska odluka:** kratka bilješka u `docs/decisions/` samo kada je odluka stvarno potrebna; ne stvarati dokument zbog obične ideje.
5. **Isporuka:** tek nakon mergea u `main` i navedenih provjera osvježiti ovaj status. CI uspjeh nije zamjena za test na fizičkom uređaju.

**Granica ovlaštenja:** GitHub je istina o *kodu i promjenama*, ne automatska istina o književnom svijetu. KATA i saradnici predlažu; KENO je konačni autor. `USTAV.md`, `CURRENT_FULL_ROOT.md`, `SOURCE/` i rukopis ne mijenjaju se samo zbog statusne ili dizajnerske dokumentacije.
