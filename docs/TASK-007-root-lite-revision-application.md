# TASK-007 — Primjena ROOT-LITE dokumentacijske korekcije

Datum: 2026-10-26. Status: TEST / NON_CANON.
`canon_status: null`. Izmjena dokumentacije primijenjena je na ovoj grani.

## Osnova i KENO odluka

[PR #10](https://github.com/Darkwessos/darkwessos-office/pull/10) squash-mergeovan je uz izričit
KENO nalog kao commit `e16eb3105c84b2bfbf6df030ec9bbd2e85fcfbb3`.
[TASK-006](TASK-006-root-lite-revision-proposal.md) sadrži odobreni tačan tekst,
`final_status: DOCUMENTATION_REVISION_APPROVED`, autora KENO i datum
2026-10-26. TASK-007 primjenjuje isključivo taj tekst.

```yaml
task_id: TASK-007
status: TEST
updated_at: "2026-10-26"
source: TASK-006
keno_decision: APPROVE
decision_date: "2026-10-26"
decision_author: KENO
reference: "CURRENT_FULL_ROOT.md §22.3–§22.5"
change_type: DOCUMENTATION_REVISION
application_status: APPLIED
canon_status: null
canon_decision: null
```

Najnoviji KENO nalog u razgovoru izričito odobrava otvaranje TASK-007 PR-a,
provjeru da je u ROOT-LITE-u promijenjena samo linija 930 i zatim merge.
Time je za ovaj korak zamijenjena ranija uputa predaje PR-a bez mergea.
Ne daje se novo kanonsko odobrenje niti mijenja CURRENT autoritet.

## Tačna izmjena

Fajl: `ROOT_LITE.md`. Linija: 930.

Prije:

```text
— organski izvor Tyrionove alternative;
```

Poslije, doslovno prema odobrenom proposed_text iz TASK-006:

```text
— konkretni Tywinovi izvještaji i scenska izvedba unaprijed odabranog Tyrionovog pravca; stari mehanizam preusmjeravanja Tyriona istom Route 1 / Littlefingerovom blokadom je SUPERSEDED (CURRENT_FULL_ROOT.md §22);
```

Prvi dio zadržava legitimne OPEN detalje izvještaja i scenske izvedbe,
dok drugi prenosi postojeći SUPERSEDED tretman starog mehanizma.
Tačna referenca ostaje CURRENT §22.3, linije 3350–3361;
§22.4, 3374–3381; §22.5, 3390–3397.

## Provjera obuhvata

- Polazna ROOT-LITE linija 930 odgovara odobrenom exact_current_text.
- Zamjenska linija doslovno odgovara TASK-006 proposed_text.
- Direktno poređenje cijelih ROOT-LITE tekstova pokazuje jednu razliku,
  na liniji 930. Svi drugi redovi i prijelomi ostaju nepromijenjeni.
- Git diff za ROOT-LITE mora imati tačno jednu uklonjenu i jednu dodatu
  liniju. Taj diff i sadržaj PR-a provjeravaju se prije mergea.
- Promjena stabla ograničena je na ROOT_LITE.md, ovaj novi izvještaj
  i CONTINUITY/ACTIVE_TASK_CONTEXT.md.
- CURRENT_FULL_ROOT.md, USTAV.md, SOURCE građa i raniji izvještaji ostaju
  identični polaznom snapshotu po Git blob SHA i mode vrijednostima.
- Nema obrisanih fajlova ili novih kanonskih odluka. Pojedinačne TEST
  oznake izvora i JUG PRIMARY/DUPLICATE odnos ostaju netaknuti.

Provjera se odnosi na primjenu odobrene dokumentacijske izmjene.
Sveobuhvatna provjera konzistentnosti cijelog ROOT-LITE-a pripada
zasebnom TASK-008; nije proglašena izvršenom ovim zadatkom.

## Predaja i naredni korak

Grana: `feature/task-007-apply-root-lite-revision`.
PR cilja main iz navedenog merge commita PR-a #10.
Merge je odobren najnovijim KENO nalogom tek poslije provjere navedenih
granica i identiteta teksta. Nakon mergea slijedi TASK-008 —
provjera konzistentnosti ROOT-LITE nakon korekcije.
