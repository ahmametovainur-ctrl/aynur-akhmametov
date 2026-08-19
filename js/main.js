const SITE = {
  yandexBase: 'https://disk.yandex.ru/d/Em9lTJpf1cYpPQ',
  envato: 'https://elements.envato.com/user/JustaMotion',
  telegram: 'https://t.me/tandyy9'
};

/** Страница просмотра папки (Yandex Disk не открывает ?path= в браузере) */
function yandexFolderUrl(folderName) {
  return `folder.html?path=${encodeURIComponent('/' + folderName)}`;
}

const i18n = {
  ru: {
    'topbar.left': 'MOTION PORTFOLIO',
    'topbar.status': 'ОТКРЫТ К ПРОЕКТАМ',
    'hero.quote': '«Движение — язык, на котором бренды говорят с аудиторией»',
    'hero.bio': '8 лет коммерческого опыта. Реклама, брендинг, performance-креативы, AI-продакшн. 155+ продуктов на Envato, 1070+ продаж. Team Lead. Казань, удалённо.',
    'stat.years': 'ЛЕТ ОПЫТА',
    'stat.products': 'ПРОДУКТОВ',
    'stat.sales': 'ПРОДАЖ',
    'cta.showreel': 'Смотреть Showreel',
    'cta.cases': 'Кейсы',
    'hero.scroll': 'Шоурил',
    'showreel.sub': 'Senior Motion Designer',
    'showreel.unmute': 'Включить звук',
    'section.services': 'ЧЕМ ЗАНИМАЮСЬ',
    'section.process': 'МОЙ ПРОЦЕСС',
    'section.work': 'ИЗБРАННЫЕ РАБОТЫ',
    'section.about': 'ОБО МНЕ',
    'section.tools': 'ИНСТРУМЕНТЫ',
    'svc1.title': 'МОУШН-ГРАФИКА', 'svc1.desc': '2D/3D анимация, kinetic typography, explainer videos',
    'svc2.title': 'ВИДЕОМОНТАЖ', 'svc2.desc': 'Монтаж, color grading, sound design, все форматы',
    'svc3.title': 'РЕКЛАМНЫЕ КРЕАТИВЫ', 'svc3.desc': 'Reels, Shorts, TikTok — 9:16, 1:1, 16:9, 4:5',
    'svc4.title': 'AI-ПРОДАКШН', 'svc4.desc': 'ComfyUI, Kling, ElevenLabs, n8n pipeline',
    'svc5.title': 'БРЕНД-МОУШН', 'svc5.desc': 'Анимация логотипа, brandbook motion, ребрендинг',
    'proc1.title': 'ИССЛЕДОВАНИЕ', 'proc1.desc': 'Бриф, цели, аудитория',
    'proc2.title': 'ПОСТАНОВКА', 'proc2.desc': 'Раскадровка, moodboard, тайминг',
    'proc3.title': 'ДИЗАЙН', 'proc3.desc': 'Моушн-графика, типографика, композитинг',
    'proc4.title': 'ПРОИЗВОДСТВО', 'proc4.desc': 'AE/Premiere, AI pipeline, правки',
    'proc5.title': 'СДАЧА', 'proc5.desc': 'Финальный экспорт, локализация, все форматы',
    'work.more': 'Ещё проекты →',
    'case1.title': 'Ребрендинг Алабуги', 'case1.cat': 'SaaS-презентация',
    'case2.title': 'Анимация логотипа', 'case2.cat': '9 вариантов',
    'case3.title': 'Рекламные креативы', 'case3.cat': 'Performance Ads',
    'case4.title': 'AI-продакшн', 'case4.cat': 'ComfyUI + Kling',
    'case5.title': 'Локализация YouTube', 'case5.cat': 'EN / ES / FR',
    'case6.title': 'JustaMotion', 'case6.cat': 'Envato Marketplace',
    'case1.desc': 'SaaS-презентация ребрендинга Алабуги: 2D/3D, моушн-раздел брендбука, 9+ вариантов анимации логотипа.',
    'case2.desc': '9 вариантов анимации логотипа для брендбука и видеоконтента.',
    'case3.desc': 'Performance-креативы для Reels, Shorts, TikTok — адаптация под 9:16, 1:1, 16:9, 4:5.',
    'case4.desc': 'AI-ролики на пайплайне ComfyUI, Kling, ElevenLabs и n8n.',
    'case5.desc': 'Полный цикл локализации YouTube-ролика на английский, испанский и французский.',
    'case6.desc': '155+ коммерческих продуктов на Envato, 1070+ продаж. TikTok Elements, вертикальные форматы.',
    'about.bio': 'Моушн-дизайнер с 8 годами коммерческого опыта: реклама, брендинг, корпоративное видео и AI-продакшн. Руководил видеоотделом в Алабуге — увеличил выпуск с 15 до 24 роликов в месяц. На Envato — 155+ продуктов и 1070+ продаж. Работаю из Казани, открыт к удалённым проектам.',
    'about.q1': 'Проект под ключ — от брифа до финала', 'about.q2': 'Reels, Shorts, YouTube, презентации', 'about.q3': 'AI + классический моушн в одном пайплайне', 'about.q4': '16:9, 9:16, 1:1, 4:5 и локализация',
    'about.testimonial': '«Профессиональный подход, быстрые сроки и сильный визуал»',
    'footer.contact': 'КОНТАКТЫ', 'footer.connect': 'СВЯЗЬ', 'footer.location': 'Казань, Россия',
    'footer.qr2': 'Showreel', 'footer.scan': 'Сканируй',
    'footer.showreelBackup': 'Showreel (Yandex Disk) ↗',
    'footer.tagline': 'СОЗДАЮ ДВИЖЕНИЕ.<br>РАССКАЗЫВАЮ ИСТОРИИ.',
    'tg.copied': 'Скопировано!',
    'modal.close': 'Закрыть',
    'modal.open': 'Открыть папку',
    'modal.openEnvato': 'Открыть на Envato',
    'modal.folder': 'Папка'
  },
  en: {
    'topbar.left': 'MOTION PORTFOLIO',
    'topbar.status': 'AVAILABLE FOR FREELANCE',
    'hero.quote': '"Motion is the language brands use to speak to their audience."',
    'hero.bio': '8 years of commercial experience. Advertising, branding, performance creatives, AI production. 155+ products on Envato, 1070+ sales. Team Lead. Kazan, remote.',
    'stat.years': 'YEARS EXPERIENCE',
    'stat.products': 'PRODUCTS',
    'stat.sales': 'SALES',
    'cta.showreel': 'Watch Showreel',
    'cta.cases': 'View Cases',
    'hero.scroll': 'Showreel',
    'showreel.sub': 'Senior Motion Designer',
    'showreel.unmute': 'Unmute',
    'section.services': 'WHAT I DO',
    'section.process': 'MY PROCESS',
    'section.work': 'FEATURED WORK',
    'section.about': 'ABOUT ME',
    'section.tools': 'TOOLS I USE',
    'svc1.title': 'MOTION GRAPHICS', 'svc1.desc': '2D/3D animation, kinetic typography, explainer videos',
    'svc2.title': 'VIDEO EDITING', 'svc2.desc': 'Editing, color grading, sound design, multi-format',
    'svc3.title': 'AD CREATIVES', 'svc3.desc': 'Reels, Shorts, TikTok — 9:16, 1:1, 16:9, 4:5',
    'svc4.title': 'AI PRODUCTION', 'svc4.desc': 'ComfyUI, Kling, ElevenLabs, n8n pipeline',
    'svc5.title': 'BRAND MOTION', 'svc5.desc': 'Logo animation, brandbook motion, rebranding',
    'proc1.title': 'DISCOVER', 'proc1.desc': 'Brief, goals, audience',
    'proc2.title': 'DEFINE', 'proc2.desc': 'Storyboard, moodboard, timing',
    'proc3.title': 'DESIGN', 'proc3.desc': 'Motion graphics, typography, compositing',
    'proc4.title': 'DEVELOP', 'proc4.desc': 'AE/Premiere, AI pipeline, revisions',
    'proc5.title': 'DELIVER', 'proc5.desc': 'Final export, localization, all formats',
    'work.more': 'View more →',
    'case1.title': 'Alabuga Rebranding', 'case1.cat': 'SaaS Presentation',
    'case2.title': 'Logo Animation', 'case2.cat': '9 Variants',
    'case3.title': 'Ad Creatives', 'case3.cat': 'Performance Ads',
    'case4.title': 'AI Production', 'case4.cat': 'ComfyUI + Kling',
    'case5.title': 'YouTube Localization', 'case5.cat': 'EN / ES / FR',
    'case6.title': 'JustaMotion', 'case6.cat': 'Envato Marketplace',
    'case1.desc': 'Alabuga rebranding SaaS presentation: 2D/3D, brandbook motion, 9+ logo animation variants.',
    'case2.desc': '9 logo animation variants for brandbook and video content.',
    'case3.desc': 'Performance ad creatives for Reels, Shorts, TikTok — 9:16, 1:1, 16:9, 4:5.',
    'case4.desc': 'AI videos on ComfyUI, Kling, ElevenLabs and n8n pipeline.',
    'case5.desc': 'Full-cycle YouTube localization into English, Spanish and French.',
    'case6.desc': '155+ commercial products on Envato, 1070+ sales. TikTok Elements, vertical formats.',
    'about.bio': 'Motion designer with 8 years of commercial experience in advertising, branding, corporate video and AI production. Led the video team at Alabuga — scaled output from 15 to 24 videos per month. 155+ products and 1070+ sales on Envato. Based in Kazan, open to remote projects.',
    'about.q1': 'End-to-end — from brief to final render', 'about.q2': 'Reels, Shorts, YouTube, presentations', 'about.q3': 'AI + classic motion in one pipeline', 'about.q4': '16:9, 9:16, 1:1, 4:5 and localization',
    'about.testimonial': '"Professional approach, fast delivery, strong visuals"',
    'footer.contact': 'CONTACT', 'footer.connect': 'CONNECT', 'footer.location': 'Kazan, Russia',
    'footer.qr2': 'Showreel', 'footer.scan': 'Scan',
    'footer.showreelBackup': 'Showreel (Yandex Disk) ↗',
    'footer.tagline': 'CRAFTING MOTION.<br>BUILDING STORIES.',
    'tg.copied': 'Copied!',
    'modal.close': 'Close',
    'modal.open': 'Open folder',
    'modal.openEnvato': 'Open on Envato',
    'modal.folder': 'Folder'
  }
};

