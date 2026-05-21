import { site } from '../../config/site';
import { Section, SectionTitle } from '../ui/Section';

export function ProcessSection() {
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
          <img
            src={site.process.videoPoster}
            alt=""
            className="aspect-video w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/hero/hero-bg.webp';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl">
              ▶
            </div>
          </div>
          <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
            {site.process.videoTitle}
          </p>
        </div>
      </div>
    </Section>
  );
}
