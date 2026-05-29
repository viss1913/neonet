import { useState } from 'react';
import { site } from '../../config/site';
import { Section, SectionTitle } from '../ui/Section';
import { Button } from '../ui/Button';

export function ExpertSection() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <Section id="about" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto max-w-md lg:mx-0">
          {photoOk ? (
            <img
              src={site.expert.photo}
              alt={site.expert.name}
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div
              className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-slate-brand/20 text-text-muted"
              aria-label={site.expert.photoFallbackAria}
            >
              <span className="text-center text-sm px-6">
                {site.expert.photoFallbackAria}: {site.expert.name}
                <br />
                <span className="text-xs">{site.expert.photoFallbackHint}</span>
              </span>
            </div>
          )}
        </div>
        <div>
          <SectionTitle>{site.expert.sectionTitle}</SectionTitle>
          <p className="mt-2 text-lg font-semibold text-primary">{site.expert.name}</p>
          <p className="text-text-muted">{site.expert.role}</p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-text-muted">
            {site.expert.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-primary/15 bg-white p-6">
            <p>
              <a href={site.phoneHref} className="text-xl font-bold text-text hover:text-primary">
                {site.phone}
              </a>
            </p>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-2">
              <a href={site.social.telegram} className="text-sm text-text-muted hover:text-primary" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </p>
            <Button className="mt-4" href="#contacts">
              {site.expert.contactCta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
