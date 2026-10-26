# DARKWESSOS — GitHub SOURCE priprema (26.10.2026.)

**NAMJENA:** nova dokumentaciona grana/PR za inventar SOURCE građe. **NIJE novo izdanje kanona.**

## GitHub upload

1. U ciljnom DARKWESSOS repozitoriju napravi **novu granu** `source-inventory-2026-10-26` iz aktuelne podrazumijevane grane. Nemoj raditi direktno u `main`.
2. Prenesi **mapu `01_SOURCE_BAZA/` i `00_PREDAJA/`** sa sačuvanim podmapama; ovaj direktorij je već raspakovan za tu svrhu.
3. Po želji prenesi i ovaj vodič (`README_GITHUB_UPLOAD.md`) i opis PR-a (`PR_SOURCE_ONLY.md`) kao pregledne dokumente.
4. Provjeri GitHub prikaz: originali, izvedeni tekstualni prikazi, registri i historijska građa ostaju na odvojenim putanjama.
5. Uporedi hash vrijednosti u `SHA256_GITHUB_UPLOAD.txt` i provjeri da nema promjena u ranije postojećim kanonskim datotekama.
6. Otvori **Pull Request za pregled**. Ne spajaj ga automatski; o eventualnim promjenama kanona odlučuje KENO.

## Šta sadrži ova GitHub verzija

- `01_SOURCE_BAZA/`: **40 datoteka**, uključujući 14 SOURCE originala (S/A/P, dopune, izvedeni/navigacijski originali), tekstualne izvode, registre i legacy građa.
- `00_PREDAJA/`: **4 datoteke** sa pregledom, popisom i integritetom ranije SOURCE predaje.
- `README_GITHUB_UPLOAD.md`, `PR_SOURCE_ONLY.md`, `SHA256_GITHUB_UPLOAD.txt`: dodatne tehničke upute i kontrola pripremljenih datoteka.

**Isključeno namjerno:** kopije USTAV-a i CURRENT FULL ROOT-a, dokumentarna FULL MD baza te dva velika historijska ZIP-a iz šireg paketa; oni se čuvaju u prethodnoj predaji i služe za referencu/potpunu genealogiju. Ovdje nisu izdvojeni kao novi kanonski fajlovi. Ako se naknadno dodaje kompletna historijska arhiva, najprije pregledati GitHub ograničenja i eventualni Git LFS, zadržavajući izvorni hash.

**Ograničenje:** ova struktura je pripremljena iz dostupnog lokalnog arhiva. Nije poređena s aktuelnim stanjem udaljenog GitHub repozitorija. Mogući sudari postojećih putanja zahtijevaju ručnu provjeru prije PR-a.

## Važna hijerarhija

USTAV SAGE → CURRENT FULL ROOT → ROOT-LITE (navigacija) → SOURCE (porijeklo) → HISTORY (historija). SOURCE i legacy datoteke ne mijenjaju kanon.
