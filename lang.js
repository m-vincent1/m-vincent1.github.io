/* ============================================================
   lang.js — Internationalisation FR / EN
   ============================================================ */

const translations = {
  fr: {
    /* ── Navigation ── */
    nav_brand: "Mathis Vincent",
    nav_home: "Accueil",
    nav_experiences: "Expériences",
    nav_competences: "Compétences",
    nav_projects: "Projets",
    nav_benevolat: "Bénévolat",
    nav_interets: "Intérêts",
    nav_contact: "Contact",
    nav_cv: "Télécharger mon CV",
    language_toggle_label: "Changer la langue",
    dark_mode_dark: "Sombre",
    dark_mode_light: "Clair",
    lang_fr: "Français",
    lang_en: "English",

    /* ── Accueil ── */
    home_intro: "Bonjour, je suis",
    home_name: "Mathis Vincent",
    home_role:
      "Étudiant ingénieur en Informatique &amp; Réseaux (ESAIP) — 4ème année",
    home_objective:
      "Objectif : Recherche un stage de 6 mois de janvier 2027 à juin 2027 (dev logiciel, support IT, automatisation, cybersécurité).",
    home_contact_button: "Me contacter",
    home_section_title: "Profil &amp; objectif",
    home_section_subtitle:
      "Curieux, méthodique et tourné vers l'humain, je construis des solutions sobres qui facilitent la vie des équipes.",
    home_about_title: "Vision orientée résultats",
    home_about_text:
      "Livrer un service fiable passe par l'écoute du besoin, la documentation et une communication transparente.",
    home_strengths_title: "Forces quotidiennes",
    home_strengths_text:
      "Autonomie, réactivité et sens du service pour accompagner les utilisateurs comme les équipes projet.",
    home_focus_title: "Cap sur 2026-2027",
    home_focus_text:
      "Approfondir l'automatisation logicielle, l'industrialisation des processus IT et mes connaissances en cybersécurité durant mon prochain stage.",
    home_photo_alt: "Portrait professionnel de Mathis Vincent",

    /* ── Expériences ── */
    exp_title: "Expériences professionnelles",
    exp_subtitle:
      "Des missions variées autour du support IT, du développement et de la coordination opérationnelle.",
    exp_sigmas_title: "Startup 3Sigmas-Studios",
    exp_sigmas_period: "2025 &middot; 3 mois &middot; Budapest",
    exp_sigmas_point1: "Scripts Python pour accélérer les workflows internes.",
    exp_sigmas_point2: "Documentation technique structurée pour l'équipe.",
    exp_sigmas_point3: "Participation au recrutement des stagiaires.",
    exp_sigmas_point4: "Automatisation d'outils métier pour gagner du temps.",
    exp_ava6_title: "AVA6 Limonest",
    exp_ava6_period: "2023 &middot; 2 mois &middot; Lyon",
    exp_ava6_point1: "Support IT de proximité pour les collaborateurs.",
    exp_ava6_point2: "Gestion et suivi des incidents avec reporting clair.",
    exp_ava6_point3: "Mise en place de routines de communication inter-équipes.",
    exp_lycee_title: "Lycée Les Lazaristes La Salle",
    exp_lycee_period: "2021 &middot; 1 mois &middot; Lyon",
    exp_lycee_point1: "Maintenance du parc informatique pédagogique.",
    exp_lycee_point2: "Assistance directe aux enseignants et élèves.",
    exp_lycee_point3: "Optimisation des procédures de préparation de salles.",
    exp_fruit_title: "Travail saisonnier &middot; Cueillette de fruits",
    exp_fruit_period: "2023 &middot; Lyon",
    exp_fruit_point1: "Organisation logistique quotidienne et respect des cadences.",
    exp_fruit_point2: "Travail d'équipe en extérieur et sens de l'effort.",
    exp_avis_button: "Avis entreprise",
    exp_clickwars_title: "Projet ClickWars Territory &middot; 3Sigmas-Studios",
    exp_clickwars_period: "2026 &middot; 1 mois &middot; Angers",
    exp_clickwars_point1: "Développement d'un party game multijoueur local avec Qt 6 / QML et C++.",
    exp_clickwars_point2: "Conception de l'architecture réseau LAN pour le mode 2v2 en temps réel.",
    exp_clickwars_point3: "Création de composants QML réutilisables (écrans, overlays, styles).",
    exp_clickwars_point4: "Intégration de bots IA et gestion du scoring par territoire.",

    /* ── Compétences ── */
    skills_title: "Compétences clés",
    skills_subtitle:
      "Un socle technique polyvalent complété par des soft skills orientés service.",
    skills_technical_title: "Techniques",
    skills_technical_desc:
      "Bases solides pour intervenir du support à l'automatisation.",
    skills_soft_title: "Soft skills",
    skills_soft_desc:
      "Savoir-être au service des utilisateurs et des équipes projet.",
    skills_tools_title: "Logiciels / Outils",
    skills_tools_desc:
      "Outils utilisés en cybersécurité, analyse réseau, audit web et investigation numérique.",
    skill_python: "Python / C++ / Java",
    skill_support: "Maintenance / Support IT",
    skill_logistics: "Gestion logistique",
    skill_networks: "Réseaux",
    skill_html: "HTML / CSS",
    skill_qml: "QML / Felgo",
    skill_cyber: "Cybersécurité",
    skill_uml: "UML",
    skill_cloud: "Cloud (AWS)",
    skill_sql: "SQL",
    skill_linux_windows: "Linux / Windows Server",
    skill_pc_config: "Configuration PC",
    skill_log_analysis: "Analyse de logs",
    skill_communication: "Communication efficace",
    skill_teamwork: "Esprit d'équipe",
    skill_customer_service: "Service à la clientèle",
    skill_quick_learner: "Apprentissage rapide",
    skill_motivated: "Motivé",
    skill_problem_solving: "Résolution de problème",
    skill_adaptability: "Adaptabilité",
    skill_flexibility: "Flexibilité",

    /* ── Projets ── */
    projects_page_label: "Projets GitHub",
    projects_page_subtitle:
      "Une sélection de projets autour de la cybersécurité, du développement logiciel et du web.",
    project_link: "Voir le dépôt",
    project_chessdeck_title: "ChessDeck",
    project_chessdeck_point1:
      "Jeu d'échecs web avec interface HTML/CSS/JavaScript et logique côté projet.",
    project_chessdeck_point2:
      "Intégration de Stockfish pour enrichir l'analyse et le comportement de jeu.",
    project_ir_title: "Incident Response Timeline Builder",
    project_ir_point1:
      "Plateforme DFIR / Blue Team pour reconstruire une chronologie d'incident.",
    project_ir_point2:
      "Corrélation de logs, mapping MITRE ATT&CK et génération de rapports d'investigation.",
    project_portfolio_title: "Portfolio GitHub Pages",
    project_portfolio_point1: "Site portfolio personnel publié avec GitHub Pages.",
    project_portfolio_point2:
      "Pages dédiées au profil, aux compétences, expériences, bénévolat et contact.",
    project_purple_title: "Purple Team Attack Simulator",
    project_purple_point1:
      "Laboratoire local pour simuler des comportements d'attaquants de manière contrôlée.",
    project_purple_point2:
      "Génération de logs synthétiques, validation de détections et rapports de couverture SOC.",
    project_supply_title: "Supply Chain Security Scanner",
    project_supply_point1:
      "Outil DevSecOps pour analyser les dépendances et les risques de supply chain logicielle.",
    project_supply_point2:
      "Détection de composants vulnérables, score de risque global et rapports exploitables.",

    /* ── Centres d'intérêts (page dédiée) ── */
    interests_page_label: "Centres d'intérêts",
    interests_page_subtitle:
      "Des activités qui développent ma curiosité, ma rigueur et mon esprit d'équipe.",
    interest_block_sports: "Sport",
    interest_block_voyages: "Voyages",
    interest_block_gaming: "Jeux vidéo",
    interest_block_cyber: "Cybersécurité",
    interest_block_dev: "Développement informatique",
    interest_card_gain: "Ce que ça m'apporte",
    interest_sports_focus: "Discipline",
    interest_sports_text:
      "Boxe, football et salle de sport : des activités qui m'aident à rester discipliné.",
    interest_sports_tag1: "Rigueur",
    interest_sports_tag2: "Persévérance",
    interest_sports_tag3: "Énergie",
    interest_voyages_focus: "Ouverture",
    interest_voyages_text:
      "J'aime découvrir de nouveaux pays et m'ouvrir à d'autres cultures.",
    interest_voyages_tag1: "Curiosité",
    interest_voyages_tag2: "Adaptation",
    interest_voyages_tag3: "Découverte",
    interest_gaming_focus: "Détente",
    interest_gaming_text:
      "J'aime jouer pour me détendre depuis que je suis enfant.",
    interest_gaming_tag1: "Réflexion",
    interest_gaming_tag2: "Patience",
    interest_gaming_tag3: "Concentration",
    interest_cyber_focus: "Veille technique",
    interest_cyber_text:
      "Je me forme régulièrement avec des vidéos, articles et forums spécialisés.",
    interest_cyber_tag1: "Méthode",
    interest_cyber_tag2: "Analyse",
    interest_cyber_tag3: "Veille",
    interest_dev_focus: "Création",
    interest_dev_text:
      "J'aime créer des sites et automatiser des tâches utiles par le code.",
    interest_dev_tag1: "Logique",
    interest_dev_tag2: "Autonomie",
    interest_dev_tag3: "Utilité",

    /* ── Bénévolat ── */
    benev_title: "Actions de bénévolat",
    benev_subtitle:
      "Des engagements réguliers pour rester au contact du terrain associatif.",
    benev_cop1_badge: "Cop1 Solidarités Étudiantes",
    benev_cop1_title: "Engagement Bénévole &ndash; Cop1 Solidarités Étudiantes",
    benev_cop1_text:
      "Depuis ma 3ème année d'école d'ingénieur, et toujours actuellement en 4ème année, je suis engagé au sein de l'association Cop1 Solidarités Étudiantes à Angers. L'association organise des actions de soutien destinées aux étudiants en situation de précarité : distributions gratuites de nourriture, produits d'hygiène, vêtements, ainsi que des moments d'échange. J'y participe de manière régulière, en soirée, en aidant à l'installation, la distribution, le réassort des stocks et le rangement. Cet engagement continu m'a permis de renforcer mon sens du collectif, de la solidarité, de l'organisation et de l'écoute, en restant connecté à la réalité du terrain associatif.",
    benev_cop1_alt: "Équipe Cop1 Solidarités Étudiantes en action",

    /* ── Contact ── */
    contact_title: "Me contacter",
    contact_subtitle:
      "Disponible pour un stage de 6 mois (janvier-juin 2027). Discutons de vos besoins.",
    contact_info_note: "Je réponds rapidement par mail ou téléphone.",
    contact_info_email_title: "Email",
    contact_info_phone_title: "Téléphone",
    contact_info_address_title: "Adresse",
    contact_info_linkedin_title: "LinkedIn",
    contact_email_label: "mathisvincent446@gmail.com",
    contact_phone_label: "+33 6 77 07 42 51",
    contact_address_label: "43 bis Rue du 8 mai 1945, 49124",
    contact_linkedin_label: "linkedin.com/in/mathis-vincent-224b24257",
    contact_form_title: "Formulaire de contact",
    contact_form_name: "Nom complet",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_button: "Envoyer",
    contact_placeholder_name: "Votre nom",
    contact_placeholder_email: "Votre email",
    contact_placeholder_message: "Votre message",
    contact_form_success: "Message envoyé avec succès ! Je vous répondrai rapidement.",
    contact_form_error: "Une erreur est survenue. Veuillez réessayer.",
    contact_form_validation: "Veuillez remplir tous les champs.",

    /* ── Modale CV ── */
    cv_modal_title: "Aperçu du CV",
    cv_modal_download: "Télécharger",
    cv_modal_close: "Fermer",

    /* ── Modale Avis ── */
    avis_modal_title: "Avis entreprise",
    avis_modal_close: "Fermer",

    /* ── Chatbot ── */
    chatbot_title: "Assistant Portfolio",
    chatbot_placeholder: "Posez votre question…",
    chatbot_welcome: "Bonjour ! 👋 Je suis l'assistant de Mathis. Posez-moi vos questions sur son profil, ses compétences, ses expériences ou ses disponibilités.",
    chatbot_no_answer: "Je n'ai pas de réponse précise à cette question. N'hésitez pas à utiliser le formulaire de contact pour plus d'informations !",

    /* ── Footer ── */
    footer_text: "&copy; 2026 Mathis Vincent - Tous droits réservés",
  },

  en: {
    /* ── Navigation ── */
    nav_brand: "Mathis Vincent",
    nav_home: "Home",
    nav_experiences: "Experience",
    nav_competences: "Skills",
    nav_projects: "Projects",
    nav_benevolat: "Volunteering",
    nav_interets: "Interests",
    nav_contact: "Contact",
    nav_cv: "Download my CV",
    language_toggle_label: "Switch language",
    dark_mode_dark: "Dark",
    dark_mode_light: "Light",
    lang_fr: "Français",
    lang_en: "English",

    /* ── Home ── */
    home_intro: "Hello, I am",
    home_name: "Mathis Vincent",
    home_role: "Computer &amp; Network Engineering student (ESAIP) — 4th year",
    home_objective:
      "Goal: Looking for a 6-month internship from January to June 2027 (software dev, IT support, automation, cybersecurity).",
    home_contact_button: "Contact me",
    home_section_title: "Profile &amp; objective",
    home_section_subtitle:
      "Curious, methodical and people-focused, I build clear solutions that help teams every day.",
    home_about_title: "Result-oriented vision",
    home_about_text:
      "Delivering reliable services starts with listening, documenting and keeping communication transparent.",
    home_strengths_title: "Daily strengths",
    home_strengths_text:
      "Autonomy, responsiveness and service mindset for both users and project squads.",
    home_focus_title: "Heading to 2026-2027",
    home_focus_text:
      "Deepening software automation, IT process industrialization and cybersecurity knowledge during my next internship.",
    home_photo_alt: "Professional portrait of Mathis Vincent",

    /* ── Experience ── */
    exp_title: "Professional experience",
    exp_subtitle: "Assignments mixing IT support, scripting and operational coordination.",
    exp_sigmas_title: "3Sigmas-Studios startup",
    exp_sigmas_period: "2025 &middot; 3 months &middot; Budapest",
    exp_sigmas_point1: "Python scripts to speed up internal workflows.",
    exp_sigmas_point2: "Structured technical documentation for the team.",
    exp_sigmas_point3: "Involvement in intern recruitment sessions.",
    exp_sigmas_point4: "Automation of in-house tools to save time.",
    exp_ava6_title: "AVA6 Limonest",
    exp_ava6_period: "2023 &middot; 2 months &middot; Lyon",
    exp_ava6_point1: "On-site IT support for staff members.",
    exp_ava6_point2: "Incident handling with clear follow-up reports.",
    exp_ava6_point3: "Improved communication routines between teams.",
    exp_lycee_title: "Lycée Les Lazaristes La Salle",
    exp_lycee_period: "2021 &middot; 1 month &middot; Lyon",
    exp_lycee_point1: "Maintenance of the educational IT fleet.",
    exp_lycee_point2: "Direct assistance for teachers and students.",
    exp_lycee_point3: "Streamlined room preparation processes.",
    exp_fruit_title: "Seasonal job &middot; Fruit picking",
    exp_fruit_period: "2023 &middot; Lyon",
    exp_fruit_point1: "Daily logistics planning while respecting tight schedules.",
    exp_fruit_point2: "Outdoor teamwork and strong work ethic.",
    exp_avis_button: "Company Review",
    exp_clickwars_title: "ClickWars Territory Project &middot; 3Sigmas-Studios",
    exp_clickwars_period: "2026 &middot; 1 month &middot; Angers",
    exp_clickwars_point1: "Developed a local multiplayer party game with Qt 6 / QML and C++.",
    exp_clickwars_point2: "Designed LAN network architecture for real-time 2v2 mode.",
    exp_clickwars_point3: "Created reusable QML components (screens, overlays, styles).",
    exp_clickwars_point4: "Integrated AI bots and territory-based scoring system.",

    /* ── Skills ── */
    skills_title: "Key skills",
    skills_subtitle: "A versatile technical foundation supported by solid soft skills.",
    skills_technical_title: "Technical",
    skills_technical_desc: "Robust bases to work from support to automation topics.",
    skills_soft_title: "Soft skills",
    skills_soft_desc: "People skills dedicated to users and cross-functional teams.",
    skills_tools_title: "Software / Tools",
    skills_tools_desc:
      "Tools used in cybersecurity, network analysis, web auditing and digital forensics.",
    skill_python: "Python / C++ / Java",
    skill_support: "Maintenance / IT Support",
    skill_logistics: "Logistics Management",
    skill_networks: "Networks",
    skill_html: "HTML / CSS",
    skill_qml: "QML / Felgo",
    skill_cyber: "Cybersecurity",
    skill_uml: "UML",
    skill_cloud: "Cloud (AWS)",
    skill_sql: "SQL",
    skill_linux_windows: "Linux / Windows Server",
    skill_pc_config: "PC Configuration",
    skill_log_analysis: "Log Analysis",
    skill_communication: "Effective Communication",
    skill_teamwork: "Teamwork",
    skill_customer_service: "Customer Service",
    skill_quick_learner: "Quick Learner",
    skill_motivated: "Motivated",
    skill_problem_solving: "Problem Solving",
    skill_adaptability: "Adaptability",
    skill_flexibility: "Flexibility",

    /* ── Projects ── */
    projects_page_label: "GitHub Projects",
    projects_page_subtitle:
      "A selection of projects around cybersecurity, software development and the web.",
    project_link: "View repository",
    project_chessdeck_title: "ChessDeck",
    project_chessdeck_point1:
      "Web chess game with an HTML/CSS/JavaScript interface and project-side logic.",
    project_chessdeck_point2:
      "Stockfish integration to improve analysis and gameplay behavior.",
    project_ir_title: "Incident Response Timeline Builder",
    project_ir_point1:
      "DFIR / Blue Team platform for rebuilding an incident timeline.",
    project_ir_point2:
      "Log correlation, MITRE ATT&CK mapping and investigation report generation.",
    project_portfolio_title: "GitHub Pages Portfolio",
    project_portfolio_point1: "Personal portfolio website published with GitHub Pages.",
    project_portfolio_point2:
      "Pages dedicated to profile, skills, experience, volunteering and contact.",
    project_purple_title: "Purple Team Attack Simulator",
    project_purple_point1:
      "Local lab for safely simulating attacker behaviors in a controlled way.",
    project_purple_point2:
      "Synthetic log generation, detection validation and SOC coverage reports.",
    project_supply_title: "Supply Chain Security Scanner",
    project_supply_point1:
      "DevSecOps tool for analyzing dependencies and software supply chain risks.",
    project_supply_point2:
      "Vulnerable component detection, global risk scoring and actionable reports.",

    /* ── Interests (dedicated page) ── */
    interests_page_label: "Interests",
    interests_page_subtitle:
      "Activities that develop my curiosity, discipline and team spirit.",
    interest_block_sports: "Sports",
    interest_block_voyages: "Travel",
    interest_block_gaming: "Video Games",
    interest_block_cyber: "Cybersecurity",
    interest_block_dev: "Software Development",
    interest_card_gain: "What it brings me",
    interest_sports_focus: "Discipline",
    interest_sports_text:
      "Boxing, football and gym training help me stay disciplined.",
    interest_sports_tag1: "Rigor",
    interest_sports_tag2: "Persistence",
    interest_sports_tag3: "Energy",
    interest_voyages_focus: "Open-mindedness",
    interest_voyages_text:
      "I enjoy discovering new countries and opening up to other cultures.",
    interest_voyages_tag1: "Curiosity",
    interest_voyages_tag2: "Adaptation",
    interest_voyages_tag3: "Discovery",
    interest_gaming_focus: "Relaxation",
    interest_gaming_text:
      "I have played to relax since childhood.",
    interest_gaming_tag1: "Thinking",
    interest_gaming_tag2: "Patience",
    interest_gaming_tag3: "Focus",
    interest_cyber_focus: "Technical watch",
    interest_cyber_text:
      "I keep learning through videos, articles and specialised forums.",
    interest_cyber_tag1: "Method",
    interest_cyber_tag2: "Analysis",
    interest_cyber_tag3: "Monitoring",
    interest_dev_focus: "Creation",
    interest_dev_text:
      "I like building websites and automating useful tasks with code.",
    interest_dev_tag1: "Logic",
    interest_dev_tag2: "Autonomy",
    interest_dev_tag3: "Usefulness",

    /* ── Volunteering ── */
    benev_title: "Volunteering",
    benev_subtitle: "Regular commitments to stay close to grassroots initiatives.",
    benev_cop1_badge: "Cop1 Student Solidarity",
    benev_cop1_title: "Volunteer Commitment &ndash; Cop1 Student Solidarity",
    benev_cop1_text:
      "Since my 3rd year of engineering school, and still today in 4th year, I have been involved with Cop1 Solidarités Étudiantes in Angers. The non-profit supports students facing hardship through free distributions of food, hygiene products, clothing and safe moments to talk. I volunteer in the evenings on a regular basis, helping with set-up, distribution, stock refills and clean-up. This ongoing work strengthens my sense of teamwork, solidarity, organization and active listening while staying connected to the realities of field initiatives.",
    benev_cop1_alt: "Cop1 volunteers supporting students",

    /* ── Contact ── */
    contact_title: "Get in touch",
    contact_subtitle: "Available for a 6-month internship (January-June 2027). Let's discuss your needs.",
    contact_info_note: "I reply quickly by email or phone.",
    contact_info_email_title: "Email",
    contact_info_phone_title: "Phone",
    contact_info_address_title: "Address",
    contact_info_linkedin_title: "LinkedIn",
    contact_email_label: "mathisvincent446@gmail.com",
    contact_phone_label: "+33 6 77 07 42 51",
    contact_address_label: "43 bis Rue du 8 mai 1945, 49124",
    contact_linkedin_label: "linkedin.com/in/mathis-vincent-224b24257",
    contact_form_title: "Contact form",
    contact_form_name: "Full name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_button: "Send",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "Your email",
    contact_placeholder_message: "Your message",
    contact_form_success: "Message sent successfully! I will get back to you shortly.",
    contact_form_error: "An error occurred. Please try again.",
    contact_form_validation: "Please fill in all fields.",

    /* ── CV Modal ── */
    cv_modal_title: "CV Preview",
    cv_modal_download: "Download",
    cv_modal_close: "Close",

    /* ── Avis Modal ── */
    avis_modal_title: "Company Review",
    avis_modal_close: "Close",

    /* ── Chatbot ── */
    chatbot_title: "Portfolio Assistant",
    chatbot_placeholder: "Ask your question…",
    chatbot_welcome: "Hello! 👋 I'm Mathis's portfolio assistant. Ask me anything about his profile, skills, experience or availability.",
    chatbot_no_answer: "I don't have a precise answer to that question. Feel free to use the contact form for more information!",

    /* ── Footer ── */
    footer_text: "&copy; 2026 Mathis Vincent - All rights reserved",
  },
};

