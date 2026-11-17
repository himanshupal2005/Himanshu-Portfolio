# Himanshu Pal — Business, Data & Operations Portfolio

A responsive portfolio built with React, Vite, Motion for React, GSAP ScrollTrigger, and Lucide icons. The refreshed positioning combines Business Analytics & Finance, data reporting, operations, process automation, and developing commercial/entrepreneurial foundations.

## Brand direction

- Cream canvas: `#F5DABF`
- Deep green structure: `#0F3D3A`
- Bordo emphasis: `#6C151E`

## Site sections

- Hero and résumé access
- About / business perspective
- Selected projects and case-study modals
- Business approach and filterable toolkit
- Professional experience and education
- Recognition and certifications
- Contact

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Résumé

The public résumé page is `public/resume.html` and is available at `/resume.html`. Visitors can open it and use **Print / Save as PDF** in the browser. Review this page against the latest approved CV before deployment, especially dates, role titles, achievements, and certifications.

## Project imagery and evidence

Replace the illustrative Excel and Cars24 dashboard artwork with genuine, sanitized screenshots in `public/images/`, then update the relevant project artwork in `src/App.jsx` or add image paths to `src/data.js`.

Recommended assets:
- Cars24: full Power BI dashboard and a Power Query preparation screenshot.
- Excel: dashboard view and a short recording of the source-data refresh/update.
- Insurance workflow: sanitized workflow diagram only; never expose customer, policy, insurer-login, or employer-confidential data.
- Inventory ERP: inventory overview, movement ledger, and a traceability flow.
- Meal service: dashboard and subscription/delivery flow using demo data.
- Touchless Cursor: short demo clip or GIF.

Do not publish illustrative numbers as real project results. Confirm all impact claims and clearly label concepts, prototypes, and deployed work.

## Portfolio documentation

See [docs/PORTFOLIO-PLAN.md](docs/PORTFOLIO-PLAN.md) for the full information architecture, visual direction, project case-study format, evidence checklist, and next implementation pass.

## Deploy to Vercel

Import the repository into Vercel using the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`
