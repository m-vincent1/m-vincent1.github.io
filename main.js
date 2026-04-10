/* ============================================================
   main.js — Global portfolio logic
   Dark mode, mobile menu, CV modal, chatbot, side animations,
   contact form, avis modal, active nav
   ============================================================ */

/* ── CONFIG ── */
const CONTACT_EMAIL = "mathisvincent446@gmail.com";
const CV_PATH = "assets/CV-Mathis-Vincent.pdf";

/* ============================================================
   1. DARK MODE
   ============================================================ */
function updateDarkModeButtonText() {
  const lang = localStorage.getItem("siteLanguage") || "fr";
  const dict = translations[lang] || translations.fr;
  const isDark = document.documentElement.classList.contains("dark");
  const btn = document.getElementById("dark-mode-toggle");
  if (btn) {
    btn.textContent = isDark ? dict.dark_mode_light : dict.dark_mode_dark;
  }
}

function applyDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("darkMode", isDark ? "true" : "false");
  updateDarkModeButtonText();
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
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }
}

/* ============================================================
   3. ACTIVE NAV HIGHLIGHT
   ============================================================ */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
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
  modal.className = "fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm p-4";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  modal.innerHTML = `
    <div class="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white" data-i18n="cv_modal_title">Aperçu du CV</h2>
        <div class="flex items-center gap-3">
          <a href="${CV_PATH}" download class="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition" data-i18n="cv_modal_download">Télécharger</a>
          <button id="cv-modal-close" class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition" aria-label="Fermer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div class="flex-1 overflow-auto p-2">
        <iframe src="${CV_PATH}" class="w-full h-full rounded-lg border-0" title="CV Preview"></iframe>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("cv-modal-close")?.addEventListener("click", closeCVModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeCVModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeCVModal(); closeAvisModal(); } });
}

function openCVModal() {
  const modal = document.getElementById("cv-modal");
  if (modal) { modal.classList.remove("hidden"); modal.classList.add("flex"); document.body.style.overflow = "hidden"; }
}
function closeCVModal() {
  const modal = document.getElementById("cv-modal");
  if (modal) { modal.classList.add("hidden"); modal.classList.remove("flex"); document.body.style.overflow = ""; }
}
function initCVButtons() {
  document.querySelectorAll("[data-cv-preview]").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.preventDefault(); openCVModal(); });
  });
}

/* ============================================================
   5. AVIS ENTREPRISE MODAL
   ============================================================ */
function createAvisModal() {
  const modal = document.createElement("div");
  modal.id = "avis-modal";
  modal.className = "fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm p-4";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  modal.innerHTML = `
    <div class="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white" data-i18n="avis_modal_title">Avis entreprise</h2>
        <button id="avis-modal-close" class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition" aria-label="Fermer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div id="avis-modal-body" class="flex-1 overflow-auto p-2">
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("avis-modal-close")?.addEventListener("click", closeAvisModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeAvisModal(); });
}

function openAvisModal(filePath) {
  const modal = document.getElementById("avis-modal");
  const body = document.getElementById("avis-modal-body");
  if (!modal || !body) return;

  // Detect file type
  const ext = filePath.split('.').pop().toLowerCase();
  if (ext === 'pdf') {
    body.innerHTML = `<iframe src="${filePath}" class="w-full h-full rounded-lg border-0" title="Avis entreprise"></iframe>`;
  } else {
    // Image file (jpg, png, etc.)
    body.innerHTML = `<img src="${filePath}" alt="Avis entreprise" class="w-full h-auto rounded-lg object-contain" />`;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeAvisModal() {
  const modal = document.getElementById("avis-modal");
  if (modal) { modal.classList.add("hidden"); modal.classList.remove("flex"); document.body.style.overflow = ""; }
}

function initAvisButtons() {
  document.querySelectorAll("[data-avis-file]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openAvisModal(btn.dataset.avisFile);
    });
  });
}

/* ============================================================
   6. SIDE ANIMATIONS
   ============================================================ */
function createSideAnimations() {
  const leftContainer = document.createElement("div");
  leftContainer.className = "fixed left-0 xl:left-4 top-0 w-24 h-full pointer-events-none z-0 hidden lg:flex gap-4 justify-center overflow-hidden";
  
  const rightContainer = document.createElement("div");
  rightContainer.className = "fixed right-0 xl:right-4 top-0 w-24 h-full pointer-events-none z-0 hidden lg:flex gap-4 justify-center overflow-hidden";

  function createTrack(isUp) {
    const track = document.createElement("div");
    track.className = "relative w-12 h-full";
    for (let i = 0; i < 5; i++) {
        const block = document.createElement("div");
        block.className = `w-12 h-40 rounded-xl absolute ${isUp ? 'anim-block-up' : 'anim-block-down'}`;
        block.style.animationDelay = `${i * (20 / 5)}s`;
        track.appendChild(block);
    }
    return track;
  }

  leftContainer.appendChild(createTrack(true));
  leftContainer.appendChild(createTrack(false));
  
  rightContainer.appendChild(createTrack(true));
  rightContainer.appendChild(createTrack(false));

  document.body.appendChild(leftContainer);
  document.body.appendChild(rightContainer);
}

