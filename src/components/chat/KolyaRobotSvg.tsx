/** Запасной робот Коля — всегда в бандле, без загрузки файла */
export function KolyaRobotSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="kolyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#518FC6" />
          <stop offset="100%" stopColor="#4B646E" />
        </linearGradient>
      </defs>
      <rect x="12" y="18" width="40" height="36" rx="10" fill="url(#kolyaGrad)" />
      <rect x="8" y="26" width="6" height="18" rx="3" fill="#518FC6" />
      <rect x="50" y="26" width="6" height="18" rx="3" fill="#518FC6" />
      <rect x="20" y="8" width="24" height="14" rx="6" fill="#EFF3F7" stroke="#518FC6" strokeWidth="2" />
      <circle cx="26" cy="16" r="3" fill="#102030" />
      <circle cx="38" cy="16" r="3" fill="#102030" />
      <circle cx="27" cy="15" r="1" fill="#fff" />
      <circle cx="39" cy="15" r="1" fill="#fff" />
      <rect x="24" y="22" width="16" height="3" rx="1.5" fill="#518FC6" opacity="0.5" />
      <rect x="22" y="38" width="20" height="8" rx="4" fill="#EFF3F7" />
      <rect x="26" y="41" width="4" height="2" rx="1" fill="#EC671A" />
      <rect x="34" y="41" width="4" height="2" rx="1" fill="#EC671A" />
    </svg>
  );
}
