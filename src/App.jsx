import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Asterisk,
  BarChart3, BriefcaseBusiness, Check, ChevronDown, Code2, Cpu, Database,
  Download, ExternalLink, Github, Linkedin, Mail, Menu, MousePointer2,
  MoveUpRight, Play, Sparkles, X, Zap
} from "lucide-react";
import { projects, experience, skills, awards, certifications } from "./data";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "himanshuupal2005@gmail.com";
const GITHUB = "https://github.com/himanshupal2005/";
const LINKEDIN = "https://www.linkedin.com/in/himanshuupal/";

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" /><span>{children}</span></div>;
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduce ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(100, Math.round(((now - start) / 680) * 100));
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else window.setTimeout(onDone, 100);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // onDone is a stable state setter wrapper from the parent; run the loader once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div className="preloader" exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}>
      <div className="preloader-inner">
        <div className="preloader-brand"><span className="brand-mark">HP</span><span>HIMANSHU PAL</span></div>
        <div className="preloader-bottom"><span>BUILDING SYSTEMS THAT DO MORE</span><span>{progress}%</span></div>
        <div className="preloader-track"><span style={{ width: `${progress}%` }} /></div>
      </div>
    </motion.div>
  );
}

function Navbar({ active, progress }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["work", "Work"], ["about", "About"], ["experience", "Experience"], ["contact", "Contact"]
  ];

  // Prevent background scrolling and handle Escape key when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="reading-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className="navbar">
        <a href="#home" className="nav-brand" aria-label="Himanshu Pal home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">HP</span><span>HIMANSHU PAL<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>)}
        </nav>
        <a href={`mailto:${EMAIL}`} className="nav-cta">Let’s talk <ArrowUpRight size={14} /></a>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              id="mobile-nav-drawer"
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-links">
                {links.map(([id, label]) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                    <span>{label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
                <a href={`mailto:${EMAIL}`} onClick={() => setMenuOpen(false)} className="mobile-menu-email">
                  <span>Contact ({EMAIL})</span>
                  <Mail size={16} />
                </a>
              </div>
              <div className="mobile-menu-footer">
                <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /> GitHub</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /> LinkedIn</a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual portrait-visual" aria-label="Portrait of Himanshu Pal with an interactive 3D scroll effect">
      <div className="visual-grid" />
      <div className="portrait-halo" />
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />
      <div className="portrait-card">
        <img src="/himanshu-portrait.webp" alt="Himanshu Pal wearing a charcoal suit" fetchPriority="high" />
        <div className="portrait-gloss" />
      </div>
      <div className="portrait-tag portrait-tag-top"><span className="chip-pulse" /> AVAILABLE TO BUILD</div>
      <div className="portrait-tag portrait-tag-left"><Code2 size={13} /> DEVELOPER <span>01</span></div>
      <div className="portrait-tag portrait-tag-right"><Database size={13} /> ANALYTICS <span>02</span></div>
      <div className="portrait-tag portrait-tag-bottom"><Zap size={13} /> AUTOMATION <span>03</span></div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="status-dot" /> AI AUTOMATION <span className="eyebrow-sep">/</span> DATA <span className="eyebrow-sep">/</span> SYSTEMS
        </motion.div>
        <div className="hero-title-mask">
          <motion.h1 initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>I build systems</motion.h1>
        </div>
        <div className="hero-title-mask">
          <motion.h1 className="hero-title-accent" initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>that do more<span>.</span></motion.h1>
        </div>
        <motion.p className="hero-description" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
          I turn complex business workflows into useful software, automated processes, and data-driven decisions.
        </motion.p>
        <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
          <a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={16} /></a>
          <a href={`mailto:${EMAIL}`} className="button button-quiet">Get in touch <ArrowUpRight size={16} /></a>
        </motion.div>
        <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
          <span>BASED IN BHOPAL, INDIA</span><span className="footnote-line" /><span>CURIOUS BY DEFAULT</span>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.35 }}>
        <HeroVisual />
      </motion.div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line"><i /></span></a>
    </section>
  );
}

function Ticker() {
  const items = ["AI AUTOMATION", "DATA ANALYTICS", "ERP ENGINEERING", "PROCESS DESIGN", "BUSINESS INTELLIGENCE"];
  return <div className="ticker" aria-label="Areas of focus"><div className="ticker-track">{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<Asterisk size={16} /></span>)}</div></div>;
}

