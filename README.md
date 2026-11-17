# Himanshu Pal — Business, Data & Operations Portfolio

A complete editorial redesign of the Himanshu Pal portfolio. The visual language is based on a warm business-journal direction using the requested three-colour identity:

- Cream: `#F5DABF`
- Deep green: `#0F3D3A`
- Bordo: `#6C151E`

## Requirements

- Node.js 20 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Central site configuration

Edit `SITE_CONFIG` in `src/data.js` to update the email, social links, location or résumé link. The résumé CTA opens the supplied Google Drive file in a new tab; it does not create a local résumé or a substitute résumé page.

```js
resumeUrl: "https://drive.google.com/file/d/1LGmp8eAD19wX5hfiNI5YIeBvIW4M3v2s"
```

The Drive file must be shared with the intended audience (for public recruiting access, set General access to “Anyone with the link” as Viewer, if appropriate). Verify the link in a signed-out/private browser window before publishing.

## Project evidence and accuracy

- Supplied meal-service dashboard and payment screens are displayed as work evidence. Confirm whether the platform should be described as a concept, prototype or deployed system before publishing that status.
- The supplied Excel dashboard image is displayed as visual evidence. The site does not infer formulas, refresh implementation details or time savings that were not supplied.
- The supplied Cars24 dashboard screenshot is displayed as visual evidence; no unverified business impact is claimed.
- The Power Pivot relationship model is presented separately as a supporting data-modelling sample; it is not labelled as the Cars24 dashboard.
- The supplied motor-insurance Harness overview is displayed only after obscuring credential and model-configuration regions. The motor-insurance turnaround and 20+ workflow statements remain labelled as reported experience, not independent audited benchmarks. Do not add confidential customer, policy, insurer or employer information.
- Diagrammatic process illustrations are labelled as process views, not product screenshots.

## Images

All submitted images are optimized WebP assets in `public/images/`. The portrait retains its transparent background.

## Deployment

Import the repository into Vercel or another static-site host using:

- Build command: `npm run build`
- Output directory: `dist`

Vercel Analytics is retained from the existing project (`@vercel/analytics`). No backend, database or AI service is required by this portfolio.

## Before publishing

1. Confirm meal platform status (concept / prototype / deployed).
2. Add Cars24 dashboard and Power Query screenshots plus verified findings.
3. Confirm the résumé is accessible to recruiters and still current.
4. Verify dates, titles, awards and certifications against the latest résumé.
5. Test desktop, tablet and mobile layouts and all external links.
