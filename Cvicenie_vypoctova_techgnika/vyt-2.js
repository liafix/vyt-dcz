/* VYT 2.0: additive, offline-capable enhancements. No third-party runtime. */
(() => {
  "use strict";
  const $ = (selector, within = document) => within.querySelector(selector);
  const $$ = (selector, within = document) => [...within.querySelectorAll(selector)];
  const page = location.pathname.split("/").pop() || "index.html";
  const header = $(".site-header");
  if (header) {
    const nav = document.createElement("nav");
    nav.className = "vyt-commandbar";
    nav.setAttribute("aria-label", "Rýchla navigácia pre vyučovanie");
    const links = [
      { href:"index.html#osnova", text:"Osnova", pages:["index.html"] },
      { href:"cvicenie-1.html#laboratorium", text:"01 · Digitálne I/O", pages:["cvicenie-1.html"] },
      { href:"cvicenie-2.html#laboratorium", text:"02 · Pull-up/down", pages:["cvicenie-2.html"] },
      { href:"prednaska.html", text:"Plán hodiny", pages:["prednaska.html"] }
    ];
    const brand = document.createElement("span");
    brand.className = "vyt-command-brand";
    brand.textContent = "VYT / DIGITAL ENGINEERING LAB";
    const linksContainer = document.createElement("div");
    linksContainer.className = "vyt-command-links";
    links.forEach(({href,text,pages}) => {
      const a = document.createElement("a");
      a.href = href; a.textContent = text;
      if (pages.includes(page)) a.setAttribute("aria-current", "page");
      linksContainer.append(a);
    });
    const focus = document.createElement("button");
    focus.type = "button";
    focus.className = "vyt-command-primary";
    focus.textContent = "◫ Premietanie";
    focus.title = "Režim na projektor (kláves F). Esc ho vypne.";
    const storage = "vyt-focus";
    let active = false;
    try { active = sessionStorage.getItem(storage) === "1"; } catch { /* private mode */ }
    function setFocus(on) {
      active = on;
      document.body.classList.toggle("vyt-focus", on);
      focus.setAttribute("aria-pressed", String(on));
      focus.textContent = on ? "× Bežné zobrazenie" : "◫ Premietanie";
      try { sessionStorage.setItem(storage, on ? "1" : "0"); } catch { /* private mode */ }
    }
    focus.addEventListener("click", () => setFocus(!active));
    window.addEventListener("keydown", e => {
      const target = e.target;
      if (target?.matches?.("input, textarea, select, [contenteditable='true']")) return;
      if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.altKey && !e.metaKey) { e.preventDefault(); setFocus(!active); }
      if (e.key === "Escape" && active) setFocus(false);
    });
    linksContainer.append(focus);
    nav.append(brand, linksContainer);
    header.insertAdjacentElement("afterend", nav);
    setFocus(active);
  }

  const lab = $("[data-vyt-lab]");
  if (lab) {
    const state = {
      mode: lab.dataset.vytDefaultMode === "pulldown" ? "pulldown" : "pullup",
      pressed: false,
      events: [],
      step: 0
    };
    const modeButtons = $$('[data-vyt-mode]', lab);
    const press = $('[data-vyt-press]', lab);
    const readout = $('[data-vyt-state]', lab);
    const output = $('[data-vyt-output]', lab);
    const led = $('[data-vyt-led]', lab);
    const ledGlow = $('[data-vyt-led-glow]', lab);
    const ledLabel = $('[data-vyt-led-label]', lab);
    const explanation = $('[data-vyt-explanation]', lab);
    const event = $('[data-vyt-event]', lab);
    const circuitLabel = $('[data-vyt-circuit-label]', lab);
    const wave = $('[data-vyt-wave]', lab);
    const waveLabel = $('[data-vyt-wave-label]', lab);
    const code = $('[data-vyt-code]', lab);
    const nextStep = $('[data-vyt-step]', lab);
    const stepLabel = $('[data-vyt-step-label]', lab);
    const why = $('[data-vyt-why]', lab);
    const steps = ["1 / 4 · Konfigurácia", "2 / 4 · Čítanie vstupu", "3 / 4 · Rozhodnutie", "4 / 4 · Výstup LED"];
    function isHigh() { return state.mode === "pullup" ? !state.pressed : state.pressed; }
    function isOn() { return state.pressed; }
    function codeLines() {
      const pullup = state.mode === "pullup";
      return [
        'const int LED_PIN = 8;',
        'const int BUTTON_PIN = 2;',
        '',
        'void setup() {',
        '  pinMode(LED_PIN, OUTPUT);',
        `  pinMode(BUTTON_PIN, ${pullup ? 'INPUT_PULLUP' : 'INPUT'});`,
        '}',
        '',
        'void loop() {',
        '  int stav = digitalRead(BUTTON_PIN);',
        `  if (stav == ${pullup ? 'LOW' : 'HIGH'}) {`,
        '    digitalWrite(LED_PIN, HIGH);',
        '  } else {',
        '    digitalWrite(LED_PIN, LOW);',
        '  }',
        '}'
      ];
    }
    function renderCode() {
      const selection = [[4,5],[9],[10],[11,13]][state.step - 1] || [];
      code.replaceChildren(...codeLines().map((line, idx) => {
        const span = document.createElement('span');
        span.className = `vyt-code-line${selection.includes(idx) ? ' is-current' : ''}`;
        span.textContent = line || ' ';
        return span;
      }));
      stepLabel.textContent = state.step ? steps[state.step - 1] : '0 / 4 · Vyber krok';
    }
    function plot() {
      const ev = state.events;
      const left = 45, right = 647, top = 32, bottom = 95;
      const min = Math.max(1, ev.length - 1);
      let d = `M${left} ${ev[0] ? top : bottom}`;
      ev.forEach((high, i) => {
        const x = left + i * (right - left) / min;
        d += ` H${x.toFixed(1)} V${high ? top : bottom}`;
      });
      d += ` H${right}`;
      wave.setAttribute('d', d);
    }
    function render(remember = true) {
      const high = isHigh(), on = isOn();
      readout.textContent = high ? 'HIGH' : 'LOW';
      output.textContent = on ? 'HIGH' : 'LOW';
      waveLabel.textContent = high ? 'HIGH' : 'LOW';
      press.setAttribute('aria-pressed', String(state.pressed));
      press.innerHTML = state.pressed ? '○ &nbsp; UVOĽNIŤ TLAČIDLO <span>↵</span>' : '● &nbsp; STLAČIŤ TLAČIDLO <span>↵</span>';
      led.classList.toggle('is-on', on);
      ledGlow.setAttribute('opacity', on ? '.85' : '.07');
      ledLabel.textContent = `LED / ${on ? 'ZAPNUTÁ' : 'VYPNUTÁ'}`;
      circuitLabel.textContent = state.mode === 'pullup' ? 'INTERNAL PULL-UP' : 'EXTERNAL PULL-DOWN';
      event.textContent = state.pressed ? 'BUTTON: PRESSED' : 'BUTTON: RELEASED';
      modeButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.vytMode === state.mode)));
      $$('[data-vyt-svg]', lab).forEach(group => { group.style.display = group.dataset.vytSvg === state.mode ? '' : 'none'; });
      $$('[data-vyt-switch]', lab).forEach(switchPath => switchPath.setAttribute('d', state.pressed ? 'M447 124 L492 124' : 'M447 124 L485 104'));
      explanation.textContent = state.mode === 'pullup'
        ? (state.pressed ? 'Tlačidlo uzavrie D2 na GND: LOW. Program rozsvieti LED na D8.' : 'Interný pull-up drží D2 na HIGH. LED na D8 zostáva vypnutá.')
        : (state.pressed ? 'Tlačidlo pripojí D2 na +5 V: HIGH. Program rozsvieti LED na D8.' : 'Externý 10 kΩ pull-down drží D2 na LOW. LED na D8 zostáva vypnutá.');
      why.textContent = state.mode === 'pullup'
        ? 'INPUT_PULLUP: stlačené = LOW. Podmienka if (stav == LOW) zapne LED.'
        : 'Externý pull-down s INPUT: stlačené = HIGH. Podmienka if (stav == HIGH) zapne LED.';
      if (remember) state.events.push(high);
      if (state.events.length > 12) state.events.shift();
      if (!state.events.length) state.events.push(high);
      plot();
      renderCode();
    }
    modeButtons.forEach(btn => btn.addEventListener('click', () => {
      if (state.mode === btn.dataset.vytMode) return;
      state.mode = btn.dataset.vytMode;
      state.pressed = false;
      state.step = 0;
      state.events = [];
      render();
    }));
    press.addEventListener('click', () => { state.pressed = !state.pressed; render(); });
    $('[data-vyt-reset]',lab).addEventListener('click', () => { state.events = []; render(); });
    nextStep.addEventListener('click', () => { state.step = state.step % 4 + 1; render(false); });
    render();
  }

  // Quiz announcements on old pages remain owned by app.js. Provide visual only.
  $$('[data-quiz] .feedback').forEach(item => item.setAttribute('role','status'));

  // Only install reveal visibility transitions if the browser supports them.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const candidates = $$('.course-intro,.unit-block,.resource-section,.lesson-section .section-heading,.vyt-lecture-feature,.lesson-card,.topic-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('vyt-inview');
        observer.unobserve(entry.target);
      });
    },{threshold:.05,rootMargin:'0px 0px 65px 0px'});
    candidates.forEach(item => { item.dataset.vytReveal='';observer.observe(item); });
    document.documentElement.classList.add('vyt-motion-ready');
    requestAnimationFrame(() => {
      // Prevent any initial visible content from being hidden while awaiting an observer callback.
      candidates.filter(item=>item.getBoundingClientRect().top < innerHeight).forEach(item=>item.classList.add('vyt-inview'));
    });
  }
})();