function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-grid">
        <Reveal className="about-statement">
          <h2>Business-minded.<br /><span>Systems-focused.</span><br />Built for impact.</h2>
        </Reveal>
        <Reveal className="about-body" delay={0.1}>
          <p className="large-copy">I’m Himanshu — a Business Analytics & Finance student who likes working where <em>technology meets real operational problems.</em></p>
          <p>I build practical tools: automation workflows that reduce repetitive work, ERP modules that make operations more traceable, and analytics that turn raw data into clearer decisions.</p>
          <div className="about-links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">More about me <ArrowUpRight size={15} /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">Explore GitHub <Github size={15} /></a>
          </div>
        </Reveal>
      </div>
      <div className="metrics-grid">
        <Reveal className="metric-card"><span className="metric-index">01 / WORKFLOWS</span><strong>20<span>+</span></strong><p>Reusable automation workflows reported</p></Reveal>
        <Reveal className="metric-card" delay={0.08}><span className="metric-index">02 / PROCESS</span><strong>15<span>m</span> <i>→</i> <b>&lt;1m</b></strong><p>Reported quotation turnaround improvement</p></Reveal>
        <Reveal className="metric-card" delay={0.16}><span className="metric-index">03 / RECOGNITION</span><strong>06</strong><p>Selected awards and competition highlights</p></Reveal>
      </div>
      <p className="metrics-note">Impact figures are based on my reported project experience. Details can vary by workflow and operating context.</p>
    </section>
  );
}