const caseItems = [
  { id: 'alabuga', titleKey: 'case1.title', catKey: 'case1.cat', descKey: 'case1.desc', folder: 'SAAS Анимация', href: yandexFolderUrl('SAAS Анимация') },
  { id: 'logo', titleKey: 'case2.title', catKey: 'case2.cat', descKey: 'case2.desc', folder: 'Анимация логотипа', href: yandexFolderUrl('Анимация логотипа') },
  { id: 'ads', titleKey: 'case3.title', catKey: 'case3.cat', descKey: 'case3.desc', folder: 'Креативы', href: yandexFolderUrl('Креативы') },
  { id: 'ai', titleKey: 'case4.title', catKey: 'case4.cat', descKey: 'case4.desc', folder: 'AI', href: yandexFolderUrl('AI') },
  { id: 'youtube', titleKey: 'case5.title', catKey: 'case5.cat', descKey: 'case5.desc', folder: 'Ролик на ютуб про города России', href: yandexFolderUrl('Ролик на ютуб про города России') },
  { id: 'envato', titleKey: 'case6.title', catKey: 'case6.cat', descKey: 'case6.desc', href: SITE.envato, envato: true }
];

let lang = localStorage.getItem('portfolio-lang') || 'ru';

function t(key) {
  return i18n[lang][key] ?? key;
}

