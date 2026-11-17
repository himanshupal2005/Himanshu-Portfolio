import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  SITE_CONFIG,
  navigation,
  projects,
  capabilities,
  experience,
  awards,
  certifications,
} from "./data.js";

function Arrow({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M4 3h9v9" /></svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M8 3l5 5-5 5" /></svg>
  );
}

function Mark() {
  return <span className="mark" aria-hidden="true">HP<span>.</span></span>;
}

function SectionHeading({ number, eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{number}</span><i />{eyebrow}</div>
      <div className="section-heading-main">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Himanshu Pal home"><Mark /><span>HIMANSHU PAL</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-resume" href={SITE_CONFIG.resumeUrl} target="_blank" rel="noreferrer">Résumé <Arrow diagonal /></a>
        <a className="header-contact" href={`mailto:${SITE_CONFIG.email}`}>Let’s talk <Arrow diagonal /></a>
      </div>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
        {navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}<Arrow diagonal /></a>)}
        <a href={SITE_CONFIG.resumeUrl} target="_blank" rel="noreferrer">Open résumé <Arrow diagonal /></a>
        <a href={`mailto:${SITE_CONFIG.email}`}>Contact <Arrow diagonal /></a>
      </nav>}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> BUSINESS ANALYTICS / FINANCE / OPERATIONS</div>
        <p className="hero-pretitle">A practical mind for</p>
        <h1>Better<br /><em>business.</em></h1>
        <p className="hero-strap">Business-minded. Data-informed. Built to improve.</p>
        <p className="hero-summary">I’m Himanshu Pal, a BMS student exploring how data, technology and a clear understanding of business operations can make everyday work better.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore selected work <Arrow diagonal /></a>
          <a className="text-link" href={SITE_CONFIG.resumeUrl} target="_blank" rel="noreferrer">View résumé <Arrow diagonal /></a>
          <a className="text-link" href="#contact">Contact <Arrow diagonal /></a>
        </div>
        <div className="hero-meta"><span>BASED IN {SITE_CONFIG.location.toUpperCase()}</span><i /> <span>JAGRAN LAKECITY UNIVERSITY · BMS</span></div>
      </div>
      <div className="hero-portrait" aria-label="Portrait of Himanshu Pal">
        <div className="portrait-disc" />
        <div className="portrait-rule portrait-rule-one" />
        <div className="portrait-rule portrait-rule-two" />
        <img src="/images/profile-cutout.webp" alt="Himanshu Pal in a charcoal suit" fetchPriority="high" />
        <span className="portrait-index">FIG. 01 <b>—</b> HIMANSHU PAL</span>
        <span className="portrait-side-note">DATA · SYSTEMS · PEOPLE</span>
      </div>
      <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><span className="down-line" /></div>
    </section>
  );
}

function Ticker() {
  const words = ["BUSINESS UNDERSTANDING", "DATA & REPORTING", "PROCESS IMPROVEMENT", "WORKFLOW AUTOMATION"];
  return <div className="ticker" aria-label="Areas of focus"><div className="ticker-track">{[...words, ...words].map((word, i) => <span key={`${word}-${i}`}>{word}<b>✳</b></span>)}</div></div>;
}

function About() {
  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading number="01" eyebrow="THE CONNECTING THREAD" title={<>Business context.<br /><em>Technical follow-through.</em></>} intro="I’m interested in the space between what a business needs to achieve and how its people, processes and systems actually work." />
      <div className="about-grid">
        <div className="about-lead"><p className="dropcap">My BMS studies in Business Analytics and Finance give me a way to think about performance, commercial choices and the numbers behind a business.</p><p>My practical work adds another layer: preparing data, building reporting views, designing operational workflows and automating repeatable tasks. I enjoy understanding the process first, then choosing a tool that makes the work clearer or more reliable.</p><p>Marketing, sales and entrepreneurship are areas I’m actively learning about. I see them as important context for understanding customers, revenue and how a business grows.</p></div>
        <div className="about-principles">
          <div><span>01</span><h3>Understand the work.</h3><p>Start with the people, process and decision—not the tool.</p></div>
          <div><span>02</span><h3>Make the information useful.</h3><p>Turn scattered records into reporting that can be read and acted on.</p></div>
          <div><span>03</span><h3>Improve the way it runs.</h3><p>Design workflows that reduce repeat effort without losing human judgement.</p></div>
        </div>
      </div>
      <div className="education-note"><span className="education-monogram">BMS</span><div><b>Bachelor of Management Studies</b><span>Jagran Lakecity University · Bhopal · Business Analytics & Finance</span></div><small>5TH SEMESTER</small></div>
    </section>
  );
}