/* ============================================================
   7. CHATBOT
   ============================================================ */
const chatbotKnowledge = {
  fr: {
    profil: "Mathis Vincent est étudiant ingénieur en 4ème année à l'ESAIP, spécialisé en Informatique & Réseaux. Il est curieux, méthodique et orienté résultats.",
    competences: "Mathis maîtrise Python, C++, Java, le support IT, la maintenance informatique, les réseaux, HTML/CSS, QML/Felgo, la cybersécurité, UML, AWS Cloud et SQL. En soft skills : communication efficace, esprit d'équipe, service client, apprentissage rapide, motivation, résolution de problèmes, adaptabilité et flexibilité.",
    experiences: "Mathis a réalisé un stage de 3 mois chez 3Sigmas-Studios à Budapest (2025), un stage de 2 mois chez AVA6 à Lyon (2023), un stage d'1 mois au Lycée Les Lazaristes (2021), et un travail saisonnier de cueillette de fruits (2023).",
    disponibilite: "Mathis recherche un stage de 2 mois pour 2026 ou une alternance de 6 mois de janvier 2027 à juin 2027.",
    contact: "Vous pouvez contacter Mathis par email à mathisvincent446@gmail.com ou par téléphone au +33 6 77 07 42 51.",
    benevolat: "Mathis est bénévole depuis sa 3ème année chez Cop1 Solidarités Étudiantes à Angers, où il participe aux distributions alimentaires et au soutien des étudiants en précarité.",
    formation: "Mathis est actuellement en 4ème année d'ingénieur à l'ESAIP, spécialisation Informatique & Réseaux.",
    cv: "Vous pouvez consulter et télécharger le CV de Mathis directement depuis le site en cliquant sur le bouton 'Télécharger mon CV' dans la barre de navigation.",
    linkedin: "Le profil LinkedIn de Mathis est accessible à : linkedin.com/in/mathis-vincent-224b24257",
  },
  en: {
    profil: "Mathis Vincent is a 4th-year engineering student at ESAIP, specializing in Computer & Network Engineering. He is curious, methodical and result-oriented.",
    competences: "Mathis is skilled in Python, C++, Java, IT support, hardware maintenance, networks, HTML/CSS, QML/Felgo, cybersecurity, UML, AWS Cloud and SQL. Soft skills: effective communication, teamwork, customer service, quick learner, motivated, problem solving, adaptability and flexibility.",
    experiences: "Mathis completed a 3-month internship at 3Sigmas-Studios in Budapest (2025), a 2-month internship at AVA6 in Lyon (2023), a 1-month internship at Lycée Les Lazaristes (2021), and seasonal fruit picking work (2023).",
    disponibilite: "Mathis is looking for a 2-month internship in 2026 or a 6-month work-study from January to June 2027.",
    contact: "You can reach Mathis by email at mathisvincent446@gmail.com or by phone at +33 6 77 07 42 51.",
    benevolat: "Mathis has been volunteering since his 3rd year with Cop1 Solidarités Étudiantes in Angers.",
    formation: "Mathis is currently in his 4th year of engineering at ESAIP, specializing in Computer & Network Engineering.",
    cv: "You can view and download Mathis's CV directly from the site by clicking the 'Download my CV' button.",
    linkedin: "Mathis's LinkedIn profile is available at: linkedin.com/in/mathis-vincent-224b24257",
  },
};

const chatbotKeywords = {
  profil: ["profil", "profile", "qui", "who", "présente", "introduce", "about", "toi", "you", "mathis"],
  competences: ["compétence", "competence", "skill", "technique", "technical", "python", "html", "css", "network", "réseau", "cyber", "aws", "cloud", "uml", "soft", "java", "c++", "sql", "qml", "felgo"],
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
    if (score > bestScore) { bestScore = score; bestKey = key; }
  }
  return bestKey && bestScore > 0 ? knowledge[bestKey] : dict.chatbot_no_answer;
}

