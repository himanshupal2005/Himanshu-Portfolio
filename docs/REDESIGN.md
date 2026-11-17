# Portfolio redesign — creative and content specification

## 1. Repository intelligence

The existing repository is a React 19 + Vite application. It uses Motion for React, GSAP ScrollTrigger, Lucide and Vercel Analytics. The existing portfolio was dark and cinematic, with a framed portrait, neon-green accent and animated project visuals. A recent commit history also shows that an earlier cream / deep-green / bordo direction had been committed and subsequently reverted. This branch takes a new implementation path rather than restoring that version.

### Verified content retained from `src/data.js` on `main`

- Experience: Artificial Intelligence Trainer at Agribook Tech Solutions And Allied Services Pvt. Ltd. (Jun–Aug 2026); Full Stack Developer at ECH Business Solution (Oct 2025–Jul 2026); Data Analyst at Elevate Labs (Apr–May 2025).
- Agribook: 20+ reusable automation workflows; reported quotation turnaround of around 15 minutes to under one minute.
- ECH: inventory ERP work with Google Apps Script, HTML, JavaScript and Google Sheets; vendor, warehouse, site and employee workflow traceability.
- Elevate Labs: data cleaning, exploratory analysis, SQL queries, dashboard design and LinkedIn job-trend analysis; Best Performer recognition.
- Existing supporting project: Touchless Cursor, a hands-free desktop interaction prototype using Python, MediaPipe, OpenCV and PyAutoGUI.
- Existing awards: Crack the Case runner-up (2026); Lights, Camera & Ads first place (2025); Ideathon winner (2025); TERI Green Olympiad distinction (96%); Chancellor’s Scholarship Award (2025); Outstanding Talent (2024).
- Existing certifications/simulations are retained in the learning section.

### User-supplied project scope and proof

- Cars24 Power BI: Power Query preparation and dashboard development are described; dashboard screenshots and specific findings are not yet supplied in this upload set.
- Excel reporting: refresh-led reporting behaviour is described; exact formulas, refresh mechanism and time saved are not assumed.
- Motor insurance: reusable workflows, quotation preparation and human approval checkpoints are described. The turnaround metric is explicitly identified as reported.
- Inventory ERP: warehouse, vendor and stock movement workflows are represented with an illustrative process map, not a fake screen.
- Meal-service platform: the submitted live dashboard and payment screens are used. Concept/prototype/deployed status remains to be confirmed.
- Power Pivot: the uploaded model view is kept as a separate supporting data-modelling sample; it is not misrepresented as a Cars24 dashboard.

## 2. Three creative concepts considered

### A — Field Notes / Business Journal (selected)

- **Mood:** Warm, thoughtful, editorial and grounded; a personal business journal rather than a conventional developer portfolio.
- **Typography:** Expressive DM Serif Display for statements and project titles; DM Sans for reading; DM Mono for metadata and indices.
- **Layout:** Asymmetric two-column hero, large portrait cutout, numbered editorial sections, horizontal case-study entries and restrained diagrams.
- **Palette:** Cream canvas, deep-green structural type and surfaces, bordo for emphasis, underlines and markers.
- **Interactions:** Expandable case notes and capability groups; subtle section reveals; no attention-seeking cursor or heavy 3D effects.

### B — Studio Ledger

- **Mood:** Precise, modernist and more data-dense.
- **Typography:** Sans-led display type with tabular numeric emphasis.
- **Layout:** Rigid 12-column grid, dense metadata rail, modular project panels and dashboard-like evidence shelves.
- **Palette:** Deep green dominates; cream creates contrast; bordo is used sparingly for flags.
- **Interactions:** Filterable work index and compact evidence inspection.

### C — Operations Atlas

- **Mood:** Systems-oriented, diagrammatic and process-led.
- **Typography:** Strong grotesk headlines paired with mono labels.
- **Layout:** Workflow maps and data-flow diagrams become the core visual language; each project is narrated as an operating system.
- **Palette:** Cream paper field with green diagrams and bordo decision points.
- **Interactions:** Step-by-step process exploration and connected project maps.

**Selected direction: A — Field Notes / Business Journal**, with a few diagrammatic motifs from C. It best balances a human introduction, business context, genuine evidence and technical competence.

## 3. Information architecture

1. Hero: positioning, portrait, location, work and résumé actions.
2. Focus ticker: business understanding, data/reporting, process improvement and automation.
3. About: how BMS, analytics, finance and technology complement each other; education note.
4. Selected work: insurance workflow automation, Cars24 Power BI, Excel reporting, inventory ERP, meal-service operations and a separate Power Pivot sample.
5. Capabilities: analytics, operations, marketing foundations, commercial/sales foundations, entrepreneurship foundations, technology/automation.
6. Experience: three roles in a timeline.
7. Recognition and certifications.
8. Contact and external profiles.

## 4. Design system

| Token | Value | Use |
|---|---|---|
| Cream | `#F5DABF` | Main canvas, light text on green/bordo |
| Deep green | `#0F3D3A` | Main typography, rules, navigation, structural surfaces |
| Bordo | `#6C151E` | Accent type, markers, CTAs, emphasis |
| Display | DM Serif Display | Hero and editorial headings |
| Body | DM Sans | Paragraphs, labels, interface copy |
| Metadata | DM Mono | Index numbers, captions, dates, tags |

Square corners, hairline rules, asymmetric whitespace and image cutouts are preferred over rounded cards, drop shadows or glass effects.

## 5. Interaction and accessibility

- Native `details` and `summary` controls support keyboard-operable case notes and skill groups.
- Mobile navigation exposes its expanded state and closes with Escape.
- Section reveals use IntersectionObserver with a `prefers-reduced-motion` fallback.
- Colour contrast remains based on the three requested brand colours and their tints/opacity variations.
- Semantic sections, headings, image alt text and focus-visible styles are included.

## 6. Remaining information / publishing checklist

- Provide Cars24 dashboard and Power Query screenshots, plus findings actually identified from the data.
- Confirm the meal-service platform's status: concept, prototype or deployed.
- Confirm exact Excel refresh approach if the case study should explain how refresh works.
- Recheck all experience dates, awards and certification names against the latest résumé.
- Verify the Google Drive résumé is viewable by recruiters.
- Test the website after image upload and deployment on desktop, tablet and mobile.
