import { useState } from 'react';
import { site } from '../../config/site';

export function TrustSection() {
  const [missingLogos, setMissingLogos] = useState<Record<string, boolean>>({});

  return (
    <section className="border-y border-black/5 bg-bg-muted py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.partners.map((partner) => (
            <article key={partner.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="flex h-24 items-center justify-center rounded-xl bg-white">
                {missingLogos[partner.name] ? (
                  <span className="px-3 text-center text-xs font-semibold uppercase tracking-wider text-text-muted/60">
                    {partner.name}
                  </span>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                    onError={() => setMissingLogos((prev) => ({ ...prev, [partner.name]: true }))}
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-text-muted">{partner.name}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-text-muted/70">
          Authorized Partner of Russian Export Center. Active member of ABP FEA.
        </p>
      </div>
    </section>
  );
}
