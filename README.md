# Portfolio Site — Aynur Akhmametov

Production-сайт портфолио (static HTML). Собран по макету v3.

## Структура

```
portfolio-site/
├── index.html          # главная страница
├── js/main.js          # i18n + автозапуск showreel
├── icons/              # SVG иконки инструментов
├── videos/showreel.mp4 # symlink → Портфолио/Showreel 2026.mp4
└── content/cases.json  # метаданные кейсов
```

## Как открыть локально

```bash
open portfolio-site/index.html
```

Или запустите локальный сервер (рекомендуется для видео):

```bash
cd portfolio-site && python3 -m http.server 8080
# → http://localhost:8080
```

## Showreel — автозапуск

При скролле ко второму экрану (`#showreel`) видео **запускается автоматически со звуком** (нативный плеер с controls).

## Деплой

1. Скопируйте `Showreel 2026.mp4` в `portfolio-site/videos/` (не symlink)
2. Загрузите папку на [Vercel](https://vercel.com), [Netlify](https://netlify.com) или GitHub Pages
3. Либо установите Node.js и мигрируйте на Next.js

## Контакты на сайте

- Email: ahmametovainur@gmail.com
- Telegram: [@tandyy9](https://t.me/tandyy9)
- Envato: [JustaMotion](https://elements.envato.com/user/JustaMotion)
