import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const base = process.env.PARTNER_RUNTIME_API_URL;
  const key = process.env.PARTNER_RUNTIME_API_KEY;

  if (!base || !key) {
    res.status(503).json({ error: 'Chat API is not configured on the server' });
    return;
  }

  const { userId, message } = req.body ?? {};
  if (!userId || !message) {
    res.status(400).json({ error: 'userId and message are required' });
    return;
  }

  try {
    const upstream = await fetch(`${base.replace(/\/$/, '')}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
      },
      body: JSON.stringify(req.body),
    });

    const text = await upstream.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      res.status(upstream.status).send(text);
      return;
    }
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: e instanceof Error ? e.message : 'Upstream error' });
  }
}
