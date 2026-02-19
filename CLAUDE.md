# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (Vite, http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview the production build locally
```

No test runner is configured.

## Deployment workflow

Development is done locally. To deploy:
```bash
git add . && git commit -m "..." && git push
# On the DigitalOcean droplet:
git pull && systemctl reload <service>   # or pm2 restart / nginx reload as appropriate
```
The droplet IP and credentials are in `.env` (gitignored — never commit them).

## Code standards

- Keep code clean and minimal — no dead code, unused imports, or commented-out blocks.
- No backwards-compat shims, feature flags, or speculative abstractions.

## Assets

Static assets (logo, images) live in `public/assets/` and are served at `/assets/<filename>`.
- Logo: `public/assets/logo.webp`
- All images must be web-optimized before committing: compress and resize to the display size needed. Prefer WebP. Do not commit raw/uncompressed images.
- The logo is referenced via `siteConfig.logoUrl` in `src/config/siteConfig.js`.

## Architecture

**React 19 + Vite SPA** using React Router v7 for client-side routing. All pages are lazy-loaded via `React.lazy` and wrapped in a single `<Layout>` (Header + Footer + ScrollToTop).

### Path alias
`@` maps to `./src` (configured in `vite.config.js`). Use `@/` imports throughout.

### Data layer
All content is static — defined in `src/data/`:
- `mediators.js` — mediator profiles (bio, credentials, image URLs)
- `services.js` — service cards and 4-step process
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
