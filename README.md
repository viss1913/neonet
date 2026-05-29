# NeoNet — лендинг

React + Vite + Tailwind. Статический лендинг с переключением RU/EN.

## Локально

```bash
npm install
copy .env.example .env
npm run dev
```

http://localhost:5173

## Vercel

1. Import репозитория [viss1913/neonet](https://github.com/viss1913/neonet)
2. Framework: Vite, Root Directory: `.` (корень репо)
3. Environment Variables:
   - `VITE_SITE_URL` — прод-домен

## Контент

`src/config/site.ts` — тексты, контакты, SEO.

## Ассеты

`public/images/` — картинки сайта (hero, icons, og, …).
