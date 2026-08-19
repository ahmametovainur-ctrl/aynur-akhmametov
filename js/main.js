const SITE = {
  yandexBase: 'https://disk.yandex.ru/d/Em9lTJpf1cYpPQ',
  envato: 'https://elements.envato.com/user/JustaMotion',
  telegram: 'https://t.me/tandyy9'
};

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
    'work.yandex.title': 'Портфолио',
    'work.yandex.sub': 'Yandex Disk ↗',
    'work.envato.title': 'JustaMotion',
    'work.envato.sub': 'Envato ↗',
    'about.bio': 'Моушн-дизайнер с 8 годами коммерческого опыта: реклама, брендинг, корпоративное видео и AI-продакшн. Руководил видеоотделом в Алабуге — увеличил выпуск с 15 до 24 роликов в месяц. На Envato — 155+ продуктов и 1070+ продаж. Работаю из Казани, открыт к удалённым проектам.',
    'about.q1': 'Проект под ключ — от брифа до финала', 'about.q2': 'Reels, Shorts, YouTube, презентации', 'about.q3': 'AI + классический моушн в одном пайплайне', 'about.q4': '16:9, 9:16, 1:1, 4:5 и локализация',
    'about.testimonial': '«Профессиональный подход, быстрые сроки и сильный визуал»',
    'footer.contact': 'КОНТАКТЫ', 'footer.connect': 'СВЯЗЬ', 'footer.location': 'Казань, Россия',
    'footer.qr2': 'Showreel', 'footer.scan': 'Сканируй',
    'footer.showreelBackup': 'Showreel (Yandex Disk) ↗',
    'footer.tagline': 'СОЗДАЮ ДВИЖЕНИЕ.<br>РАССКАЗЫВАЮ ИСТОРИИ.',
    'tg.copied': 'Скопировано!',
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
    'work.yandex.title': 'Portfolio',
    'work.yandex.sub': 'Yandex Disk ↗',
    'work.envato.title': 'JustaMotion',
    'work.envato.sub': 'Envato ↗',
    'about.bio': 'Motion designer with 8 years of commercial experience in advertising, branding, corporate video and AI production. Led the video team at Alabuga — scaled output from 15 to 24 videos per month. 155+ products and 1070+ sales on Envato. Based in Kazan, open to remote projects.',
    'about.q1': 'End-to-end — from brief to final render', 'about.q2': 'Reels, Shorts, YouTube, presentations', 'about.q3': 'AI + classic motion in one pipeline', 'about.q4': '16:9, 9:16, 1:1, 4:5 and localization',
    'about.testimonial': '"Professional approach, fast delivery, strong visuals"',
    'footer.contact': 'CONTACT', 'footer.connect': 'CONNECT', 'footer.location': 'Kazan, Russia',
    'footer.qr2': 'Showreel', 'footer.scan': 'Scan',
    'footer.showreelBackup': 'Showreel (Yandex Disk) ↗',
    'footer.tagline': 'CRAFTING MOTION.<br>BUILDING STORIES.',
    'tg.copied': 'Copied!',
  }
};

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
}

function initShowreelAutoplay() {
  const section = document.getElementById('showreel');
  const video = document.getElementById('showreel-video');
  const unmuteBtn = document.getElementById('showreel-unmute');
  if (!section || !video) return;

  let wasVisible = false;

  async function playShowreel() {
    video.volume = 1;
    video.muted = false;
    try {
      await video.play();
      if (unmuteBtn) unmuteBtn.hidden = true;
    } catch {
      video.pause();
      if (unmuteBtn) unmuteBtn.hidden = false;
    }
  }

  section.addEventListener('click', async () => {
    if (!video.muted && !video.paused) return;
    video.muted = false;
    video.volume = 1;
    try {
      await video.play();
      if (unmuteBtn) unmuteBtn.hidden = true;
    } catch (err) {
      console.warn('Showreel play failed', err);
    }
  });

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

document.getElementById('lang-ru').addEventListener('click', () => setLang('ru'));
document.getElementById('lang-en').addEventListener('click', () => setLang('en'));

setLang(lang);
initShowreelAutoplay();
initCopyButtons();
