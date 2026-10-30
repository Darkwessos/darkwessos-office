# DARKWESSOS Office — prva radna verzija

React/Vite interfejs: rukopis sa više scena i zasebnim bilješkama, lokalno spremanje, Markdown izvoz scene, JSON izvoz sigurnosne kopije, radionica, lokalna biblioteka Markdown/tekst dokumenata s pretragom i prikazom samo za čitanje.

Podaci se spremaju u localStorage trenutnog browsera na trenutnom domenu. Nema prijave, serverskog spremanja ni sinhronizacije između uređaja. Brisanje podataka browsera briše lokalni rad. JSON kopija je izvoz podataka; automatski povrat JSON kopije još nije ugrađen.

Privatni kanonski dokumenti u repozitorijumu ne kopiraju se u javni dist. Uvoz dokumenta ne potvrđuje njegov kanonski autoritet. AI perspektive i MCP nisu povezani.

## Build

- `npm install`
- `npm run dev`
- `npm run build` → `dist`
- `npm run lint`

Cloudflare Pages prati main i objavljuje samo dist.
