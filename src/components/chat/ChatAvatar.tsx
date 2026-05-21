import { useState } from 'react';

const AVATAR_SRC = '/images/ai/ai-consultant-avatar.webp';

function KeyFallback({ className = '' }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary text-white ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="currentColor">
        <path d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v2h6V7a3 3 0 0 0-3-3z" />
      </svg>
    </span>
  );
}

export function ChatAvatar({
  size = 'md',
  ring = 'primary',
}: {
  size?: 'sm' | 'md' | 'lg';
  ring?: 'primary' | 'white';
}) {
  const [failed, setFailed] = useState(false);

  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-14 w-14',
  };
  const ringClass =
    ring === 'white' ? 'ring-2 ring-white/40' : 'ring-2 ring-primary/35';

  if (failed) {
    return <KeyFallback className={sizes[size]} />;
  }

  return (
    <img
      src={AVATAR_SRC}
      alt=""
      width={size === 'lg' ? 56 : size === 'md' ? 44 : 32}
      height={size === 'lg' ? 56 : size === 'md' ? 44 : 32}
      className={`${sizes[size]} shrink-0 rounded-full object-cover ${ringClass} bg-primary/20`}
      onError={() => setFailed(true)}
    />
  );
}
