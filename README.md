# VYT 2.0 — Teaching Edition · 27. október 2026

## Spustenie vo Windows (offline)

1. Rozbaľ celý archív, nezabudni na podpriečinok `assets`.
2. V podadresári `Cvicenie_vypoctova_techgnika` môžeš spustiť dvojklikom `START_PREDNASKA_WINDOWS.bat` (vyžaduje Python 3). Alternatívne otvor príkazový riadok v tomto podadresári.
3. Ak máš Python 3, spusti `py -3 -m http.server 8765` (alternatívne `python -m http.server 8765`).
4. Pri ručnom spúšťaní v Chrome alebo Edge otvor `http://localhost:8765/index.html`.
5. Na prednášku otvor `http://localhost:8765/prednaska.html`; cvičenia sú na `cvicenie-1.html#laboratorium` a `cvicenie-2.html#laboratorium`.
6. Klikni na **Premietanie** (alebo kláves **F** mimo vstupných polí). **Esc** vypne režim premietania. V prehliadači kláves F11 prepína fullscreen.
7. Externé odkazy na oficiálnu dokumentáciu fungujú iba s internetom. Všetok nevyhnutný obsah prednášky je lokálny.

**Bezpečnostná poznámka:** Učiteľský pohľad iba zobrazuje doplnkové poznámky v prehliadači. Nie je chránený heslom. Neumiestňuj do HTML osobné údaje žiakov ani súkromné správne odpovede klasifikovaného testu.

**Google Forms:** Automatický Apps Script nie je súčasťou zdrojového archívu. Stránka `google-formular.html` preto obsahuje len manuálny postup. Lokálne kvízy vo webe neodosielajú výsledky nikam.

**Prezentácia:** Súbor `Digitalne_logicke_stavy.pptx` obsahuje cielené opravy snímok 12, 24 a 25 a doplnené poznámky pre vybrané snímky. Súbory a externé videá ostávajú oddelené; externé YouTube videá nie sú súčasťou offline balíka.

**Hardvér:** Výučbový SVG obvod je schematická pomôcka. Pri reálnej montáži používaj presnú schému dosky, odpoj napájanie pred zmenami vodičov, zvoľ rezistor LED a dodrž napäťové limity dosky.

## Overenie bez vývojárskych nástrojov

- Otvor úvod a prejdi na učebné témy 1.1 a 1.16 aj obe cvičenia 1.17/1.18.
- V laboratóriu porovnaj režimy: pull-up uvoľnené HIGH, stlačené LOW; pull-down uvoľnené LOW, stlačené HIGH. LED je pri stlačení zapnutá v oboch variantoch.
- Zaznamenaj viac zmien a potom vynuluj priebeh. Štyrikrát klikni na "Ďalší krok kódu".
- Zapni/vypni režim premietania, dark/light a učiteľ/žiak. Over quiz, tlač a kopírovanie kódu.
- Dočasne vypni Wi-Fi a zopakuj lokálny experiment, prehliadku a otvorenie PPTX.
- Pôvodný archív `VYT-main.zip` si ponechaj oddelene ako zdrojový návratový bod.

## Známé obmedzenia

- Odkazy na výrobcu, online dokumentáciu, Google Forms a pôvodné externé obrázky v rozširujúcich lekciách potrebujú internet. Kritická prednáška (hero SVG, simulátor, kód a poznámky) nie.
- Samotný browser model nahrádza iba učebnú simuláciu, nie meranie či test konkrétneho fyzického hardvéru.
- Neexistuje serverové ukladanie výsledkov lokálnych kvízov ani autentifikácia.
- Produkčný deployment nebol vykonaný.
