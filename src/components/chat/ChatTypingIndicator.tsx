import { ChatAvatar } from './ChatAvatar';
import { site } from '../../config/site';

export function ChatTypingIndicator() {
  return (
    <li className="flex items-end gap-2" aria-live="polite" aria-label={site.chat.typingLabel}>
      <ChatAvatar size="sm" />
      <div className="rounded-xl bg-bg-muted px-4 py-3">
        <p className="mb-2 text-xs font-medium text-text-muted">{site.chat.typingLabel}</p>
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="typing-dot h-2 w-2 rounded-full bg-primary" />
          <span className="typing-dot h-2 w-2 rounded-full bg-primary" />
          <span className="typing-dot h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>
    </li>
  );
}
