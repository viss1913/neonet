import { site } from '../../config/site';

export function TrustSection() {
  return (
    <section className="border-y border-black/5 bg-bg-muted py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 md:gap-12 md:px-6">
        {site.partners.map((name) => (
          <span
            key={name}
            className="text-sm font-semibold uppercase tracking-wider text-text-muted/40"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
