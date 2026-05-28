import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getSiteLanguage, setSiteLanguage, type Lang } from '../config/site';

const STORAGE_KEY = 'neonet_site_lang';

type LocaleContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;
    return getSiteLanguage();
  });

  // Keep the site config proxy in sync before children render.
  setSiteLanguage(lang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (nextLang: Lang) => {
        setSiteLanguage(nextLang);
        setLangState(nextLang);
      },
    }),
    [lang],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
