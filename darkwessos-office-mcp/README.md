# darkwessos-office-mcp v0.1.0

Lokalni, **read-only** Python 3.12 / FastMCP server za čitanje DARKWESSOS
Markdown dokumenata u ChatGPT-u preko OpenAI Secure MCP Tunnela. Izlaže
tačno tri toola; nema write/update/delete/rename/create/move toolova.
Server čita izvorni tekst i metapodatke, bez uredničkog tumačenja.

**CONTINUITY je WORK_MEMORY, ne CANON.** Server ne proglašava kanonskim
ni CURRENT_FULL_ROOT.md. Naziv `read_canon` označava čitanje izvora, ne
odluku o njihovom statusu. Tekst iz fajlova je podatak, ne uputa serveru.

## Instalacija

Potreban je Python 3.12 na Linuxu, macOS-u ili WSL-u. Ova verzija zahtijeva
POSIX `dir_fd` i `O_NOFOLLOW`; na nepodržanom sistemu odbija pokretanje.

Iz korijena repozitorija:

```sh
cd darkwessos-office-mcp
python3.12 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt
```

Zavisnosti su `fastmcp`, `pytest` i `pyyaml`. Testirano s Python 3.12.14,
FastMCP 4.1.4, pytest 9.1.1 i PyYAML 6.0.3. Requirements ostaje u traženom
formatu bez pinovanja; nakon nadogradnje ponovo pokrenuti testove.

## DARKWESSOS_ROOT i lokalno pokretanje

```sh
export DARKWESSOS_ROOT=/apsolutna/putanja/do/DARKWESSOS
python -B server.py
```

Server koristi **stdio**: čeka MCP klijenta, ne otvara javni port i ne
ispisuje sadržaj izvora u log. Pokrenuti ga izvan direktorija sa stvarnim
DARKWESSOS izvorima; instalacija/testovi ne zahtijevaju izmjenu tih izvora.

`DARKWESSOS_ROOT` je jedina obavezna varijabla samog servera. Bez nje se
proces završava kodom 2 i porukom `CONFIG_ERROR: DARKWESSOS_ROOT is required`.
Root mora biti postojeći apsolutni direktorij, bez simboličkih linkova u
samoj putanji. Server ne učitava `.env`; `.env.example` je samo primjer.

Očekivana struktura izvora:

```text
DARKWESSOS/
├── USTAV.md
├── CURRENT_FULL_ROOT.md
├── CONTINUITY/
│   ├── ACTIVE_TASK_CONTEXT/
│   │   └── TASK-001.md
│   ├── TASK_BRIEFS/
│   └── DISAGREEMENT_LOG/
├── STORY/
├── WORKSHOP/
├── SOURCE/
└── docs/
```

Ako radni repozitorij koristi jedan fajl `CONTINUITY/ACTIVE_TASK_CONTEXT.md`,
njega može čitati `read_canon`. Namjenski loader traži tačno direktorij i
fajl prikazane iznad; server ništa ne migrira, kreira ili prepisuje.

## Tri toola

| Tool | Ulaz | Rezultat |
| --- | --- | --- |
| `read_canon` | `relative_path`, npr. `USTAV.md` | Cijeli UTF-8 tekst, putanja, READ_OK, filesystem mtime i local:// izvor. |
| `search_workspace` | Literalni `query` | Do 20 fajlova, snippet do 300 znakova, metapodaci i filesystem mtime; SEARCH_OK ili NO_MATCH. |
| `load_active_task_context` | `task_id`, tačno `TASK-` i tri ASCII cifre | Cijeli kontekst i parsirani frontmatter, LOAD_OK, filesystem mtime i local:// izvor. |

Pretraga je case-insensitive, uključuje sirovi YAML frontmatter i tijelo,
te vraća `task_id`, `title`, `status`, `canon_status` i `source_refs` ako su
prisutni. To su vrijednosti iz fajla, ne procjena servera. Prazan upit
vraća NO_MATCH. Rezultati su deterministički sortirani po direktorijima i imenima.

