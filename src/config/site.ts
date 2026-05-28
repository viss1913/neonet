export type Lang = 'ru' | 'en';

type SiteConfig = {
  name: string;
  tagline: string;
  url: string;
  locale: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  seo: {
    title: string;
    description: string;
    ogImagePath: string;
    ogImageWidth: number;
    ogImageHeight: number;
    ogImageAlt: string;
    siteName: string;
    availableLanguage: string;
    ogLocale: string;
    htmlLang: string;
  };
  nav: Array<{ label: string; href: string }>;
  hero: {
    background: string;
    showKeyOverlay: boolean;
    keyImage: string;
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: Array<{ label: string; value: string }>;
  };
  partners: Array<{ name: string; logo: string; alt: string }>;
  trustLead: string;
  risks: {
    title: string;
    lead: string;
    link: string;
    items: Array<{ id: string; title: string; text: string; icon: string }>;
  };
  control: {
    title: string;
    lead: string;
    cta: string;
    pillars: Array<{ title: string; text: string; icon: string }>;
  };
  architecture: {
    title: string;
    suppliers: string;
    suppliersNote: string;
    layer: string;
    layerItems: string[];
    client: string;
    clientNote: string;
  };
  process: {
    title: string;
    steps: Array<{ n: string; title: string; text: string }>;
    videoTitle: string;
    videoEmbedUrl: string;
    videoSrc: string;
    videoPoster: string;
  };
  expert: {
    name: string;
    role: string;
    photo: string;
    sectionTitle: string;
    photoFallbackAria: string;
    photoFallbackHint: string;
    contactCta: string;
    bullets: string[];
  };
  finalCta: {
    title: string;
    lead: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    hiddenMessage: string;
    requestWithNameTemplate: string;
    requestFallback: string;
  };
  social: {
    telegram: string;
    whatsapp: string;
  };
  chat: {
    name: string;
    title: string;
    fabLabel: string;
    subtitle: string;
    typingLabel: string;
    greeting: string;
    disclaimer: string;
    avatar: string;
    quickReplies: string[];
    dialogAria: string;
    closeAria: string;
    inputPlaceholder: string;
    openAria: string;
  };
  legal: {
    copyright: string;
    rights: string;
    requisitesTitle: string;
    addressTitle: string;
    phonesTitle: string;
    emailsTitle: string;
    registryTitle: string;
    address: string;
    phones: string[];
    emails: string[];
    registry: string[];
    directorTitle: string;
    directorName: string;
  };
  ui: {
    mainMenuAria: string;
    mobileMenuAria: string;
    footerMenuAria: string;
    menuButtonAria: string;
    playVideoAria: string;
    pauseVideoAria: string;
    languageLabel: string;
  };
};

const common = {
  name: 'NeoNet',
  url: import.meta.env.VITE_SITE_URL || 'https://neonet-six.vercel.app',
  phone: '+7 903 799-35-28',
  phoneHref: 'tel:+79037993528',
  email: 'raisa@neonetteam.com',
  address: '123056, Moscow, 2nd Brestskaya str. 9, bld.1',
  partners: [
    { name: 'Russian Export Center JSC', logo: '/images/partners/russian-export-center.png', alt: 'Russian Export Center JSC logo' },
    { name: 'ABP FEA', logo: '/images/partners/abp-fea.png', alt: 'ABP FEA logo' },
    { name: 'EAEU', logo: '/images/partners/eaeu.png', alt: 'EAEU logo' },
    { name: 'Secours Team', logo: '/images/partners/secours-team.png', alt: 'Secours Team logo' },
  ],
  social: {
    telegram: 'https://t.me/neonet',
    whatsapp: 'https://wa.me/78000000000',
  },
  legal: {
    copyright: '© 2007-2026',
    rights: 'All rights reserved.',
    requisitesTitle: 'Legal details',
    addressTitle: 'Address',
    phonesTitle: 'Phone',
    emailsTitle: 'Email',
    registryTitle: 'INN, KPP, OGRN',
    address: '123056, Moscow, 2nd Brestskaya str. 9, bld.1',
    phones: ['+7 495 626-11-90', '+7 963 665-13-69', '+7 903 611-80-00 - MAX'],
    emails: ['office@neonetteam.com', 'office@neonet-team.ru', 'team@secours.ru'],
    registry: ['7710661992', '771001001', '1077746309520'],
    directorTitle: 'General Director',
    directorName: 'Makarov A.A.',
  },
  processMedia: {
    videoEmbedUrl: 'https://vkvideo.ru/video-238930683_456239019',
    videoSrc: '/video/process-hero.mp4',
    videoPoster: '/images/hero/process-video-poster.webp',
  },
};

