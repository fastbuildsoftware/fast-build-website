import { useEffect } from 'react';
import {
  siteName,
  siteUrl,
  buildJsonLdForPath,
} from '@/lib/seo.config';

const JSON_LD_ID = 'fast-build-jsonld';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return;
  const selector = `link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(graphs) {
  let el = document.getElementById(JSON_LD_ID);
  if (!el) {
    el = document.createElement('script');
    el.id = JSON_LD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(graphs.length === 1 ? graphs[0] : { '@context': 'https://schema.org', '@graph': graphs });
}

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.keywords]
 * @param {string} props.path
 * @param {string} [props.image]
 * @param {string} [props.type]
 * @param {boolean} [props.noindex]
 * @param {{ name: string, path: string }[]} props.breadcrumbs
 */
export default function SEO({
  title,
  description,
  keywords,
  path,
  image,
  type = 'website',
  noindex = false,
  breadcrumbs,
}) {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`;
  const ogImage = image?.startsWith('http') ? image : `${siteUrl}${image || '/images/logo.png'}`;

  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'author', siteName);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    upsertMeta('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow');

    upsertMeta('name', 'geo.region', 'US-NY');
    upsertMeta('name', 'geo.placename', 'New York');
    upsertMeta('name', 'geo.position', '41.7402;-74.6601');
    upsertMeta('name', 'ICBM', '41.7402, -74.6601');

    upsertLink('canonical', canonical);
    upsertLink('alternate', canonical, { hreflang: 'en' });
    upsertLink('alternate', canonical, { hreflang: 'x-default' });
    document.documentElement.lang = 'en';

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', `${siteName} — ${description.slice(0, 100)}`);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertMeta('name', 'twitter:image:alt', `${siteName} logo and branding`);

    upsertJsonLd(buildJsonLdForPath(path, breadcrumbs));
  }, [title, description, keywords, path, ogImage, type, noindex, breadcrumbs, canonical]);

  return null;
}
