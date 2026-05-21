import { Helmet } from 'react-helmet-async';
import { site } from '../config/site';

export function SeoHead() {
  const url = site.url.replace(/\/$/, '');
  const ogImage = `${url}${site.seo.ogImagePath}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url,
    description: site.seo.description,
    image: ogImage,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer service',
      areaServed: 'RU',
      availableLanguage: 'Russian',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address,
      addressCountry: 'RU',
    },
  };

  return (
    <Helmet>
      <html lang="ru" />
      <title>{site.seo.title}</title>
      <meta name="description" content={site.seo.description} />
      <link rel="canonical" href={`${url}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.seo.siteName} />
      <meta property="og:url" content={`${url}/`} />
      <meta property="og:title" content={site.seo.title} />
      <meta property="og:description" content={site.seo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content={String(site.seo.ogImageWidth)} />
      <meta property="og:image:height" content={String(site.seo.ogImageHeight)} />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.seo.title} />
      <meta name="twitter:description" content={site.seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
