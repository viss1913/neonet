import { site } from '../../config/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061220] py-12 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">{site.address}</p>
          <p className="mt-1">
            <a href={site.phoneHref} className="hover:text-primary">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              {site.email}
            </a>
          </p>
        </div>
        <nav aria-label="Footer menu">
          <ul className="space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-white/80">
          <p>{site.legal.copyright}</p>
          <p className="text-white/60">{site.legal.rights}</p>
          <p className="mt-4 text-xs text-white/40">{site.chat.disclaimer}</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 md:px-6">
        <p className="text-sm font-semibold text-white">{site.legal.requisitesTitle}</p>
        <div className="mt-3 grid gap-6 text-sm text-white/70 md:grid-cols-3">
          <div>
            <p className="font-medium text-white/90">{site.legal.addressTitle}</p>
            <p className="mt-1">{site.legal.address}</p>
            <p className="mt-3 font-medium text-white/90">{site.legal.registryTitle}</p>
            {site.legal.registry.map((item) => (
              <p key={item} className="mt-1">
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="font-medium text-white/90">{site.legal.phonesTitle}</p>
            {site.legal.phones.map((phone) => (
              <p key={phone} className="mt-1">
                {phone}
              </p>
            ))}
          </div>
          <div>
            <p className="font-medium text-white/90">{site.legal.emailsTitle}</p>
            {site.legal.emails.map((email) => (
              <p key={email} className="mt-1 break-all">
                {email}
              </p>
            ))}
            <p className="mt-3 font-medium text-white/90">{site.legal.directorTitle}</p>
            <p className="mt-1">{site.legal.directorName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
