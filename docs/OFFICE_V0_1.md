# DARKWESSOS Office v0.1 — Living Nord shell

## Šta je implementirano
- Responzivna navigacija: STORY, WORKSHOP, COMMAND, ARCHIVE (desktop sidebar i Android bottom bar).
- STORY: BlockNote rich-text editor, automatsko lokalno spremanje u IndexedDB preko Dexie i ručni Markdown izvoz.
- WORKSHOP: interaktivni izbor modula ATLAS / ODNOSI / TOK RADNJE. To su razvojni paneli, **ne prave mape/grafovi**.
- COMMAND: stvarni opis stanja prototipa i prečice.
- ARCHIVE: **samo izlazne GitHub poveznice**, bez mogućnosti uređivanja ili kanonskog upisa.
- Living Nord paleta i Tailwind v4, React Router, Lucide ikone.
- Automatski build/test u `.github/workflows/office-ci.yml`.

## Šta nije uključeno
- Supabase Auth, sinkronizacija ili cloud backup.
- Leaflet, Sigma.js ili React Flow implementacija.
- Live ChatGPT MCP veza u interfejsu Officea.
- Autorsko odobravanje kanonskih promjena u aplikaciji.
- Funkcionalno vizuelno testiranje na stvarnom Android telefonu.

## Granice podataka
Radni nacrt je **RADNO**, nikada CANON. Sprema se samo u trenutnom pregledniku/profilu (IndexedDB), pa brisanje podataka preglednika može izbrisati nacrt. Markdown izvoz je ručna sigurnosna kopija i može biti pojednostavljen u odnosu na BlockNote blokove. Izvori su linkovi na dokumente u repozitoriju; Office ih ne preuzima ni uređuje.

## Pokretanje

```sh
npm ci
npm run dev
```

Provjera:
```sh
npm test
npm run lint
npm run build
```

## Primopredaja
Nema izmjena `USTAV.md`, `CURRENT_FULL_ROOT.md`, `ROOT_LITE.md`, `SOURCE/`, `STORY/`, `CONTINUITY/` ili `darkwessos-office-mcp/`.
Ova verzija je razvojna grana i nije produkcijski deploy dok KENO ne odobri merge/objavu.
