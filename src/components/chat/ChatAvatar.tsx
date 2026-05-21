import { useState } from 'react';
import { site } from '../../config/site';
import { KolyaRobotSvg } from './KolyaRobotSvg';

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
} as const;

function RobotFallback({ size, ring }: { size: keyof typeof sizes; ring: 'primary' | 'white' }) {
  const ringClass =
    ring === 'white' ? 'ring-2 ring-white/40' : 'ring-2 ring-primary/35';
  return (
    <span
      className={`${sizes[size]} ${ringClass} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-bg-muted p-1`}
    >
      <KolyaRobotSvg className="h-full w-full" />
    </span>
  );
}

export function ChatAvatar({
  size = 'md',
  ring = 'primary',
}: {
  size?: keyof typeof sizes;
  ring?: 'primary' | 'white';
}) {
  const photoSrc = site.chat.avatar?.trim();
  const [photoOk, setPhotoOk] = useState(!!photoSrc);

  const ringClass =
    ring === 'white' ? 'ring-2 ring-white/40' : 'ring-2 ring-primary/35';

  if (photoSrc && photoOk) {
    return (
      <img
        src={photoSrc}
        alt={site.chat.name}
        className={`${sizes[size]} shrink-0 rounded-full object-cover ${ringClass} bg-primary/10`}
        onError={() => setPhotoOk(false)}
      />
    );
  }

  return <RobotFallback size={size} ring={ring} />;
}
