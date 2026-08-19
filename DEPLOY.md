# Деплой портфолио

## Live

- **Сайт:** https://ozik14.github.io/aynur-akhmametov/
- **Репозиторий:** https://github.com/Ozik14/aynur-akhmametov

GitHub Pages включён (branch `main`, root).

---

## Вариант A — GitHub Pages (бесплатно, сервер не нужен)

Подходит для вашего сайта: HTML + JS + видео 58 MB.

### 1. Создайте репозиторий на GitHub

1. [github.com/new](https://github.com/new)
2. Имя: `portfolio` (или любое)
3. Public
4. **Без** README (мы уже добавим файлы)

### 2. Залейте код

```bash
cd portfolio-site
git init
git add .
git commit -m "Portfolio site: Aynur Akhmametov motion designer"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/portfolio.git
git push -u origin main
```

### 3. Включите GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Save

Через 1–3 минуты сайт будет по адресу:

`https://ВАШ_ЛОГИН.github.io/portfolio/`

---

## Вариант B — VPS (когда купите сервер)

Когда будет свой сервер (Timeweb, Selectel, Hetzner и т.д.):

### На сервере (Ubuntu)

```bash
sudo apt update && sudo apt install -y nginx
sudo mkdir -p /var/www/portfolio
```

### С вашего Mac — залить файлы

```bash
cd portfolio-site
rsync -avz --exclude .git ./ user@IP_СЕРВЕРА:/var/www/portfolio/
```

### Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```bash
sudo nginx -t && sudo systemctl reload nginx
```

Домен → A-запись на IP сервера. SSL: `sudo certbot --nginx`.

---

## Видео showreel (58 MB)

- В репозитории: `videos/showreel.mp4` — лимит GitHub 100 MB, файл проходит
- Если позже видео вырастет — вынесите на Yandex Disk / Vimeo и поменяйте `src` в `index.html`

---

## Что выбрать

| | GitHub Pages | VPS |
|---|-------------|-----|
| Цена | Бесплатно | ~300–1000 ₽/мес |
| Настройка | 5 мин | 30–60 мин |
| Свой домен | Да (DNS) | Да |
| Для статики | ✅ Достаточно | Избыточно, но ок |

**Рекомендация:** сначала GitHub Pages → потом домен → VPS только если нужен backend или полный контроль.
