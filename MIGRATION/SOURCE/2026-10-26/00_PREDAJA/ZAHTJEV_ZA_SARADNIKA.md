# ZADATAK DRUGOM AI SARADNIKU — INVENTAR I SOURCE PR

Priložen je `DARKWESSOS_SOURCE_PREDAJA_ZA_PR_2026-10-26.zip` s originalima, tekstualnim izvodima, registrima, historijskim ZIP arhivama i kanonskim referencama samo za čitanje.

1. Pročitaj `00_PREDAJA/START_OVDJE.md`, `01_SOURCE_BAZA/00_START/PROCITAJ_PRVO.md` i postojeći `SOURCE_REGISTER.csv`.
2. Sastavi pregled **stvarno pronađenih** izvora: originalni naziv, izvorna putanja, verzija/datum kada je dokumentovan, format, SHA-256, odnos original–izvod–duplikat–historijska varijanta, izvorni S/A/P ili drugi status porijekla. Ne spajaj dokumente koji se razlikuju; ne tretiraj iste SHA kao nezavisna svjedočenja.
3. Zadrži sve originalne binarne datoteke i historijske varijante bez mijenjanja. Zasebno čuvaj njihove izvedene tekstualne prikaze i evidentiraj ograničenja DOCX izvođenja. Ako neki historijski ZIP sadrži dodatne izvorne varijante, upiši ih sa stvarnom putanjom i hashom, a ne pretpostavljenim nazivom.
4. Razlikuj CURRENT, historijski izvor, radni prijedlog, izvedeni pregled i samo navigaciju. **Ne promoviši** SOURCE/HISTORY u kanon, ne otvaraj REOPEN, ne zaključavaj OPEN/RADNO/TEST/CUT/HOLD.
5. Pripremi novi GitHub PR ograničen na novu/dopunjenu SOURCE evidenciju, manifest i arhivske datoteke, uz **bez izmjena** USTAV-a, CURRENT FULL ROOT-a, ROOT-LITE-a kao autoriteta i rukopisa. Sažetak PR-a mora navesti broj datoteka, provjere SHA i eventualne praznine / neprovjerene izvore.
6. Ako nemaš pristup repozitoriju ili pravo kreiranja PR-a, pripremi zaseban diff/patch i opis PR-a; **nemoj tvrditi da je PR otvoren.**

Početni SOURCE registar već dokumentuje 14 originala. Nastavak inventara treba obuhvatiti i stvarne historijske verzije iz dva originalna ZIP-a, uz jasno označavanje duplikata. KENO odobrava svaku kanonsku promjenu; cilj ovog PR-a je isključivo dokumentaciono/arhivski.
