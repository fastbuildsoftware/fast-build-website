# Fast Build Website

Marketing site for Fast Build Inc. — residential and commercial construction serving New York and surrounding areas.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Optional: create `.env.local` to override the contact form endpoint:

```
VITE_CONTACT_FORM_ENDPOINT=https://formsubmit.co/ajax/your@email.com
VITE_SITE_URL=https://fastbuildinc.com
```

4. Run locally: `npm run dev`

## SEO

Per-page titles, meta descriptions, Open Graph, Twitter Cards, canonical URLs, and JSON-LD (`GeneralContractor`, `WebSite`, `BreadcrumbList`, services `ItemList`) are managed in `src/lib/seo.config.js` and applied via `src/components/seo/SEO.jsx`.

Static files: `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`. Set `VITE_SITE_URL` to your production domain before deploy so canonical and social URLs are correct.

## Contact form

Submissions are sent via [FormSubmit](https://formsubmit.co) to `software@fastbuildinc.com` by default. On first use, FormSubmit may ask you to confirm that address via email. Set `VITE_CONTACT_FORM_ENDPOINT` to point at your own form handler if you prefer another provider.

## Branding

The Fast Build logo lives at `public/images/logo.png` (also `public/favicon.png` for the browser tab). Use the shared `<Logo />` component from `src/components/brand/Logo.jsx` for navbar and footer. Brand colors: orange `#F58220`, purple `#512D8D`.

## Images

Add or replace section photos in `public/images/` per `src/lib/images.js` (hero, foundation, residential, etc.).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