function ProjectArtwork({ type }) {
  if (type === "insurance") return (
    <div className="artwork artwork-insurance">
      <div className="mock-window-bar"><span /><span /><span /><small>FLOW / AUTOMATION</small></div>
      <div className="flow-map">
        <div className="flow-node node-input"><Database size={15} /><b>Customer data</b><small>INPUT</small></div>
        <div className="flow-connector"><i /></div>
        <div className="flow-node node-process"><Cpu size={17} /><b>Workflow engine</b><small>PROCESS</small></div>
        <div className="flow-connector"><i /></div>
        <div className="flow-node node-output"><Check size={16} /><b>Quotation ready</b><small>OUTPUT</small></div>
      </div>
      <div className="artwork-status"><span className="status-dot" /> HUMAN APPROVAL SUPPORTED <span>FLOW 001</span></div>
    </div>
  );
  if (type === "inventory") return (
    <div className="artwork artwork-dashboard">
      <div className="dash-top"><span>INVENTORY / OVERVIEW</span><span className="dash-pill">DEMO DATA</span></div>
      <div className="dash-metrics"><div><small>STOCK MOVEMENTS</small><strong>1,284</strong><span>+12.8% <i>vs previous period</i></span></div><div><small>TRACEABILITY</small><strong>98.4%</strong><span>Movement records</span></div></div>
      <div className="chart-area"><div className="chart-lines"><i /><i /><i /><i /></div><svg viewBox="0 0 400 115" preserveAspectRatio="none"><path d="M0,94 C28,88 33,55 66,69 S112,90 142,47 S190,64 220,42 S260,70 292,28 S345,50 400,13" fill="none" stroke="currentColor" strokeWidth="2.4"/><path d="M0,94 C28,88 33,55 66,69 S112,90 142,47 S190,64 220,42 S260,70 292,28 S345,50 400,13 L400,115 L0,115Z" fill="currentColor" opacity=".08"/></svg></div>
      <div className="dash-bottom"><span>WAREHOUSE A</span><span>WAREHOUSE B</span><span>SITE STORES</span><span>SYNCED JUST NOW</span></div>
    </div>
  );
  if (type === "meal") return (
    <div className="artwork artwork-meal">
      <div className="meal-header"><div><small>DAILY OPERATIONS</small><strong>Meal service overview</strong></div><span className="meal-date">TODAY ↗</span></div>
      <div className="meal-stats"><div><span>ACTIVE SUBSCRIPTIONS</span><strong>124</strong><i>Illustrative data</i></div><div><span>DELIVERIES TODAY</span><strong>86</strong><i>Illustrative data</i></div></div>
      <div className="meal-deliveries"><div><span className="meal-icon"><Check size={13}/></span><span>Lunch delivery</span><b>52 orders</b><em>READY</em></div><div><span className="meal-icon"><Play size={12}/></span><span>Dinner delivery</span><b>34 orders</b><em className="pending">SCHEDULED</em></div></div>
    </div>
  );
  if (type === "cursor") return (
    <div className="artwork artwork-cursor">
      <div className="cursor-orb"><div className="hand-sim">✳</div><span className="cursor-pointer"><MousePointer2 size={28} /></span></div>
      <div className="cursor-label label-one">HAND LANDMARKS <b>21 TRACKED</b></div>
      <div className="cursor-label label-two">GESTURE INPUT <b>ACTIVE</b></div>
      <div className="cursor-caption">REAL-TIME COMPUTER VISION</div>
    </div>
  );
  if (type === "analytics") return (
    <div className="artwork artwork-analytics">
      <div className="analytics-heading"><span>JOB MARKET SIGNALS</span><BarChart3 size={16}/></div>
      <div className="analytics-number">Skills in demand <span>EXAMPLE VIEW</span></div>
      {["Python", "SQL", "Power BI", "Excel"].map((s, i) => <div className="skill-bar" key={s}><span>{s}</span><div><i style={{ width: `${[88, 74, 65, 52][i]}%` }} /></div><b>{["88", "74", "65", "52"][i]}</b></div>)}
      <small className="analytics-disclaimer">Illustrative visualization, not actual dataset values</small>
    </div>
  );
  return (
    <div className="artwork artwork-docs">
      <div className="docs-cross"><Asterisk size={70} strokeWidth={1} /></div>
      <div className="docs-panel"><span>HACKATHON / 24H</span><strong>Doc’s Eye</strong><p>Scan · Converse · Track</p><div className="docs-tags"><i>PROTOTYPE</i><i>HEALTH TECH</i></div></div>
      <div className="docs-stamp">NAVONMESH<br />2026</div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <Reveal className={`project-card ${project.featured ? "project-featured" : ""}`} delay={index % 2 ? 0.08 : 0}>
      <button className="project-visual-button" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}>
        <ProjectArtwork type={project.visual} />
        <span className="visual-open"><ArrowUpRight size={18} /></span>
      </button>
      <div className="project-meta"><span>{project.category}</span><span>({project.id})</span></div>
      <button className="project-title-button" onClick={() => onOpen(project)}><h3>{project.title}</h3><ArrowUpRight size={19} /></button>
      <p className="project-summary">{project.summary}</p>
      <div className="project-impact"><span className="impact-mark"><Asterisk size={15}/></span>{project.impact}</div>
      <div className="stack-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
    </Reveal>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", "AI AUTOMATION", "ERP ENGINEERING", "DATA ANALYTICS", "COMPUTER VISION", "PRODUCT / POS", "HACKATHON PROTOTYPE"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  useEffect(() => {
    if (!selected) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = old; window.removeEventListener("keydown", close); };
  }, [selected]);
  return (
    <section className="section-wrap projects-section" id="work">
      <SectionLabel number="02">SELECTED WORK</SectionLabel>
      <div className="section-heading-row">
        <Reveal><h2>Proof of <span>work.</span></h2></Reveal>
        <Reveal delay={0.1}><p>Projects at the intersection of business problems, thoughtful engineering, and practical outcomes.</p></Reveal>
      </div>
      <div className="filter-row" role="group" aria-label="Filter projects">
        {categories.map(c => <button key={c} className={filter === c ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(c)}>{c === "All" ? "ALL PROJECTS" : c}</button>)}
      </div>
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => <motion.div key={project.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.28 }}><ProjectCard project={project} index={index} onOpen={setSelected} /></motion.div>)}
        </AnimatePresence>
      </motion.div>
      <div className="project-bottom-note"><span><Asterisk size={17} /> MORE IN PROGRESS</span><a href={GITHUB} target="_blank" rel="noreferrer">Explore repositories <ArrowUpRight size={15} /></a></div>
      <AnimatePresence>
        {selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.25 }}>
            <div className="modal-top"><span>{selected.category} / CASE STUDY</span><button className="modal-close-button" onClick={() => setSelected(null)} aria-label="Close case study"><X size={20} /></button></div>
            <div className="modal-art"><ProjectArtwork type={selected.visual} /></div>
            <div className="modal-content">
              <span className="modal-impact">{selected.impact}</span>
              <h2 id="modal-title">{selected.title}</h2>
              <p>{selected.summary}</p>
              <h4>WHAT I WORKED ON</h4>
              <ul>{selected.details.map(d => <li key={d}>{d}</li>)}</ul>
              {selected.note && <p className="modal-note">{selected.note}</p>}
              <div className="stack-list">{selected.stack.map(s => <span key={s}>{s}</span>)}</div>
              <a className="button button-primary modal-contact" href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Question about ${selected.title}`)}`}>Ask me about this project <ArrowUpRight size={15} /></a>
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}

