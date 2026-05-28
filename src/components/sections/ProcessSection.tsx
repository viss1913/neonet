import { useRef, useState } from 'react';
import { site } from '../../config/site';
import { resolveVideoEmbedUrl } from '../../lib/videoEmbed';
import { Section, SectionTitle } from '../ui/Section';

export function ProcessSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [embedOpen, setEmbedOpen] = useState(false);

  const embedSrc = resolveVideoEmbedUrl(site.process.videoEmbedUrl ?? '');
  const useExternal = Boolean(embedSrc);

  const togglePlay = () => {
    if (useExternal) {
      setEmbedOpen(true);
      return;
    }
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  };

  return (
    <Section id="process" tone="dark">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle>{site.process.title}</SectionTitle>
          <ol className="mt-10 space-y-8">
            {site.process.steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="text-3xl font-bold text-primary/80">{step.n}</span>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-1 text-white/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          {useExternal && embedOpen && embedSrc ? (
            <iframe
              src={embedSrc}
              title={site.process.videoTitle}
              className="aspect-video w-full border-0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={useExternal ? undefined : site.process.videoSrc}
                poster={site.process.videoPoster}
                className="aspect-video w-full object-cover"
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />
              {!playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 transition hover:bg-black/40"
                  aria-label="Play video"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl">
                    ▶
                  </span>
                </button>
              )}
              {playing && !useExternal && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="Pause"
                />
              )}
            </>
          )}
          <p className="pointer-events-none absolute bottom-4 left-4 z-10 text-sm font-medium text-white drop-shadow-md">
            {site.process.videoTitle}
          </p>
        </div>
      </div>
    </Section>
  );
}
