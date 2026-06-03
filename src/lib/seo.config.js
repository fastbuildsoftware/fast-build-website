import { businessHours } from '@/lib/business';

/** Production site URL — set VITE_SITE_URL in .env.local (no trailing slash). */
export const siteUrl = (
  import.meta.env.VITE_SITE_URL || 'https://fastbuildinc.com'
).replace(/\/$/, '');

export const siteName = 'Fast Build Inc.';
export const siteTagline = 'Residential & Commercial Construction';
export const defaultDescription =
  'Fast Build Inc. is a licensed general contractor serving New York and surrounding areas. Residential homes, commercial build-outs, camp construction, and renovations — built fast and built right.';

export const business = {
  name: siteName,
  legalName: 'Fast Build Inc.',
  telephone: '+1-845-774-5616',
  email: 'software@fastbuildinc.com',
  address: {
    street: '78 Huschke Rd',
    city: 'Hurleyville',
    region: 'NY',
    postalCode: '12747',
    country: 'US',
  },
  geo: {
    latitude: 41.7402,
    longitude: -74.6601,
  },
  areaServed: [
    'New York State',
    'Hudson Valley, NY',
    'Catskills Region, NY',
    'Northeastern United States',
  ],
  priceRange: '$$',
  services: [
    'Residential Construction',
    'Commercial Construction',
    'Camp Build-Outs',
    'Renovations',
    'Project Management',
  ],
};

const defaultImage = `${siteUrl}/images/hero.png`;

export const routes = {
  '/': {
    title: `${siteName} | ${siteTagline} | New York`,
    description: defaultDescription,
    keywords:
      'general contractor New York, residential construction NY, commercial construction Hudson Valley, Fast Build Inc, camp build-out contractor',
    image: defaultImage,
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/services': {
    title: `Construction Services | ${siteName}`,
    description:
      'Residential construction, commercial build-outs, camp projects, and renovations across New York and surrounding regions. Licensed general contractor with fast, quality delivery.',
    keywords:
      'commercial construction NY, residential contractor New York, camp build-out contractor, renovation contractor Hudson Valley',
    image: `${siteUrl}/images/residential.png`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  },
  '/about': {
    title: `About Us | ${siteName}`,
    description:
      'Meet Fast Build Inc., your trusted general contractor serving New York and beyond. Craftsmanship, speed without shortcuts, and projects across residential and commercial construction.',
    keywords:
      'about Fast Build Inc, New York general contractor, licensed contractor NY, residential and commercial builder',
    image: `${siteUrl}/images/about-hero.png`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
  '/contact': {
    title: `Contact & Free Quote | ${siteName}`,
    description:
      'Request a free construction quote from Fast Build Inc. Call (845) 774-5616 or submit our contact form. Mon–Fri 8am–5pm. Serving clients across New York and surrounding areas.',
    keywords:
      'construction quote New York, contact Fast Build, general contractor phone NY',
    image: `${siteUrl}/images/logo.png`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
};

export function getSEOForPath(pathname) {
  return routes[pathname] ?? {
    title: `Page Not Found | ${siteName}`,
    description: 'The page you requested could not be found on Fast Build Inc.',
    keywords: 'Fast Build Inc',
    image: `${siteUrl}/images/logo.png`,
    noindex: true,
    breadcrumbs: [{ name: 'Home', path: '/' }],
  };
}

function parseHours(hoursStr) {
  const match = hoursStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*–\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return null;
  const to24 = (h, m, ap) => {
    let hour = parseInt(h, 10);
    if (ap.toUpperCase() === 'PM' && hour !== 12) hour += 12;
    if (ap.toUpperCase() === 'AM' && hour === 12) hour = 0;
    return `${String(hour).padStart(2, '0')}:${m}`;
  };
  return {
    opens: to24(match[1], match[2], match[3]),
    closes: to24(match[4], match[5], match[6]),
  };
}

export function buildOpeningHoursSpecification() {
  const weekdays = businessHours.find((h) => h.days.includes('Mon'));
  if (!weekdays || weekdays.hours === 'Closed') return [];
  const parsed = parseHours(weekdays.hours);
  if (!parsed) return [];
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'https://schema.org/Monday',
        'https://schema.org/Tuesday',
        'https://schema.org/Wednesday',
        'https://schema.org/Thursday',
        'https://schema.org/Friday',
      ],
      opens: parsed.opens,
      closes: parsed.closes,
    },
  ];
}

export function buildLocalBusinessSchema() {
  const { address, geo } = business;
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: [`${siteUrl}/images/hero.png`, `${siteUrl}/images/logo.png`],
    telephone: business.telephone,
    email: business.email,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: business.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    openingHoursSpecification: buildOpeningHoursSpecification(),
    sameAs: [],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: defaultDescription,
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'en-US',
  };
}

export function buildBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };
}

export function buildServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fast Build Construction Services',
    itemListElement: business.services.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: business.areaServed,
      },
    })),
  };
}

export function buildJsonLdForPath(pathname, breadcrumbs) {
  const graphs = [buildLocalBusinessSchema(), buildWebSiteSchema(), buildBreadcrumbSchema(breadcrumbs)];
  if (pathname === '/services') {
    graphs.push(buildServicesSchema());
  }
  return graphs;
}
