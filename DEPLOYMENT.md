# Reverb Academy website — deployment handoff

This package contains the approved motion/morphing landing page, source code, production SEO metadata, local-business and course structured data, crawler rules, sitemap, and AI-readable business information.

## Requirements

- Node.js 22.13 or newer
- npm

## Build

1. Run `npm ci`.
2. Run `npm run build` to create the Next.js production build.
3. On Vercel, import this repository as a Next.js project. Use the repository root, the default `npm run build` command, and the default Next.js output settings.

The Cloudflare/Vinext scripts and Worker files are retained as optional scaffolding. They are not used by Vercel's Next.js build.

The production domain is configured as `https://reverbacademy.com/`. If a different permanent domain is used, update `siteUrl` in `app/layout.tsx`, plus the URLs in `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` before deployment.

## Important launch steps

1. Point `reverbacademy.com` to the deployed website and force HTTPS.
2. Add the domain to Google Search Console and submit `https://reverbacademy.com/sitemap.xml`.
3. Validate the live page with Google's Rich Results Test and URL Inspection.
4. Keep both Google Business Profiles accurate and use the same business name, phone, address, categories, photos, and opening hours everywhere.
5. Ask real students for honest Google reviews. Never create fake reviews or add unsupported rating markup.
6. Add genuine first-hand content over time: tutor profiles, lesson outcomes, student performances, FAQs, and useful instrument-learning guides.

Search rankings are earned over time and cannot be guaranteed by metadata alone. This code establishes a strong technical and local-search foundation; real reviews, accurate business profiles, helpful original content, local citations, and consistent maintenance are the next growth levers.
