(() => {
  'use strict';

  // ── Year ──────────────────────────────────────────────
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── i18n dictionary ───────────────────────────────────
  const dict = {
    es: {
      brandRole:      'Product Owner',
      navHighlights:  'Logros',
      navSkills:      'Skills',
      navProjects:    'Proyectos',
      navContact:     'Contacto',
      heroBadge:      'Disponible para nuevas oportunidades',
      title:          'Product Owner en e‑commerce y SaaS',
      subtitle:       'Puente entre TI y negocio. Lidero integraciones, priorizo por valor y entrego productos que mueven métricas.',
      ctaPrimary:     'Hablemos',
      ctaCV:          'Descargar CV',
      ctaCover:       'Carta de presentación',
      stat1:          'Países de expansión',
      stat2:          'Sitios regionales',
      stat3:          'Años de experiencia',
      stat4:          'Idiomas',
      highlightsTag:  'Experiencia',
      highlights:     'Logros destacados',
      highlightsDesc: 'Proyectos con impacto real en el negocio.',
      h1:             'Pasarela de pagos regional',
      h1d:            'Implementación de gateway de pago para 4 países (VTEX, Janis, BAC, AWS). Optimización del checkout y habilitación de expansión e‑commerce.',
      h1meta:         'Go-live en 4 mercados',
      h2:             'Liderazgo de célula de desarrollo',
      h2d:            'Prioricé backlog por valor de negocio, convertí requerimientos en user stories y aseguré SLAs con proveedores para 14 sitios regionales.',
      h2meta:         '14 sitios regionales',
      skillsTag:      'Competencias',
      skills:         'Skills y herramientas',
      skillsDesc:     'Desde la estrategia de producto hasta la ejecución técnica.',
      c1:             'Producto',
      c1d:            'Roadmap, backlog, user stories, criterios de aceptación, KPIs, discovery y delivery.',
      c2:             'Tecnología',
      c2d:            'SaaS, APIs REST, VTEX, AWS, integraciones de pago, low‑code, Git.',
      c3:             'Ejecución',
      c3d:            'Scrum, ceremonias, gestión de riesgos, SLAs, alineación con marketing y ventas.',
      c4:             'Stakeholders',
      c4d:            'Comunicación efectiva, negociación y reporte de bloqueos/avances.',
      projectsTag:    'Portfolio',
      projects:       'Proyectos',
      projectsDesc:   'Casos donde lideré desde el problema hasta la solución.',
      p1:             'Optimización de checkout',
      p1d:            'Eliminación de método de pago lento para reducir fricción y mejorar la experiencia de usuario.',
      p1meta:         'Mejora en conversión',
      p2:             'Integraciones logísticas',
      p2d:            'Incorporación de proveedores vía APIs y low‑code; creación de API personalizada.',
      p2meta:         'Múltiples proveedores integrados',
      contactTag:     'Conectemos',
      contact:        'Contacto',
      contactD:       '¿Hablamos de tu producto? Estoy abierto a oportunidades y colaboraciones.',
      contactEmail:   'Email',
      contactPhone:   'Teléfono',
    },
    en: {
      brandRole:      'Product Owner',
      navHighlights:  'Highlights',
      navSkills:      'Skills',
      navProjects:    'Projects',
      navContact:     'Contact',
      heroBadge:      'Open to new opportunities',
      title:          'Product Owner in e‑commerce and SaaS',
      subtitle:       'Bridge between engineering and business. I lead integrations, prioritize by value and deliver products that move the metrics.',
      ctaPrimary:     "Let's talk",
      ctaCV:          'Download CV',
      ctaCover:       'Cover letter',
      stat1:          'Countries of expansion',
      stat2:          'Regional sites',
      stat3:          'Years of experience',
      stat4:          'Languages',
      highlightsTag:  'Experience',
      highlights:     'Key highlights',
      highlightsDesc: 'Projects with real business impact.',
      h1:             'Regional payment gateway',
      h1d:            'Implemented a payment gateway across 4 countries (VTEX, Janis, BAC, AWS). Checkout optimization and e‑commerce expansion.',
      h1meta:         'Go-live in 4 markets',
      h2:             'Development squad leadership',
      h2d:            'Backlog prioritized by business value, converted requirements to user stories and enforced vendor SLAs for 14 regional sites.',
      h2meta:         '14 regional sites',
      skillsTag:      'Competencies',
      skills:         'Skills & tools',
      skillsDesc:     'From product strategy to technical execution.',
      c1:             'Product',
      c1d:            'Roadmap, backlog, user stories, acceptance criteria, KPIs, discovery & delivery.',
      c2:             'Technology',
      c2d:            'SaaS, REST APIs, VTEX, AWS, payment integrations, low‑code, Git.',
      c3:             'Execution',
      c3d:            'Scrum, ceremonies, risk management, SLAs, alignment with marketing & sales.',
      c4:             'Stakeholders',
      c4d:            'Clear communication, negotiation and status/blockers reporting.',
      projectsTag:    'Portfolio',
      projects:       'Projects',
      projectsDesc:   'Cases where I led from problem to solution.',
      p1:             'Checkout optimization',
      p1d:            'Removed a slow payment method to reduce friction and improve user experience.',
      p1meta:         'Conversion improvement',
      p2:             'Logistics integrations',
      p2d:            'Onboarded providers via APIs and low‑code; created a custom API.',
      p2meta:         'Multiple providers integrated',
      contactTag:     "Let's connect",
      contact:        'Contact',
      contactD:       "Let's talk about your product. Open to opportunities and collaborations.",
      contactEmail:   'Email',
      contactPhone:   'Phone',
    },
    de: {
      brandRole:      'Product Owner',
      navHighlights:  'Highlights',
      navSkills:      'Skills',
      navProjects:    'Projekte',
      navContact:     'Kontakt',
      heroBadge:      'Offen für neue Möglichkeiten',
      title:          'Product Owner für E‑Commerce und SaaS',
      subtitle:       'Brücke zwischen IT und Business. Ich leite Integrationen, priorisiere nach Business‑Value und liefere Produkte mit messbarem Impact.',
      ctaPrimary:     'Kontakt',
      ctaCV:          'Lebenslauf herunterladen',
      ctaCover:       'Anschreiben',
      stat1:          'Länder der Expansion',
      stat2:          'Regionale Seiten',
      stat3:          'Jahre Erfahrung',
      stat4:          'Sprachen',
      highlightsTag:  'Erfahrung',
      highlights:     'Wichtige Erfolge',
      highlightsDesc: 'Projekte mit realem Geschäftseinfluss.',
      h1:             'Regionale Zahlungsschnittstelle',
      h1d:            'Implementierung eines Payment‑Gateways in 4 Ländern (VTEX, Janis, BAC, AWS). Checkout‑Optimierung und E‑Commerce‑Ausbau.',
      h1meta:         'Go-live in 4 Märkten',
      h2:             'Leitung eines Entwicklungsteams',
      h2d:            'Backlog nach Geschäftswert priorisiert, Anforderungen in User Stories überführt und SLAs mit Anbietern durchgesetzt (14 regionale Sites).',
      h2meta:         '14 regionale Seiten',
      skillsTag:      'Kompetenzen',
      skills:         'Kompetenzen & Tools',
      skillsDesc:     'Von der Produktstrategie bis zur technischen Ausführung.',
      c1:             'Produkt',
      c1d:            'Roadmap, Backlog, User Stories, Akzeptanzkriterien, KPIs, Discovery & Delivery.',
      c2:             'Technologie',
      c2d:            'SaaS, REST‑APIs, VTEX, AWS, Payment‑Integrationen, Low‑Code, Git.',
      c3:             'Ausführung',
      c3d:            'Scrum, Zeremonien, Risikomanagement, SLAs, Abstimmung mit Marketing & Vertrieb.',
      c4:             'Stakeholder',
      c4d:            'Klare Kommunikation, Verhandlung und Reporting von Status/Blockern.',
      projectsTag:    'Portfolio',
      projects:       'Projekte',
      projectsDesc:   'Fälle, in denen ich vom Problem bis zur Lösung geführt habe.',
      p1:             'Checkout‑Optimierung',
      p1d:            'Entfernung einer langsamen Zahlungsmethode zur Reduzierung von Friktion und Verbesserung der UX.',
      p1meta:         'Conversion-Verbesserung',
      p2:             'Logistik‑Integrationen',
      p2d:            'Onboarding von Providern über APIs und Low‑Code; Entwicklung einer kundenspezifischen API.',
      p2meta:         'Mehrere Provider integriert',
      contactTag:     'Vernetzen',
      contact:        'Kontakt',
      contactD:       'Lassen Sie uns über Ihr Produkt sprechen. Offen für Möglichkeiten und Zusammenarbeit.',
      contactEmail:   'E-Mail',
      contactPhone:   'Telefon',
    },
  };

  const fileMap = {
    es: { cv: 'assets/CV_Daniel_Prieto_ES.pdf',  cover: 'assets/Carta_Presentacion_Daniel_Prieto_ES.pdf' },
    en: { cv: 'assets/CV_Daniel_Prieto_EN.pdf',  cover: 'assets/Cover_Letter_Daniel_Prieto_EN.pdf' },
    de: { cv: 'assets/CV_Daniel_Prieto_EN.pdf',  cover: 'assets/Cover_Letter_Daniel_Prieto_EN.pdf' },
  };

  // ── DOM references ────────────────────────────────────
  const switchers  = document.querySelectorAll('.lang button');
  const i18nNodes  = document.querySelectorAll('[data-i18n]');
  const linkCV     = document.querySelector('[data-link="cv"]');
  const linkCover  = document.querySelector('[data-link="cover"]');
  const header     = document.getElementById('header');

  // ── Language detection ────────────────────────────────
  function detectBrowserLang() {
    const langs = navigator.languages ?? [navigator.language ?? 'es'];
    for (const l of langs) {
      const k = (l ?? '').toLowerCase().slice(0, 2);
      if (k === 'es' || k === 'en' || k === 'de') return k;
    }
    return 'es';
  }

  function initialLang() {
    return localStorage.getItem('lang') ?? document.documentElement.lang ?? detectBrowserLang();
  }

  // ── Apply language ────────────────────────────────────
  function setLang(lang) {
    if (!dict[lang]) return;
    switchers.forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    i18nNodes.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
    });
    const files = fileMap[lang];
    if (files) {
      if (linkCV)    linkCV.href    = files.cv;
      if (linkCover) linkCover.href = files.cover;
    }
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  switchers.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  setLang(initialLang());

  // ── Header scroll state ───────────────────────────────
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.background = window.scrollY > 10
        ? 'rgba(8,13,26,.96)'
        : 'rgba(8,13,26,.82)';
    }, { passive: true });
  }

  // ── Botpress chat ─────────────────────────────────────
  const chatBtn = document.getElementById('chat-launcher');
  const badge   = document.getElementById('chat-badge');
  let isOpen = false;
  let unread = 0;

  function setExpanded(state) {
    isOpen = state;
    if (chatBtn) chatBtn.setAttribute('aria-expanded', String(state));
    if (state && badge) { unread = 0; badge.style.display = 'none'; }
  }

  if (chatBtn) {
    chatBtn.addEventListener('click', () => {
      if (!window.botpress) return;
      isOpen ? window.botpress.close() : window.botpress.open();
    });
  }

  window.addEventListener('load', () => {
    if (!window.botpress) return;
    window.botpress.on('webchat:ready',  () => setExpanded(false));
    window.botpress.on('webchat:opened', () => setExpanded(true));
    window.botpress.on('webchat:closed', () => setExpanded(false));
    window.botpress.on('message', () => {
      if (!isOpen && badge) {
        unread++;
        badge.textContent = String(unread);
        badge.style.display = 'inline-block';
      }
    });
  });
})();
