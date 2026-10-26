# DARKWESSOS — SOURCE predaja: status GitHub prenosa

**Datum:** 26.10.2026.  
**Status:** DJELIMIČAN PRENOS / DRAFT — **NIJE KOMPLETAN SOURCE ARHIV**.  
**Kanonski učinak:** NIKAKAV. Ovo su materijali za provjeru porijekla, ne odluka KENE o kanonu.

## Polazni paket

Lokalni pripremljeni paket `DARKWESSOS_GITHUB_SOURCE_READY_2026-10-26.zip` ima **47 datoteka** (40 u `01_SOURCE_BAZA/`, četiri u `00_PREDAJA/` i tri tehnička dokumenta). Njegovo postojanje u ChatGPT prilozima **ne znači da je sadržaj ZIP-a dostupan GitHubu**.

## Šta je stvarno preneseno

U ovoj migracijskoj grani preneseno je **7 od 47 datoteka**:

- `01_SOURCE_BAZA/02_DOPUNSKI_SOURCE/ORIGINALI/ZAGOR_SOURCE_DOPUNA_JUG_2026-10-14(1).md`
- `01_SOURCE_BAZA/04_REGISTAR/SOURCE_REGISTER.md`
- `01_SOURCE_BAZA/00_START/PROCITAJ_PRVO.md`
- `00_PREDAJA/START_OVDJE.md`
- `00_PREDAJA/ZAHTJEV_ZA_SARADNIKA.md`
- `README_GITHUB_UPLOAD.md`
- `PR_SOURCE_ONLY.md`

Prvih pet provjereno je usporedbom Git blob SHA identiteta lokalnih fajlova i GitHub kopija. Ostala dva tekstualna dokumenta prenesena su nakon kontrole veličine bajtova.

## Šta nije preneseno

**Preostalih 40 datoteka**, uključujući izvorne S/A/P DOCX dokumente i ostale SOURCE originale, izvode i registre, **nedostaje u ovoj grani**. Razlog: GitHub integracija ne može direktno pročitati bajtove ZIP/DOCX priloga iz ChatGPT lokalnog prostora. Ne kreirati lažne tekstualne zamjene za binarne originale.

Registar može privremeno sadržavati linkove na još neprenesene datoteke. Ti linkovi nisu dokaz postojanja datoteka na GitHubu.

## Nastavak prenosa

1. Dostaviti raspakovane lokalne datoteke GitHubu kroz kanal koji podržava binarni upload (npr. GitHub web upload sa uređaja na ovu granu ili autorizovani Git klijent).
2. Sačuvati identične putanje ispod `MIGRATION/SOURCE/2026-10-26/` kao u paketu.
3. Verifikovati SHA-256 svih 14 SOURCE originala prema registarskim metapodacima, potom ostalih tekstualnih i dokumentacionih datoteka.
4. Tek nakon što su sve **47/47** stavke potvrđene, ukloniti status DJELIMIČNO.
5. KENO pregleda PR; bez automatskog spajanja.

**Izričite zabrane:** ne mijenjati `USTAV.md`, `CURRENT_FULL_ROOT.md`, `STORY/`, LOCK statuse ili druge važeće kanonske dokumente. Ne proglašavati historijski SOURCE za CURRENT.
