# NeoNet — лендинг

React + Vite + Tailwind. ИИ-консультант ВЭД через serverless `/api/chat`.

## Локально

```bash
npm install
copy .env.example .env   # заполни PARTNER_RUNTIME_API_KEY
npm run dev
```

http://localhost:5173

## Vercel

1. Import репозитория [viss1913/neonet](https://github.com/viss1913/neonet)
2. Framework: Vite, Root Directory: `.` (корень репо)
3. Environment Variables:
   - `VITE_SITE_URL` — прод-домен
   - `PARTNER_RUNTIME_API_URL` — `https://aiasol-production-c345.up.railway.app`
   - `PARTNER_RUNTIME_API_KEY` — ключ бота

## Контент

`src/config/site.ts` — тексты, контакты, SEO.

## Ассеты

`public/images/` — картинки сайта (hero, icons, og, …).
