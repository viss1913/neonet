import { useState } from 'react';
import { site } from '../../config/site';
import { useChatUI } from '../../context/ChatContext';
import { useLocale } from '../../context/LocaleContext';
import { Button } from '../ui/Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openWithMessage } = useChatUI();
  const { lang, setLang } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1a2f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6">
        <a href="#" className="flex shrink-0 flex-col">
          <span className="text-lg font-bold tracking-wide text-white">{site.name}</span>
          <span className="hidden max-w-[280px] text-[10px] leading-tight text-white/60 xl:block">{site.tagline}</span>
        </a>

        <nav className="hidden flex-1 justify-center lg:flex" aria-label={site.ui.mainMenuAria}>
          <ul className="flex gap-5 text-sm font-medium text-white/85">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="whitespace-nowrap hover:text-primary transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-lg border border-white/20 p-1 lg:flex">
            <button
              type="button"
              onClick={() => setLang('ru')}
              className={`rounded px-2 py-1 text-xs ${lang === 'ru' ? 'bg-white text-[#0a1a2f]' : 'text-white/70'}`}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded px-2 py-1 text-xs ${lang === 'en' ? 'bg-white text-[#0a1a2f]' : 'text-white/70'}`}
            >
              EN
            </button>
          </div>
          <a href={site.phoneHref} className="hidden whitespace-nowrap text-sm font-medium text-white/90 xl:block">
            {site.phone}
          </a>
          <Button
            variant="primary"
            className="hidden md:inline-flex text-xs lg:text-sm"
            onClick={() => openWithMessage(site.finalCta.requestFallback)}
          >
            {site.hero.ctaPrimary}
          </Button>
          <button
            type="button"
            className="lg:hidden text-white p-2"
            aria-expanded={menuOpen}
            aria-label={site.ui.menuButtonAria}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-6 bg-white mb-1" />
            <span className="block h-0.5 w-6 bg-white mb-1" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden" aria-label={site.ui.mobileMenuAria}>
          <ul className="flex flex-col gap-3 text-white/90">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span className="text-xs text-white/60">{site.ui.languageLabel}:</span>
              <button type="button" onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-primary' : ''}>
                RU
              </button>
              <button type="button" onClick={() => setLang('en')} className={lang === 'en' ? 'text-primary' : ''}>
                EN
              </button>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