function ProcessVisual({ type }) {
  if (type === "insurance") return (
    <div className="process-visual insurance-visual" aria-label="Illustrative motor insurance workflow stages">
      <div className="visual-caption"><span>WORKFLOW MAP / 01</span><span>HUMAN APPROVAL RETAINED</span></div>
      <div className="insurance-flow">
        {["Documents", "Quote", "Review", "KYC & payment", "Policy"].map((x, i) => <div className="flow-node" key={x}><small>0{i + 1}</small><b>{x}</b>{i !== 4 && <span className="flow-arrow">→</span>}</div>)}
      </div>
      <div className="visual-footer"><span>REUSABLE WORKFLOW PATTERNS</span><span>ILLUSTRATIVE PROCESS MAP · NOT A SCREENSHOT</span></div>
    </div>
  );
  if (type === "pipeline") return (
    <div className="process-visual pipeline-visual" aria-label="Cars24 analysis workflow stages">
      <div className="pipeline-heading"><span>ANALYSIS PIPELINE / 02</span><span>POWER BI</span></div>
      <div className="pipeline-grid">
        <div><i>01</i><b>Raw data</b><small>Source dataset</small></div><span>→</span>
        <div><i>02</i><b>Power Query</b><small>Clean & transform</small></div><span>→</span>
        <div><i>03</i><b>Data model</b><small>Prepare for analysis</small></div><span>→</span>
        <div><i>04</i><b>Dashboard</b><small>Explore patterns</small></div>
      </div>
      <div className="visual-footer"><span>CARS24 DATASET</span><span>PROCESS VIEW · DASHBOARD IMAGE PENDING</span></div>
    </div>
  );
  if (type === "inventory") return (
    <div className="process-visual inventory-visual" aria-label="Inventory movement flow illustration">
      <div className="visual-caption"><span>INVENTORY MOVEMENT / 04</span><span>TRANSACTION-BASED</span></div>
      <div className="inventory-map">
        <div className="inventory-source">VENDOR</div><span>↓</span><div className="inventory-central">CENTRAL WAREHOUSE</div>
        <div className="inventory-branches"><span>↙</span><span>↓</span><span>↘</span></div>
        <div className="inventory-destinations"><b>REGIONAL WAREHOUSE</b><b>REPAIR CENTRE</b><b>SITE STORE</b></div>
        <div className="inventory-ledger">MOVEMENT LEDGER <small>GRN · TRF · ISSUE · RTV · SCRP</small></div>
      </div>
      <div className="visual-footer"><span>STOCK HISTORY / TRACEABILITY</span><span>PROCESS VIEW · NOT A PRODUCT SCREENSHOT</span></div>
    </div>
  );
  if (type === "gesture") return (
    <div className="process-visual gesture-visual" aria-label="Touchless cursor prototype input and output flow">
      <div className="visual-caption"><span>INTERACTION EXPERIMENT / 07</span><span>COMPUTER VISION</span></div>
      <div className="gesture-flow">
        <div><i>01</i><b>Webcam</b><small>Live visual input</small></div><span>→</span>
        <div><i>02</i><b>Hand landmarks</b><small>MediaPipe / OpenCV</small></div><span>→</span>
        <div><i>03</i><b>Gesture</b><small>Recognise intent</small></div><span>→</span>
        <div><i>04</i><b>Cursor</b><small>PyAutoGUI actions</small></div>
      </div>
      <div className="visual-footer"><span>HANDS-FREE DESKTOP CONTROL</span><span>PROTOTYPE FLOW · NOT A SCREENSHOT</span></div>
    </div>
  );
  return null;
}

