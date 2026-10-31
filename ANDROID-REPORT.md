# DARKWESSOS MVP 0.2 — Android candidate, NOT ACCEPTED

## Rezultat

**APK NIJE IZGRAĐEN. Nema stvarnog build artefakta niti linka za instalaciju.**

Ovo je nastavak dostavljenog projekta, ne nova aplikacija. Nisu mijenjani kanonski repozitoriji, deployment ili kreativni plugini.

| Provjera | Rezultat | Dokaz / granica |
| --- | --- | --- |
| 6 testova izvoznog toka / grešaka / reda upisa | PASS | `evidence/native-tests.txt`; zamjenski ports, ne Android pluginovi |
| 9 izvornih domenskih testova | PASS | `evidence/legacy-tests.txt` |
| npm instalacija | FAIL / BLOCKED | `evidence/npm-install.txt`: `connect EPERM 172.31.0.189:8080`; direktna veza ne razrješava npm DNS |
| Typecheck | BLOCKED | `evidence/typecheck.txt`: `tsc: not found` nakon neuspjele instalacije |
| Produkcijski native build | BLOCKED | `evidence/build-native.txt`: isti uzrok |
| Dexie/fake-indexeddb testovi (uključujući 2 nova) | NOT TESTED | `evidence/npm-test.txt`: `tsx` nije instaliran |
| Dodavanje/sync Android platforme | NOT TESTED | Capacitor CLI nije instaliran; SDK nedostaje |
| Gradle / APK | BLOCKED | Android SDK i Gradle nisu dostupni; `evidence/android-debug.txt` |
| Android uređaj, tastatura, native file input/share | NOT TESTED | nema povezanog uređaja/emulatora |
| Pozadina, zatvaranje, offline restart, naglo gašenje | PENDING | unit testovi nisu dokaz Android trajnosti |
| Stvarni backup/restore na Androidu, otkazivanje dijaloga | PENDING | potreban stvarni APK i uređaj |

## Izmjene

- Capacitor 7.0.0 core/android/cli i App/Filesystem/Share, svi ista glavna verzija; rezolucija i stvarna instalacija nisu provjerene zbog mreže. Postojeće React/BlockNote/Dexie verzije nisu promijenjene.
- `capacitor.config.ts`: lokalni `dist`, bez `server.url`, stabilni origin `https://localhost`, prvi appId `ba.darkwessos.office`. U izvornom ZIP-u nema prethodnog Android identiteta/potpisivanja.
- Native build izostavlja PWA/service worker. Pri native startu uklanja SW i Workbox cache, nikada IndexedDB.
- Native izvoz čeka red upisa, pravi UTF-8 cache datoteku i predaje je Share pluginu. Uspješan dijalog nije potvrda vanjske kopije; otkazivanje i greška mogu biti nerazlučivi. Cache nije sigurnosna kopija. Ne šalje se sadržaj automatski.
- Uvoz zadržava postojeći Android/browser file input: provjera formata i SHA-256 → potvrda korisnika → postojeća atomska Dexie transakcija nad svih sedam tabela. Stvarni Android file chooser još nije provjeren; dodatni picker nije uveden.
- Imena baze, tabele, verzije sheme, BlockNote JSON, identiteti, revizije, kartice, Atlas i format backup v2 ostaju isti; v1 migracija ostaje podržana. `db.ts`, `cards.ts` i lokalni asseti su neizmijenjeni (hash provjera u evidence).
- Lifecycle pokušava završiti red upisa. Android Back prvo zatvara fokus pisanja, zatim vraća Pisca; izlaz traži potvrdu nakon flush. Safe-area i scroll s tastaturom su prilagođeni, bez tvrdnje da je uređaj testiran.
- Red upisa sada čeka i upise dodane dok `flush()` čeka. Vrijednosti naslova i bilješke hvataju se prije odgođenog upisa.

## Zavisnosti i gradnja

Izvorni lock je sačuvan kao `package-lock.baseline.json`: **ne opisuje nove Capacitor pakete**. Novi zaključani dependency tree nije moguće napraviti bez npm pristupa. Prva uspješna instalacija mora koristiti `npm install`, zatim sačuvati generisani `package-lock.json`; kasnije koristiti `npm ci`. Nije isporučen lažni ažurirani lock ili stari web build pod novim imenom.

Na build računaru / CI: Node 24, JDK 21, Android SDK platform 35, build-tools 35.0.0.

```sh
npm install
npm run typecheck
npm test
npm run android:debug
```

Skripta dodaje Android platformu samo ako ne postoji, postavlja `adjustResize`, isključuje Android automatski backup, izvršava `cap sync android`, pa Gradle. Ne otvara Android Studio. Očekivani izlaz **nakon uspješnog builda**: `android/app/build/outputs/apk/debug/app-debug.apk`.

Priložen je ručno pokretani `.github/workflows/android-debug.yml` za postojeći repozitorij. Nije pokrenut niti objavljen; GitHub plan/Actions kvota nisu provjereni. Nakon uspjeha stvarni artefakt bi bio `darkwessos-app-debug` u konkretnom workflow runu. Ne postoji URL tog runa sada.

Za nadogradnju istog APK-a treba očuvati appId i potpisni ključ. CI može učitati već postojeći debug keystore iz secreta `DARKWESSOS_DEBUG_KEYSTORE_BASE64`. Bez njega novi runner može napraviti drugi ključ: to nije pouzdan put nadogradnje. Ključ nije kreiran niti ugrađen u izvorni paket. Ne deinstalirati postojeću aplikaciju radi promjene potpisa bez provjerene vanjske kopije.

## Instalacija na telefonu — tek kada postoji stvarni APK

Preuzeti `app-debug.apk`, otvoriti preuzetu datoteku i dozvoliti instalaciju iz tog preglednika/datotečnog upravitelja. Android Studio nije potreban. Potom provesti prihvatni tok iz `ANDROID-ACCEPTANCE.md`. Debug APK nije produkcijsko izdanje.

Web/PWA baza i APK baza su različiti prostori: postojeći web rukopis se prenosi provjerenim JSON izvozom/uvozom; nema automatske migracije.

Službeni referentni URL-ovi (nisu ovdje ponovo preuzeti zbog nedostupne mreže):
- https://capacitorjs.com/docs/getting-started
- https://capacitorjs.com/docs/basics/workflow
- https://capacitorjs.com/docs/apis/app
- https://capacitorjs.com/docs/apis/filesystem
- https://capacitorjs.com/docs/apis/share
