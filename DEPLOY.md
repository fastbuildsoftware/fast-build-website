# Deploy Fast Build Website

Production URL: **https://fastbuildinc.com**  
Hosting: [Vercel](https://vercel.com) (free tier, automatic SSL)  
Repository: https://github.com/fastbuildsoftware/fast-build-website

## 1. GitHub

Code is pushed to `fastbuildsoftware/fast-build-website`. To push updates:

```bash
git add .
git commit -m "Your message"
git push origin main
```

Vercel redeploys automatically on each push to `main` when the GitHub project is linked.

## 2. Vercel (first-time setup)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. **Add New Project** → Import `fastbuildsoftware/fast-build-website`.
3. Framework preset: **Vite** (or use settings from `vercel.json`).
4. Environment variable (if not picked up from `vercel.json`):
   - `VITE_SITE_URL` = `https://fastbuildinc.com`
5. Deploy. You get a `*.vercel.app` URL with HTTPS immediately.

## 3. Custom domain + SSL (fastbuildinc.com)

In the Vercel project: **Settings → Domains → Add** `fastbuildinc.com` and `www.fastbuildinc.com`.

Vercel issues a **free SSL certificate** automatically once DNS is correct.

### DNS at your domain registrar

**Option A — Vercel DNS (recommended)**  
Point nameservers to Vercel (shown in the Domains UI after you add the domain).

**Option B — Keep current DNS**

| Type  | Name | Value |
|-------|------|--------|
| A     | `@`  | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Remove conflicting A/CNAME records for `@` and `www`. Propagation can take up to 48 hours (often minutes).

Redirect: In Vercel Domains, set **www → fastbuildinc.com** (or the reverse) so one canonical host is used.

## 4. Verify

- https://fastbuildinc.com loads the site
- Padlock shows valid certificate (Let’s Encrypt via Vercel)
- `/services`, `/about`, `/contact` work (SPA rewrites in `vercel.json`)

## 5. FormSubmit (contact form)

Confirm `software@fastbuildinc.com` with FormSubmit if submissions fail. Optional: set `VITE_CONTACT_FORM_ENDPOINT` in Vercel **Environment Variables**.
