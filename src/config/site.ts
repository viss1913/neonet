export const site = {
  name: 'NeoNet',
  tagline: 'Strategic Market Access & Infrastructure Partner',
  url: import.meta.env.VITE_SITE_URL || 'https://neonet-six.vercel.app',

  phone: '+7 903 799-35-28',
  phoneHref: 'tel:+79037993528',
  email: 'raisa@neonetteam.com',
  address: '123056, Moscow, 2nd Brestskaya str. 9, bld.1',

  seo: {
    title: 'NeoNet - Strategic Market Access to Russia & EAEU',
    description:
      'Strategic infrastructure for international industrial suppliers: market access, operational execution, financial routing, supply chain management, and risk-controlled distribution.',
    ogImagePath: '/images/seo/og-share.jpg?v=2',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'NeoNet strategic market access infrastructure',
    siteName: 'NeoNet',
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

  partners: [
    { name: 'Russian Export Center JSC', logo: '/images/partners/russian-export-center.png', alt: 'Russian Export Center JSC logo' },
    { name: 'ABP FEA', logo: '/images/partners/abp-fea.png', alt: 'ABP FEA logo' },
    { name: 'EAEU', logo: '/images/partners/eaeu.png', alt: 'EAEU logo' },
    { name: 'Secours Team', logo: '/images/partners/secours-team.png', alt: 'Secours Team logo' },
  ],

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
    videoEmbedUrl: 'https://vkvideo.ru/video-238930683_456239019',
    videoSrc: '/video/process-hero.mp4',
    videoPoster: '/images/hero/process-video-poster.webp',
  },

  expert: {
    name: 'Raisa Donskaya, DBA',
    role: 'Founder & Managing Partner',
    photo: '/images/people/expert-raisa.webp',
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
  },

  social: {
    telegram: 'https://t.me/neonet',
    whatsapp: 'https://wa.me/78000000000',
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
} as const;