function createChatbot() {
  const lang = localStorage.getItem("siteLanguage") || "fr";
  const dict = translations[lang] || translations.fr;

  const chatbot = document.createElement("div");
  chatbot.id = "chatbot-container";
  chatbot.innerHTML = `
    <button id="chatbot-toggle" class="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition flex items-center justify-center text-2xl" aria-label="Chatbot">🤖</button>
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
  const win = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close");
  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");

  toggleBtn?.addEventListener("click", () => { win.classList.toggle("hidden"); if (!win.classList.contains("hidden")) input?.focus(); });
  closeBtn?.addEventListener("click", () => win.classList.add("hidden"));

  function sendMessage() {
    const msg = input?.value?.trim();
    if (!msg) return;
    addChatMessage(msg, "user");
    input.value = "";
    setTimeout(() => addChatMessage(getChatbotResponse(msg), "bot"), 400);
  }
  sendBtn?.addEventListener("click", sendMessage);
  input?.addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage(); });
}

function addChatMessage(text, sender) {
  const container = document.getElementById("chatbot-messages");
  if (!container) return;
  const div = document.createElement("div");
  div.className = sender === "user"
    ? "chatbot-msg user text-sm bg-primary text-white rounded-xl rounded-tr-sm px-3 py-2 ml-auto max-w-[80%]"
    : "chatbot-msg bot text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]";
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ============================================================
   8. CONTACT FORM
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
      if (statusEl) { statusEl.textContent = dict.contact_form_validation; statusEl.className = "text-sm text-red-500 mt-2"; }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4768cffe-f994-418c-ab9b-ff26462402b6",
          name, email, message,
          to: CONTACT_EMAIL,
          subject: `Portfolio Contact — ${name}`,
        }),
      });
      if (res.ok) {
        if (statusEl) { statusEl.textContent = dict.contact_form_success; statusEl.className = "text-sm text-green-500 mt-2"; }
        form.reset();
      } else { throw new Error("Error"); }
    } catch {
      if (statusEl) { statusEl.textContent = dict.contact_form_error; statusEl.className = "text-sm text-red-500 mt-2"; }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ============================================================
   9. INJECT GLOBAL STYLES
   ============================================================ */
function injectGlobalStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .anim-block-up, .anim-block-down { border: 2px solid rgba(0,0,0,0.03); background-color: rgba(0,0,0,0.015); box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
    .dark .anim-block-up, .dark .anim-block-down { border-color: rgba(255,255,255,0.03); background-color: rgba(255,255,255,0.015); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .anim-block-up { animation: floatUp 24s linear infinite; top: 0; left: 0; }
    .anim-block-down { animation: floatDown 24s linear infinite; top: 0; left: 0; }
    @keyframes floatUp { 0%{transform:translateY(110vh);opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{transform:translateY(-200px);opacity:0} }
    @keyframes floatDown { 0%{transform:translateY(-200px);opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{transform:translateY(110vh);opacity:0} }
    *,*::before,*::after { transition:background-color 0.25s ease,border-color 0.25s ease,color 0.15s ease; }
    #chatbot-window { animation:chatSlideUp 0.25s ease-out; }
    @keyframes chatSlideUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
    :focus-visible { outline:2px solid #2563eb; outline-offset:2px; }
    .dark ::-webkit-scrollbar { width:6px; }
    .dark ::-webkit-scrollbar-track { background:#1e293b; }
    .dark ::-webkit-scrollbar-thumb { background:#475569; border-radius:3px; }
    .appear-anim { opacity:0; transform:translateY(20px); transition:opacity 0.5s ease,transform 0.5s ease; }
    .appear-anim.visible { opacity:1; transform:translateY(0); }
    #lang-dropdown { animation:chatSlideUp 0.15s ease-out; }
    article.rounded-2xl, article.rounded-3xl { transition:transform 0.2s ease, box-shadow 0.2s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.15s ease; }
    article.rounded-2xl:hover, article.rounded-3xl:hover { transform:scale(1.02); box-shadow:0 8px 30px rgba(0,0,0,0.08); }
    .dark article.rounded-2xl:hover, .dark article.rounded-3xl:hover { box-shadow:0 8px 30px rgba(0,0,0,0.25); }
    li.rounded-full { transition:transform 0.2s ease, background-color 0.2s ease, color 0.2s ease; cursor: default; }
    li.rounded-full:hover { transform:scale(1.05); background-color:#2563eb !important; color:#ffffff !important; }
  `;
  document.head.appendChild(style);
}

/* ============================================================
   10. SCROLL APPEAR ANIMATION
   ============================================================ */
function initAppearAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll("article, section > .space-y-4, .rounded-2xl, .rounded-3xl").forEach((el) => {
    el.classList.add("appear-anim");
    observer.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  injectGlobalStyles();
  const savedDark = localStorage.getItem("darkMode") === "true";
  applyDarkMode(savedDark);
  initMobileMenu();
  highlightActiveNav();
  createCVModal();
  initCVButtons();
  createAvisModal();
  initAvisButtons();
  createSideAnimations();
  createChatbot();
  initContactForm();
  setTimeout(() => initAppearAnimations(), 100);
});
