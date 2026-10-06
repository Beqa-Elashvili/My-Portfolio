# Beqa Elashvili — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.
The page is fully static: every section is a server component, and the only client JavaScript is the
header (active section, mobile menu) and a single scroll-reveal observer.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Structure

```
src/
  app/          layout, page, metadata routes (Open Graph image, icon, sitemap, robots)
  components/   header, footer, section wrapper, sections/, work/ (project cards, pipeline)
  content/      all copy and data: site, projects, experience, skills
  assets/       portrait and project screenshots (imported statically for next/image)
  lib/          small helpers
```

To change the content, edit the files in `src/content/`. The components only render that data.

## Environment

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for metadata, Open Graph, sitemap and robots. Defaults to the current Vercel deployment. |
