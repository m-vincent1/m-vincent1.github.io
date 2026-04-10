/* ============================================================
   main.js — Global portfolio logic
   Dark mode, mobile menu, CV modal, chatbot, side animations,
   contact form, active nav
   ============================================================ */

/* ── CONFIG ── */
const CONTACT_EMAIL = "mathisvincent446@gmail.com"; // Change if needed
const CV_PATH = "assets/CV-Mathis-Vincent.pdf";

/* ============================================================
   1. DARK MODE
   ============================================================ */
function applyDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("darkMode", isDark ? "true" : "false");
  // Update icon
  const icon = document.getElementById("dark-mode-icon");
  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.contains("dark");
  applyDarkMode(!isDark);
}

/* ============================================================
   2. MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const mobileBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () =>
        mobileMenu.classList.add("hidden")
      );
    });
  }
}

/* ============================================================
   3. ACTIVE NAV HIGHLIGHT
   ============================================================ */
function highlightActiveNav() {
  const currentPath =
    window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPath) {
      link.classList.add("text-slate-900", "dark:text-white", "font-semibold");
      link.classList.remove("text-slate-500");
    }
  });
}

/* ============================================================
   4. CV MODAL
   ============================================================ */
function createCVModal() {
  const modal = document.createElement("div");
  modal.id = "cv-modal";
  modal.className =
    "fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm p-4";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  modal.innerHTML = `
    <div class="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white" data-i18n="cv_modal_title">Aperçu du CV</h2>
        <div class="flex items-center gap-3">
          <a href="${CV_PATH}" download
             class="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition"
             data-i18n="cv_modal_download">
            Télécharger
          </a>
          <button id="cv-modal-close"
                  class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                  aria-label="Fermer" data-i18n-aria-label="cv_modal_close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-1 overflow-auto p-2">
        <iframe src="${CV_PATH}" class="w-full h-full rounded-lg border-0" title="CV Preview"></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close handlers
  const closeBtn = document.getElementById("cv-modal-close");
  closeBtn?.addEventListener("click", closeCVModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCVModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCVModal();
  });
}

function openCVModal() {
  const modal = document.getElementById("cv-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeCVModal() {
  const modal = document.getElementById("cv-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

function initCVButtons() {
  document.querySelectorAll("[data-cv-preview]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCVModal();
    });
  });
}

/* ============================================================
   5. SIDE ANIMATIONS
   ============================================================ */
function createSideAnimations() {
  const leftContainer = document.createElement("div");
  leftContainer.className =
    "side-anim side-anim-left fixed left-0 top-0 w-12 h-full pointer-events-none z-10 hidden lg:flex flex-col items-center justify-center gap-1 overflow-hidden";

  const rightContainer = document.createElement("div");
  rightContainer.className =
    "side-anim side-anim-right fixed right-0 top-0 w-12 h-full pointer-events-none z-10 hidden lg:flex flex-col items-center justify-center gap-1 overflow-hidden";

  const barCount = 20;

  for (let i = 0; i < barCount; i++) {
    const leftBar = document.createElement("div");
    leftBar.className = "side-bar";
    leftBar.style.animationDelay = `${i * 0.15}s`;
    leftBar.style.animationDuration = `${2 + Math.random() * 2}s`;
    leftContainer.appendChild(leftBar);

    const rightBar = document.createElement("div");
    rightBar.className = "side-bar";
    rightBar.style.animationDelay = `${i * 0.15 + 0.07}s`;
    rightBar.style.animationDuration = `${2 + Math.random() * 2}s`;
    rightContainer.appendChild(rightBar);
  }

  document.body.appendChild(leftContainer);
  document.body.appendChild(rightContainer);
}

/* ============================================================
   6. CHATBOT
   ============================================================ */
const chatbotKnowledge = {
  fr: {
    profil: "Mathis Vincent est étudiant ingénieur en 4ème année à l'ESAIP, spécialisé en Informatique & Réseaux. Il est curieux, méthodique et orienté résultats.",
    competences: "Mathis maîtrise Python, le support IT, la maintenance informatique, les réseaux, HTML/CSS, les bases en cybersécurité, UML et AWS Cloud. En soft skills : communication, travail en équipe, résolution de problèmes, adaptabilité et autonomie.",
    experiences: "Mathis a réalisé un stage de 3 mois chez 3Sigmas-Studios à Budapest (2025), un stage de 2 mois chez AVA6 à Lyon (2023), un stage d'1 mois au Lycée Les Lazaristes (2021), et un travail saisonnier de cueillette de fruits (2023).",
    disponibilite: "Mathis recherche un stage de 2 mois pour 2026 ou une alternance de 6 mois de janvier 2027 à juin 2027.",
    contact: "Vous pouvez contacter Mathis par email à mathisvincent446@gmail.com ou par téléphone au +33 6 77 07 42 51.",
    benevolat: "Mathis est bénévole depuis sa 3ème année chez Cop1 Solidarités Étudiantes à Angers, où il participe aux distributions alimentaires et au soutien des étudiants en précarité.",
    formation: "Mathis est actuellement en 4ème année d'ingénieur à l'ESAIP (École Supérieure Angevine d'Informatique et de Productique), spécialisation Informatique & Réseaux.",
    cv: "Vous pouvez consulter et télécharger le CV de Mathis directement depuis le site en cliquant sur le bouton 'Télécharger mon CV' dans la barre de navigation.",
    linkedin: "Le profil LinkedIn de Mathis est accessible à : linkedin.com/in/mathis-vincent-224b24257",
  },
  en: {
    profil: "Mathis Vincent is a 4th-year engineering student at ESAIP, specializing in Computer & Network Engineering. He is curious, methodical and result-oriented.",
    competences: "Mathis is skilled in Python, IT support, hardware maintenance, networks, HTML/CSS, cybersecurity basics, UML and AWS Cloud. Soft skills: communication, teamwork, problem solving, adaptability and autonomy.",
    experiences: "Mathis completed a 3-month internship at 3Sigmas-Studios in Budapest (2025), a 2-month internship at AVA6 in Lyon (2023), a 1-month internship at Lycée Les Lazaristes (2021), and seasonal fruit picking work (2023).",
    disponibilite: "Mathis is looking for a 2-month internship in 2026 or a 6-month work-study from January to June 2027.",
    contact: "You can reach Mathis by email at mathisvincent446@gmail.com or by phone at +33 6 77 07 42 51.",
    benevolat: "Mathis has been volunteering since his 3rd year with Cop1 Solidarités Étudiantes in Angers, participating in food distributions and support for students in need.",
    formation: "Mathis is currently in his 4th year of engineering at ESAIP (École Supérieure Angevine d'Informatique et de Productique), specializing in Computer & Network Engineering.",
    cv: "You can view and download Mathis's CV directly from the site by clicking the 'Download my CV' button in the navigation bar.",
    linkedin: "Mathis's LinkedIn profile is available at: linkedin.com/in/mathis-vincent-224b24257",
  },
};

const chatbotKeywords = {
  profil: ["profil", "profile", "qui", "who", "présente", "introduce", "about", "toi", "you", "mathis"],
  competences: ["compétence", "competence", "skill", "technique", "technical", "python", "html", "css", "network", "réseau", "cyber", "aws", "cloud", "uml", "soft"],
  experiences: ["expérience", "experience", "stage", "internship", "travail", "work", "emploi", "job", "ava6", "sigmas", "lazaristes", "fruit", "budapest", "lyon"],
  disponibilite: ["disponible", "available", "disponibilité", "availability", "recherche", "looking", "stage", "alternance", "work-study", "2026", "2027"],
  contact: ["contact", "email", "mail", "téléphone", "phone", "joindre", "reach"],
  benevolat: ["bénévolat", "volunteering", "volunteer", "cop1", "association", "solidarité", "solidarity"],
  formation: ["formation", "education", "école", "school", "esaip", "ingénieur", "engineer", "étude", "study"],
  cv: ["cv", "curriculum", "resume", "télécharger", "download"],
  linkedin: ["linkedin", "réseau social", "social network"],
};

function getChatbotResponse(message) {
  const lang = localStorage.getItem("siteLanguage") || "fr";
  const knowledge = chatbotKnowledge[lang] || chatbotKnowledge.fr;
  const dict = translations[lang] || translations.fr;
  const lower = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let bestKey = null;
  let bestScore = 0;

  for (const [key, keywords] of Object.entries(chatbotKeywords)) {
    let score = 0;
    for (const kw of keywords) {
      const kwNorm = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (lower.includes(kwNorm)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }

  return bestKey && bestScore > 0
    ? knowledge[bestKey]
    : dict.chatbot_no_answer;
}

function createChatbot() {
  const lang = localStorage.getItem("siteLanguage") || "fr";
  const dict = translations[lang] || translations.fr;

  const chatbot = document.createElement("div");
  chatbot.id = "chatbot-container";
  chatbot.innerHTML = `
    <button id="chatbot-toggle" class="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition flex items-center justify-center text-2xl" aria-label="Chatbot">
      🤖
    </button>
    <div id="chatbot-window" class="fixed bottom-24 right-6 z-[90] hidden w-80 sm:w-96 max-h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col bg-white dark:bg-slate-800">
      <div class="flex items-center justify-between px-4 py-3 bg-primary text-white rounded-t-2xl">
        <span class="font-semibold text-sm" data-i18n="chatbot_title">${dict.chatbot_title}</span>
        <button id="chatbot-close" class="text-white hover:text-slate-200 text-lg leading-none">&times;</button>
      </div>
      <div id="chatbot-messages" class="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[340px]">
        <div class="chatbot-msg bot text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl rounded-tl-sm px-3 py-2">${dict.chatbot_welcome}</div>
      </div>
      <div class="border-t border-slate-200 dark:border-slate-700 p-3 flex gap-2">
        <input id="chatbot-input" type="text" class="flex-1 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" data-i18n-placeholder="chatbot_placeholder" placeholder="${dict.chatbot_placeholder}">
        <button id="chatbot-send" class="rounded-xl bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(chatbot);

  const toggleBtn = document.getElementById("chatbot-toggle");
  const window_ = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close");
  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");

  toggleBtn?.addEventListener("click", () => {
    window_.classList.toggle("hidden");
    if (!window_.classList.contains("hidden")) {
      input?.focus();
    }
  });

  closeBtn?.addEventListener("click", () => {
    window_.classList.add("hidden");
  });

  function sendMessage() {
    const msg = input?.value?.trim();
    if (!msg) return;

    addChatMessage(msg, "user");
    input.value = "";

    setTimeout(() => {
      const response = getChatbotResponse(msg);
      addChatMessage(response, "bot");
    }, 400);
  }

  sendBtn?.addEventListener("click", sendMessage);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

function addChatMessage(text, sender) {
  const container = document.getElementById("chatbot-messages");
  if (!container) return;
  const div = document.createElement("div");
  if (sender === "user") {
    div.className =
      "chatbot-msg user text-sm bg-primary text-white rounded-xl rounded-tr-sm px-3 py-2 ml-auto max-w-[80%]";
  } else {
    div.className =
      "chatbot-msg bot text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]";
  }
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ============================================================
   7. CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem("siteLanguage") || "fr";
    const dict = translations[lang] || translations.fr;

    const name = form.querySelector("#contact-name")?.value?.trim();
    const email = form.querySelector("#contact-email")?.value?.trim();
    const message = form.querySelector("#contact-message")?.value?.trim();
    const statusEl = document.getElementById("contact-status");

    if (!name || !email || !message) {
      if (statusEl) {
        statusEl.textContent = dict.contact_form_validation;
        statusEl.className = "text-sm text-red-500 mt-2";
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      // Using Web3Forms — Replace YOUR_ACCESS_KEY with your actual key from https://web3forms.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4768cffe-f994-418c-ab9b-ff26462402b6",
          name,
          email,
          message,
          to: CONTACT_EMAIL,
          subject: `Portfolio Contact — ${name}`,
        }),
      });

      if (res.ok) {
        if (statusEl) {
          statusEl.textContent = dict.contact_form_success;
          statusEl.className = "text-sm text-green-500 mt-2";
        }
        form.reset();
      } else {
        throw new Error("Error");
      }
    } catch {
      if (statusEl) {
        statusEl.textContent = dict.contact_form_error;
        statusEl.className = "text-sm text-red-500 mt-2";
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ============================================================
   8. INJECT GLOBAL STYLES (side animations + dark mode extras)
   ============================================================ */
function injectGlobalStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── Side bar animation ── */
    @keyframes sideBarUp {
      0% { transform: translateY(100%); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
    @keyframes sideBarDown {
      0% { transform: translateY(-100%); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }

    .side-bar {
      width: 3px;
      height: 18px;
      border-radius: 2px;
      background: rgba(255,255,255,0.18);
      animation: sideBarUp 3s ease-in-out infinite alternate;
    }
    .side-bar:nth-child(even) {
      animation-name: sideBarDown;
    }

    /* Dark mode side bars */
    .dark .side-bar {
      background: rgba(37, 99, 235, 0.2);
    }

    /* ── Dark mode transition ── */
    *, *::before, *::after {
      transition: background-color 0.25s ease, border-color 0.25s ease, color 0.15s ease;
    }

    /* ── Chatbot animations ── */
    #chatbot-window {
      animation: chatSlideUp 0.25s ease-out;
    }
    @keyframes chatSlideUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ── Focus visible ── */
    :focus-visible {
      outline: 2px solid #2563eb;
      outline-offset: 2px;
    }

    /* ── Scrollbar in dark mode ── */
    .dark ::-webkit-scrollbar { width: 6px; }
    .dark ::-webkit-scrollbar-track { background: #1e293b; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }

    /* ── Smooth appear ── */
    .appear-anim {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .appear-anim.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

/* ============================================================
   9. SCROLL APPEAR ANIMATION
   ============================================================ */
function initAppearAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll("article, section > .space-y-4, .rounded-2xl, .rounded-3xl").forEach((el) => {
    el.classList.add("appear-anim");
    observer.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Global styles
  injectGlobalStyles();

  // Dark mode
  const savedDark = localStorage.getItem("darkMode") === "true";
  applyDarkMode(savedDark);

  // Mobile menu
  initMobileMenu();

  // Active nav
  highlightActiveNav();

  // CV modal
  createCVModal();
  initCVButtons();

  // Side animations
  createSideAnimations();

  // Chatbot
  createChatbot();

  // Contact form
  initContactForm();

  // Scroll appear animations
  setTimeout(() => initAppearAnimations(), 100);
});
