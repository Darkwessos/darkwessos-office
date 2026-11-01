# DARKWESSOS Office MVP 0.2 — Android build izvještaj

Build commit: `4f5cc6768d03d500d8215a7efeb63c24c1ebd12f`.
Razvojna grana: `build/android-mvp-0.2`.
Draft PR: https://github.com/Darkwessos/darkwessos-office/pull/15
Build: https://github.com/Darkwessos/darkwessos-office/actions/runs/41243985855

## Potvrđeno u GitHub Actionsu

- `npm ci` sa stvarnim zaključanim zavisnostima: PASS.
- TypeScript typecheck: PASS.
- 27 pojedinačnih testova: PASS (12 pohrana/backup + 9 izvornih domenskih + 6 izvoz/red upisa; Node dodatno broji jednu roditeljsku test grupu).
- Produkcijski native web build: PASS.
- `cap add android` i `cap sync android`: PASS.
- Gradle / APK: PASS. Cijeli Actions run završen je statusom success.

Lokalno okruženje i dalje nema mrežni npm pristup ni SDK. Navedeni prolazi izvršeni su na GitHub runneru, ne na Android telefonu.

APK: `app-debug.apk`, 6.624.277 bajtova (oko 6,6 MB), Android 6.0+ (minSdk 23), targetSdk 35.

SHA-256: `339a1a2c3a3525a18a314561e1aef922de9269cbf01a9a87bc7e5e89156b794d`.

Potpis provjeren Android `apksigner` alatom (v1 i v2); certifikat odgovara sačuvanom debug ključu. SHA-256 certifikata: `15a51c71550c90aae1b217532a5d2da90f634f1dbf4380dc9487afa6e5b5c877`.

Stvarni APK artefakt: https://github.com/Darkwessos/darkwessos-office/actions/runs/41243985855/artifacts/13059265165

Stvarni izvorni artefakt: https://github.com/Darkwessos/darkwessos-office/actions/runs/41243985855/artifacts/13059280102

Dodatno provjeren preuzeti APK: identitet `ba.darkwessos.office`, allowBackup=false, MainActivity adjustResize, isti Atlas asset, očekivani MVP 0.2 bundle marker, sva tri native plugina, bez udaljenog server.url i bez SW registracijskih asseta. To je provjera sadržaja APK-a, ne izvršavanje na uređaju.

## Očuvanje

Dostavljeni MVP 0.2 je osnova. Nema SQLite migracije. Isti Dexie DB `darkwessos-office`, tabele, BlockNote JSON, identiteti, revizije, kartice i backup v2; podržana postojeća v1 migracija. Lokalni Atlas ostaje ugrađen asset. `src/db.ts`, `cards.ts`, `Atlas.tsx`, `Workshop.tsx` i public asseti su neizmijenjeni u odnosu na dostavljeni ZIP (hash dokazi u `evidence`).

U poređenju grane s početnim `main` commitom, svih 31 zaštićenih datoteka USTAV/ROOT/ROOT-LITE/SOURCE/STORY/CONTINUITY/WORKSHOP/MCP ima identičan Git blob SHA. Kanon, main i postojeći deployment nisu mijenjani. PR nije spojen.

## Native prilagodbe

- Capacitor 7.0.0 core/android/cli + App/Filesystem/Share, zaključani u `package-lock.json`.
- `capacitor.config.json`: lokalni `dist`, bez `server.url`, origin `https://localhost`, appId `ba.darkwessos.office`. Dostavljeni ZIP nije imao prethodni Android identitet ili ključ.
- JSON konfiguracija izbjegava dokazanu nekompatibilnost Capacitor 7 loadera s TypeScript 7 compiler API-jem. Temelj React/TypeScript/Vite/BlockNote/Dexie nije zamijenjen.
- Eksplicitni `App.tsx` ulaz i build marker provjeravaju da u APK ne uđe raniji App.jsx iz repozitorija. Ranije verzije ostaju u Git historiji.
- Native build isključuje PWA registraciju/SW. Startup uklanja samo SW i Workbox cache; ne briše IndexedDB.
- Izvoz čeka upise, pravi UTF-8 cache datoteku i predaje je Android Share dijalogu. Dijalog nije dokaz vanjske kopije. Otkazivanje i greška nekad se ne mogu pouzdano razlikovati; poruka ne tvrdi da je vanjska kopija sačuvana.
- Uvoz koristi postojeći file input: SHA-256 i model se provjeravaju prije potvrde, zamjena svih sedam tabela ostaje jedna Dexie transakcija. Otkazivanje ne zamjenjuje podatke. Dodatni picker nije instaliran bez dokaza da treba.
- Lifecycle pokušava završiti red upisa. Back zatvara fokus pisanja, vraća Pisca ili traži potvrdu izlaza nakon flush. Safe-area/scroll i `adjustResize` su pripremljeni.
- `flush()` čeka i upise dodane dok već čeka. Naslov i bilješka hvataju vrijednost prije odgođenog upisa.

## Potpis i nadogradnja

Debug ključ se čuva odvojeno u privatnom Actions artefaktu `darkwessos-debug-key` (90 dana), ne u izvoru ili frontendu. Sljedeći build ga ponovo koristi; postoji i opcija secreta `DARKWESSOS_DEBUG_KEYSTORE_BASE64`. Ako APK postoji, a ključ više nije dostupan, workflow zaustavlja novu gradnju umjesto tihe promjene potpisa. Za dugoročno očuvanje vlasnik mora sačuvati ključ prije isteka artefakta. Ključ nije produkcijski release ključ.

Za ažuriranje koristiti isti appId i isti ključ. Ne deinstalirati postojeću aplikaciju radi konflikta potpisa bez provjerenog JSON izvoza. Web/PWA i APK imaju različitu pohranu: podatke prenijeti JSON kopijom, ne očekivati automatsku migraciju.

## Pokretanje / ponovna gradnja

Node 24, JDK 21, Android SDK platform 35 i build-tools 35.0.0. Android Studio nije potreban:

```sh
npm ci
npm run typecheck
npm test
npm run android:debug
```

Izlaz: `android/app/build/outputs/apk/debug/app-debug.apk`. GitHub workflow čuva APK i izvor s generisanim Android projektom. Trenutni source paket uključuje stvarni dependency lock.

## Nije testirano — Android prihvat je PENDING

Nema uređaja/emulatora: native file chooser/Share, otkazivanje, tastatura, vizuelni raspored, pozadina, restart, offline ponovno otvaranje, naglo gašenje i stvarni backup/restore na uređaju nisu potvrđeni. Fake-indexeddb testovi nisu dokaz Android trajnosti. Lifecycle nije garancija za nezavršen upis. Vidi `ANDROID-ACCEPTANCE.md` za probni prolaz i poređenje stvarnog logičkog payload-a.

## Instalacija na telefonu

Preuzmi `app-debug.apk`, otvori ga i dozvoli instaliranje iz tog preglednika/datotečnog upravitelja ako Android zatraži. Android Studio nije potreban. Zatim napravi probni zapis, pričekaj „Sačuvano lokalno“, zatvori/otvori aplikaciju i provjeri tekst. U „Više“ izvezi kopiju, stvarno sačuvaj datoteku izvan aplikacije i provedi probni restore prema ANDROID-ACCEPTANCE.md. Nemoj testirati brisanje podataka nad jedinom kopijom rukopisa.
