# gauravpaikane.com — GitHub Pages site

Dark-first personal site for Gaurav Pai Kane.
Stack: pure HTML/CSS/JS — no build step, no dependencies. Total ~1.4 MB.

## Launch checklist

### Step 1 — Upload (do this today, works immediately)
1. Open your repo `gauravpaikane.github.io` on github.com
2. Click **Add file → Upload files**
3. Drag ALL contents of this folder in (index.html, 404.html, CNAME, README.md, assets/, blog/)
   — keep the folder structure intact
4. Commit. Within ~1 minute the site is live at **https://gauravpaikane.github.io**
   (preview and review it here while the domain transfer completes)

### Step 2 — When the Namecheap transfer completes
In Namecheap → Domain List → gauravpaikane.com → **Advanced DNS**, remove Wix records and add:

| Type  | Host | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | gauravpaikane.github.io   |

### Step 3 — Tell GitHub
Repo → Settings → Pages → Custom domain → enter `www.gauravpaikane.com` → Save.
Once DNS verifies (up to 24 h), tick **Enforce HTTPS**.
(The CNAME file in this package already handles this, but confirm in settings.)

Done. Free hosting, HTTPS, no renewals except the domain.

## Open items (parked by design)
- **Hero tagline** — current line is a working placeholder; to be debated on the live site
- **Logo** — send the SVG/PNG; wordmark is text-only until then, favicon pending
- **Powervault depth** — described at a high level intentionally; can expand when you're ready to go public with more
- **Email CTA** — contact section currently points to LinkedIn; add a mailto when you decide which address to publish

## Structure
- `index.html` — one-page scroll: hero → now → stats → journey (5 chapters) → writing → off the clock → contact
- `blog/` — index + 7 posts migrated from Wix
- `assets/style.css` — design tokens: #0D0D11 base, #4B50D1 accent, Archivo / IBM Plex Sans / IBM Plex Mono
- `assets/main.js` — scroll progress, reveals, count-up stats, journey rail (reduced-motion safe)
- `CNAME` — custom domain binding for GitHub Pages
