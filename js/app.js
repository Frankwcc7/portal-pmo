/* Portal PMO · ELECTROPERU — interactividad.
   Cada módulo está aislado: si uno falla, los demás siguen funcionando. */

// ─── Navegación, encabezado y secciones ────────────────────────────────────
try {
    const navLinks = [...document.querySelectorAll('.nav a')];
    const homeView = document.getElementById('homeView');
    const portfoliosView = document.getElementById('portfoliosView');
    const portfolioList = document.getElementById('portfolioList');
    const portfolioDetail = document.getElementById('portfolioDetail');


    const managementTopicDetail = document.getElementById('managementTopicDetail');
    const managementTopics = document.querySelector('.management-topics');
    const historySection = document.querySelector('.history-section');
    const managementHeading = document.querySelector('.management-heading');

    document.querySelectorAll('.topic-open').forEach(button => {
      button.addEventListener('click', () => {
        const isKnowledge = button.dataset.topic === 'knowledge';
        document.getElementById('knowledgeDetail').hidden = !isKnowledge;
        document.getElementById('awardsDetail').hidden = isKnowledge;
        managementHeading.hidden = true;
        historySection.hidden = true;
        managementTopics.hidden = true;
        managementTopicDetail.hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.getElementById('backToManagementTopics').addEventListener('click', () => {
      managementTopicDetail.hidden = true;
      managementHeading.hidden = false;
      historySection.hidden = false;
      managementTopics.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const portfolios = [
      {
        number: '01',
        name: 'Activos',
        description: 'Conjunto de proyectos, programas e iniciativas de inversión orientados a la creación, ampliación, modernización o renovación de activos estratégicos de la empresa. En este portafolio también se consideran las intervenciones de largo plazo y aquellas de mediano plazo que, por su complejidad, la Gerencia de Producción no pueda ejecutar. Su propósito es asegurar que las inversiones contribuyan al cumplimiento de los objetivos institucionales, generen valor sostenible y fortalezcan la capacidad operativa de ELECTROPERU mediante una adecuada priorización, ejecución y seguimiento de sus componentes.',
        oei: 'OEI 6: Mejorar la Eficiencia Operativa',
        responsible: 'Gerencia de Proyectos'
      },
      {
        number: '02',
        name: 'Inversiones Financieras',
        description: 'Conjunto de iniciativas destinadas a la gestión eficiente de los recursos financieros de la empresa, incluyendo inversiones temporales, instrumentos financieros y otras alternativas que permitan preservar e incrementar el valor económico de los recursos disponibles, contribuyendo a la sostenibilidad financiera y generación de rentabilidad.',
        oei: 'OEI 1: Incrementar el valor económico',
        responsible: 'Gerencia de Administración y Finanzas'
      },
      {
        number: '03',
        name: 'Gestión de Patrimonio',
        description: 'Conjunto de iniciativas relacionadas con la administración, valorización, saneamiento, regularización, aprovechamiento y desarrollo de los bienes inmuebles de la empresa. Su finalidad es maximizar el valor económico, estratégico y patrimonial de los activos inmobiliarios bajo criterios de eficiencia y sostenibilidad.',
        oei: 'OEI 1: Incrementar el valor económico',
        responsible: 'Gerencia de Administración y Finanzas'
      },
      {
        number: '04',
        name: 'Mantenimiento Operativo',
        description: 'Conjunto de iniciativas orientadas a preservar las condiciones de funcionamiento, confiabilidad, seguridad y vida útil de los activos empresariales mediante actividades de mantenimiento preventivo, predictivo, correctivo y otras acciones de soporte operativo que contribuyan a la continuidad del negocio (mantenimientos de corto y mediano plazo).',
        oei: 'OEI 6: Mejorar la Eficiencia Operativa',
        responsible: 'Gerencia de Producción'
      },
      {
        number: '05',
        name: 'Innovación',
        description: 'Conjunto de iniciativas destinadas a promover la innovación y la mejora continua de la organización, mediante la incorporación de nuevas tecnologías, metodologías, herramientas y modelos de gestión que permitan incrementar la eficiencia, productividad y competitividad de la empresa.',
        oei: 'OEI 8: Fortalecer la innovación y transformación digital',
        responsible: 'Subgerencia de Planeamiento y Control de Gestión'
      },
      {
        number: '06',
        name: 'Comercial',
        description: 'Conjunto de iniciativas orientadas a fortalecer la relación con los clientes, optimizar la comercialización de energía y desarrollar servicios que generen valor para los usuarios y la empresa. Busca asegurar altos niveles de satisfacción, fortalecer la posición competitiva y mejorar el desempeño comercial de ELECTROPERU.',
        oei: 'OEI 3: Mantener un nivel superior de satisfacción de los clientes',
        responsible: 'Gerencia Comercial'
      },
      {
        number: '07',
        name: 'Legal',
        description: 'Conjunto de iniciativas destinadas a gestionar el cumplimiento regulatorio, la atención de requerimientos de entidades supervisoras y fiscalizadoras, así como la prevención, gestión y seguimiento de controversias legales, contractuales o regulatorias que puedan impactar en los objetivos empresariales.',
        oei: 'OEI 5: Mejorar la gobernanza',
        responsible: 'Asesoría Legal'
      },
      {
        number: '08',
        name: 'Sostenibilidad',
        description: 'Conjunto de iniciativas orientadas a generar valor económico, social y ambiental de manera sostenible, promoviendo prácticas responsables en materia ambiental, social y de gobernanza (ESG). Su finalidad es fortalecer la sostenibilidad corporativa, la gestión de los grupos de interés y la contribución de la empresa al desarrollo sostenible.',
        oei: 'OEI 2: Incrementar el valor social y ambiental; OEI 4: Fortalecer la Imagen y Responsabilidad Social',
        responsible: 'Subgerencia de Sostenibilidad'
      },
      {
        number: '09',
        name: 'Riesgos',
        description: 'Conjunto de iniciativas destinadas a identificar, evaluar, monitorear y gestionar los riesgos y oportunidades que puedan afectar el cumplimiento de los objetivos estratégicos, operativos, financieros, regulatorios y reputacionales de la empresa, fortaleciendo la resiliencia organizacional y la toma de decisiones.',
        oei: 'OEI 5: Mejorar la gobernanza',
        responsible: 'Subgerencia de Planeamiento y Control de Gestión'
      },
      {
        number: '10',
        name: 'Talento',
        description: 'Conjunto de iniciativas orientadas al desarrollo del capital humano, la gestión del conocimiento, el fortalecimiento de competencias, el liderazgo, la cultura organizacional y la sucesión de capacidades críticas, asegurando la disponibilidad de talento necesario para el logro de los objetivos empresariales.',
        oei: 'OEI 9: Fortalecer el talento humano y desarrollo organizacional',
        responsible: 'Gerencia de Administración y Finanzas'
      }
    ];

    // Navegación: cada sección tiene su dirección (#inicio, #gestion-pmo, #portafolios, #proyectos,
    // #gestion-bim, #videos). Así se puede compartir el enlace de una sección y funcionan
    // los botones Atrás/Adelante del navegador.
    const views = {
      inicio: homeView,
      'gestion-pmo': document.getElementById('managementView'),
      portafolios: portfoliosView,
      proyectos: document.getElementById('projectsView'),
      'gestion-bim': document.getElementById('bimView'),
      videos: document.getElementById('videosView')
    };
    const SECTION_TITLES = {
      inicio: 'Inicio', 'gestion-pmo': 'Gestión PMO', portafolios: 'Portafolios',
      proyectos: 'Proyectos', 'gestion-bim': 'Gestión BIM', videos: 'Videos'
    };
    const baseTitle = document.title;
    const pageFromHash = () => {
      const page = decodeURIComponent(location.hash.replace('#', ''));
      return views[page] ? page : 'inicio';
    };

    function renderPage(page, { scroll = true } = {}) {
      Object.values(views).forEach(view => { if (view) view.hidden = view !== views[page]; });
      navLinks.forEach(item => {
        const active = item.dataset.page === page;
        item.classList.toggle('active', active);
        if (active) item.setAttribute('aria-current', 'page'); else item.removeAttribute('aria-current');
      });
      if (page === 'portafolios') {
        portfolioList.hidden = false;
        portfolioDetail.hidden = true;
        document.getElementById('portfolioTitle').textContent = 'Nuestros portafolios';
      }
      document.title = page === 'inicio' ? baseTitle : `${SECTION_TITLES[page]} | ${baseTitle}`;
      if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const page = link.dataset.page;
        if (pageFromHash() !== page || !location.hash) history.pushState(null, '', `#${page}`);
        renderPage(page);
      });
    });
    window.addEventListener('popstate', () => renderPage(pageFromHash()));
    renderPage(pageFromHash(), { scroll: false });

    portfolioList.addEventListener('click', event => {
      const card = event.target.closest('[data-portfolio]');
      if (!card) return;
      const item = portfolios[Number(card.dataset.portfolio)];
      if (!item) return;
      document.getElementById('detailNumber').textContent = item.number;
      document.getElementById('detailTitle').textContent = item.name;
      document.getElementById('detailDescription').textContent = item.description;
      document.getElementById('detailOei').textContent = item.oei;
      document.getElementById('detailResponsible').textContent = item.responsible;
      portfolioList.hidden = true;
      portfolioDetail.hidden = false;
      document.getElementById('portfolioTitle').textContent = 'Detalle del portafolio';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('backToPortfolios').addEventListener('click', () => {
      portfolioDetail.hidden = true;
      portfolioList.hidden = false;
      document.getElementById('portfolioTitle').textContent = 'Nuestros portafolios';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Microinteracciones accesibles del Portal PMO
    const progressBar = document.querySelector('.reading-progress span');
    const topbar = document.querySelector('.topbar');
    const backToTop = document.getElementById('backToTop');

    const updateScrollUI = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 12);
      if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 420);
    };
    window.addEventListener('scroll', updateScrollUI, { passive: true });
    window.addEventListener('resize', updateScrollUI);
    updateScrollUI();

    if (backToTop) {
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const revealTargets = document.querySelectorAll(
      '.intro, .stat-card, .portfolio-heading, .portfolio-purpose, .portfolio-card, .management-heading, .history-section, .timeline-item, .management-topic, .topic-highlight, .knowledge-photo, .awards-criteria div, .awards-video-section'
    );
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      if (index % 4 === 1) element.dataset.revealDelay = '1';
      if (index % 4 === 2) element.dataset.revealDelay = '2';
      if (index % 4 === 3) element.dataset.revealDelay = '3';
    });

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
      revealTargets.forEach(element => revealObserver.observe(element));
    } else {
      revealTargets.forEach(element => element.classList.add('is-visible'));
    }

    const pageContainers = [
      document.getElementById('homeView'),
      document.getElementById('portfoliosView'),
      document.getElementById('projectsView'),
      document.getElementById('managementView'),
      document.getElementById('bimView'),
      document.getElementById('videosView')
    ].filter(Boolean);
    const animatePage = () => {
      const visiblePage = pageContainers.find(page => !page.hidden);
      if (!visiblePage) return;
      visiblePage.classList.remove('page-enter');
      void visiblePage.offsetWidth;
      visiblePage.classList.add('page-enter');
      visiblePage.querySelectorAll('.reveal-on-scroll').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight * .92) {
          element.classList.add('is-visible');
        }
      });
    };
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        window.setTimeout(animatePage, 40);
      });
    });

    // Keep keyboard and screen-reader state in sync with the selected section.
    const syncNavState = () => {
      navLinks.forEach(link => {
        if (link.classList.contains('active')) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    };
    syncNavState();



    // Desvanecimiento progresivo del banner al desplazarse.
    const heroBanner = document.querySelector('.hero');
    const heroImage = heroBanner ? heroBanner.querySelector('img') : null;
    let heroTicking = false;

    const updateHeroFade = () => {
      if (!heroBanner) return;
      const fadeDistance = Math.max(240, Math.min(520, window.innerHeight * 0.62));
      const progress = Math.min(1, Math.max(0, window.scrollY / fadeDistance));
      const opacity = 1 - (progress * 0.88);
      heroBanner.style.opacity = opacity.toFixed(3);
      heroBanner.style.transform = `translateY(${-progress * 22}px)`;
      if (heroImage) heroImage.style.transform = `scale(${1 + progress * 0.025})`;
      heroTicking = false;
    };

    window.addEventListener('scroll', () => {
      if (!heroTicking) {
        window.requestAnimationFrame(updateHeroFade);
        heroTicking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateHeroFade);
    updateHeroFade()
} catch (error) {
  console.error('[Portal PMO] Navegación, encabezado y secciones:', error);
}

// ─── Carrusel de noticias ──────────────────────────────────────────────────
try {
    (() => {
      const section = document.getElementById('newsCarousel');
      if (!section) return;
      const track = document.getElementById('newsTrack');
      const slides = [...track.querySelectorAll('.news-slide')];
      const dots = document.getElementById('newsDots');
      const count = document.getElementById('newsCount');
      const prev = document.getElementById('newsPrev');
      const next = document.getElementById('newsNext');
      const dialog = document.getElementById('newsLightbox');
      const lightboxImage = document.getElementById('newsLightboxImage');
      const lightboxCaption = document.getElementById('newsLightboxCaption');
      const closeLightbox = document.getElementById('newsLightboxClose');
      let activeIndex = 0;
      let timer = null;
      let userPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let pointerInside = false;
      let focusInside = false;
      const visibleCount = () => window.matchMedia('(max-width: 760px)').matches ? 1 : (window.matchMedia('(max-width: 1050px)').matches ? 2 : 3);
      const pageCount = () => Math.max(1, slides.length - visibleCount() + 1);

      function syncAutoplay() {
        window.clearInterval(timer);
        if (!userPaused && !pointerInside && !focusInside && !dialog.open && !document.hidden) {
          timer = window.setInterval(() => show(activeIndex + 1), 6000);
        }
      }
      function renderDots() {
        dots.replaceChildren();
        for (let i = 0; i < pageCount(); i++) {
          const dot = document.createElement('button');
          const last = Math.min(i + visibleCount(), slides.length);
          dot.type = 'button'; dot.className = 'news-dot';
          dot.setAttribute('aria-label', `Mostrar noticias ${i + 1} a ${last}`);
          dot.setAttribute('aria-current', String(i === activeIndex));
          dot.addEventListener('click', () => show(i));
          dots.appendChild(dot);
        }
      }
      function show(index) {
        const pages = pageCount();
        activeIndex = ((index % pages) + pages) % pages;
        const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
        const step = slides[0].getBoundingClientRect().width + gap;
        track.style.transform = `translateX(-${activeIndex * step}px)`;
        [...dots.children].forEach((dot, i) => dot.setAttribute('aria-current', String(i === activeIndex)));
        const last = Math.min(activeIndex + visibleCount(), slides.length);
        count.textContent = `${activeIndex + 1}–${last} de ${slides.length}`;
        syncAutoplay();
      }
      slides.forEach(slide => {
        slide.querySelector('.news-image-button').addEventListener('click', () => {
          const image = slide.querySelector('img');
          lightboxImage.src = image.dataset.full || image.src;
          lightboxImage.alt = image.alt;
          lightboxCaption.textContent = slide.querySelector('h3').textContent;
          dialog.showModal(); syncAutoplay();
        });
      });
      prev.addEventListener('click', () => show(activeIndex - 1));
      next.addEventListener('click', () => show(activeIndex + 1));
      closeLightbox.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', syncAutoplay);
      section.addEventListener('pointerenter', () => { pointerInside = true; syncAutoplay(); });
      section.addEventListener('pointerleave', () => { pointerInside = false; syncAutoplay(); });
      section.addEventListener('focusin', () => { focusInside = true; syncAutoplay(); });
      section.addEventListener('focusout', event => { if (!section.contains(event.relatedTarget)) { focusInside = false; syncAutoplay(); } });
      document.addEventListener('visibilitychange', syncAutoplay);
      window.addEventListener('resize', () => { renderDots(); show(activeIndex); });
      renderDots(); show(0);
    })()
} catch (error) {
  console.error('[Portal PMO] Carrusel de noticias:', error);
}

// ─── Carrusel de documentos ────────────────────────────────────────────────
try {
    (() => {
      const section = document.querySelector('#managementView .documents-section');
      if (!section) return;
      const track = section.querySelector('[data-doc-track]');
      const prev = section.querySelector('[data-doc-prev]');
      const next = section.querySelector('[data-doc-next]');
      const count = section.querySelector('[data-doc-count]');
      const cards = Array.from(track.children);
      let index = 0;
      const visible = () => window.matchMedia('(max-width: 600px)').matches ? 1 : window.matchMedia('(max-width: 900px)').matches ? 2 : 3;
      const update = () => {
        const perPage = visible();
        const max = Math.max(0, cards.length - perPage);
        index = Math.min(index, max);
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
        track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
        prev.disabled = index === 0;
        next.disabled = index >= max;
        count.textContent = `${cards.length} ${cards.length === 1 ? 'documento' : 'documentos'}`;
      };
      prev.addEventListener('click', () => { index = Math.max(0, index - visible()); update(); });
      next.addEventListener('click', () => { index = Math.min(Math.max(0, cards.length - visible()), index + visible()); update(); });
      window.addEventListener('resize', update);
      if ('ResizeObserver' in window) new ResizeObserver(update).observe(section);
      update();
    })()
} catch (error) {
  console.error('[Portal PMO] Carrusel de documentos:', error);
}

// ─── Organigrama: selección de nodos ───────────────────────────────────────
try {
    (() => {
      const section = document.querySelector('#managementView .org-section');
      if (!section) return;
      const title = section.querySelector('[data-org-detail-title]');
      const description = section.querySelector('[data-org-detail-description]');
      const roleDescriptions = {
        sponsor: 'Representado por el Gerente General. Proporciona recursos y apoyo institucional para la gestión de los portafolios. Preside el Comité de Dirección de Portafolios, promueve la aprobación de sus componentes y responde por el éxito final del portafolio. Aprueba la creación, modificación o cierre de portafolios estratégicos y las decisiones estratégicas propuestas por el Comité. Es la máxima instancia de respaldo para implementar y mejorar continuamente la Gestión de Portafolios.',
        committee: 'Conformado por los Gerentes y líderes de los portafolios. Evalúa el desempeño de los portafolios y su alineamiento con la estrategia institucional. Revisa y aprueba la priorización y el balanceo de iniciativas, aprueba incorporaciones, reasigna recursos, gestiona riesgos críticos y toma decisiones estratégicas.',
        pmo: 'Equipo liderado por la Gerencia de Proyectos e integrado por el Gerente de Proyectos, la Subgerencia de Investigación de Proyectos, la Subgerencia de Desarrollo de Proyectos y el Analista PMO. Actúa como Secretaría Técnica del Comité y articula la gestión integral de portafolios, programas y proyectos institucionales. Establece y mantiene metodologías, estándares, lineamientos, herramientas e indicadores; monitorea objetivos estratégicos, emite reportes y facilita la priorización y el balanceo. También brinda soporte, asesoramiento, acompañamiento metodológico, monitoreo, integración de información y fortalecimiento de capacidades para asegurar el funcionamiento adecuado, la mejora continua y la generación de valor.',
        owner: 'Tiene a su cargo la gestión integral del portafolio y asegura su alineamiento con los objetivos estratégicos institucionales. Supervisa el desempeño y el cumplimiento de objetivos, indicadores, beneficios y metas; identifica riesgos y oportunidades, propone acciones de mitigación y reporta periódicamente el estado del portafolio mediante informes ejecutivos coordinados con la PMO.',
        manager: 'Coordina y facilita la gestión operativa del portafolio, apoyando al Responsable en el cumplimiento de objetivos, metas y beneficios. Participa en la identificación, evaluación, selección, priorización y seguimiento de iniciativas. Monitorea desviaciones, riesgos, dependencias y oportunidades de mejora; coordina la recopilación de información y el seguimiento de indicadores, riesgos y beneficios, y reporta hallazgos relevantes al Responsable y a la PMO Institucional.',
        technical: 'Instancia de apoyo especializada, conformada por representantes del área involucrada. El Responsable o Gestor la convoca cuando la gestión, evaluación, priorización o seguimiento de los componentes requiere conocimientos técnicos específicos. Su composición puede variar según las necesidades del portafolio y los asuntos que se analicen.',
        support: 'Soportes Técnicos del Portafolio: colaboran en la gestión técnica de forma transversal a todos los programas y proyectos del portafolio.\n\nControl Documentario: brinda soporte transversal en la organización, gestión y control de la documentación asociada a los componentes del portafolio.'
      };
      const descriptionFor = role => {
        if (role === 'Sponsor de los Portafolios') return roleDescriptions.sponsor;
        if (role === 'Comité de Dirección de Portafolios') return roleDescriptions.committee;
        if (role.startsWith('Oficina de Gestión')) return roleDescriptions.pmo;
        if (role.startsWith('Responsable de Portafolio')) return roleDescriptions.owner;
        if (role.startsWith('Gestor del Portafolio')) return roleDescriptions.manager;
        if (role.startsWith('Equipo Técnico')) return roleDescriptions.technical;
        if (role.startsWith('Soportes Técnicos')) return roleDescriptions.support;
        return '';
      };
      const nodes = section.querySelectorAll('[data-org-title]');
      const select = node => {
        nodes.forEach(item => { item.classList.remove('is-selected'); item.setAttribute('aria-pressed', 'false'); });
        node.classList.add('is-selected');
        node.setAttribute('aria-pressed', 'true');
        title.textContent = node.dataset.orgTitle;
        description.textContent = descriptionFor(node.dataset.orgTitle);
      };
      nodes.forEach(node => {
        node.setAttribute('aria-pressed', node.classList.contains('is-selected') ? 'true' : 'false');
        node.addEventListener('click', () => select(node));
      });
      const initial = section.querySelector('.org-node.is-selected') || nodes[0];
      if (initial) select(initial);
    })()
} catch (error) {
  console.error('[Portal PMO] Organigrama: selección de nodos:', error);
}

// ─── Línea de tiempo ───────────────────────────────────────────────────────
try {
    (() => {
      const section = document.querySelector('#managementView .history-section');
      if (!section) return;
      section.querySelectorAll('.timeline-item').forEach((item, index) => {
        const date = item.querySelector('.timeline-year');
        const details = item.querySelector('.timeline-card');
        if (!date || !details) return;
        if (!details.id) details.id = `timeline-detail-${index + 1}`;
        date.setAttribute('aria-controls', details.id);
        const update = () => {
          const active = item.matches(':hover, :focus-within') || item.classList.contains('is-open');
          details.setAttribute('aria-hidden', String(!active));
          date.setAttribute('aria-expanded', String(item.classList.contains('is-open')));
        };
        date.addEventListener('click', () => { item.classList.toggle('is-open'); update(); });
        item.addEventListener('mouseenter', update);
        item.addEventListener('mouseleave', update);
        item.addEventListener('focusin', update);
        item.addEventListener('focusout', () => requestAnimationFrame(update));
      });
    })()
} catch (error) {
  console.error('[Portal PMO] Línea de tiempo:', error);
}

// ─── Carrusel de proyectos destacados ──────────────────────────────────────
try {
    (() => {
      const section = document.querySelector('#projectsView .project-gallery');
      if (!section) return;
      const track = section.querySelector('[data-project-track]');
      const prev = section.querySelector('[data-project-prev]');
      const next = section.querySelector('[data-project-next]');
      const count = section.querySelector('[data-project-count]');
      const dots = section.querySelector('[data-project-dots]');
      const cards = Array.from(track.children);
      let index = 0;
      const visible = () => window.matchMedia('(max-width: 600px)').matches ? 1 : window.matchMedia('(max-width: 900px)').matches ? 2 : 3;
      const pages = () => Math.max(1, cards.length - visible() + 1);
      const renderDots = () => {
        dots.replaceChildren();
        for (let i = 0; i < pages(); i++) {
          const dot = document.createElement('button');
          dot.type = 'button'; dot.className = 'news-dot';
          dot.setAttribute('aria-label', `Mostrar proyectos ${i + 1} a ${Math.min(i + visible(), cards.length)}`);
          dot.addEventListener('click', () => { index = i; update(); });
          dots.appendChild(dot);
        }
      };
      const update = () => {
        if (dots.children.length !== pages()) renderDots();
        index = Math.min(Math.max(index, 0), pages() - 1);
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const width = cards[0]?.getBoundingClientRect().width || 0;
        track.style.transform = `translateX(-${index * (width + gap)}px)`;
        prev.disabled = index === 0;
        next.disabled = index >= pages() - 1;
        [...dots.children].forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
        count.textContent = `${index + 1}–${Math.min(index + visible(), cards.length)} de ${cards.length}`;
      };
      prev.addEventListener('click', () => { index -= 1; update(); });
      next.addEventListener('click', () => { index += 1; update(); });
      window.addEventListener('resize', update);
      if ('ResizeObserver' in window) new ResizeObserver(update).observe(section);
      update();
    })()
} catch (error) {
  console.error('[Portal PMO] Carrusel de proyectos destacados:', error);
}

// ─── Organigrama: conectores ───────────────────────────────────────────────
try {
    (() => {
      const chart = document.querySelector('#managementView .org-chart');
      const svg = chart?.querySelector('.org-connectors');
      if (!chart || !svg) return;
      const connect = (source, targets) => {
        if (!source || !targets.length) return;
        const base = chart.getBoundingClientRect();
        const start = source.getBoundingClientRect();
        const points = targets.map(node => node.getBoundingClientRect());
        const x1 = start.left + start.width / 2 - base.left;
        const y1 = start.bottom - base.top;
        const y2 = Math.min(...points.map(rect => rect.top - base.top));
        const branchY = y1 + Math.max(14, (y2 - y1) / 2);
        const centers = points.map(rect => rect.left + rect.width / 2 - base.left);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let d = `M ${x1} ${y1} V ${branchY} H ${Math.min(...centers)}`;
        if (centers.length > 1) d += ` M ${Math.min(...centers)} ${branchY} H ${Math.max(...centers)}`;
        centers.forEach((x, index) => { d += ` M ${x} ${branchY} V ${points[index].top - base.top}`; });
        path.setAttribute('d', d);
        svg.appendChild(path);
      };
      const draw = () => {
        const width = chart.scrollWidth;
        const height = chart.scrollHeight;
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.replaceChildren();
        const sponsor = chart.querySelector('.org-sponsor');
        const topNodes = Array.from(chart.querySelectorAll('.org-top-connectors .org-node'));
        const pmo = topNodes.find(node => node.dataset.orgTitle?.startsWith('Oficina de Gestión'));
        const owners = Array.from(chart.querySelectorAll('.org-owner'));
        connect(sponsor, topNodes);
        connect(pmo, owners);
      };
      draw();
      window.addEventListener('resize', draw);
      if ('ResizeObserver' in window) new ResizeObserver(draw).observe(chart);
    })()
} catch (error) {
  console.error('[Portal PMO] Organigrama: conectores:', error);
}

// ─── KPI de Power BI ───────────────────────────────────────────────────────
try {
    // KPI de Power BI: muestra tarjetas de espera hasta que el informe termina de dibujarse.
    (function () {
      const frame = document.querySelector('.pbi-frame');
      const iframe = frame && frame.querySelector('iframe');
      if (!iframe) return;
      const listo = () => frame.classList.add('is-ready');
      iframe.addEventListener('load', () => setTimeout(listo, 2500));
      setTimeout(listo, 6000); // por si el informe ya había cargado antes de este script
    })()
} catch (error) {
  console.error('[Portal PMO] KPI de Power BI:', error);
}

// ─── Noticias ──────────────────────────────────────────────────────────────
try {
    // Noticias: ajusta cada flyer a su tarjeta (llenar o fondo difuminado) según su proporción.
    (function () {
      const ajustar = img => {
        const box = img.parentElement;
        if (!img.naturalWidth || !box.clientHeight) return;
        const ratio = img.naturalWidth / img.naturalHeight;
        const boxRatio = box.clientWidth / box.clientHeight;
        box.style.setProperty('--news-bg', `url("${img.currentSrc || img.src}")`);
        box.classList.toggle('is-fill', Math.abs(ratio - boxRatio) / boxRatio < 0.08);
      };
      const imgs = [...document.querySelectorAll('.news-image-button img')];
      imgs.forEach(img => img.complete ? ajustar(img) : img.addEventListener('load', () => ajustar(img)));
      window.addEventListener('resize', () => imgs.forEach(ajustar));
    })()
} catch (error) {
  console.error('[Portal PMO] Noticias:', error);
}

// ─── Videos ────────────────────────────────────────────────────────────────
try {
    // Videos: se carga el reproductor de YouTube solo al hacer clic (la página abre más rápido).
    document.querySelectorAll('.video-thumb').forEach(btn => btn.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.video}?autoplay=1&rel=0&start=${btn.dataset.start || 0}`;
      f.title = btn.getAttribute('aria-label').replace('Reproducir: ', '');
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      f.allowFullscreen = true;
      btn.replaceWith(f);
    }))
} catch (error) {
  console.error('[Portal PMO] Videos:', error);
}

// ─── Precarga en segundo plano ─────────────────────────────────────────────
try {
    // Precarga en segundo plano: los dashboards de Proyectos y Gestión BIM empiezan a cargar
    // poco después de abrir la web, así ya están listos cuando la persona entra a esas secciones.
    (function () {
      const frames = [...document.querySelectorAll('iframe[data-preload-src]')];
      const cargar = f => { if (!f.src) f.src = f.dataset.preloadSrc; };
      frames.forEach(f => {
        const link = document.querySelector(`nav a[data-page="${f.dataset.preloadPage}"]`);
        if (link) link.addEventListener('click', () => cargar(f));
      });
      // Si la persona entra directo a la sección (por ejemplo …/#gestion-bim), se carga de inmediato.
      const seccionActual = location.hash.replace('#', '');
      frames.filter(f => f.dataset.preloadPage === seccionActual).forEach(cargar);
      const enSegundoPlano = () => frames.forEach((f, i) => setTimeout(() => cargar(f), 1500 + i * 1500));
      if (document.readyState === 'complete') enSegundoPlano(); else window.addEventListener('load', enSegundoPlano);
    })()
} catch (error) {
  console.error('[Portal PMO] Precarga en segundo plano:', error);
}

// ─── Mensaje de respaldo de los dashboards ─────────────────────────────────
try {
    // Si un dashboard no termina de cargar (red lenta, bloqueo del navegador o del servicio),
    // aparece un aviso con un enlace para abrirlo en una pestaña nueva.
    (function () {
      const ESPERA_MS = 20000;
      const vigilar = frame => {
        if (frame.dataset.vigilado) return;
        frame.dataset.vigilado = '1';
        let cargado = false;
        frame.addEventListener('load', () => { cargado = true; }, { once: true });
        setTimeout(() => {
          if (cargado || !frame.src) return;
          const caja = frame.closest('.pbi-scroll, .powerbi-frame, .bim-embed') || frame.parentElement;
          if (caja.nextElementSibling && caja.nextElementSibling.classList.contains('frame-fallback')) return;
          const aviso = document.createElement('p');
          aviso.className = 'frame-fallback';
          aviso.setAttribute('role', 'status');
          aviso.innerHTML = 'El dashboard está tardando en cargar. <a target="_blank" rel="noopener">Ábrelo en una pestaña nueva ↗</a>';
          aviso.querySelector('a').href = frame.src;
          caja.insertAdjacentElement('afterend', aviso);
          frame.addEventListener('load', () => aviso.remove(), { once: true });
        }, ESPERA_MS);
      };
      const frames = document.querySelectorAll('.pbi-frame iframe, .powerbi-frame iframe, #bimFrame');
      frames.forEach(frame => {
        if (frame.getAttribute('src')) vigilar(frame);
        else new MutationObserver((_, obs) => { if (frame.getAttribute('src')) { obs.disconnect(); vigilar(frame); } })
          .observe(frame, { attributes: true, attributeFilter: ['src'] });
      });
    })()
} catch (error) {
  console.error('[Portal PMO] Mensaje de respaldo de los dashboards:', error);
}

// ─── Proyectos destacados ──────────────────────────────────────────────────
try {
    // Proyectos destacados: al hacer clic, la foto se amplía igual que en Noticias.
    (function () {
      const dialog = document.getElementById('projectLightbox');
      const img = document.getElementById('projectLightboxImage');
      const caption = document.getElementById('projectLightboxCaption');
      document.querySelectorAll('#projectsView .project-photo').forEach(btn => btn.addEventListener('click', () => {
        const thumb = btn.querySelector('img');
        img.src = thumb.dataset.full || thumb.src;
        img.alt = thumb.alt;
        caption.textContent = thumb.alt;
        dialog.showModal();
      }));
      document.getElementById('projectLightboxClose').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
    })()
} catch (error) {
  console.error('[Portal PMO] Proyectos destacados:', error);
}

// ─── Logo del encabezado y del pie ─────────────────────────────────────────
try {
    // Logo del encabezado y del pie: vuelven al Inicio. El año del pie se mantiene al día.
    (function () {
      const inicio = document.querySelector('nav a[data-page="inicio"]');
      const year = document.getElementById('footerYear');
      if (year) year.textContent = Math.max(2026, new Date().getFullYear());
      if (!inicio) return;
      const irAlInicio = e => {
        if (e) e.preventDefault();
        inicio.click();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      document.querySelectorAll('.electro-logo, .go-home').forEach(el => {
        el.addEventListener('click', irAlInicio);
        el.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') irAlInicio(e);
        });
      });
    })()
} catch (error) {
  console.error('[Portal PMO] Logo del encabezado y del pie:', error);
}

// ─── Dashboard BIM ─────────────────────────────────────────────────────────
try {
    // Dashboard BIM: el iframe toma el alto de su contenido para que la página se desplace con su propia barra.
    // Alturas medidas del dashboard según el ancho (24/11/2026). Si el dashboard envía su alto por postMessage, se usa ese.
    (function () {
      const frame = document.getElementById('bimFrame');
      if (!frame) return;
      const MEDIDAS = [[360, 4194], [420, 3869], [494, 3589], [600, 3177], [700, 3358], [721, 3266], [768, 3447],
                       [900, 3454], [1000, 3452], [1024, 2721], [1081, 2651], [1100, 2623], [1180, 2607]];
      const MARGEN = 40;
      let altoInformado = 0;
      const altoEstimado = w => {
        if (w <= MEDIDAS[0][0]) return MEDIDAS[0][1] + (MEDIDAS[0][0] - w) * 6;
        if (w >= MEDIDAS[MEDIDAS.length - 1][0]) return MEDIDAS[MEDIDAS.length - 1][1];
        for (let i = 1; i < MEDIDAS.length; i++) {
          const [w0, h0] = MEDIDAS[i - 1], [w1, h1] = MEDIDAS[i];
          if (w <= w1) return (w0 === 1000 && w < 1024) ? 3460 : Math.max(h0, h1);
        }
        return 2700;
      };
      const ajustar = () => {
        const w = frame.clientWidth;
        if (!w) return;
        frame.style.height = (altoInformado || altoEstimado(w) + MARGEN) + 'px';
      };
      new ResizeObserver(ajustar).observe(frame);
      window.addEventListener('resize', ajustar);
      document.addEventListener('click', () => setTimeout(ajustar, 60));
      ajustar();
      window.addEventListener('message', e => {
        if (!/electroperu-bim-dashboard\.vercel\.app$/.test(new URL(e.origin).hostname)) return;
        const h = Number(e.data && (e.data.height || e.data.frameHeight));
        if (h > 200) { altoInformado = Math.ceil(h); ajustar(); }
      });
    })()
} catch (error) {
  console.error('[Portal PMO] Dashboard BIM:', error);
}
