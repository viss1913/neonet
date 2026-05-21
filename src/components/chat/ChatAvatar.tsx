import { useState } from 'react';
import { site } from '../../config/site';

/** Робот Коля — основной аватар; webp опционально из конфига */
const ROBOT_SRC = '/images/ai/kolya-robot.svg';

function RobotIcon({ className = '' }: { className?: string }) {
  return (
    <img
      src={ROBOT_SRC}
      alt=""
      className={`shrink-0 rounded-full object-cover bg-bg-muted p-0.5 ${className}`}
    />
  );
}

export function ChatAvatar({
  size = 'md',
  ring = 'primary',
}: {
  size?: 'sm' | 'md' | 'lg';
  ring?: 'primary' | 'white';
}) {
  const [usePhoto, setUsePhoto] = useState(!!site.chat.avatarPhoto);
  const photoSrc = site.chat.avatarPhoto;

  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-14 w-14',
  };
  const ringClass =
    ring === 'white' ? 'ring-2 ring-white/40' : 'ring-2 ring-primary/35';

  if (usePhoto && photoSrc) {
    return (
      <img
        src={photoSrc}
        alt=""
        className={`${sizes[size]} shrink-0 rounded-full object-cover ${ringClass} bg-primary/20`}
        onError={() => setUsePhoto(false)}
      />
    );
  }

  return <RobotIcon className={`${sizes[size]} ${ringClass}`} />;
}
