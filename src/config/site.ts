export const site = {
  name: 'NeoNet',
  tagline: 'Your key to Russian-area market',
  url: import.meta.env.VITE_SITE_URL || 'https://neonet-six.vercel.app',

  phone: '+7 (800) 000-00-00',
  phoneHref: 'tel:+78000000000',
  email: 'info@neonet.ru',
  address: 'Москва, Россия',

  seo: {
    title: 'NeoNet — безопасный импорт и экспорт для российского бизнеса',
    description:
      'Международная инфраструктура ВЭД: платежи, логистика, правовая структура и контроль рисков под ключ.',
    ogImagePath: '/images/seo/og-share.jpg?v=2',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'NeoNet — международная инфраструктура ВЭД',
    siteName: 'NeoNet',
  },

  nav: [
    { label: 'Решение', href: '#solution' },
    { label: 'Архитектура', href: '#architecture' },
    { label: 'Риски', href: '#risks' },
    { label: 'Процесс', href: '#process' },
    { label: 'О компании', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ],

  hero: {
    /** Твой файл hero-bg.webp — полный визуал. Отдельный hero-key не используем. */
    background: '/images/hero/hero-bg.webp',
    /** Опционально: свой ключ PNG с прозрачностью → положи hero-key.webp и поставь true */
    showKeyOverlay: false,
    keyImage: '/images/hero/hero-key.webp',
    eyebrow: 'Международная инфраструктура ВЭД',
    title: 'Безопасный импорт и экспорт для российского бизнеса',
    lead: 'Платежи, логистика, правовая структура и контроль рисков — в единой операционной системе под ваши поставки.',
    ctaPrimary: 'Провести диагностику',
    ctaSecondary: 'Обсудить задачу',
    metrics: [
      { label: 'лет опыта', value: '20+' },
      { label: 'покрытие', value: 'BRICS / ЕАЭС' },
      { label: 'запуск', value: 'от 3 дней' },
    ],
  },

  partners: ['Роснефть', 'Северсталь', 'СИБУР', 'Газпром', 'Ростех', 'РЖД'],

  risks: {
    title: 'Риски, которые стоят дорого',
    lead: 'Без единой инфраструктуры ВЭД каждый сбой бьёт по марже и репутации.',
    link: 'Узнать, как мы снижаем риски',
    items: [
      { id: 'payments', title: 'Блокировка платежей', text: 'Задержки и отказы в трансграничных расчётах останавливают поставки.', icon: '/images/icons/icon-risk-payments.webp' },
      { id: 'customs', title: 'Таможенные штрафы', text: 'Ошибки в декларациях и кодах ТН ВЭД ведут к доначислениям и простою.', icon: '/images/icons/icon-risk-customs.webp' },
      { id: 'schemes', title: 'Серые схемы', text: 'Непрозрачные контуры создают регуляторные и налоговые риски.', icon: '/images/icons/icon-risk-payments.webp' },
      { id: 'logistics', title: 'Срыв поставок', text: 'Разрыв цепочки между поставщиком, перевозкой и складом в РФ.', icon: '/images/icons/icon-risk-logistics.webp' },
      { id: 'margin', title: 'Потеря маржи', text: 'Скрытые комиссии и курсовые разницы съедают экономику сделки.', icon: '/images/icons/icon-risk-margin.webp' },
      { id: 'regulation', title: 'Регуляторика', text: 'Изменения правил ВЭД требуют быстрой адаптации процессов.', icon: '/images/icons/icon-risk-customs.webp' },
    ],
  },

  control: {
    title: 'Ваши международные операции — под нашим контролем',
    lead: 'Пять направлений в одной управляемой системе.',
    cta: 'Подробнее о решении',
    pillars: [
      { title: 'Финансы', text: 'Маршрутизация платежей и прозрачные расчёты.', icon: '/images/icons/icon-pillar-finance.webp' },
      { title: 'Право', text: 'Договорная архитектура и защита интересов.', icon: '/images/icons/icon-pillar-legal.webp' },
      { title: 'Логистика', text: 'Маршруты, склады, сроки и статусы поставок.', icon: '/images/icons/icon-pillar-logistics.webp' },
      { title: 'Таможня', text: 'Декларирование, compliance, сопровождение.', icon: '/images/icons/icon-pillar-logistics.webp' },
      { title: 'Контроль результата', text: 'Сквозная аналитика и управление KPI.', icon: '/images/icons/icon-pillar-finance.webp' },
    ],
  },

  architecture: {
    title: 'Единая инфраструктура для ваших поставок',
    suppliers: 'Поставщики и производители',
    suppliersNote: 'Китай, BRICS, ЕАЭС, другие рынки',
    layer: 'NeoNet Infrastructure',
    layerItems: ['Финансовая инфраструктура', 'Правовой контур', 'Таможня', 'Логистика', 'Операционный контроль'],
    client: 'Ваш бизнес в России',
    clientNote: 'Склад, продажи, дистрибуция',
  },

  process: {
    title: 'Простой процесс — сложные задачи решены',
    steps: [
      { n: '01', title: 'Диагностика', text: 'Аудит модели ВЭД, рисков и узких мест.' },
      { n: '02', title: 'Настройка инфраструктуры', text: 'Платежи, право, таможня, логистика в одном контуре.' },
      { n: '03', title: 'Управление под ключ', text: 'Операционное сопровождение поставок и контроль KPI.' },
    ],
    videoTitle: 'Как мы организуем поставки',
    /** Локальный файл (~15 МБ) — только для dev, в git не кладём */
    videoSrc: '/video/process-hero.mp4',
    /**
     * Rutube: вставь ID или полную ссылку после загрузки, например:
     * https://rutube.ru/video/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/
     */
    rutubeVideoId: '',
    videoPoster: '/images/hero/process-video-poster.webp',
  },

  expert: {
    name: 'Раиса Донская',
    role: 'Архитектор международной инфраструктуры ВЭД',
    photo: '/images/people/expert-raisa.webp',
    bullets: [
      'Более 20 лет в трансграничной торговле и операционном управлении',
      'Построение инфраструктуры ВЭД для промышленных и торговых групп',
      'Экспертиза по платежам, таможне и compliance в BRICS / ЕАЭС',
      'Личное сопровождение ключевых клиентских контуров',
    ],
  },

  finalCta: {
    title: 'Проведём диагностику вашей модели ВЭД',
    lead: 'Оставьте контакт — вернёмся с первичной оценкой рисков и маршрута.',
  },

  social: {
    telegram: 'https://t.me/neonet',
    whatsapp: 'https://wa.me/78000000000',
  },

  chat: {
    name: 'Коля',
    title: 'Консультант по ВЭД — ИИ Коля',
    fabLabel: 'Консультант по ВЭД — ИИ Коля',
    subtitle: 'NeoNet · онлайн',
    typingLabel: 'Коля печатает',
    greeting:
      'Привет! Я Коля, консультант NeoNet по импорту, экспорту и инфраструктуре ВЭД. Чем могу помочь?',
    disclaimer: 'Ответы носят информационный характер и не являются юридической консультацией.',
    avatar: '/images/ai/kolya.webp',
    quickReplies: [
      'Хочу провести диагностику ВЭД',
      'Импорт / экспорт под ключ',
      'Риски трансграничных платежей',
    ],
  },

  legal: {
    inn: '',
    year: new Date().getFullYear(),
  },
} as const;
