# Prihvat na Androidu — sve stavke trenutno PENDING

Koristi probne podatke, ne jedinu kopiju rukopisa. Pričekaj „Sačuvano lokalno“ prije kontrolisanog zatvaranja. Ne deinstaliraj aplikaciju i ne briši njene podatke prije provjerenog izvoza.

1. Pisac: novi prizor, naslov, više BlockNote blokova, bold/italic, lista i bilješka. U Radionici odaberi likove, situaciju, lokaciju; sastavi i sačuvaj prijedlog. Vrati se na željeni ekran. Pričekaj spremanje.
2. Izvezi kopiju A. U Android dijalogu stvarno sačuvaj datoteku u odabrani folder. Provjeri da postoji i da nije prazna.
3. Pozadina → povratak; normalno zatvaranje → ponovno pokretanje; avionski režim → ponovno pokretanje. Svaki slučaj zasebno: izvezi B i poredi logički `payload` svih sedam tabela s A (redoslijed redova zanemariti). Rukopis, revizije, identiteti, odabiri, prompt, sceneId, page i cursors moraju se podudarati. Ako pomjeriš kursor, njegovu namjernu promjenu evidentiraj.
4. Promijeni probne podatke. Uvezi A: provjera prije potvrde, potvrdi zamjenu. Izvezi C; cijeli logički payload mora odgovarati A.
5. U zasebnoj praznoj testnoj instalaciji/bazi uvezi A, ponovi poređenje. Ne brisati jedinu bazu radi testa.
6. Ošteti checksum u kopiji: odbijanje bez promjene podataka. Odaberi ispravnu kopiju pa otkaži potvrdu: bez promjene podataka. Otkaži file chooser i Share dijalog: nema lažne poruke da je vanjska kopija sačuvana.
7. Mala širina, portret/landscape, otvorena tastatura: dostupan tekst, nav i kontrole; Back ne gubi upise. Native bundle se otvara bez mreže i bez starog SW bundlea.
8. Naglo gašenje procesa testirati zasebno poslije potvrđenog spremanja i tokom aktivnog upisa. Ne obećava se očuvanje nepotvrđenog upisa. Rezultat zapisati odvojeno od normalnog zatvaranja.

Stvarni data diff je obavezan, screenshot nije dokaz identičnog stanja. SHA-256 omotača može se razlikovati zbog legitimno promijenjenog payload-a; exportedAt nije dio poređenja stanja.
