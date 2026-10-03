# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (Vite, http://localhost:5173)
npm run build    # Client build + SSR build + prerender of every route to dist/
npm run preview  # Preview the production build locally
```

No test runner is configured.

## Deployment workflow

**Local — push changes:**
```bash
git add . && git commit -m "..." && git push
```

**Server — after SSHing in:**
```bash
# SSH into the droplet (credentials in .env, gitignored)
ssh root@<DROPLET_IP>

# Then run:
cd /var/www/mediation   # or wherever the project lives on the server
git pull
npm install             # only needed if package.json changed, but safe to always run
npm run build           # recompiles dist/ which nginx serves
systemctl reload nginx
```

## Code standards

- Keep code clean and minimal — no dead code, unused imports, or commented-out blocks.
- No backwards-compat shims, feature flags, or speculative abstractions.

## Assets

Static assets (logo, images) live in `public/assets/` and are served at `/assets/<filename>`.
- Logo: `public/assets/logo.webp`
- All images must be web-optimized before committing: compress and resize to the display size needed. Prefer WebP. Do not commit raw/uncompressed images.
- The logo is referenced via `siteConfig.logoUrl` in `src/config/siteConfig.js`.

## Architecture

**React 19 + Vite SPA** using React Router v7 for client-side routing. All pages are lazy-loaded via `React.lazy` and wrapped in a single `<Layout>` (Header + Footer + ScrollToTop + PageHead).

### Prerendering & SEO
Every route is prerendered to static HTML at build time so content is readable without JavaScript:
- `src/entry-server.jsx` renders a URL with `StaticRouter`; `scripts/prerender.js` writes `dist/<route>/index.html`, `dist/404.html`, `dist/sitemap.xml` and `dist/llms.txt`.
- `index.html` is a template: `<!--app-head-->` and `<!--app-html-->` are filled by the prerender step. `main.jsx` hydrates prerendered markup (and renders normally in dev).
- `src/seo/pages.js` — single source for each route's title, description and JSON-LD, plus the list of all paths (sitemap + prerender). Add new routes here.
- `src/seo/schema.js` — JSON-LD builders (organization, mediators, services/offers, FAQ, articles, breadcrumbs). `src/seo/llms.js` — /llms.txt.
- `PageHead` updates head tags on client-side navigation using the same `renderHead`.
- Components must render identically on server and client (no `window`/date-dependent output during render).
- nginx must use `try_files $uri $uri/index.html =404;` with `error_page 404 /404.html;`.

### Path alias
`@` maps to `./src` (configured in `vite.config.js`). Use `@/` imports throughout.

### Data layer
All content is static — defined in `src/data/`:
- `mediators.js` — mediator profiles (bio, credentials, image URLs)
- `services.js` — services (each `id` is its `/services/:id` URL slug) and the process steps
- `pricing.js` — flat-fee packages and hourly rate, used by the Pricing page, service pages, JSON-LD and llms.txt
- `blogPosts.js` — full blog post content (structured as typed blocks: `paragraph`, `heading`, `list`, `quote`)
- `faqs.js` — FAQ accordion data

### Configuration
- `src/config/siteConfig.js` — single source of truth for business info (name, phone, email, address, Calendly URL, logo)
- `src/config/navigation.js` — nav links array

### Styling
- **Tailwind CSS v3** with a warm-neutral color palette. Key raw hex values used throughout components:
  - Background: `#faf9f6` (warm off-white)
  - Accent blue: `#8ab4d5`
  - Warm beige border: `#e8dcc4`
  - Dark text: `#1a1a1a`
  - Muted text: `#5a6a7a`
- CSS variables in `src/index.css` map to Tailwind's semantic color tokens (used by shadcn/ui components)
- Typography: `font-serif` = Playfair Display (headings), `font-sans` = Inter (body)
- No border-radius (`--radius: 0px`) — sharp corners throughout

### UI components
`src/components/ui/` contains shadcn/ui primitives (Radix-based). Page-level components are organized by route under `src/components/`:
- `layout/` — Header, Footer, Layout, ScrollToTop
- `home/` — section components for the Home page only
- `contact/` — ContactForm (Web3Forms API), CalendlyEmbed (react-calendly)
- `blog/` — BlogCard, BlogContent
- `shared/` — AnimatedSection (framer-motion scroll reveal), CTAButton, SectionHeader

### Forms & integrations
- **Contact form**: POSTs to `https://api.web3forms.com/submit`. Requires `VITE_WEB3FORMS_ACCESS_KEY` in `.env`.
- **Scheduling**: Calendly inline widget on desktop; button link on mobile. URL comes from `siteConfig.calendlyUrl`.

### Blog routing
Blog posts use slug-based routing (`/blog/:slug`). The `BlogPost` page finds the matching post from `blogPosts` array by `slug`. Content is rendered by iterating typed blocks in `BlogContent`.
