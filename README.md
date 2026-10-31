> **Android nastavak:** vidi [ANDROID-REPORT.md](ANDROID-REPORT.md). APK još nije izgrađen; native/browser prihvat nije potvrđen. Za nove Capacitor zavisnosti prvo `npm install` (originalni lock je `package-lock.baseline.json`).

# DARKWESSOS Office — MVP 0.2

Prvi sprint: Pisac (BlockNote), lokalna Dexie baza, tri špila, vizuelni prompt,
postojeća ilustracija Atlasa i potpuni JSON izvoz/uvoz. Nema AI servisa, cloud
sinhronizacije, Kompasa ni TEXINE automatizacije u ovoj verziji.

## Pokretanje

Potreban je Node.js 24 i npm. U ovom folderu:

```bash
npm ci
npm run dev
```

Otvorite adresu koju ispiše Vite. Koristite istu adresu i isti preglednik kako
biste pristupali istim lokalnim podacima. Ovo nije APK.

Za pripremljeni produkcijski build u `dist/` može se koristiti lokalni HTTP
server (`python3 -m http.server 4173 --directory dist`). Ne otvarajte `index.html`
preko file://. PWA instalacija/offline zahtijeva localhost ili HTTPS i dovršen
prvi cache. Promjena hosta ili porta daje zasebnu lokalnu bazu.

## Tok prvog sprinta

1. Otvori Pisac, napravi prizor i upiši tekst; pričekaj „Sačuvano lokalno”.
2. Radionica: odaberi likove i situaciju, opciono mjesto.
3. Sastavi vizuelni prompt i sačuvaj prijedlog.
4. Zatvori i ponovo otvori istu adresu. Provjeri zapis, odabire, prompt i prijedlog.
5. Više: Izvezi kopiju. Uvoz traži potvrdu i ZAMJENJUJE cijelo lokalno stanje
   kopijom, uključujući scene, revizije, bilješke, izvore, kartice, prijedloge
   i aktivni kontekst. Sačuvaj aktuelnu kopiju prije uvoza.
6. Uvezi i provjeri istovjetnost sadržaja i konteksta.

Atlas koristi dostavljenu ilustraciju `darkwessos-atlas-v0.1.webp`. Početni
markeri i sažeti profili kartica su DEMO / VISUAL ONLY, ne kanonska geografija.

## Spremanje i kopija

Svaki BlockNote događaj šalje snimak dokumenta u red upisa bez debounce timera.
Promjena prostora i izvoz čekaju završetak upisa. Greška blokira dalje upise
kako kasniji upis ne bi sakrio problem; „Ponovi spremanje” ponavlja ih redom.
Indikator potvrđuje završenu transakciju, ne obećava zaštitu od brisanja podataka
preglednika, kvara uređaja ili naglog prekida procesa usred nezavršenog upisa.

Revizija čuva prethodni sadržaj prije prvog uređivanja scene u sesiji i zatim
najviše jednom u deset minuta uređivanja. Izvorni BlockNote JSON se čuva u kopiji;
Markdown izvoz je dodatna čitljiva kopija. Stare kopije formata v1 mogu se uvesti;
ranija scena/quick-note iz lokalnog Officea migrira se pri prvom otvaranju.

## Provjere

```bash
npm test
npm run build
```

Nova provjera pohrane koristi fake-indexeddb: dokazuje logiku, ne ponašanje
pravog preglednika. Devet izvornih testova pilota ostaje u `tests/legacy` s
izolovanim izvornim engine/seed fajlovima. Ti fajlovi nisu dio runtime aplikacije.
Nodeov test runner dodatno broji nadređeni test kao jednu stavku.

Build i testovi su izvršeni: 10 novih pojedinačnih provjera pohrane/teksta i 9 izvornih domenskih testova prolaze. Nadređeni test dodatno se broji u Node izvještaju. Browser/Android tok, mobilni render, stvarno gašenje
preglednika i offline ponovno otvaranje NISU potvrđeni. Zbog blokiranog browser
pristupa sprint ostaje PENDING_BROWSER_ACCEPTANCE. Ne uvoditi novu glavnu
funkcionalnost dok prethodni tok ne prođe u stvarnom pregledniku.

Izvor: dostavljeni Office v0.1 i Atlas/Karte materijali. USTAV, ROOT, instalirani
pluginovi i repozitoriji nisu mijenjani.
