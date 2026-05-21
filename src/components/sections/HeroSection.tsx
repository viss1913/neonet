import { site } from '../../config/site';
import { useChatUI } from '../../context/ChatContext';
import { Button } from '../ui/Button';

export function HeroSection() {
  const { openWithMessage } = useChatUI();

  return (
    <section
      id="top"
      className="relative min-h-[90vh] overflow-hidden bg-[#0a1a2f] text-white"
    >
      <img
        src={site.hero.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/95 via-[#0a1a2f]/75 to-[#0a1a2f]/25" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            {site.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[3.25rem]">
            {site.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">{site.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => openWithMessage('Хочу провести диагностику ВЭД')}>
              {site.hero.ctaPrimary} →
            </Button>
            <Button
              variant="secondary"
              onClick={() => openWithMessage('Хочу обсудить задачу по импорту/экспорту')}
            >
              {site.hero.ctaSecondary}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-8 text-sm text-white/70">
            {site.hero.metrics.map((m) => (
              <li key={m.label}>
                <span className="block text-2xl font-bold text-white">{m.value}</span>
                {m.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden min-h-[320px] md:block">
          {site.hero.showKeyOverlay && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <img
                src={site.hero.keyImage}
                alt=""
                className="max-h-[420px] w-auto object-contain drop-shadow-[0_0_60px_rgba(81,143,198,0.5)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="relative ml-auto grid max-w-sm grid-cols-2 gap-3">
            {['Платежи', 'Логистика', 'Таможня', 'Риски'].map((label, i) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md"
              >
                <p className="text-xs text-white/50">{label}</p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  {['+12%', 'В пути', 'OK', '−8%'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