function CapabilityCard({ icon: Icon, number, title, body, tags }) {
  return <Reveal className="capability-card"><div className="capability-top"><span>{number}</span><Icon size={20} strokeWidth={1.4} /></div><h3>{title}</h3><p>{body}</p><div className="capability-tags">{tags.map(t => <span key={t}>{t}</span>)}</div></Reveal>;
}

function Capabilities() {
  const [group, setGroup] = useState("All");
  const groups = ["All", ...Array.from(new Set(skills.map(s => s.group)))];
  const visible = group === "All" ? skills : skills.filter(s => s.group === group);
  return (
    <section className="section-wrap capabilities-section" id="capabilities">
      <SectionLabel number="03">TOOLKIT & APPROACH</SectionLabel>
      <div className="section-heading-row">
        <Reveal><h2>Different tools.<br /><span>One objective.</span></h2></Reveal>
        <Reveal delay={0.1}><p>I choose tools around the problem: automate the repeatable, visualize the important, and make the workflow easier to understand.</p></Reveal>
      </div>
      <div className="capabilities-grid">
        <CapabilityCard icon={Cpu} number="01" title="AI & automation" body="Reusable workflows and practical automation designed to reduce manual operations." tags={["Workflow design", "AI harnesses", "Process automation"]}/>
        <CapabilityCard icon={BarChart3} number="02" title="Data & insight" body="Transforming raw data into structured analysis, dashboards, and decisions." tags={["Python", "Power BI", "Data Modeling"]}/>
        <CapabilityCard icon={Database} number="03" title="ERP & systems" body="Operational data models and traceable workflows for real business processes." tags={["ERP", "Apps Script", "Data models"]}/>
      </div>
      <div className="skills-block">
        <div className="skills-heading"><div><span className="mini-label">TOOLS I WORK WITH</span><h3>My toolkit</h3></div><div className="skill-filters">{groups.map(g => <button key={g} onClick={() => setGroup(g)} className={group === g ? "active" : ""}>{g}</button>)}</div></div>
        <motion.div layout className="skills-cloud">{visible.map((s) => <motion.span layout key={s.name} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="skill-pill">{s.name}<ArrowUpRight size={12} /></motion.span>)}</motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-wrap experience-section" id="experience">
      <SectionLabel number="04">THE JOURNEY SO FAR</SectionLabel>
      <div className="section-heading-row">
        <Reveal><h2>Experience &<br /><span>growth.</span></h2></Reveal>
        <Reveal delay={0.1}><p>Learning by building, working across business processes, software, and analytics.</p></Reveal>
      </div>
      <div className="experience-layout">
        <div className="experience-intro"><span className="experience-stamp"><BriefcaseBusiness size={19}/></span><p>Selected professional experience</p><span className="mono-muted">2025 — 2026</span></div>
        <div className="experience-list">
          {experience.map((item, i) => <Reveal key={item.company} delay={i * 0.08} className="experience-item">
            <div className="experience-marker"><span /></div>
            <div className="experience-date">{item.date}</div>
            <div className="experience-content"><h3>{item.role}</h3><div className="experience-company">{item.company}</div><div className="experience-type">{item.type}</div><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul></div>
          </Reveal>)}
        </div>
      </div>
      <div className="education-strip">
        <div className="education-icon"><Asterisk size={23}/></div><div><span className="mini-label">EDUCATION</span><h3>BMS — Business Analytics & Finance</h3><p>Jagran Lakecity University · Aug 2024 — Jul 2027</p></div><span className="education-status">IN PROGRESS</span>
      </div>
    </section>
  );
}

