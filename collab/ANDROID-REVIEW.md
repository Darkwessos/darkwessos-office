# Testni plan — V5.1.4 Recovery (još nije potvrđen)

**Važno:** ovdje navedeni PASS nije dozvoljen bez zabilježenog stvarnog izvršenja testa. Statička analiza ne dokazuje rad na Androidu.

## Sigurnost prije testiranja

- Sačuvati postojeći rukopis/Trag; koristiti testne, ne privatne podatke.
- Recovery je *kandidat*, ne potvrđeno stabilno izdanje.
- Na public GitHub ne dodavati privatni rukopis niti eksport lokalnih podataka.

## Provjere na Androidu

- [ ] Otvoriti aplikaciju u stvarnom mobilnom browseru.
- [ ] PISAC: upis → izlaz → povratak → reload; uporediti tekst.
- [ ] TRAG: dodati testnu stavku, ponovo otvoriti; isprobati više od 50 stavki bez tihog gubitka.
- [ ] JSON izvoz Traga/Družine: utvrditi da datoteka zaista postoji u Downloads.
- [ ] Oštećen TRAG: prikaz prijavljuje problem, ne prepisuje sadržaj; postoji backup.
- [ ] CRASHENDA: stvarni novi redovi, ne doslovno `\\n`; ne mijenja rukopis.
- [ ] ŽIVA DRUŽINA: dodati, obrisati sve, reload; prazna lista mora ostati prazna.
- [ ] DAY/NIGHT: promjena ne briše druge CSS klase.
- [ ] Kartice: tap, skrolanje, povratak i promjena orijentacije bez gubitka pristupa sadržaju.
- [ ] Izvršiti test bez mreže ako je podržan; ne pretpostavljati PWA/offline funkciju.

## Otvoreni UX problemi

- Sedam/više uzastopnih `prompt()` dijaloga za likove nisu pogodni za Android. Zamijeniti jednom formom.
- Velike slobodno pomične kartice otežavaju mobilnu navigaciju. Prednost stabilnom mobilnom rasporedu.
- Pozicije kartica u pikselima mogu izaći iz kadra nakon rotacije.
- Blob + `a.download` može biti nepouzdan u Android WebView; traži provjeru i rezervni put.

## Kriterij prihvata

KENO prihvata tek nakon provjerenih podataka, povratka, izvoza i razumljive Android navigacije. Svaki nepotvrđen korak ostaje **NIJE TESTIRANO**.
