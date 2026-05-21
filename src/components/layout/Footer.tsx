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
        <nav aria-label="Подвал">
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
        <div className="text-sm">
          <p>
            © {site.legal.year} {site.name}. Все права защищены.
          </p>
          {site.legal.inn && <p className="mt-1 text-white/50">{site.legal.inn}</p>}
          <p className="mt-4 text-xs text-white/40">{site.chat.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
