# Himanshu Pal — High-End Portfolio

A dark cinematic portfolio built with React, Vite, Motion for React, GSAP ScrollTrigger, and Lucide icons.

## Requirements
- Node.js 20+ recommended
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

## Personalize before publishing
- Add a current PDF résumé at `public/resume.pdf`.
- Add real, sanitized project screenshots or short demo clips in `public/images/` and update `src/data.js`.
- Verify all dates, metrics, role descriptions, and certifications before publishing.
- The site intentionally describes Doc's Eye as a hackathon prototype, not a live medical product.
- Check employer confidentiality before sharing insurance workflow details or screenshots.
- Add a custom Open Graph image at `public/og-image.png` if desired.

## Deploy to Vercel
Push this folder to a new GitHub repository, import that repository into Vercel, and use the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`


## Recent visual refinements

- Replaced the abstract `FIG. 001` hero visual with `public/himanshu-portrait.webp`.
- Added a GSAP ScrollTrigger-driven 3D tilt/scale effect to the portrait, with a reduced-motion fallback.
- Increased the legibility of supporting text across the site.
- Expanded the toolkit with analytics, development, automation, data-tool, and computer-vision skills.
- Updated the experience heading to “Experience & growth.”
