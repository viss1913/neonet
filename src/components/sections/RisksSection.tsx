import { site } from '../../config/site';
import { Section, SectionTitle } from '../ui/Section';

function RiskIcon({ src, title }: { src: string; title: string }) {
  return (
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.replaceWith(Object.assign(document.createElement('span'), {
          className: 'flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent text-lg',
          textContent: '!',
        }));
      }}
      aria-hidden={!title}
    />
  );
}

export function RisksSection() {
  return (
    <Section id="risks" tone="muted">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionTitle>{site.risks.title}</SectionTitle>
          <p className="mt-4 max-w-md text-text-muted">{site.risks.lead}</p>
          <a href="#solution" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            {site.risks.link} →
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {site.risks.items.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <RiskIcon src={item.icon} title={item.title} />
              <h3 className="mt-3 font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