/* ── Apply translations ── */
function applyLanguage(lang) {
  const selectedLang = translations[lang] ? lang : "fr";
  const dict = translations[selectedLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = dict[key];
    if (!value) return;
    el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = dict[key];
    if (!value) return;
    el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    const value = dict[key];
    if (!value) return;
    el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    const value = dict[key];
    if (!value) return;
    el.setAttribute("aria-label", value);
  });

  // Update language button text
  const langBtn = document.getElementById("lang-toggle-text");
  if (langBtn) {
    langBtn.textContent = selectedLang.toUpperCase();
  }

  // Update dark mode button text
  updateDarkModeButtonText();
}

function setLanguage(lang) {
  const normalized = translations[lang] ? lang : "fr";
  localStorage.setItem("siteLanguage", normalized);
  document.documentElement.setAttribute("lang", normalized);
  applyLanguage(normalized);
  // Close dropdown if open
  const dd = document.getElementById("lang-dropdown");
  if (dd) dd.classList.add("hidden");
}

function toggleLanguage() {
  const current = localStorage.getItem("siteLanguage") || "fr";
  const next = current === "fr" ? "en" : "fr";
  setLanguage(next);
}

function toggleLangDropdown() {
  const dd = document.getElementById("lang-dropdown");
  if (dd) dd.classList.toggle("hidden");
}

// Close lang dropdown on outside click
document.addEventListener("click", (e) => {
  const wrapper = document.getElementById("lang-dropdown-wrapper");
  const dd = document.getElementById("lang-dropdown");
  if (wrapper && dd && !wrapper.contains(e.target)) {
    dd.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("siteLanguage") || "fr";
  setLanguage(saved);
});
