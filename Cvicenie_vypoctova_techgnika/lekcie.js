const lessonData = [
  {
    id: "1.1", title: "Zoznámenie s vývojovou doskou a pracovným prostredím",
    focus: "Doska, pinout a bezpečná práca",
    goal: "Rozpoznám hlavné časti Arduino Uno, nájdem napájacie a digitálne piny a podľa pinoutu bezpečne naplánujem jednoduchý obvod.",
    theory: [
      ["Mikrokontrolér", "Malý počítač na doske vykonáva nahratý program a komunikuje s pripojenými obvodmi."],
      ["Vstupy a výstupy", "Digitálne piny D0–D13 môžu podľa konfigurácie čítať signál alebo riadiť výstup. D0/D1 sa používajú aj na sériovú komunikáciu."],
      ["Napájanie a zem", "5V, 3.3V, GND a USB majú rozdielne úlohy. Pred zapájaním si over pinout a zabráň skratu medzi napájaním a GND."]
    ],
    activity: "Tím dostane Arduino Uno, LED, rezistor a tlačidlo. Najskôr zostaví mapu dosky a až potom navrhne bezpečné pripojenie LED.",
    steps: ["Nájdi mikrokontrolér, USB konektor, reset, napájacie a digitálne piny na oficiálnej fotografii dosky.", "Označ v pinoute GND, 5V, D2 a D8; dopíš ku každému jeho úlohu.", "Nakresli cestu prúdu pre LED na D8 so sériovým rezistorom a GND.", "Partner skontroluje zapojenie podľa pinoutu ešte pred pripojením USB."],
    evidence: "Označená mapa pinov a schéma obvodu s rezistorom.",
    stretch: "Vysvetli, prečo sa pin D0/D1 pri nahrávaní programu bežne necháva voľný.",
    exit: "Kde na pinoute overím, kam patrí GND a digitálny vstup?",
    quiz: { question: "Ktorý vývod musí byť spoločnou zemou pre jednoduchý LED obvod?", options: ["GND", "Vin"], answer: 0, explanation: "GND je zemná referencia a návratová cesta obvodu." },
    sources: [["Arduino Uno Rev3 — oficiálny produkt a technické údaje", "https://store.arduino.cc/products/arduino-uno-rev3"], ["Getting started with Arduino", "https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/"]]
  },
  {
    id: "1.2", title: "Zoznámenie s IDE – vytvorenie projektu",
    focus: "Vytvorenie, kontrola a nahratie sketchu",
    goal: "V Arduino IDE založím, pomenujem a uložím sketch, vyberiem správnu dosku a port a odlíšim kompiláciu od nahratia programu.",
    theory: [
      ["Sketch", "Projekt Arduina je sketch; základ programu tvoria funkcie setup() a loop()."],
      ["Verify / Upload", "Verify preloží program a odhalí chyby v kóde. Upload program preloží a pokúsi sa ho nahrať do dosky."],
      ["Doska a port", "Zvolený model dosky určuje preklad; správny port označuje pripojenú dosku. Chybová správa často napovie, ktoré nastavenie chýba."]
    ],
    activity: "Vytvor nový projekt „Prva_LED“, ulož ho na určené miesto a nahraj pripravený program, ktorý rozbliká vstavanú LED.",
    steps: ["Spusti Arduino IDE 2 a vytvor nový sketch.", "Ulož ho pod výstižným názvom do samostatného priečinka projektu.", "Vyber Arduino Uno a pripojený port; skontroluj, že názov dosky súhlasí.", "Spusť Verify, prečítaj výstup a až potom Upload; over, že LED reaguje."],
    evidence: "Uložený projekt s čitateľným názvom a snímka úspešnej kompilácie alebo nahratia.",
    stretch: "Urob zámernú chybu v názve príkazu, spusti Verify a urč, v ktorom riadku začína problém.",
    exit: "Aký je rozdiel medzi Verify a Upload?",
    quiz: { question: "Ktorá akcia nahrá program do dosky?", options: ["Verify", "Upload"], answer: 1, explanation: "Verify iba kontroluje/prekladá; Upload odosiela program do dosky." },
    sources: [["Arduino IDE 2 — dokumentácia", "https://docs.arduino.cc/software/ide-v2/"], ["Getting started with Arduino", "https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/"]]
  },
  {
    id: "1.3", title: "Simulácia činnosti MCU v PC",
    focus: "Virtuálny obvod a testovanie bez fyzickej dosky",
    goal: "V simulátore zostavím jednoduchý virtuálny obvod, spustím program a porovnám očakávaný a pozorovaný stav.",
    theory: [
      ["Model nie je doska", "Simulátor približuje správanie zvolených súčiastok. Nemusí presne modelovať elektrické limity ani časovanie reálneho hardvéru."],
      ["Testovací scenár", "Pred spustením určím vstup, očakávaný stav výstupu a podmienku úspechu."],
      ["Ladenie", "Mením jednu vec naraz a pozorujem, či sa zmení výsledok. Potom rovnaký program overím na skutočnom hardvéri, ak je dostupný."]
    ],
    activity: "Nasimuluj obvod LED a tlačidlo. Pred spustením zapíš, kedy má LED svietiť; potom zámerne zmeň podmienku programu.",
    steps: ["Otvori školou schválený simulátor Arduino, vytvor virtuálnu dosku a nový projekt.", "Pridaj LED s prúdovým rezistorom a tlačidlo; skontroluj spojenia podľa pinoutu.", "Spusti pripravený program a zaznamenaj výsledok pre stlačené aj uvoľnené tlačidlo.", "Zmeň jeden riadok programu, znova simuluj a vysvetli rozdiel."],
    evidence: "Tabuľka dvoch testovacích stavov, snímka obvodu a krátky popis jednej odladenej chyby.",
    stretch: "Zapíš, ktoré vlastnosti obvodu simulátor nemusí zachytiť rovnako ako skutočný hardvér.",
    exit: "Prečo úspech v simulácii ešte nie je úplným dôkazom, že reálny obvod je bezpečný?",
    quiz: { question: "Čo je dobrým prvým krokom pred spustením simulácie?", options: ["Zapísať očakávaný výsledok testu", "Pridať ďalšie súčiastky bez plánu"], answer: 0, explanation: "Očakávaný výsledok umožní porovnať návrh s pozorovaním." },
    sources: [["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"], ["Arduino Built-in Examples", "https://docs.arduino.cc/built-in-examples/"]]
  },
  {
    id: "1.4", title: "Prvý program – LED, GPIO",
    focus: "Kostra programu a prvé GPIO",
    goal: "Vysvetlím úlohu setup() a loop(), nastavím GPIO pin ako výstup a bezpečne rozblikám LED.",
    theory: [
      ["setup()", "Vykoná sa raz po štarte; hodí sa na nastavenie pinov a inicializáciu."],
      ["loop()", "Vykonáva sa opakovane, kým je doska napájaná."],
      ["Digitálny výstup", "pinMode(pin, OUTPUT) nastaví smer. digitalWrite(HIGH/LOW) nastaví logickú úroveň na výstupe."]
    ],
    activity: "Zostav výstup s LED a rezistorom a uprav blinkovú ukážku tak, aby bolo možné rozpoznať obe časti programu.",
    steps: ["Zapoj LED do série s rezistorom; pred prepojením skontroluj polaritu LED.", "V setup() nastav vybraný digitálny pin ako OUTPUT.", "V loop() striedaj HIGH a LOW; oneskorenie pridaj pomocou delay().", "Zmeň interval a predpovedz výslednú rýchlosť blikania."],
    evidence: "Funkčná LED a komentár v kóde, ktorý vysvetľuje setup() a loop().",
    stretch: "Prečo sa program po dokončení setup() neukončí?",
    exit: "Ktorý riadok nastaví pin ako výstup?",
    quiz: { question: "Ktorá funkcia v Arduino sketche beží opakovane?", options: ["setup()", "loop()"], answer: 1, explanation: "loop() sa opakuje počas behu programu." },
    sources: [["Arduino — Sketch structure", "https://docs.arduino.cc/language-reference/en/structure/sketch/"], ["Blink — built-in example", "https://docs.arduino.cc/built-in-examples/basics/Blink/"]]
  },
  {
    id: "1.5", title: "Práca s GPIO – vstup a výstup",
    focus: "Konfigurácia smeru a práca so signálom",
    goal: "Rozlíšim vstup a výstup, správne nakonfigurujem každý použitý pin a prepojím prečítaný stav tlačidla s riadením LED.",
    theory: [
      ["INPUT", "Vstup je určený na čítanie elektrického stavu pomocou digitalRead()."],
      ["OUTPUT", "Výstup je určený na nastavenie stavu pomocou digitalWrite()."],
      ["Nastavenie pinu", "Každý pin nakonfiguruj pinMode() pred jeho použitím. Vstup musí mať určený pokojový stav."]
    ],
    activity: "Zapoj tlačidlo ako vstup a LED ako výstup. V programe sleduj vstup a podľa neho zapni alebo vypni LED.",
    steps: ["Vyber a zapíš číslo pinu tlačidla a LED; over ich proti schéme.", "Nakonfiguruj tlačidlo ako INPUT s pull-down zapojením alebo INPUT_PULLUP s tlačidlom na GND.", "Prečítaj vstup cez digitalRead() a použi výsledok pri nastavovaní LED.", "Otestuj obe polohy tlačidla a vysvetli rozdiel medzi čítaním a zápisom."],
    evidence: "Schéma zapojenia, program a dvojriadkový testovací záznam tlačidlo → LED.",
    stretch: "Zmeň piny na iné bezpečné digitálne piny a uprav konštanty bez zmeny logiky.",
    exit: "Ktorá funkcia číta vstup a ktorá nastavuje výstup?",
    quiz: { question: "Ktorá dvojica je správne priradená?", options: ["digitalRead() číta vstup", "digitalWrite() číta vstup"], answer: 0, explanation: "digitalRead() číta; digitalWrite() nastavuje digitálny výstup." },
    sources: [["pinMode() — Arduino Language Reference", "https://docs.arduino.cc/language-reference/en/functions/digital-io/pinMode/"], ["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.6", title: "Jednoduché riadenie LED",
    focus: "Vzory, časovanie a plynulý beh programu",
    goal: "Vytvorím a upravím sekvenciu LED, rozlíšim blokujúce delay() od časovania s millis() a overím dĺžku kroku.",
    theory: [
      ["Sekvencia", "Poradie HIGH/LOW a časových intervalov určuje výsledný vzor svetla."],
      ["delay()", "Pozastaví vykonávanie programu; počas čakania sa hlavná slučka neposúva k ďalším úlohám."],
      ["millis()", "Vráti čas od štartu v milisekundách. Odčítanie predchádzajúceho času umožní neblokujúce časovanie."]
    ],
    activity: "Vytvor dvoj- alebo troj-LED signál s vlastným svetelným vzorom. Rozšírenie: nech tlačidlo počas blikania stále správne reaguje.",
    steps: ["Navrhni časový diagram dvoch LED aspoň na štyri kroky.", "Zapoj LED s rezistormi a napíš sekvenciu pomocou digitalWrite().", "Otestuj a uprav dĺžku jedného intervalu podľa pozorovania.", "Ak zostane čas, nahraď delay() porovnaním millis() s uloženým časom."],
    evidence: "Časový diagram a fungujúca sekvencia; pri rozšírení aj krátke vysvetlenie millis().",
    stretch: "Uprav program tak, aby tlačidlo reagovalo aj počas opakovaného svetelného vzoru.",
    exit: "Akú nevýhodu má dlhé delay() v programe, ktorý má zároveň čítať tlačidlo?",
    quiz: { question: "Čo robí delay() počas čakania?", options: ["Blokuje ďalšie vykonávanie programu", "Ukladá program do EEPROM"], answer: 0, explanation: "delay() pozastaví vykonávanie v aktuálnom vlákne programu." },
    sources: [["Blink Without Delay — Arduino example", "https://docs.arduino.cc/built-in-examples/digital/BlinkWithoutDelay/"], ["digitalWrite() — Arduino reference", "https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalwrite/"]]
  },
  {
    id: "1.7", title: "Čítanie tlačidla",
    focus: "Digitálny vstup v reálnom obvode",
    goal: "Zapojím tlačidlo ako vstup, prečítam jeho logický stav a pred vysvetlením programu overím elektrické zapojenie aj pokojový stav.",
    theory: [
      ["Čítanie", "digitalRead(pin) vráti HIGH alebo LOW podľa napätia na vstupe."],
      ["Odskok kontaktov", "Mechanické tlačidlo môže pri jednom stlačení krátko rýchlo meniť kontakt; pri spoľahlivom meraní treba stav ošetriť."],
      ["Definovaný stav", "Vstup nenechávaj voľne odpojený. Pull-up alebo pull-down stanoví stabilnú úroveň v pokoji."]
    ],
    activity: "Pomocou LED alebo sériového monitora zisti, akú hodnotu má vstup pri uvoľnenom a stlačenom tlačidle.",
    steps: ["Zapoj tlačidlo s pull-down rezistorom alebo použi INPUT_PULLUP a spoj tlačidlo s GND.", "Nakonfiguruj vstup a opakovane čítaj digitalRead().", "Zaznamenaj hodnoty pre uvoľnené a stlačené tlačidlo.", "Vysvetli, čo sa zmení pri použití opačného typu pull rezistora."],
    evidence: "Dvojriadková tabuľka stavov a stabilne sa meniaci výstup v obvode.",
    stretch: "Zaznamenaj odskok ako prechodový jav a navrhni, ako by sa dal softvérovo potlačiť.",
    exit: "Prečo nemá zostať nepoužitý vstup odpojený?",
    quiz: { question: "Čo vráti digitalRead()?", options: ["HIGH alebo LOW", "Číslo pinu ako text"], answer: 0, explanation: "Výsledkom čítania digitálneho pinu je HIGH alebo LOW." },
    sources: [["digitalRead() — Arduino Language Reference", "https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalread/"], ["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.8", title: "Tlačidlo a LED – logické podmienky",
    focus: "Vetvenie programu podľa vstupu",
    goal: "Použijem if/else na riadenie LED tlačidlom a vysvetlím, ako porovnávacia a logická podmienka ovplyvní výstup.",
    theory: [
      ["if / else", "Program vykoná jednu vetvu, keď je výraz pravdivý, a druhú, keď pravdivý nie je."],
      ["Porovnanie", "Pre test hodnoty používaj ==; zápis = priraďuje hodnotu premennej."],
      ["Logické spojenie", "Operátory &&, || a ! skladajú alebo obracajú podmienky."]
    ],
    activity: "Uprav zapojenie dvoch tlačidiel a jednej LED tak, aby LED svietila iba v zadaných kombináciách tlačidiel.",
    steps: ["Zostav pravdivostnú tabuľku kombinácií vstupov.", "Pre každú kombináciu urči očakávaný stav LED.", "Prelož tabuľku na if / else a vhodný logický operátor.", "Otestuj všetky kombinácie vrátane oboch tlačidiel naraz."],
    evidence: "Pravdivostná tabuľka a program, ktorý prejde všetky prípady.",
    stretch: "Vyjadri tú istú logiku raz pomocou && a raz vnoreným if; porovnaj čitateľnosť.",
    exit: "Aký je rozdiel medzi operátormi = a == v podmienke?",
    quiz: { question: "Ktorý zápis porovnáva, či je hodnota rovná HIGH?", options: ["stav = HIGH", "stav == HIGH"], answer: 1, explanation: "== porovnáva; = priraďuje." },
    sources: [["if — Arduino Language Reference", "https://docs.arduino.cc/language-reference/en/structure/control-structure/if/"], ["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.9", title: "Jednoduchá stavová logika",
    focus: "Stavy, prechody a správanie tlačidla",
    goal: "Navrhnem jednoduchý konečný automat, pomenujem jeho stavy a prechody a prevediem diagram stavov na programovú logiku.",
    theory: [
      ["Stav", "Opisuje aktuálny režim programu; typicky sa uchováva v enum alebo celočíselnej premennej."],
      ["Prechod", "Zmena vstupu za stanovených okolností presunie program do nového stavu."],
      ["Hranica vstupnej udalosti", "Tlačidlo môže byť držané dlhší čas; pre prepnutie režimu treba sledovať nové stlačenie, nie opakovane čítať LOW."]
    ],
    activity: "Navrhni trojstavovú školskú signalizáciu: pripravený režim, otázka, odpoveď. Jedno krátke stlačenie mení režim.",
    steps: ["Pomenuj každý stav a nakresli šípky medzi možnými prechodmi.", "Pri každom prechode označ udalosť, ktorá ho vyvolá.", "Ulož aktuálny stav do premennej a podľa stavu nastav LED.", "Otestuj každý prechod, podržané tlačidlo aj návrat do prvého stavu."],
    evidence: "Diagram stavov, tabuľka prechodov a predvedený program.",
    stretch: "Pridaj stav „všetky tlačidlá stlačené“ a definuj, čo sa stane v neplatnej kombinácii.",
    exit: "Prečo držané tlačidlo nemusí znamenať opakované prepnutie stavu?",
    quiz: { question: "Čo opisuje prechod v stavovom automate?", options: ["Zmenu z jedného stavu do druhého podľa udalosti", "Zapojenie USB kábla"], answer: 0, explanation: "Prechod je definovaná zmena stavu po určenej udalosti." },
    sources: [["Arduino State Change Detection example", "https://docs.arduino.cc/built-in-examples/digital/StateChangeDetection/"], ["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.10", title: "Práca s binárnymi hodnotami",
    focus: "Bity, pozičná sústava a čítanie bajtu",
    goal: "Prevediem krátke binárne čísla do desiatkovej sústavy, určím váhu bitu a vysvetlím, ako mikrokontrolér ukladá hodnoty v bitoch.",
    theory: [
      ["Bity", "Bit nadobúda hodnotu 0 alebo 1. Osem bitov tvorí bajt."],
      ["Váha pozície", "V dvojkovej sústave majú pozície sprava váhy 1, 2, 4, 8, 16, 32, 64, 128."],
      ["Bez znamienka", "Bajt bez znamienka pokrýva rozsah 0 až 255; typ a interpretácia určujú význam uložených bitov."]
    ],
    activity: "Rozkóduj a zakóduj stav svetelnej signalizácie do bajtu: každému stavu alebo LED priraď jednu bitovú pozíciu.",
    steps: ["Preveď 00000101₂ a 00101010₂ do desiatkovej sústavy.", "Rozlož zadanú desiatkovú hodnotu na mocniny dvojky.", "Navrhni mapovanie štyroch stavov LED na bity jedného bajtu.", "Spoločne overte, že zakódované a dekódované hodnoty sa zhodujú."],
    evidence: "Vypočítané príklady s rozpisom váh a návrh mapovania bitov.",
    stretch: "Koľko rôznych kombinácií možno zakódovať štyrmi bitmi? Zdôvodni.",
    exit: "Aká je váha bitu na pozícii číslo 4, keď počítame sprava od nuly?",
    quiz: { question: "Akú desiatkovú hodnotu má 00000101₂?", options: ["5", "10"], answer: 0, explanation: "Aktívne sú bity s váhou 4 a 1; ich súčet je 5." },
    sources: [["Arduino Language Reference — bitwise operators", "https://docs.arduino.cc/language-reference/en/structure/bitwise-operators/"], ["Arduino reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.11", title: "Hexadecimálne hodnoty v programe",
    focus: "Čítanie a zápis šestnástkových hodnôt",
    goal: "Rozpoznám zápis 0x, prevediem hodnotu medzi šestnástkovou a dvojkovou sústavou a určím hodnotu jednotlivých nibblov v bajte.",
    theory: [
      ["Základ 16", "Hexadecimálna sústava používa číslice 0–9 a písmená A–F."],
      ["Nibbly", "Jedna hexadecimálna číslica zodpovedá štyrom bitom; dve číslice tvoria jeden bajt."],
      ["Zápis v programe", "Predpona 0x označuje číselný literál v šestnástkovej sústave, napríklad 0x2A."]
    ],
    activity: "Zapíš hodnoty svetelného stavu raz binárne a raz hexadecimálne; over, že program uloží rovnaké číslo.",
    steps: ["Spáruj šestnástkové číslice A, C a F s ich štvorbitovými zápismi.", "Preveď 0x2A a 0x80 do dvojkovej a desiatkovej sústavy.", "V programe porovnaj tú istú hodnotu zapísanú desiatkovo, binárne a cez 0x.", "Vysvetli, ktorá forma sa hodí pri čítaní bajtu."],
    evidence: "Prevodová tabuľka a krátky sketch s ekvivalentnými celočíselnými literálmi.",
    stretch: "Farebný kód RGB je trojica bajtov; koľko bitov a možných kombinácií obsahuje?",
    exit: "Koľko bitov reprezentuje jedna hexadecimálna číslica?",
    quiz: { question: "Čo označuje predpona 0x v celočíselnom literáli?", options: ["Šestnástkový zápis", "Zápis v pohyblivej rádovej čiarke"], answer: 0, explanation: "Predpona 0x označuje hodnotu zapísanú v šestnástkovej sústave." },
    sources: [["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"], ["Arduino Built-in Examples", "https://docs.arduino.cc/built-in-examples/"]]
  },
  {
    id: "1.12", title: "Dátové typy v C/C++",
    focus: "Rozsah, veľkosť a interpretácia hodnoty",
    goal: "Vyberiem vhodný dátový typ pre počítadlo, logický stav a desatinnú hodnotu a overím jeho rozsah a správanie na Arduino Uno.",
    theory: [
      ["Typ určuje význam", "Typ hodnoty ovplyvňuje jej rozsah, reprezentáciu a povolené operácie."],
      ["Doska je dôležitá", "Veľkosť int sa môže líšiť medzi doskami a architektúrami. Na klasickom Uno s ATmega328P má int 16 bitov."],
      ["Pretečenie", "Hodnota mimo rozsahu celočíselného typu sa nedá reprezentovať očakávaným spôsobom; preto kontroluj hranice a znamienko."]
    ],
    activity: "Vyber typ pre index poľa, počet stlačení, logický príznak a teplotu. Pre každý prípad zdôvodni voľbu.",
    steps: ["Vypíš typy bool, byte, int, unsigned long a float.", "Pri každej premennej zadaj hodnotu na hranici alebo tesne za hranicou rozsahu.", "Over správanie v simulátore alebo cez sériový monitor.", "Uprav typ tam, kde zvolený rozsah nestačí, a vysvetli kompromis."],
    evidence: "Tabuľka premenná → typ → očakávaný rozsah → zdôvodnenie.",
    stretch: "Na Uno vypíš sizeof(int) a porovnaj očakávanú veľkosť na 32-bitovej doske. Vysvetli, prečo treba čítať dokumentáciu pre cieľovú dosku.",
    exit: "Prečo nemožno predpokladať, že int má rovnaký počet bitov na každej Arduino doske?",
    quiz: { question: "Ktoré tvrdenie o veľkosti int je bezpečné?", options: ["Vždy rovnaká na každej doske", "Môže závisieť od architektúry dosky"], answer: 1, explanation: "Veľkosť typov závisí od platformy a jej implementácie." },
    sources: [["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"], ["Arduino Uno Rev3 specifications", "https://store.arduino.cc/products/arduino-uno-rev3"]]
  },
  {
    id: "1.13", title: "Nastavenie a testovanie jednotlivých bitov",
    focus: "Bitové masky a logické operácie",
    goal: "Pomocou posunu a masky nastavím, vynulujem alebo otestujem vybraný bit bez zmeny ostatných bitov.",
    theory: [
      ["Maska", "Bajt s vybranými jednotkovými bitmi určuje, ktoré pozície operácia ovplyvní."],
      ["OR a AND", "OR nastavuje označené bity; AND s negovanou maskou ich vynuluje a ostatné zachová."],
      ["Posun a XOR", "Posun vytvorí masku na zvolenej pozícii; XOR prepne zvolený bit."]
    ],
    activity: "Vytvor register LED stavov v softvérovej premennej a uprav vždy iba bit jednej LED.",
    steps: ["Vytvor masku pre bit č. 3 pomocou 1U << 3.", "Nastav bit pomocou OR a zobraz výsledok v binárnom alebo šestnástkovom tvare.", "Vynuluj bit maskou AND a negovanou maskou.", "Otestuj bit pomocou AND a prepni ho pomocou XOR."],
    evidence: "Štyri otestované operácie bitov a komentár, ako každá maska zachováva ostatné bity.",
    stretch: "Uprav funkciu tak, aby číslo bitu prichádzalo ako parameter; over hranice platné pre typ premennej.",
    exit: "Ktorá operácia otestuje, či je bit aktívny, bez zmeny jeho hodnoty?",
    quiz: { question: "Čo urobí výraz hodnota | maska, ak má maska jednotku na jednom bite?", options: ["Nastaví zodpovedajúci bit na 1", "Vynuluje všetky bity"], answer: 0, explanation: "OR s jednotkou nastaví príslušný bit na 1." },
    sources: [["Bitwise AND — Arduino Language Reference", "https://docs.arduino.cc/language-reference/en/structure/bitwise-operators/bitwiseand/"], ["Bitwise operators — Arduino Language Reference", "https://docs.arduino.cc/language-reference/en/structure/bitwise-operators/"]]
  },
  {
    id: "1.14", title: "Ukladanie a čítanie údajov",
    focus: "Premenná v RAM a trvalejšie nastavenie v EEPROM",
    goal: "Rozlíšim dočasnú premennú od údajov v EEPROM, uložím jednoduché nastavenie a prečítam ho po reštarte.",
    theory: [
      ["RAM", "Premenné v operačnej pamäti slúžia programu počas behu; po odpojení napájania sa ich obsah nezachová."],
      ["EEPROM", "Na Arduino Uno je EEPROM obmedzená nevolatilná pamäť vhodná pre malé nastavenia, nie pre časté hromadné zapisovanie."],
      ["Šetrné zápisy", "Zapisuj pri skutočnej zmene hodnoty, nie bez prestania v každom priechode loop()."]
    ],
    activity: "Ulož posledný zvolený režim signalizácie a over, že sa obnoví po reštarte dosky.",
    steps: ["Porovnaj hodnotu v RAM pred reštartom a po reštarte.", "Vyber jednoduchý celočíselný režim v bezpečnom rozsahu.", "Pomocou knižnice EEPROM ulož hodnotu iba pri jej zmene.", "Reštartuj dosku, načítaj hodnotu a skontroluj, že je platná."],
    evidence: "Tabuľka hodnôt pred/po reštarte a program s podmienkou, ktorá obmedzí zbytočné zápisy.",
    stretch: "Pridaj kontrolu rozsahu uloženej hodnoty a bezpečný predvolený režim pre neplatný obsah.",
    exit: "Prečo nie je dobrý nápad zapisovať rovnakú hodnotu do EEPROM pri každom priechode loop()?",
    quiz: { question: "Ktoré médium na Uno zachová hodnotu po odpojení napájania?", options: ["Bežná premenná v RAM", "EEPROM"], answer: 1, explanation: "EEPROM je nevolatilná pamäť a zachová obsah po vypnutí." },
    sources: [["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"], ["Arduino Built-in Examples", "https://docs.arduino.cc/built-in-examples/"]]
  },
  {
    id: "1.15", title: "Práca s adresami a ukazovateľmi",
    focus: "Adresa premennej a typovaný ukazovateľ",
    goal: "Rozlíšim hodnotu premennej, jej adresu a ukazovateľ; správne použijem operátory & a * a vysvetlím, prečo musí ukazovateľ smerovať na platný objekt.",
    theory: [
      ["Hodnota a adresa", "Premenná má hodnotu a v pamäti aj adresu. Operátor &hodnota získa adresu premennej; nevracia jej uloženú hodnotu."],
      ["Typovaný ukazovateľ", "Zápis int* p znamená, že p môže uchovávať adresu objektu typu int. Typ ukazovateľa určuje, aký objekt smieme cezň čítať alebo meniť."],
      ["Dereferencovanie", "Výraz *p pristupuje k objektu na adrese uloženej v p. Ak je p platný, *p je samotná premenná, takže priradením cez *p meníme jej hodnotu."],
      ["Inicializácia a nullptr", "Ukazovateľ najprv nastav na adresu existujúcej premennej, napríklad int* p = &hodnota;. nullptr označuje, že ukazovateľ na nič neukazuje; nullptr sa nesmie dereferencovať."],
      ["Dôležitá zámena", "Znak * má dva súvisiace významy: v deklarácii int* p určuje typ ukazovateľa, vo výraze *p znamená prístup k hodnote na jeho adrese."],
      ["Súvis s GPIO a prezentáciou", "Na AVR mikrokontroléri sú registre DDRx, PORTx a PINx naviazané na riadenie portov. Knižničné funkcie pinMode(), digitalWrite() a digitalRead() poskytujú bezpečnejšie a čitateľnejšie rozhranie; v tejto úlohe sa priamo k registrom nepristupuje."]
    ],
    reviewPrompt: "Žiaci vlastnými slovami rozlíšia hodnotu premennej, jej adresu získanú cez & a hodnotu prečítanú cez *.",
    activity: "Na Arduino Uno preskúmaj adresu a hodnotu celočíselnej premennej cez ukazovateľ v Serial Monitore a zmeň stav LED cez ukazovateľ na bool.",
    steps: ["Zapoj externú LED s vlastným rezistorom 220–330 Ω medzi digitálny pin D8 a GND; anódu LED pripoj cez rezistor k D8 a katódu na GND.", "Nahraj ukážkový program. V Serial Monitore nastav rýchlosť 9600 baudov a porovnaj výpis premennej a hodnoty cez ukazovateľ.", "Sleduj, ako zápis *hodnotaPtr += 5 zmení pôvodnú premennú, a porovnaj ho s výpisom adresy.", "Pozoruj LED, ktorej bool stav sa mení cez *stavPtr; vysvetli, prečo * nie je samotná adresa.", "Zakomentuj platnú inicializáciu ukazovateľa a vysvetli, prečo neinicializovaný alebo nullptr ukazovateľ nemožno bezpečne dereferencovať."],
    evidence: "Funkčný program pre Arduino Uno, výpis hodnoty pred a po zmene cez ukazovateľ a vlastné vysvetlenie rozdielu medzi hodnotou, adresou a dereferencovaním.",
    stretch: "Doplň druhú celočíselnú premennú a porovnaj typy int* a bool*. Vysvetli, prečo nemožno priradiť adresu bool do int* bez zmeny typu.",
    exit: "Čo znamenajú výrazy &hodnota a *p a za akej podmienky je bezpečné použiť *p?",
    quiz: { question: "Čo vytvorí výraz &hodnota, ak je hodnota premenná?", options: ["Adresu premennej", "Náhodné nové číslo"], answer: 0, explanation: "Jednočlenný operátor & získa adresu premennej." },
    examples: [{
      id: "pointer-uno-address",
      title: "Arduino Uno — adresa, dereferencovanie a LED",
      description: "Externá LED je zapojená na D8 cez samostatný rezistor 220–330 Ω. Výpis adresy je hexadecimálny; konkrétna adresa sa mení podľa behu programu a umiestnenia premennej v pamäti.",
      code: `#include <stdint.h>

const byte LED_PIN = 8;
int hodnota = 7;
int* hodnotaPtr = &hodnota;
bool stavLED = false;
bool* stavPtr = &stavLED;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);

  Serial.print("Adresa premennej hodnota: 0x");
  Serial.println(reinterpret_cast<uintptr_t>(hodnotaPtr), HEX);
  Serial.print("Hodnota priamo: ");
  Serial.println(hodnota);
  Serial.print("Hodnota cez *hodnotaPtr: ");
  Serial.println(*hodnotaPtr);

  *hodnotaPtr += 5;
  Serial.print("Po zmene cez ukazovatel: ");
  Serial.println(hodnota);
}

void loop() {
  *stavPtr = !(*stavPtr);
  digitalWrite(LED_PIN, *stavPtr ? HIGH : LOW);
  delay(500);
}`
    }],
    commonErrors: [
      ["Zámena & a *", "&hodnota získava adresu; *p pristupuje k objektu na tejto adrese."],
      ["Neinicializovaný ukazovateľ", "Deklarácia int* p; sama neurčuje platnú adresu. Pred použitím ho nastav na adresu žijúcej premennej alebo na nullptr a nullptr nikdy nedereferencuj."],
      ["Nesprávny typ", "Ukazovateľ na int používaj na objekty typu int; typový nesúlad môže viesť k neplatnému alebo nedefinovanému prístupu."],
      ["Zámena adresy a hodnoty", "Vypísanie *p zobrazí hodnotu objektu, nie adresu; adresa je uložená v p."]
    ],
    images: [{
      kind: "pdf",
      title: "Pinout Arduino Uno Rev3",
      alt: "Oficiálny pinout Arduino Uno Rev3 s označením digitálnych a napájacích pinov.",
      src: "https://docs.arduino.cc/resources/pinouts/A000066-full-pinout.pdf",
      source: "https://docs.arduino.cc/hardware/uno-rev3/",
      sourceLabel: "Arduino Uno Rev3 — oficiálna dokumentácia a pinout"
    }],
    teacherNote: "Ukážka je určená pre Arduino Uno Rev3 a používa externú LED na D8; pri inej doske vždy over pinout. Výpis adresy je určený na demonštráciu, nie na porovnávanie pevne očakávaného čísla. Predveď rozdiel medzi int* p = &hodnota;, samotným p a dereferencovaným *p. Zdôrazni, že neinicializovaný ukazovateľ sa nepoužíva a dereferencovanie nullptr je chyba.",
    sources: [["Arduino Uno Rev3 — pinout a technické údaje", "https://docs.arduino.cc/hardware/uno-rev3/"], ["C++ pointers — cppreference", "https://en.cppreference.com/w/cpp/language/pointer.html"], ["Arduino Language Reference", "https://docs.arduino.cc/language-reference/"]]
  },
  {
    id: "1.16", title: "Jednoduchá práca s ukazovateľmi",
    focus: "Bezpečné dereferencovanie a prechod po poli",
    goal: "Prejdem pole pomocou ukazovateľa, vysvetlím vzťah indexovania a ukazovateľovej aritmetiky a bezpečne zastavím na poslednom prvku.",
    theory: [
      ["Pole v pamäti", "Prvky poľa sú uložené za sebou a majú rovnaký typ. Názov poľa sa vo väčšine výrazov prevedie na ukazovateľ na prvý prvok."],
      ["Index a ukazovateľ", "Pre pole a platný index platí, že pole[i] zodpovedá *(pole + i). Zápis s indexom býva čitateľnejší; ukazovateľový zápis pomáha pochopiť, ako sa prvky adresujú."],
      ["Aritmetika ukazovateľov", "p + 1 prejde na nasledujúci prvok daného typu, nie na nasledujúci bajt. *(p + i) pristupuje k prvku na pozícii i."],
      ["Počet prvkov", "Pri skutočnom poli v tom istom rozsahu môžeš počet zistiť ako sizeof(pole) / sizeof(pole[0]). Funkčný parameter int* už nie je celé pole, preto sa z neho takto počet prvkov zistiť nedá."],
      ["Platné hranice", "Prvky majú indexy od 0 po pocet - 1. Ukazovateľ môžeš posunúť najviac na pozíciu za posledným prvkom, ale túto pozíciu nesmieš dereferencovať."],
      ["Prepojenie s digitálnymi stavmi", "Tak ako v prezentácii o digitálnych stavoch, výstup musí byť nakonfigurovaný a nastavený na HIGH alebo LOW. Pole určuje, ktorý pin ovládame; digitálny stav určuje, či LED svieti."],
      ["ESP32 nie je Uno", "Ukážka v tejto lekcii používa Arduino Uno. Samostatný projekt používa ESP32 DevKit; čísla GPIO ani elektrické úrovne medzi doskami nezamieňaj."]
    ],
    reviewPrompt: "Žiaci určia počet prvkov, platné indexy od 0 po N - 1 a vysvetlia, ako sa ukazovateľ posúva na ďalší prvok.",
    activity: "Na Arduino Uno ovládaj štyri LED diódami s poľom pinov a ukazovateľmi; vypočítaj počet prvkov poľa a bezpečne prehraj svetelný bežec vpred aj vzad.",
    steps: ["Zapoj štyri LED na D4, D5, D6 a D7; ku každej použi samostatný rezistor 220–330 Ω a spoj katódy s GND.", "Urči počet pinov pomocou sizeof(ledPins) / sizeof(ledPins[0]) a nastav všetky piny ako OUTPUT.", "V cykle použi ukazovateľ pinPtr a prístup *(pinPtr + i); pri každom priechode rozsvieť a zhasni práve jednu LED.", "Prejdi pole odzadu bezpečným cyklom for (size_t i = pocetLED; i > 0; --i) a pracuj s prvkom i - 1.", "Over počet priechodov a hraničné pozície; vysvetli, prečo sa nečíta prvok s indexom pocetLED."],
    evidence: "Funkčný program pre Arduino Uno, bezpečný prechod po poli v oboch smeroch, správne určený počet LED a porovnanie výrazov pole[i] a *(pole + i).",
    stretch: "Uprav program tak, aby sa svetelný bežec od poslednej LED bezpečne odrazil späť. Následne vysvetli rozdiel medzi poľom pinov const int[] a poľom meniteľných stavov bool[].",
    exit: "Ktoré indexy poľa s počtom prvkov N sú platné a prečo nemožno dereferencovať ukazovateľ na pozíciu za posledným prvkom?",
    quiz: { question: "Ktorý postup je bezpečný pri prechode po poli?", options: ["Zastaviť na počet prvkov poľa", "Čítať až po náhodnú nulovú hodnotu"], answer: 0, explanation: "Hranicu prechodu určuje skutočný počet prvkov poľa." },
    examples: [{
      id: "pointer-array-uno",
      title: "Arduino Uno — štyri LED a bezpečný prechod po poli",
      description: "Pripoj LED cez samostatné rezistory na D4–D7; katódy pripoj na GND. Rovnaký ukazovateľ vyberá číslo pinu z poľa a druhý ukazovateľ pristupuje k stavovému poľu.",
      code: `const byte ledPins[] = {4, 5, 6, 7};
const size_t pocetLED = sizeof(ledPins) / sizeof(ledPins[0]);
bool stavyLED[] = {false, false, false, false};

void setup() {
  for (size_t i = 0; i < pocetLED; ++i) {
    pinMode(*(ledPins + i), OUTPUT);
    digitalWrite(*(ledPins + i), LOW);
  }
}

void loop() {
  const byte* pinPtr = ledPins;
  bool* stavPtr = stavyLED;

  for (size_t i = 0; i < pocetLED; ++i) {
    *(stavPtr + i) = true;
    digitalWrite(*(pinPtr + i), *(stavPtr + i) ? HIGH : LOW);
    delay(250);

    *(stavPtr + i) = false;
    digitalWrite(*(pinPtr + i), LOW);
  }

  for (size_t i = pocetLED; i > 0; --i) {
    const size_t index = i - 1;
    digitalWrite(*(pinPtr + index), HIGH);
    delay(250);
    digitalWrite(*(pinPtr + index), LOW);
  }
}`
    }],
    commonErrors: [
      ["Index mimo poľa", "Pri N prvkoch je posledný index N - 1. Index N už označuje pozíciu za poľom a nemožno ju dereferencovať."],
      ["Unsigned odpočítanie", "size_t je nezáporný typ. Cyklus i >= 0 sa po odpočítaní môže zacykliť; bezpečný spätný cyklus používa i > 0 a index i - 1."],
      ["sizeof na ukazovateli", "Po odovzdaní poľa funkcii sa parameter správa ako ukazovateľ. Počet prvkov preto odovzdaj samostatne."],
      ["const a nemeniteľné piny", "Pole pinov môže byť const, pretože čísla GPIO počas programu nemeníme. Na prístup stačí const byte*; nepoužívaj const_cast ani nemeniteľné pole nepretypovávaj."]
    ],
    images: [
      {
        kind: "pdf",
        title: "Pinout Arduino Uno Rev3 — príklad v tejto lekcii",
        alt: "Oficiálny pinout Arduino Uno Rev3; použité digitálne piny sú D4, D5, D6 a D7.",
        src: "https://docs.arduino.cc/resources/pinouts/A000066-full-pinout.pdf",
        source: "https://docs.arduino.cc/hardware/uno-rev3/",
        sourceLabel: "Arduino Uno Rev3 — oficiálna dokumentácia"
      },
      {
        kind: "image",
        title: "Pinout ESP32 DOIT DevKit V1 — 36-pin verzia",
        alt: "Pinout ESP32 DOIT DevKit V1 s 36 GPIO vývodmi; označenie GPIO16, GPIO17, GPIO18 a GPIO19 slúži ako orientačná pomôcka.",
        src: "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2018/08/ESP32-DOIT-DEVKIT-V1-Board-Pinout-36-GPIOs-updated.jpg",
        source: "https://randomnerdtutorials.com/esp32-pinout-reference-gpios/",
        sourceLabel: "Random Nerd Tutorials — ESP32 pinout reference (36-pin DOIT verzia)"
      },
      {
        kind: "image",
        title: "ESP32 DevKit V1 — doska zo samostatného projektu",
        alt: "Vektorové vyobrazenie vývojovej dosky ESP32 DevKit V1 z definície dosky Wokwi.",
        src: "https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/esp32-devkit-v1/board.svg",
        source: "https://github.com/wokwi/wokwi-boards/tree/main/boards/esp32-devkit-v1",
        sourceLabel: "Wokwi boards — ESP32 DevKit V1 (ilustračné vyobrazenie, nie úplný pinout)"
      }
    ],
    teacherNote: "Základná ukážka tejto témy je pre Uno a piny D4–D7. ESP32 DevKit V1 je zobrazený iba ako súvislosť so samostatným projektom 1.16; jeho pinout sa líši podľa konkrétnej dosky. V ukážke je pole pinov nemeniteľné a číta sa cez const byte*. Upozornite, že pri unsigned type sa cyklus i >= 0 nikdy správne neskončí.",
    sources: [["C++ arrays — cppreference", "https://en.cppreference.com/w/cpp/language/array.html"], ["C++ pointers — cppreference", "https://en.cppreference.com/w/cpp/language/pointer.html"], ["Arduino Uno Rev3 — pinout", "https://docs.arduino.cc/hardware/uno-rev3/"], ["ESP32 DOIT pinout — Random Nerd Tutorials", "https://randomnerdtutorials.com/esp32-pinout-reference-gpios/"], ["Wokwi — ESP32 DevKit V1", "https://docs.wokwi.com/parts/wokwi-esp32-devkit-v1"]]
  }
];

function renderLesson(lesson) {
  const lessonIndex = lessonData.indexOf(lesson);
  const previousLesson = lessonIndex > 0 ? lessonData[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < lessonData.length - 1 ? lessonData[lessonIndex + 1] : null;
  const lessonUrl = (item) => {
    if (item.id === "1.17") return "cvicenie-1.html";
    if (item.id === "1.18") return "cvicenie-2.html";
    return `lekcia.html?tema=${item.id.replace(".", "-")}`;
  };
  const previousUrl = previousLesson ? lessonUrl(previousLesson) : "index.html#osnova";
  const nextUrl = nextLesson ? lessonUrl(nextLesson) : "cvicenie-1.html";
  const nextTitle = nextLesson ? `${nextLesson.id} · ${nextLesson.title}` : "1.17 · Digitálne vstupy a výstupy";
  const pointerProjectMarkup = lesson.id === "1.16" ? `
    <a class="button button-primary pointer-project-link" href="projekt-1-16-led-ukazovatele.html">Otvoriť projekt: LED a ukazovatele <span aria-hidden="true">→</span></a>` : "";

  const conceptMarkup = lesson.theory.map(([title, description], index) => `
    <article class="theory-item"><span class="theory-index">0${index + 1}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join("");
  const stepMarkup = lesson.steps.map((step, index) => `<li><span>0${index + 1}</span>${step}</li>`).join("");
  const sourceMarkup = lesson.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join("");
  const answers = lesson.quiz.options.map((option, index) => `
    <button type="button" data-answer="${index === lesson.quiz.answer ? "correct" : "wrong"}">${option}</button>`).join("");
  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  })[character]);
  const imageMarkup = (lesson.images || []).map((image) => `
    <figure class="reference-figure">
      ${image.kind === "pdf"
        ? `<iframe src="${image.src}#view=FitH" title="${image.alt}" loading="lazy"></iframe>`
        : `<img src="${image.src}" alt="${image.alt}" loading="lazy">`}
      <figcaption><strong>${image.title}</strong><br><a href="${image.source}" target="_blank" rel="noopener noreferrer">${image.sourceLabel} ↗</a> · <a href="${image.src}" target="_blank" rel="noopener noreferrer">Otvoriť súbor ↗</a></figcaption>
    </figure>`).join("");
  const exampleMarkup = (lesson.examples || []).map((example) => `
    <article class="panel code-panel lesson-code-panel">
      <div class="code-heading"><span>${example.title}</span><button class="copy-button" type="button" data-copy="${example.id}">Kopírovať kód</button></div>
      <p class="example-description">${example.description}</p>
      <pre><code id="${example.id}">${escapeHtml(example.code)}</code></pre>
    </article>`).join("");
  const commonErrorsMarkup = (lesson.commonErrors || []).map(([title, description]) => `
    <article class="common-error-item"><h3>${title}</h3><p>${description}</p></article>`).join("");
  const extensionMarkup = lesson.examples ? `
    <section class="lesson-section pointer-extension">
      <div class="section-heading"><div><p class="eyebrow">PODROBNÉ VYSVETLENIE A UKÁŽKOVÝ KÓD</p><h2>Od pojmu k programu</h2></div><p class="section-note">Kód je určený pre konkrétne uvedenú dosku. Zapojenie prispôsob jej pinoutu a pri práci s LED vždy použi prúdový rezistor.</p></div>
      <div class="reference-figures">${imageMarkup}</div>
      <div class="lesson-code-list">${exampleMarkup}</div>
      <div class="common-errors"><h3>Časté chyby a ako im predísť</h3><div class="common-errors-grid">${commonErrorsMarkup}</div></div>
    </section>` : "";

  document.title = `${lesson.id} — ${lesson.title} | Výpočtová technika`;
  document.querySelector('meta[name="description"]').content = `${lesson.id}: ${lesson.title}. Praktické cvičenie s Arduinom Uno, krátkym teoretickým základom a overením vedomostí.`;
  document.getElementById("lesson-content").innerHTML = `
    <section class="lesson-hero generated-lesson-hero">
      <div><p class="eyebrow"><span class="live-dot"></span> TÉMA ${lesson.id} · PRAKTICKÉ CVIČENIE · ARDUINO UNO</p><h1>${lesson.title}</h1><p class="hero-lead">${lesson.focus}</p><p class="lesson-goal"><strong>Cieľ učenia</strong>${lesson.goal}</p><div class="hero-actions"><a class="button button-primary" href="#priebeh">Prejsť na prípravu <span aria-hidden="true">↓</span></a><button class="button button-quiet print-button" type="button" data-print>Vytlačiť prípravu</button></div></div>
      <aside class="outcome-card"><span class="outcome-icon">${lesson.id}</span><p class="eyebrow">VÝSTUP HODINY</p><h2>Navrhni. Otestuj. Vysvetli.</h2><p>${lesson.evidence}</p><div class="success-line"><span class="live-dot"></span> ZÁVEREČNÁ KONTROLA: ${lesson.exit}</div></aside>
    </section>
    <section class="theory-band">
      <div class="shell theory-layout"><div class="theory-intro"><p class="eyebrow">KRÁTKE TEORETICKÉ OPAKOVANIE</p><h2>Pred cvičením<br>si pripomeň.</h2><p>${lesson.goal}</p></div><div class="theory-list">${conceptMarkup}</div></div>
    </section>
    <section class="lesson-section" id="priebeh">
      <div class="section-heading"><div><p class="eyebrow">RÁMCOVÝ PLÁN · 45 MIN</p><h2>Priebeh cvičenia</h2></div><span class="duration duration-large">POMÔCKY: ARDUINO UNO / SIMULÁTOR · ARDUINO IDE · PRACOVNÝ LIST</span></div>
      <div class="timeline">
        <article class="timeline-row"><span class="time">00–05<small>5 min</small></span><div><span class="phase">MOTIVÁCIA</span><h3>Problém zo zadania</h3><p>${lesson.activity}</p></div><span class="teacher-cue">PREDPOVEĎ</span></article>
        <article class="timeline-row"><span class="time">05–13<small>8 min</small></span><div><span class="phase">TEÓRIA</span><h3>Spoločné zopakovanie</h3><p>Prečítajte si stručné teoretické body vyššie. ${lesson.reviewPrompt || "Žiaci vlastnými slovami pomenujú vstup, očakávaný výsledok a jednu bezpečnostnú alebo programátorskú zásadu."}</p></div><span class="teacher-cue">VYSVETLI</span></article>
        <article class="timeline-row"><span class="time">13–35<small>22 min</small></span><div><span class="phase">PRAKTICKÉ CVIČENIE</span><h3>Práca v dvojiciach</h3><p>${lesson.activity} Pracujte podľa krokov nižšie a priebežne porovnávajte skutočný výsledok s očakávaním.</p></div><span class="teacher-cue">NAVRHNI → OTESTUJ</span></article>
        <article class="timeline-row"><span class="time">35–42<small>7 min</small></span><div><span class="phase">VYSVETLENIE A DIFERENCIÁCIA</span><h3>Predveď funkčný výsledok</h3><p><strong>Doklad učenia:</strong> ${lesson.evidence} <strong>Rozširujúca výzva:</strong> ${lesson.stretch}</p></div><span class="teacher-cue">PREDVEĎ → ZDÔVODNI</span></article>
        <article class="timeline-row"><span class="time">42–45<small>3 min</small></span><div><span class="phase">EXIT TICKET</span><h3>Overenie porozumenia</h3><p>${lesson.exit}</p></div><span class="teacher-cue">ZHRŇ</span></article>
      </div>
    </section>
    ${extensionMarkup}
    <section class="lesson-section generated-activity">
      <div class="section-heading"><div><p class="eyebrow">HLAVNÁ PRAKTICKÁ ÚLOHA</p><h2>${lesson.activity}</h2></div><p class="section-note">Pri fyzickom zapájaní odpoj dosku od USB pred každou zmenou vodičov. Pri práci postupuj podľa pinoutu konkrétnej dosky.</p></div>
      <article class="panel activity-panel"><ol class="activity-steps">${stepMarkup}</ol><div class="activity-proof"><span class="phase">ČO ODOVZDAŤ / UKÁZAŤ</span><p>${lesson.evidence}</p></div><div class="activity-stretch"><span class="phase">VÝZVA PRE RÝCHLEJŠÍCH</span><p>${lesson.stretch}</p></div></article>
      ${pointerProjectMarkup}
    </section>
    <section class="teacher-notes shell" data-teacher-only>
      <p class="eyebrow">UČITEĽSKÉ POZNÁMKY · SKRYTÉ V POHĽADE ŽIAKA</p>
      <h2>Metodická podpora k téme ${lesson.id}</h2>
      <div class="teacher-notes-grid">
        <article><h3>Formujúce otázky</h3><p>„Čo očakávaš? Čo si zmenil? Podľa čoho vieš, že program funguje?“ Najprv nech žiak vysvetlí svoju predpoveď, potom ukáže výsledok.</p></article>
        <article><h3>Doklad učenia</h3><p>${lesson.evidence} Kritérium sleduje pochopenie aj funkčný výsledok; hodnotiť možno pozorovaním žiaka pri vysvetlení.</p></article>
        <article><h3>Diferenciácia</h3><p>Žiak, ktorý potrebuje podporu, postupuje podľa krokov a odovzdá čiastkový výsledok. Rýchlejší žiak rieši rozširujúcu výzvu: ${lesson.stretch}</p></article>
        ${lesson.teacherNote ? `<article><h3>Technické a metodické upozornenie</h3><p>${lesson.teacherNote}</p></article>` : ""}
      </div>
    </section>
    <section class="lesson-section compact-section">
      <div class="section-heading"><div><p class="eyebrow">RÝCHLA KONTROLA POROZUMENIA</p><h2>Jedna otázka. Jasná spätná väzba.</h2></div></div>
      <div class="quiz-grid single-quiz"><article class="quiz-card" data-quiz="one"><span class="question-number">${lesson.id}</span><h3>${lesson.quiz.question}</h3><div class="answer-list">${answers}</div><p class="feedback" aria-live="polite"></p></article></div>
      <p class="score-line" data-score aria-live="polite">Zatiaľ bez odpovede</p>
      <p class="lesson-explanation" data-quiz-explanation hidden>${lesson.quiz.explanation}</p>
    </section>
    <section class="assessment-section"><div><p class="eyebrow">KRITÉRIÁ ÚSPECHU</p><h2>Doklad učenia</h2></div><ul class="assessment-list"><li><span>01</span> vysvetlím vlastnými slovami hlavné pojmy z témy ${lesson.id},</li><li><span>02</span> dokončím a otestujem praktické zadanie podľa krokov,</li><li><span>03</span> ukážem dôkaz výsledku: ${lesson.evidence}</li></ul></section>
    <section class="lesson-section lesson-sources"><div><p class="eyebrow">PRIMÁRNE ZDROJE</p><h2>Dokumentácia Arduino</h2><p class="section-note">Podklady na ďalšie štúdium. Vysvetlenia a úlohy na tejto stránke sú pripravené pre toto cvičenie.</p></div><div class="resource-links">${sourceMarkup}</div></section>
    <nav class="lesson-nav" aria-label="Navigácia v kurze"><a href="${previousUrl}">← ${previousLesson ? `${previousLesson.id} · Predchádzajúca téma` : "Všetkých 18 tém"}</a><a class="next-link" href="${nextUrl}">Ďalšia: ${nextTitle} →</a></nav>`;

  const quizCard = document.querySelector("[data-quiz]");
  const feedback = quizCard.querySelector(".feedback");
  quizCard.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (quizCard.dataset.answered) return;
      quizCard.dataset.answered = "true";
      const correct = button.dataset.answer === "correct";
      button.classList.add(correct ? "answer-correct" : "answer-wrong");
      quizCard.querySelectorAll("[data-answer]").forEach((option) => {
        option.disabled = true;
        if (option.dataset.answer === "correct") option.classList.add("answer-reveal");
      });
      feedback.textContent = correct ? "Správne. " + lesson.quiz.explanation : "Skús si znova prejsť teoretické body. Správna odpoveď je zvýraznená. " + lesson.quiz.explanation;
      feedback.classList.add(correct ? "feedback-correct" : "feedback-wrong");
      document.querySelector("[data-score]").textContent = correct ? "1/1 správne" : "0/1 správne";
    });
  });
}

const lessonId = new URLSearchParams(window.location.search).get("tema")?.replace("-", ".");
const lesson = lessonData.find((item) => item.id === lessonId);

if (lesson) {
  renderLesson(lesson);
} else {
  document.getElementById("lesson-content").innerHTML = `
    <section class="not-found"><p class="eyebrow">TÉMA SA NENAŠLA</p><h1>Vráťme sa<br>na osnovu.</h1><p>Vyber tému z prehľadu všetkých cvičení.</p><a class="button button-primary" href="index.html#osnova">Otvoriť osnovu <span aria-hidden="true">→</span></a></section>`;
}
