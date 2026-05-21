import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** .env в корне репозитория (локально и на Vercel) */
const envDir = __dirname;

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
                'Чат не настроен. Заполни PARTNER_RUNTIME_API_URL и PARTNER_RUNTIME_API_KEY в Fabric Sites/.env',
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
  const env = loadEnv(mode, envDir, '');
  return {
    envDir,
    plugins: [react(), tailwindcss(), chatDevProxy(env)],
  };
});