function ProjectVisual({ project }) {
  if (project.visual === "image") return <figure className="project-figure"><img src={project.image} alt={project.imageAlt} loading="lazy" /><figcaption>{project.imageCaption}</figcaption></figure>;
  if (project.visual === "gallery") return <div className="project-gallery">{project.images.map((img) => <figure key={img.src}><img src={img.src} alt={img.alt} loading="lazy" /><figcaption>{img.caption}</figcaption></figure>)}</div>;
  return <ProcessVisual type={project.visual} />;
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-entry ${featured ? "project-featured" : ""}`}>
      <div className="project-visual-column"><ProjectVisual project={project} /></div>
      <div className="project-copy-column">
        <div className="project-meta"><span>{project.id} / {project.category}</span><span className="project-status">{project.status}</span></div>
        <h3>{project.title}</h3>
        <p className="project-deck">{project.deck}</p>
        <div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <details className="case-notes">
          <summary>Read the case notes <Arrow diagonal /></summary>
          <div className="case-body">
            <div><h4>Context & objective</h4><p>{project.context}</p><p>{project.objective}</p></div>
            <div><h4>My role</h4><p>{project.role}</p><h4>Approach</h4><ul>{project.method.map((step) => <li key={step}>{step}</li>)}</ul></div>
            <div><h4>Tools</h4><div className="tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><h4>Outcome & boundaries</h4><p>{project.result}</p></div>
          </div>
        </details>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="section-shell">
        <SectionHeading number="02" eyebrow="SELECTED WORK / CASE NOTES" title={<>From raw inputs<br />to <em>better operations.</em></>} intro="A selection of analytics, reporting and operational systems work. Each project is described at the level supported by the available material." />
        <div className="work-intro-line"><span>01—07 / PROJECT INDEX</span><span>SELECT A CASE TO EXPAND THE PROCESS, ROLE AND BUSINESS CONTEXT</span></div>
        <div className="project-list">{projects.map((project, i) => <ProjectCard project={project} featured={i === 0} key={project.id} />)}</div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-shell">
        <SectionHeading number="03" eyebrow="CAPABILITIES / A WORKING TOOLKIT" title={<>One business.<br /><em>Different lenses.</em></>} intro="My capabilities sit across analysis, operations and technology, with commercial and customer-facing knowledge developing alongside them." />
        <div className="capability-list">
          {capabilities.map((group) => <details className="capability-row" key={group.number}>
            <summary><span className="capability-number">{group.number}</span><span className="capability-name">{group.title}</span><span className="capability-level">{group.level}</span><span className="capability-plus">+</span></summary>
            <div className="capability-content"><p>{group.description}</p><div className="capability-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>
          </details>)}
        </div>
        <p className="capability-note"><b>A note on depth:</b> Analytics, reporting, process automation and operational systems are the areas with the clearest hands-on evidence. Marketing, sales and entrepreneurship are presented as developing foundations—not specialist claims.</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-shell" id="experience">
      <SectionHeading number="04" eyebrow="EXPERIENCE / LEARNING THROUGH DELIVERY" title={<>Where I’ve<br /><em>put ideas to work.</em></>} intro="Roles across analytics, ERP workflows and operational automation—each adding a different view of how organisations work." />
      <div className="experience-list">
        {experience.map((job, i) => <article className="experience-item" key={job.company}>
          <div className="experience-date"><span>{job.date}</span><b>0{i + 1}</b></div>
          <div className="experience-main"><h3>{job.role}</h3><p className="experience-company">{job.company}</p><p className="experience-type">{job.type}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
        </article>)}
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="recognition-section">
      <div className="section-shell recognition-grid">
        <div>
          <SectionHeading number="05" eyebrow="RECOGNITION" title={<>A few moments<br /><em>worth noting.</em></>} />
          <div className="award-list">{awards.map((award) => <div className="award-row" key={`${award.year}-${award.title}`}><span>{award.year}</span><div><b>{award.title}</b><p>{award.detail}</p></div></div>)}</div>
        </div>
        <div className="certification-panel">
          <div className="section-index"><span>06</span><i />CONTINUOUS LEARNING</div>
          <h3>Courses &<br /><em>simulations.</em></h3>
          <p>A selected list of learning programmes and job simulations recorded in my portfolio.</p>
          <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div className="section-index"><span>07</span><i />START A CONVERSATION</div>
        <p className="contact-overline">FOR ROLES, COLLABORATIONS & GOOD QUESTIONS</p>
        <h2>Let’s make<br /><em>work work better.</em></h2>
        <div className="contact-bottom"><p>I’m open to opportunities and conversations around business analytics, reporting, automation and operational improvement.</p><a className="contact-email" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email} <Arrow diagonal /></a></div>
        <div className="contact-links"><a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={SITE_CONFIG.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={SITE_CONFIG.resumeUrl} target="_blank" rel="noreferrer">View résumé <Arrow diagonal /></a></div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer section-shell"><a href="#top" className="footer-brand"><Mark /> HIMANSHU PAL</a><span>BUSINESS-MINDED · DATA-INFORMED · BUILT TO IMPROVE</span><span>© {new Date().getFullYear()} HIMANSHU PAL</span></footer>;
}

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".reveal, .section-heading, .project-entry, .experience-item, .award-row");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <>
    <Navbar />
    <main>
      <Hero />
      <Ticker />
      <About />
      <Work />
      <Approach />
      <Experience />
      <Recognition />
      <Contact />
    </main>
    <Footer />
    <Analytics />
  </>;
}
