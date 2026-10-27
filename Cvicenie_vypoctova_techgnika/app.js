const quizFeedback = {
  correct: "Správne. Odpoveď je započítaná.",
  wrong: "Nesprávne. Odpoveď je započítaná; správnu možnosť nájdeš vo vysvetlení učiva vyššie."
};

function initializePageSettings() {
  const body = document.body;
  const header = document.querySelector(".site-header");
  if (!header) return;

  const storedTheme = localStorage.getItem("vyt-theme");
  const storedView = localStorage.getItem("vyt-view");
  // Keep the engineering lab dark by default; visitors can select light mode.
  let theme = storedTheme === "light" ? "light" : "dark";
  let view = storedView === "teacher" ? "teacher" : "student";

  const controls = document.createElement("div");
  controls.className = "site-controls";

  const viewToggle = document.createElement("button");
  viewToggle.type = "button";
  viewToggle.className = "site-setting-button";
  viewToggle.setAttribute("aria-label", "Zmeniť pohľad stránky");

  const themeToggle = document.createElement("button");
  themeToggle.type = "button";
  themeToggle.className = "site-setting-button";
  themeToggle.setAttribute("aria-label", "Zmeniť farebný režim");

  function updateSettings() {
    body.classList.toggle("theme-light", theme === "light");
    body.classList.toggle("teacher-view", view === "teacher");
    viewToggle.setAttribute("aria-pressed", String(view === "teacher"));
    viewToggle.textContent = view === "teacher" ? "Pohľad: učiteľ" : "Pohľad: žiak";
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    themeToggle.textContent = theme === "light" ? "Tmavý režim" : "Svetlý režim";
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "light" ? "#f5f7fb" : "#0b1425"
    );
  }

  viewToggle.addEventListener("click", () => {
    view = view === "teacher" ? "student" : "teacher";
    localStorage.setItem("vyt-view", view);
    updateSettings();
  });

  themeToggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("vyt-theme", theme);
    updateSettings();
  });

  controls.append(viewToggle, themeToggle);
  header.append(controls);
  updateSettings();
}

initializePageSettings();

document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const buttons = [...quiz.querySelectorAll("[data-answer]")];
  const feedback = quiz.querySelector(".feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (quiz.dataset.answered) return;
      quiz.dataset.answered = "true";
      const isCorrect = button.dataset.answer === "correct";
      quiz.dataset.result = isCorrect ? "correct" : "wrong";
      button.classList.add(isCorrect ? "answer-correct" : "answer-wrong");
      buttons.forEach((answer) => {
        answer.disabled = true;
        if (answer.dataset.answer === "correct") answer.classList.add("answer-reveal");
      });
      feedback.textContent = isCorrect
        ? quizFeedback.correct
        : `${quizFeedback.wrong} Správna odpoveď je zvýraznená.`;
      feedback.classList.add(isCorrect ? "feedback-correct" : "feedback-wrong");

      const container = quiz.closest("section");
      const score = container.querySelector("[data-score]");
      const answered = container.querySelectorAll("[data-quiz][data-answered]").length;
      const correct = container.querySelectorAll('[data-quiz][data-result="correct"]').length;
      const total = container.querySelectorAll("[data-quiz]").length;
      score.textContent = `${answered}/${total} zodpovedané · ${correct}/${total} správne`;

      if (answered === total) {
        const percentage = Math.round((correct / total) * 100);
        const grade = getGrade(percentage);
        const result = container.querySelector("[data-quiz-result]");
        result.hidden = false;
        result.innerHTML = `<span class="phase">VÝSLEDOK PRECVIČOVANIA · NEODOSIELA SA UČITEĽOVI</span><strong>${correct}/${total} · ${percentage} %</strong><span>Známka ${grade.mark} — ${grade.description}</span>`;
      }
    });
  });
});

function getGrade(percentage) {
  if (percentage >= 90) return { mark: 1, description: "výborný" };
  if (percentage >= 75) return { mark: 2, description: "chválitebný" };
  if (percentage >= 50) return { mark: 3, description: "dobrý" };
  if (percentage >= 30) return { mark: 4, description: "dostatočný" };
  return { mark: 5, description: "nedostatočný" };
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = document.getElementById(button.dataset.copy);
    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = "Skopírované";
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = code.textContent;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      document.body.appendChild(fallback);
      fallback.select();

      try {
        if (!document.execCommand("copy")) throw new Error("Kopírovanie nebolo povolené.");
        button.textContent = "Skopírované";
      } catch {
        button.textContent = "Kopírovanie zablokované";
      } finally {
        fallback.remove();
      }
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
});

document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

const projectTaskInputs = [...document.querySelectorAll("[data-project-task]")];
const projectProgress = document.querySelector("[data-project-progress]");
const projectProgressBar = document.querySelector("[data-project-progress-bar]");
const projectResetButton = document.querySelector("[data-project-reset]");

if (projectTaskInputs.length && projectProgress && projectProgressBar) {
  const storageKey = `vyt-progress-${document.body.dataset.project || window.location.pathname}`;

  function updateProjectProgress(save = true) {
    const completed = projectTaskInputs.filter((input) => input.checked).length;
    projectProgress.textContent = `${completed} / ${projectTaskInputs.length} dokončených`;
    projectProgressBar.style.width = `${Math.round((completed / projectTaskInputs.length) * 100)}%`;
    projectProgressBar.parentElement.setAttribute("aria-valuenow", String(completed));
    projectTaskInputs.forEach((input) => {
      input.closest("[data-project-task-card]")?.classList.toggle("project-task-complete", input.checked);
    });

    if (save) {
      const completedTasks = projectTaskInputs
        .filter((input) => input.checked)
        .map((input) => input.dataset.projectTask);
      localStorage.setItem(storageKey, JSON.stringify(completedTasks));
    }
  }

  try {
    const savedTasks = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(savedTasks)) {
      projectTaskInputs.forEach((input) => {
        input.checked = savedTasks.includes(input.dataset.projectTask);
      });
    }
  } catch {
    localStorage.removeItem(storageKey);
  }

  projectTaskInputs.forEach((input) => {
    input.addEventListener("change", () => updateProjectProgress());
  });

  projectResetButton?.addEventListener("click", () => {
    projectTaskInputs.forEach((input) => {
      input.checked = false;
    });
    updateProjectProgress();
  });

  updateProjectProgress(false);
}

const simulatorButton = document.querySelector("[data-sim]");
if (simulatorButton) {
  const state = document.querySelector("[data-sim-state]");
  const copy = document.querySelector("[data-sim-copy]");
  const led = document.querySelector("[data-sim-led]");

  simulatorButton.addEventListener("click", () => {
    const pressed = simulatorButton.getAttribute("aria-pressed") !== "true";
    simulatorButton.setAttribute("aria-pressed", String(pressed));
    simulatorButton.textContent = pressed ? "Uvoľniť tlačidlo" : "Stlačiť tlačidlo";
    state.textContent = pressed ? "LOW" : "HIGH";
    copy.textContent = pressed ? "Tlačidlo je stlačené · pin je spojený s GND" : "Tlačidlo je uvoľnené";
    led.classList.toggle("sim-led-on", pressed);
  });
}
