import { site } from '../../config/site';
import { Section, SectionTitle } from '../ui/Section';

export function ArchitectureSection() {
  return (
    <Section id="architecture" tone="light">
      <SectionTitle className="text-center">{site.architecture.title}</SectionTitle>
      <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-2">
        <div className="rounded-xl border border-primary/15 bg-bg-light p-6 text-center">
          <p className="text-sm font-semibold text-primary">{site.architecture.suppliers}</p>
          <p className="mt-2 text-sm text-text-muted">{site.architecture.suppliersNote}</p>
        </div>
        <div className="hidden items-center text-primary md:flex" aria-hidden>
          →
        </div>
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-6 text-center shadow-lg">
          <p className="font-bold text-primary">{site.architecture.layer}</p>
          <ul className="mt-4 space-y-1 text-sm text-text-muted">
            {site.architecture.layerItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hidden items-center text-primary md:flex" aria-hidden>
          →
        </div>
        <div className="rounded-xl border border-primary/15 bg-bg-light p-6 text-center">
          <p className="text-sm font-semibold text-text">{site.architecture.client}</p>
          <p className="mt-2 text-sm text-text-muted">{site.architecture.clientNote}</p>
        </div>
      </div>
    </Section>
  );
}