const siteByLang: Record<Lang, SiteConfig> = {
  en: {
    ...common,
    locale: 'en',
    tagline: 'Strategic Market Access & Infrastructure Partner',
    seo: {
      title: 'NeoNet - Strategic Market Access to Russia & EAEU',
      description:
        'Strategic infrastructure for international industrial suppliers: market access, operational execution, financial routing, supply chain management, and risk-controlled distribution.',
      ogImagePath: '/images/seo/og-share.jpg?v=2',
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: 'NeoNet strategic market access infrastructure',
      siteName: 'NeoNet',
      availableLanguage: 'English',
      ogLocale: 'en_US',
      htmlLang: 'en',
    },
    nav: [
      { label: 'Solution', href: '#solution' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Risks', href: '#risks' },
      { label: 'Process', href: '#process' },
      { label: 'About', href: '#about' },
      { label: 'Contacts', href: '#contacts' },
    ],
    hero: {
      background: '/images/hero/hero-bg.webp',
      showKeyOverlay: false,
      keyImage: '/images/hero/hero-key.webp',
      eyebrow: 'Controlled Market Access to Russia & the EAEU',
      title: 'Strategic Market Access and Operational Infrastructure',
      lead: 'We provide controlled market access, operational execution, financial routing, and supply chain continuity for international industrial suppliers.',
      ctaPrimary: 'Request Assessment',
      ctaSecondary: 'Discuss Your Project',
      metrics: [
        { label: 'years of international operations', value: '19+' },
        { label: 'market coverage', value: 'Russia / EAEU / BRICS' },
        { label: 'operational launch', value: 'from 3 business days' },
      ],
    },
    trustLead: 'Authorized Partner of Russian Export Center. Active member of ABP FEA.',
    risks: {
      title: 'Why international suppliers need a local strategic partner',
      lead: 'Without local infrastructure, companies face supply chain disruption, blocked payments, margin erosion, and legal or reputational risks.',
      link: 'See how we reduce risks',
      items: [
        { id: 'payments', title: 'Blocked payments', text: 'Disruptions in cross-border settlements can stop deliveries and contracts.', icon: '/images/icons/icon-risk-payments.webp' },
        { id: 'customs', title: 'Customs and compliance risks', text: 'Regulatory and customs mistakes lead to penalties, delays, and instability.', icon: '/images/icons/icon-risk-customs.webp' },
        { id: 'schemes', title: 'Uncontrolled routing', text: 'Opaque routing and weak controls increase legal and reputational exposure.', icon: '/images/icons/icon-risk-payments.webp' },
        { id: 'logistics', title: 'Supply chain disruption', text: 'Lack of local coordination breaks shipment timelines and continuity.', icon: '/images/icons/icon-risk-logistics.webp' },
        { id: 'margin', title: 'Margin erosion', text: 'Unmanaged operational costs and delays reduce profitability.', icon: '/images/icons/icon-risk-margin.webp' },
        { id: 'regulation', title: 'Execution instability', text: 'Without local operational control, growth in complex jurisdictions becomes unpredictable.', icon: '/images/icons/icon-risk-customs.webp' },
      ],
    },
    control: {
      title: 'Strategic market access infrastructure',
      lead: 'We integrate finance, legal coordination, logistics, and operational execution in one controlled model.',
      cta: 'Learn more about the solution',
      pillars: [
        { title: 'Financial infrastructure', text: 'Cross-border settlements, routing, cost control, and banking coordination.', icon: '/images/icons/icon-pillar-finance.webp' },
        { title: 'Legal and compliance control', text: 'Contract structuring, regulatory compliance, and legal risk management.', icon: '/images/icons/icon-pillar-legal.webp' },
        { title: 'Logistics and supply chain', text: 'Shipment coordination, delivery control, and operational execution.', icon: '/images/icons/icon-pillar-logistics.webp' },
        { title: 'Risk management', text: 'Operational risk reduction, customs risk management, and execution control.', icon: '/images/icons/icon-pillar-logistics.webp' },
        { title: 'Local market operations', text: 'One integrated team responsible for continuity and predictable execution.', icon: '/images/icons/icon-pillar-finance.webp' },
      ],
    },
    architecture: {
      title: 'Unified architecture for market entry and execution',
      suppliers: 'International suppliers and manufacturers',
      suppliersNote: 'Industrial equipment, energy, infrastructure, and complex electronics',
      layer: 'NeoNet Infrastructure',
      layerItems: ['Financial routing', 'Legal and compliance', 'Customs and regulation', 'Logistics and supply chain', 'Operational control'],
      client: 'Russia / EAEU market operations',
      clientNote: 'Local clients, distribution, execution, and long-term revenue channels',
    },
    process: {
      title: 'Initial strategic assessment',
      steps: [
        { n: '01', title: 'Assess current market expansion strategy', text: 'We evaluate your operating model, constraints, and target market setup.' },
        { n: '02', title: 'Operational risk analysis', text: 'We identify financial, logistics, legal, customs, and execution risks.' },
        { n: '03', title: 'Build a customized market entry structure', text: 'You get a predictable and scalable execution model for Russia and EAEU.' },
      ],
      videoTitle: 'How NeoNet organizes controlled execution',
      videoEmbedUrl: common.processMedia.videoEmbedUrl,
      videoSrc: common.processMedia.videoSrc,
      videoPoster: common.processMedia.videoPoster,
    },
    expert: {
      name: 'Raisa Donskaya, DBA',
      role: 'Founder & Managing Partner',
      sectionTitle: 'Expert leadership you can rely on',
      photo: '/images/people/expert-raisa.webp',
      photoFallbackAria: 'Photo will be added soon',
      photoFallbackHint: 'add expert-raisa.webp to Neo_Net/assets/people/',
      contactCta: 'Contact us',
      bullets: [
        'International expert in strategic market access and operational business architecture',
        'Specialist in international partnership architecture and cross-border execution',
        'Expertise in supply chain coordination, risk-managed distribution, and compliance',
        '30 years of international business and operational management experience',
      ],
    },
    finalCta: {
      title: 'Contact us to discuss your project options',
      lead: 'We propose an initial strategic assessment and a customized market entry structure for your expansion.',
      namePlaceholder: 'Your name',
      phonePlaceholder: 'Phone',
      hiddenMessage: 'initial strategic assessment',
      requestWithNameTemplate: 'Website request. Name: {{name}}. Phone: {{phone}}. Request: {{message}}',
      requestFallback: 'I want an operational assessment',
    },
    chat: {
      name: 'Kolya',
      title: 'Trade Consultant - AI Kolya',
      fabLabel: 'Trade Consultant - AI Kolya',
      subtitle: 'NeoNet · online',
      typingLabel: 'Kolya is typing',
      greeting:
        'Hello! I am Kolya, NeoNet AI consultant for import, export, and market access infrastructure. How can I help you?',
      disclaimer: 'Responses are informational and do not constitute legal advice.',
      avatar: '/images/ai/kolya.webp',
      quickReplies: [
        'I want an operational assessment',
        'Turnkey import / export support',
        'Cross-border payment risk review',
      ],
      dialogAria: 'Chat with {{name}}',
      closeAria: 'Close chat',
      inputPlaceholder: 'Message for {{name}}...',
      openAria: 'Open chat: {{fabLabel}}',
    },
    ui: {
      mainMenuAria: 'Main menu',
      mobileMenuAria: 'Mobile menu',
      footerMenuAria: 'Footer menu',
      menuButtonAria: 'Menu',
      playVideoAria: 'Play video',
      pauseVideoAria: 'Pause',
      languageLabel: 'Language',
    },
  },
  ru: {
    ...common,
    locale: 'ru',
    tagline: 'Стратегический партнер по выходу на рынок и операционной инфраструктуре',
    seo: {
      title: 'NeoNet - Безопасный импорт и экспорт для российского бизнеса',
      description:
        'Международная инфраструктура ВЭД: платежи, логистика, правовая структура и контроль рисков под ключ.',
      ogImagePath: '/images/seo/og-share.jpg?v=2',
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: 'NeoNet международная инфраструктура ВЭД',
      siteName: 'NeoNet',
      availableLanguage: 'Russian',
      ogLocale: 'ru_RU',
      htmlLang: 'ru',
    },
    nav: [
      { label: 'Решение', href: '#solution' },
      { label: 'Архитектура', href: '#architecture' },
      { label: 'Риски', href: '#risks' },
      { label: 'Процесс', href: '#process' },
      { label: 'О нас', href: '#about' },
      { label: 'Контакты', href: '#contacts' },
    ],
    hero: {
      background: '/images/hero/hero-bg.webp',
      showKeyOverlay: false,
      keyImage: '/images/hero/hero-key.webp',
      eyebrow: 'Контролируемый доступ к рынку России и ЕАЭС',
      title: 'Стратегический выход на рынок и операционная инфраструктура',
      lead: 'Обеспечиваем контролируемый доступ к рынку, операционное исполнение, финансовую маршрутизацию и устойчивость цепочек поставок.',
      ctaPrimary: 'Запросить оценку',
      ctaSecondary: 'Обсудить проект',
      metrics: [
        { label: 'лет международных операций', value: '19+' },
        { label: 'покрытие рынков', value: 'Россия / ЕАЭС / BRICS' },
        { label: 'операционный запуск', value: 'от 3 рабочих дней' },
      ],
    },
    trustLead: 'Авторизованный партнер Российского экспортного центра. Активный участник ААП ВЭД.',
    risks: {
      title: 'Почему международным поставщикам нужен локальный стратегический партнер',
      lead: 'Без локальной инфраструктуры компании сталкиваются со срывами поставок, блокировками платежей, потерей маржи и юридическими рисками.',
      link: 'Как мы снижаем риски',
      items: [
        { id: 'payments', title: 'Блокировка платежей', text: 'Сбои в трансграничных расчетах останавливают поставки и контракты.', icon: '/images/icons/icon-risk-payments.webp' },
        { id: 'customs', title: 'Таможенные и compliance-риски', text: 'Ошибки в регулировании и таможне приводят к штрафам и задержкам.', icon: '/images/icons/icon-risk-customs.webp' },
        { id: 'schemes', title: 'Непрозрачная маршрутизация', text: 'Слабый контроль повышает юридические и репутационные риски.', icon: '/images/icons/icon-risk-payments.webp' },
        { id: 'logistics', title: 'Срывы цепочки поставок', text: 'Отсутствие локальной координации ломает сроки и стабильность поставок.', icon: '/images/icons/icon-risk-logistics.webp' },
        { id: 'margin', title: 'Потеря маржи', text: 'Неуправляемые операционные издержки и задержки снижают рентабельность.', icon: '/images/icons/icon-risk-margin.webp' },
        { id: 'regulation', title: 'Нестабильность исполнения', text: 'Без локального операционного контроля рост в сложных юрисдикциях становится непредсказуемым.', icon: '/images/icons/icon-risk-customs.webp' },
      ],
    },
    control: {
      title: 'Стратегическая инфраструктура выхода на рынок',
      lead: 'Мы объединяем финансы, правовую координацию, логистику и операционное исполнение в одной управляемой модели.',
      cta: 'Подробнее о решении',
      pillars: [
        { title: 'Финансовая инфраструктура', text: 'Трансграничные расчеты, маршрутизация, контроль затрат и банковская координация.', icon: '/images/icons/icon-pillar-finance.webp' },
        { title: 'Право и compliance', text: 'Структурирование договоров, соответствие требованиям и управление юридическими рисками.', icon: '/images/icons/icon-pillar-legal.webp' },
        { title: 'Логистика и цепочка поставок', text: 'Координация отгрузок, контроль доставки и операционное исполнение.', icon: '/images/icons/icon-pillar-logistics.webp' },
        { title: 'Управление рисками', text: 'Снижение операционных и таможенных рисков, контроль исполнения.', icon: '/images/icons/icon-pillar-logistics.webp' },
        { title: 'Локальные рыночные операции', text: 'Единая команда, отвечающая за непрерывность и предсказуемый результат.', icon: '/images/icons/icon-pillar-finance.webp' },
      ],
    },
    architecture: {
      title: 'Единая архитектура для выхода на рынок и исполнения',
      suppliers: 'Международные поставщики и производители',
      suppliersNote: 'Промышленное оборудование, энергетика, инфраструктура и сложная электроника',
      layer: 'NeoNet Infrastructure',
      layerItems: ['Финансовая маршрутизация', 'Право и compliance', 'Таможня и регулирование', 'Логистика и поставки', 'Операционный контроль'],
      client: 'Операции на рынках России / ЕАЭС',
      clientNote: 'Локальные клиенты, дистрибуция, исполнение и долгосрочные каналы выручки',
    },
    process: {
      title: 'Первичная стратегическая оценка',
      steps: [
        { n: '01', title: 'Оценка текущей стратегии выхода на рынок', text: 'Анализируем операционную модель, ограничения и целевую структуру рынка.' },
        { n: '02', title: 'Анализ операционных рисков', text: 'Выявляем финансовые, логистические, правовые, таможенные и исполнительские риски.' },
        { n: '03', title: 'Построение индивидуальной модели входа', text: 'Формируем предсказуемую и масштабируемую модель работы в России и ЕАЭС.' },
      ],
      videoTitle: 'Как NeoNet выстраивает контролируемое исполнение',
      videoEmbedUrl: common.processMedia.videoEmbedUrl,
      videoSrc: common.processMedia.videoSrc,
      videoPoster: common.processMedia.videoPoster,
    },
    expert: {
      name: 'Раиса Донская, DBA',
      role: 'Основатель и управляющий партнер',
      sectionTitle: 'Экспертное руководство, которому можно доверять',
      photo: '/images/people/expert-raisa.webp',
      photoFallbackAria: 'Фото скоро будет добавлено',
      photoFallbackHint: 'добавьте expert-raisa.webp в Neo_Net/assets/people/',
      contactCta: 'Связаться с нами',
      bullets: [
        'Международный эксперт по стратегическому выходу на рынок и операционной архитектуре бизнеса',
        'Специалист по архитектуре международных партнерств и трансграничному исполнению',
        'Экспертиза в координации цепочек поставок, risk-managed дистрибуции и compliance',
        '30 лет опыта в международном бизнесе и операционном управлении',
      ],
    },
    finalCta: {
      title: 'Свяжитесь с нами, чтобы обсудить ваш проект',
      lead: 'Предложим первичную стратегическую оценку и индивидуальную структуру выхода на рынок.',
      namePlaceholder: 'Ваше имя',
      phonePlaceholder: 'Телефон',
      hiddenMessage: 'первичная стратегическая оценка',
      requestWithNameTemplate: 'Заявка с сайта. Имя: {{name}}. Телефон: {{phone}}. Запрос: {{message}}',
      requestFallback: 'Хочу провести диагностику ВЭД',
    },
    legal: {
      ...common.legal,
      rights: 'Все права защищены.',
      requisitesTitle: 'Реквизиты',
      addressTitle: 'Адрес',
      phonesTitle: 'Телефон',
      emailsTitle: 'Email',
      registryTitle: 'ИНН, КПП, ОГРН',
      directorTitle: 'Генеральный директор',
    },
    chat: {
      name: 'Коля',
      title: 'Консультант по ВЭД - ИИ Коля',
      fabLabel: 'Консультант по ВЭД - ИИ Коля',
      subtitle: 'NeoNet · онлайн',
      typingLabel: 'Коля печатает',
      greeting:
        'Привет! Я Коля, AI-консультант NeoNet по импорту, экспорту и инфраструктуре ВЭД. Чем могу помочь?',
      disclaimer: 'Ответы носят информационный характер и не являются юридической консультацией.',
      avatar: '/images/ai/kolya.webp',
      quickReplies: [
        'Хочу провести диагностику ВЭД',
        'Импорт / экспорт под ключ',
        'Риски трансграничных платежей',
      ],
      dialogAria: 'Чат с {{name}}',
      closeAria: 'Закрыть чат',
      inputPlaceholder: 'Сообщение для {{name}}...',
      openAria: 'Открыть чат: {{fabLabel}}',
    },
    ui: {
      mainMenuAria: 'Основное меню',
      mobileMenuAria: 'Мобильное меню',
      footerMenuAria: 'Подвал',
      menuButtonAria: 'Меню',
      playVideoAria: 'Воспроизвести видео',
      pauseVideoAria: 'Пауза',
      languageLabel: 'Язык',
    },
  },
};

let currentLang: Lang = 'ru';

export function setSiteLanguage(lang: Lang) {
  currentLang = lang;
}

export function getSiteLanguage(): Lang {
  return currentLang;
}

export const site = new Proxy({} as SiteConfig, {
  get(_target, prop: keyof SiteConfig) {
    return siteByLang[currentLang][prop];
  },
}) as SiteConfig;
