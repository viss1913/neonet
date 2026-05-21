import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envDirs = [__dirname, path.resolve(__dirname, '../..')];

const DEFAULT_SITE_URL = 'https://neonet-six.vercel.app';
const OG_TITLE = 'NeoNet — безопасный импорт и экспорт для российского бизнеса';
const OG_DESCRIPTION =
  'Международная инфраструктура ВЭД: платежи, логистика, правовая структура и контроль рисков под ключ.';

function loadMergedEnv(mode: string): Record<string, string> {
  const merged: Record<string, string> = {};
  for (const dir of envDirs) {
    Object.assign(merged, loadEnv(mode, dir, ''));
  }
  return merged;
}

function resolveSiteUrl(mode: string, env: Record<string, string>): string {
  const fromEnv = env.VITE_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  return mode === 'production' ? DEFAULT_SITE_URL : 'http://localhost:5173';
}

function socialMetaPlugin(mode: string, env: Record<string, string>): Plugin {
  const siteUrl = resolveSiteUrl(mode, env);
  const ogImage = `${siteUrl}/images/seo/og-share.jpg`;

  return {
    name: 'social-meta-inject',
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_URL__', siteUrl)
        .replaceAll('__OG_TITLE__', OG_TITLE)
        .replaceAll('__OG_DESCRIPTION__', OG_DESCRIPTION)
        .replaceAll('__OG_IMAGE__', ogImage);
    },
  };
}

function chatDevProxy(env: Record<string, string>): Plugin {
  return {
    name: 'chat-dev-proxy',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          next();
          return;
        }
        const base = env.PARTNER_RUNTIME_API_URL;
        const key = env.PARTNER_RUNTIME_API_KEY;
        if (!base || !key) {
          res.statusCode = 503;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error:
                'Чат не настроен. Заполни PARTNER_RUNTIME_API_URL и PARTNER_RUNTIME_API_KEY в .env',
            }),
          );
          return;
        }
        const chunks: Buffer[] = [];
        req.on('data', (c) => chunks.push(c));
        req.on('end', async () => {
          try {
            const body = Buffer.concat(chunks).toString();
            const upstream = await fetch(`${base.replace(/\/$/, '')}/chat`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': key,
              },
              body,
            });
            const text = await upstream.text();
            res.statusCode = upstream.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(text);
          } catch (e) {
            res.statusCode = 502;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: e instanceof Error ? e.message : 'Proxy error' }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadMergedEnv(mode);
  return {
    envDir: __dirname,
    plugins: [react(), tailwindcss(), socialMetaPlugin(mode, env), chatDevProxy(env)],
  };
});