function Recognition() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  return (
    <section className="section-wrap recognition-section" id="recognition">
      <SectionLabel number="05">RECOGNITION & LEARNING</SectionLabel>
      <div className="section-heading-row">
        <Reveal><h2>Earned, not<br /><span>just claimed.</span></h2></Reveal>
        <Reveal delay={0.1}><p>Competitions, recognition, and structured learning that have shaped how I approach problems.</p></Reveal>
      </div>
      <div className="recognition-grid">
        <div className="awards-list">{awards.map((a, i) => <Reveal key={a.title} delay={i * 0.035} className="award-row"><span className="award-year">{a.year}</span><div><h3>{a.title}</h3><p>{a.detail}</p></div><ArrowUpRight size={15}/></Reveal>)}</div>
        <div className="certifications-card"><div className="certifications-heading"><span className="mini-label">CONTINUOUS LEARNING</span><h3>Selected certifications</h3><p>Professional simulations and technical foundations.</p></div><ul>{(showAllCerts ? certifications : certifications.slice(0, 6)).map(c => <li key={c}><Check size={13}/>{c}</li>)}</ul><button className="text-button" onClick={() => setShowAllCerts(!showAllCerts)}>{showAllCerts ? "Show fewer" : "View all certifications"} <ArrowDownRight size={15}/></button></div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const handleEmailClick = () => {
    try {
      navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />
      <div className="section-wrap contact-inner">
        <SectionLabel number="06">YOUR MOVE</SectionLabel>
        <Reveal><p className="contact-kicker">HAVE A GOOD PROBLEM?</p><h2>Let’s build<br /><span>something useful.</span></h2></Reveal>
        <div className="contact-bottom">
          <p>I’m interested in thoughtful teams, meaningful projects, and opportunities to turn messy workflows into better systems.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`} onClick={handleEmailClick}>
              {copied ? <Check size={16}/> : <Mail size={16}/>} {copied ? "Email copied & opening..." : EMAIL}
            </a>
            <a className="button button-quiet" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer section-wrap"><a href="#home" className="footer-brand"><span className="brand-mark">HP</span><span>HIMANSHU PAL<span className="brand-dot">.</span></span></a><span className="footer-credit">DESIGNED TO THINK IN SYSTEMS.</span><div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></div><span className="footer-copy">© {new Date().getFullYear()} HIMANSHU PAL</span></footer>;
}

function ScrollEffects() {
  const root = useRef(null);
  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const mm = gsap.matchMedia();

    // Desktop & Laptop (width > 880px): subtle parallax
    mm.add("(min-width: 881px)", () => {
      gsap.utils.toArray(".hero-art").forEach((el) => {
        gsap.to(el, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.7
          }
        });
      });

      gsap.utils.toArray(".ticker-track").forEach((el) => {
        gsap.to(el, {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".ticker",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      gsap.utils.toArray(".contact-grid").forEach((el) => {
        gsap.to(el, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    });

    // Mobile & Tablet (width <= 880px): gentler movement to prevent scroll jitter
    mm.add("(max-width: 880px)", () => {
      gsap.utils.toArray(".ticker-track").forEach((el) => {
        gsap.to(el, {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".ticker",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        });
      });
    });

    ScrollTrigger.refresh();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      mm.revert();
    };
  }, { scope: root });
  return <div ref={root} className="scroll-effects-anchor" aria-hidden="true" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });
  const finishLoading = () => setLoading(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      const sections = ["home", "about", "work", "capabilities", "experience", "recognition", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const touch = window.matchMedia("(pointer: coarse), (hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || touch || reduce) return;
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const leave = () => setCursor(v => ({ ...v, visible: false }));
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Preloader onDone={finishLoading} />}</AnimatePresence>
      <div className="ambient-wrap" aria-hidden="true">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
      </div>
      <Navbar active={active} progress={progress} />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <ScrollEffects />
      <div className={`custom-cursor ${cursor.visible ? "visible" : ""}`} style={{ left: cursor.x, top: cursor.y }} aria-hidden="true"><span /></div>
    </>
  );
}
