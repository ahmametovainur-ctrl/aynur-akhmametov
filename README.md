# Aynur Akhmametov — Motion Portfolio

Senior Motion Designer · 8 лет опыта · Казань, удалённо

[![Live site](https://img.shields.io/badge/site-GitHub%20Pages-8b1e2d?style=for-the-badge&logo=github)](https://ahmametovainur-ctrl.github.io/aynur-akhmametov/)
[![Portfolio](https://img.shields.io/badge/video-Yandex%20Disk-e8e0d4?style=for-the-badge)](https://disk.yandex.ru/d/Em9lTJpf1cYpPQ)
[![Envato](https://img.shields.io/badge/templates-JustaMotion-81b441?style=for-the-badge&logo=envato)](https://elements.envato.com/user/JustaMotion)

---

## Live

**Сайт:** https://ahmametovainur-ctrl.github.io/aynur-akhmametov/

- Showreel 2026 с автозапуском при скролле
- RU / EN переключение
- Портфолио → Yandex Disk
- Envato → JustaMotion

---

## Структура репозитория

```
├── index.html              # Production-сайт (GitHub Pages)
├── js/main.js              # i18n, showreel, UI
├── images/                 # Обложки блока «Избранные работы»
├── icons/                  # SVG-иконки инструментов
├── videos/showreel.mp4     # Showreel (~58 MB)
├── content/cases.json      # Метаданные кейсов
├── folder.html             # Просмотр папок Yandex Disk
├── portfolio-mockup/       # HTML-макет v3 (локальный прототип)
├── docs/                   # Резюме, письма, чеклисты
│   ├── resume/
│   ├── cover-letters/
│   └── job-search/
└── tests/test-site.py      # Автопроверки сайта
```

---

## Быстрый старт

### Открыть сайт локально

```bash
cd portfolio-site
python3 -m http.server 8080
# → http://localhost:8080
```

### Запустить тесты

```bash
python3 tests/test-site.py
```

### Открыть макет

```bash
open portfolio-mockup/index.html
```

---

## Ссылки

| Ресурс | URL |
|--------|-----|
| Сайт | https://ahmametovainur-ctrl.github.io/aynur-akhmametov/ |
| Портфолио (видео) | https://disk.yandex.ru/d/Em9lTJpf1cYpPQ |
| Envato | https://elements.envato.com/user/JustaMotion |
| Telegram | https://t.me/tandyy9 |
| Email | ahmametovainur@gmail.com |

---

## Что не в репозитории

Исходные видео кейсов (~2.2 GB) лежат на **Yandex Disk** — в GitHub они не загружаются из‑за лимита размера. Полный список файлов: [docs/portfolio-manifest.json](docs/portfolio-manifest.json).

История чатов Cursor хранится локально в IDE и в репозиторий не попадает.

---

## Деплой

Push в `main` → GitHub Pages обновляется автоматически.

Подробнее: [DEPLOY.md](DEPLOY.md)

---

## Контакты

**Aynur Akhmametov** — Senior Motion Designer

- Telegram: [@tandyy9](https://t.me/tandyy9)
- Email: ahmametovainur@gmail.com
