import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type ChatContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openWithMessage: (message?: string) => void;
  pendingMessage: string | null;
  clearPending: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const openWithMessage = useCallback((message?: string) => {
    if (message) setPendingMessage(message);
    setOpen(true);
  }, []);

  const clearPending = useCallback(() => setPendingMessage(null), []);

  const value = useMemo(
    () => ({ open, setOpen, openWithMessage, pendingMessage, clearPending }),
    [open, openWithMessage, pendingMessage, clearPending],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatUI() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatUI must be used within ChatProvider');
  return ctx;
}
