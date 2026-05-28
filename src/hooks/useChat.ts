import { useCallback, useState } from 'react';

const STORAGE_KEY = 'neonet_chat_user_id';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

function getUserId(): string {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = useCallback(async (message: string) => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setError(null);
    setMessages((m) => [...m, { role: 'user', content: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: getUserId(), message: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          typeof data.error === 'string'
            ? data.error
            : res.status === 401
              ? 'Consultant service is temporarily unavailable (API key).'
              : 'Unable to get a response. Please try again later.',
        );
      }

      const reply = data.reply as string;
      setMessages((m) => [...m, { role: 'assistant', content: reply || '…' }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Network error';
      setError(msg);
      setMessages((m) => [...m, { role: 'assistant', content: `Sorry, service connection failed: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setError(null);
  }, []);

  return { messages, loading, error, send, reset };
}
