import { site } from '../../config/site';
import { Section, SectionTitle } from '../ui/Section';

export function ControlSection() {
  return (
    <Section id="solution" tone="dark">
      <SectionTitle className="text-center">{site.control.title}</SectionTitle>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">{site.control.lead}</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {site.control.pillars.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
          >
            <img
              src={p.icon}
              alt=""
              className="mx-auto h-14 w-14 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="mt-4 font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/65">{p.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <a href="#architecture" className="text-sm font-semibold text-primary hover:underline">
          {site.control.cta} →
        </a>
      </div>
    </Section>
  );
}
