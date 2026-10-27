# VYT 2.0 — Implementation & Verification Report
**Dátum:** 26.10.2026 · **cieľová prednáška:** 27.10.2026

## Implementácia
- Zachovaný statický frontend HTML/CSS/JavaScript, bez framework migrácie a bez nových runtime balíkov.
- Nový CSS dizajnový systém v `vyt-2.css`, interakcie v `vyt-2.js`, vlastná offline grafika `assets/hero-signal.svg`.
- Modernizovaný úvod s navigáciou do výučbového laboratória a opravou počtu učebných celkov (5).
- Nová navigácia medzi lekciami a učiteľským plánom, režim premietania (F / Esc).
- Interaktívne laboratórium v `cvicenie-1.html` a `cvicenie-2.html`: režim externý pull-down a interný pull-up, Arduino Uno D2, LED D8, SVG schéma, priebeh udalostí, krokovanie ukážkového kódu.
- Nová metodická stránka `prednaska.html` pre 45-minútový priebeh a kontrolný zoznam učiteľa.
- Opravená nepravdivá deklarácia automaticky vytváraných Google Forms v `google-formular.html` a na úvode (súkromný skript v pôvodnom ZIPe nie je).
- Upravená prezentácia: konkrétne odborné opravy snímok 12, 24 a 25 a poznámky ku 20 snímkam. Prístupná tiež cez lokálny odkaz z metodickej stránky.
- Windows spúšťací skript `START_PREDNASKA_WINDOWS.bat` a návod v `README.md`.

## Overenie, ktoré sa skutočne vykonalo
- `node --check`: všetky tri JS súbory (vrátane existujúcich skriptov) bez syntaktickej chyby.
- Statické lokálne linky, súbory a fragmentové odkazy: nezistené poškodené odkazy.
- PowerPoint: 31 slajdov otvoriteľných cez `python-pptx`, 20 neprázdnych poznámok, problematické pôvodné formulácie odstránené.
- 28 vizuálnych testovacích kombinácií: sedem statických stránok, štyri viewporty 390×844, 1280×720, 1440×900 a 1920×1080. V izolovanom Chromium renderovaní bez JS runtime výnimiek a bez nežiaduceho horizontálneho overflow.
- Interaktívny model: oba režimy HIGH/LOW, tlačidlo, indikácia LED, krokovanie kódu testované v izolovanom Chromium renderovaní.
- Lokálna HTTP služba na `127.0.0.1:8766/index.html` dostupná prostredníctvom cURL (alternatívny port používaný pri príprave, nie súčasť balíka).

## Obmedzenia testovania
Plné browser navigačné/e2e testovanie cez `page.goto` blokuje bezpečnostná politika testovacieho prehliadača (`ERR_BLOCKED_BY_ADMINISTRATOR`) aj pri localhost a `file://`. Preto sa funkcionalita vykonala cez `page.set_content` s vloženými lokálnymi CSS/JS a izolovanou testovacou implementáciou web storage. Nešlo o test reálneho otvorenia celej aplikácie z localhost. Toto treba na cieľovom školskom počítači ešte manuálne overiť. Do samostatného prehliadača sa tiež nenačítavali externé obrázky z voliteľných rozširujúcich lekcií.

Nie je vykonané hardvérové otestovanie na skutočnom Arduine a nebol vykonaný produkčný deployment. Nie je vytvorený commit, lebo vstupný ZIP neobsahuje `.git` metadáta. Originálny ZIP používateľa zostal nezmenený.

## Nezávislé overenie pre učiteľa
1. Vo Windows rozbaliť archív a spustiť `Cvicenie_vypoctova_techgnika/START_PREDNASKA_WINDOWS.bat` (vyžaduje Python 3).
2. Otestovať navigáciu na `prednaska.html` a na obidve cvičenia.
3. Pull-down: uvoľnené LOW/LED vypnutá, stlačené HIGH/LED zapnutá; pull-up: uvoľnené HIGH/LED vypnutá, stlačené LOW/LED zapnutá.
4. Skontrolovať časový diagram, kód, kvízy, prepínače témy a premietania, kláves F a Esc.
5. Vypnúť Wi-Fi a znovu načítať metodickú stránku a laboratórium.
6. Otvoriť PowerPoint lokálne, overiť opravené snímky a poznámky. Externé videá vynechať pri offline prednáške.

## P2 backlog
Logické hradlá, binárny register, debounce model, animácia TTL/CMOS prahov, jednotná odborná revízia všetkých ostatných 16 tém a komplexná automatizovaná e2e testovacia sada.