function setLang(l) {
  lang = l;
  localStorage.setItem('portfolio-lang', l);
  document.documentElement.lang = l;
  document.getElementById('lang-ru').classList.toggle('active', l === 'ru');
  document.getElementById('lang-en').classList.toggle('active', l === 'en');
  document.getElementById('lang-ru').setAttribute('aria-pressed', l === 'ru');
  document.getElementById('lang-en').setAttribute('aria-pressed', l === 'en');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[l][key];
    if (val !== undefined) {
      if (val.includes('<br>')) el.innerHTML = val;
      else el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = i18n[l][key];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });
  const modal = document.getElementById('case-modal');
  if (modal && !modal.hidden) {
    const active = modal.dataset.activeCase;
    if (active) openCaseModal(active);
  }
}

function initShowreelAutoplay() {
  const section = document.getElementById('showreel');
  const video = document.getElementById('showreel-video');
  const unmuteBtn = document.getElementById('showreel-unmute');
  if (!section || !video) return;

  let wasVisible = false;

  async function playShowreel() {
    video.muted = false;
    try {
      await video.play();
      if (unmuteBtn) unmuteBtn.hidden = true;
      return;
    } catch {
      video.muted = true;
      try {
        await video.play();
        if (unmuteBtn) unmuteBtn.hidden = false;
      } catch (e) {
        console.warn('Showreel autoplay blocked', e);
      }
    }
  }

  if (unmuteBtn) {
    unmuteBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      video.muted = false;
      video.volume = 1;
      try {
        await video.play();
        unmuteBtn.hidden = true;
      } catch (err) {
        console.warn('Unmute failed', err);
      }
    });
  }

  document.querySelectorAll('a[href="#showreel"]').forEach((link) => {
    link.addEventListener('click', () => {
      setTimeout(() => playShowreel(), 600);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!wasVisible) video.currentTime = 0;
          wasVisible = true;
          playShowreel();
        } else {
          video.pause();
          wasVisible = false;
        }
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(section);
}

function openCaseModal(caseId) {
  const item = caseItems.find((c) => c.id === caseId);
  const modal = document.getElementById('case-modal');
  if (!item || !modal) return;

  modal.dataset.activeCase = caseId;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-title').textContent = t(item.titleKey);
  document.getElementById('modal-cat').textContent = t(item.catKey);
  document.getElementById('modal-desc').textContent = t(item.descKey);
  const folderEl = document.getElementById('modal-folder');
  if (folderEl) {
    if (item.folder) {
      folderEl.hidden = false;
      folderEl.textContent = `${t('modal.folder')}: ${item.folder}`;
    } else {
      folderEl.hidden = true;
    }
  }
  const btn = document.getElementById('modal-action');
  btn.textContent = item.envato ? t('modal.openEnvato') : t('modal.open');
  btn.href = item.href;
  btn.target = '_blank';
  btn.rel = 'noopener';
}

function closeCaseModal() {
  const modal = document.getElementById('case-modal');
  if (!modal) return;
  modal.hidden = true;
  delete modal.dataset.activeCase;
  document.body.style.overflow = '';
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.dataset.copy;
      const handle = btn.querySelector('.tg-handle');
      const original = handle ? handle.textContent : text;

      async function showCopied() {
        if (handle) handle.textContent = t('tg.copied');
        btn.classList.add('copied');
        setTimeout(() => {
          if (handle) handle.textContent = original;
          btn.classList.remove('copied');
        }, 1800);
      }

      try {
        await navigator.clipboard.writeText(text);
        showCopied();
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showCopied();
        } catch (err) {
          console.warn('Copy failed', err);
        }
        document.body.removeChild(ta);
      }
    });
  });
}

function initCaseCards() {
  document.querySelectorAll('[data-case]').forEach((card) => {
    const item = caseItems.find((c) => c.id === card.dataset.case);
    if (item?.href) card.dataset.href = item.href;

    card.addEventListener('click', () => {
      const caseItem = caseItems.find((c) => c.id === card.dataset.case);
      if (caseItem?.href) window.open(caseItem.href, '_blank', 'noopener');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const caseItem = caseItems.find((c) => c.id === card.dataset.case);
        if (caseItem?.href) window.open(caseItem.href, '_blank', 'noopener');
      }
    });
  });

  document.getElementById('modal-close')?.addEventListener('click', closeCaseModal);
  document.getElementById('case-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'case-modal') closeCaseModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseModal();
  });
}

document.getElementById('lang-ru').addEventListener('click', () => setLang('ru'));
document.getElementById('lang-en').addEventListener('click', () => setLang('en'));

setLang(lang);
initShowreelAutoplay();
initCopyButtons();
initCaseCards();
