# DARKWESSOS — Teatar pustolovina / saradnja

> **RADNO · 2026-11-07**. Ovaj folder koordinira **samostalni Grokov HTML/JS prototip V5.1.4** i saradnike. Ne zamjenjuje postojeći React/Vite/Capacitor **MVP 0.2** iz korijena ovog repozitorija. Nema automatskog prepisivanja `main` grane, niti mijenjanja originalnog rukopisa.

## Cilj

**Jedan Office. Mnogo svjetova. Nijedna izgubljena riječ.**

KENO ima konačnu odluku o kreativnom smjeru i prihvatanju verzija. **Pustolovina → posljedica → nova pustolovina.** Nema nepotrebne birokratije ni pretvaranja aplikacije u enciklopediju.

## Saradnici i način rada

- **Grok — implementacija:** minimalne izmjene postojećeg izvršnog V5.1.4, kandidat + rollback + opis diff-a.
- **DeepSeek / Claude — revizija:** konkretne regresije, sigurnost lokalnih podataka, testovi; jasno razlikovati statički pregled od izvršenih testova.
- **Crtač — vizuelni smjer:** vizuelni koncepti i reference, bez potrebe da otvara 21 MB ZIP.
- **KATA — razvojna urednica:** tok, likovi, ritam, jednostavnost i kontinuitet pustolovine.
- **KENO — odobrenje:** jedini odlučuje šta se prihvata i objavljuje.

## Polazište i status

- **V5.1.4:** Grokov HTML prototip sa ŽIVOM DRUŽINOM, lokalnom pohranom i CRASHENDOM.
- **Recovery kandidat:** izdvojene popravke Traga, oštećenog JSON-a, XSS ispisa, CRASHENDA novih redova i body tema.
- **Provjera:** statička analiza i JS syntax check; **Android fizički test nije potvrđen**.
- Izvorni 9+ MB HTML, ugrađene ilustracije, rukopisi, lokalni podaci i originalni ZIP **nisu dodani u ovaj javni repozitorij**. Za njihov unos prvo je potrebno odlučiti o vidljivosti i pravima za ilustracije.

## Zaštita podataka

1. Nikada ne commitati privatni rukopis, stvarne localStorage podatke, API ključeve ili signing ključeve.
2. Promjene samo u zasebnim granama i kroz Pull Request; `main` ostaje netaknut do KENO odobrenja.
3. Backup/rollback je obavezan uz svaki testni kandidat.
4. Bez obećanja „Android PASS” bez testa na stvarnom Android uređaju.
5. Stari `AGENTS.md`, `CURRENT_FULL_ROOT.md` i `USTAV.md` nisu mijenjani. Ovaj opis je radni brief za Teatar i ne mijenja stare dokumente.

Vidi [VISUAL-BRIEF.md](VISUAL-BRIEF.md) i [ANDROID-REVIEW.md](ANDROID-REVIEW.md).
