# Christopher Dzorkpui — Portfolio (Next.js)

Premium personal brand portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed to position you as a top-tier Product Designer & Software Engineer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **TypeScript**
- **SEO** (metadata, Open Graph, semantic HTML)
- **Accessibility** (focus states, ARIA, semantic sections)

## Structure

- `src/app` — Layout, page, global styles
- `src/components/layout` — Nav, Footer
- `src/components/sections` — Hero, TrustBar, About, Services, Skills, Projects, Experience, Testimonials, BeyondCode, Blog, CTA, Contact
- `src/lib/data.ts` — Copy and content (edit here to update the site)
- `public/images` — Images (copied from parent `assets/images`)

## Deploy

Works with Vercel, Netlify, or any Node host. Set build command to `npm run build` and output to the Next.js default (`.next` + `next start` or static export if configured).