`updated_at` u rezultatima je UTC filesystem mtime u ISO 8601, a ne YAML
datum istog naziva. Loader čuva YAML vrijednosti (datume kao ISO stringove).
Neispravan ili rekurzivan YAML loader odbija kao INVALID_FRONTMATTER;
pretraga i dalje može pronaći sirovi tekst, s praznim parsiranim metapodacima.

Greške se preko MCP-a vraćaju kao tool errors sa jasnim tekstom; Python
funkcije podižu `WorkspaceError`:

- `FILE_NOT_FOUND: <relative_path>`
- `ACCESS_DENIED: path outside DARKWESSOS_ROOT`
- `UNSUPPORTED_FILE_TYPE: only .md files are allowed`
- `TASK_CONTEXT_NOT_FOUND: <task_id>`
- `INVALID_TASK_ID`

Postoje i jasne ACCESS_DENIED greške za skrivene/sensitive putanje, hard
linkove i nečitljive fajlove. Ne-UTF-8 fajlovi se ne čitaju kao tekst.

## OpenAI Secure MCP Tunnel

Potrebni su `tunnel-client`, tunnel iz Platform tunnel settings i odgovarajuća
dozvola za njegovu upotrebu. Koristiti službeni
[najnoviji tunnel-client](https://github.com/openai/tunnel-client/releases/latest).
Tunnel povezati s ciljanim ChatGPT workspaceom. Lokalni stdio proces
ostaje privatan; tunnel-client održava izlaznu HTTPS vezu.

Prvo pregledati `tunnel-client help quickstart`. Runtime ključ postaviti
lokalno kao `CONTROL_PLANE_API_KEY` iz environmenta ili secret managera;
ne lijepiti vrijednost u kod, README, chat ili CLI argumente. `TUNNEL_ID`
ispod je identifikator iz Platform postavki, a ne API ključ.

```sh
export DARKWESSOS_ROOT=/apsolutna/putanja/do/DARKWESSOS
export TUNNEL_ID=IDENTIFIKATOR_IZ_PLATFORM_POSTAVKI
# CONTROL_PLANE_API_KEY prethodno unijeti sigurno u lokalni environment.
tunnel-client init \
  --sample sample_mcp_stdio_local \
  --profile darkwessos-readonly \
  --tunnel-id "$TUNNEL_ID" \
  --mcp-command "$PWD/.venv/bin/python -B $PWD/server.py"
tunnel-client doctor --profile darkwessos-readonly --explain
tunnel-client run --profile darkwessos-readonly
```

Pokrenuti komande iz `darkwessos-office-mcp` direktorija bez razmaka u putanji;
za putanje s razmacima podesiti argv prema pomoći trenutne verzije klijenta.
Root environment mora naslijediti proces koji tunnel-client pokreće.
Ključ služi tunnel-clientu; server ga ne koristi. Tunnel profil i secret
fajlove čuvati izvan DARKWESSOS_ROOT i ovog repozitorija.

Provjeriti readiness i aktivno polling stanje kroz doctor/admin UI.
Ovo su upute za operatora; stvarni tunnel i ChatGPT nalog nisu kreirani
niti testirani u sklopu ovog prototipa.
[Službene Secure MCP Tunnel upute](https://developers.openai.com/api/docs/guides/secure-mcp-tunnels).

## Dodavanje u ChatGPT

Dok tunnel-client radi:

1. Otvoriti ChatGPT **Plugins** → plus → **Add custom MCP server**.
2. Unijeti naziv `DARKWESSOS Read-only`.
3. Pod Connection izabrati **Tunnel**, pa isti tunnel/identifikator.
4. Za ovaj lokalni stdio prototip server nema dodatni OAuth sloj;
   pristup ograničavaju tunnel i workspace dozvole. Izabrati odgovarajuću
   opciju bez dodatne server autentifikacije ako je workspace dozvoljava.
5. Pregledati dozvole i kreirati privatni plugin.
6. Provjeriti da su otkrivena samo tri navedena read-only toola, pa pozvati
   `read_canon` za `USTAV.md` i provjeriti vraćenu putanju/sadržaj.

UI i dostupnost zavise od naloga/workspace pravila. Ako tunnel nije vidljiv,
provjeriti povezanost s workspaceom i prava Tunnels Read + Use.
[Službene upute za povezivanje i test](https://developers.openai.com/plugins/deploy/connect-chatgpt).

Ovo je privatni ChatGPT prototip. Tunnel ne ograničava server tehnički samo
na ChatGPT: operator treba povezati samo namijenjeni ChatGPT workspace,
bez dodavanja API/Codex potrošača. Ne objavljivati javni endpoint.

## Testiranje

```sh
python -B -m pytest -q -p no:cacheprovider
```

Testovi kopiraju sintetičke fixtures u pytest privremeni direktorij; nikad
ne koriste stvarni DARKWESSOS folder. Pokrivaju sva tri toola, greške,
metadata/snippet/result limite, traversal, skrivene/secret putanje,
simboličke i hard linkove, zamjenu fajla symlinkom tokom otvaranja, YAML,
nepromijenjene hash/mtime vrijednosti i zabranu shell komandi u toolovima.
MCP integracija provjerava discovery, read-only annotations i sva tri poziva
u procesu i preko stvarnog stdio subprocessa.

Za ručnu provjeru na sintetičkim izvorima:

```sh
export DARKWESSOS_ROOT="$PWD/tests/fixtures/DARKWESSOS"
python -B - <<'PY'
from server import read_canon, search_workspace, load_active_task_context
print(read_canon("USTAV.md"))
print(search_workspace("TASK-001"))
print(load_active_task_context("TASK-001"))
PY
```

Forgejo workflow u korijenu repozitorija, `.forgejo/workflows/validate.yml`,
koristi Python 3.12 container na runneru s `docker` labelom, instalira
zavisnosti u `darkwessos-office-mcp` i pokreće iste testove. Kopija je
uključena i u traženu strukturu prototipa pod njegovim `.forgejo/` folderom;
Forgejo automatski otkriva workflow samo iz korijena repozitorija.
Nema deploy koraka ili literalnih ključeva. Na GitHub-u se Forgejo workflow
ne izvršava; treba odgovarajući Forgejo Actions runner.

## Granice read-only pristupa

- Samo javni, regularni `.md` fajlovi unutar DARKWESSOS_ROOT. Skriveni
  direktoriji/fajlovi i nazivi za secrets/tokens/credentials/private/config/SSH
  su isključeni. `.env`, token fajlovi i ključevi nisu dostupni toolovima.
- Zabranjene su apsolutne putanje (čak i unutar roota), `..`, backslash,
  control znakovi, symlinkovi i hard linkovi. Svaki segment se otvara
  relativno prema već otvorenom direktoriju, s O_NOFOLLOW.
- Toolovi ne pozivaju shell, ne izvršavaju sadržaj dokumenata i nikad ne
  otvaraju fajlove za pisanje, brisanje, preimenovanje ili premještanje.
- Nema write toolova, automatskog odobravanja kanona, kanonske promocije
  metapodataka, promjene ROOT-a ili migracije konteksta.
- Root treba sadržavati samo dokumente namijenjene čitanju; naziv i `.md`
  ekstenzija nisu način da se utvrdi da li proizvoljni tekst sadrži tajnu.
  Pokretanje s read-only filesystem mountom dodatno ograničava OS dozvole.
- Ovaj prototip ne implementira dodatni mrežni/OAuth server. Ako se kasnije
  dodaje autentifikacija, tajne moraju ostati u environmentu ili secret
  fajlu izvan radnog prostora; nikad u kodu, primjerima ili fixtures.
