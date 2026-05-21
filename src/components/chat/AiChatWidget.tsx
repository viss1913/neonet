import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../config/site';
import { useChatUI } from '../../context/ChatContext';
import { useChat } from '../../hooks/useChat';
import { ChatAvatar } from './ChatAvatar';
import { ChatTypingIndicator } from './ChatTypingIndicator';

export function AiChatWidget() {
  const { open, setOpen, pendingMessage, clearPending } = useChatUI();
  const { messages, loading, send } = useChat();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pendingMessage && open) {
      void send(pendingMessage);
      clearPending();
    }
  }, [pendingMessage, open, send, clearPending]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
    setInput('');
  };

  const headerStatus = loading ? site.chat.typingLabel : site.chat.subtitle;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="fixed bottom-24 right-4 z-[100] flex h-[min(520px,80vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl"
            role="dialog"
            aria-label={`Чат с ${site.chat.name}`}
          >
            <header className="flex items-center gap-3 border-b border-black/5 bg-bg-light px-4 py-3">
              <ChatAvatar size="md" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-text">{site.chat.title}</p>
                <p
                  className={`text-xs truncate ${loading ? 'text-primary font-medium animate-pulse' : 'text-text-muted'}`}
                >
                  {headerStatus}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-text-muted hover:bg-black/5"
                aria-label="Закрыть чат"
              >
                ✕
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-4 py-3">
              {messages.length === 0 && !loading && (
                <div className="flex gap-3">
                  <ChatAvatar size="sm" />
                  <p className="text-sm text-text-muted">{site.chat.greeting}</p>
                </div>
              )}
              <ul className={`space-y-4 ${messages.length > 0 || loading ? 'mt-3' : ''}`}>
                {messages.map((m, i) => (
                  <li
                    key={`${i}-${m.role}`}
                    className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    {m.role === 'assistant' && <ChatAvatar size="sm" />}
                    <span
                      className={`max-w-[85%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-bg-muted text-text'
                      }`}
                    >
                      {m.content}
                    </span>
                  </li>
                ))}
                {loading && <ChatTypingIndicator />}
              </ul>
              <div ref={bottomRef} />
            </div>

            {messages.length === 0 && !loading && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {site.chat.quickReplies.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary hover:bg-primary/10"
                    onClick={() => void send(q)}
                    disabled={loading}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={onSubmit} className="border-t border-black/5 p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Сообщение для ${site.chat.name}…`}
                  className="flex-1 rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-primary"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {loading ? '…' : '→'}
                </button>
              </div>
              <p className="mt-2 text-[10px] leading-snug text-text-muted">{site.chat.disclaimer}</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-[100] flex max-w-[min(100vw-2rem,320px)] items-center gap-2.5 rounded-full bg-primary py-2 pl-1.5 pr-4 text-white shadow-lg shadow-primary/40 hover:bg-primary-dark transition"
        aria-expanded={open}
        aria-label={`Открыть чат: ${site.chat.fabLabel}`}
      >
        <ChatAvatar size="lg" ring="white" />
        <span className="text-left text-xs font-semibold leading-snug sm:text-sm">
          {site.chat.fabLabel}
        </span>
      </button>
    </>
  );
}
