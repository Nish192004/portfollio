import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Database, ExternalLink,
  Github, Layers3, Linkedin, Mail, Menu, Sparkles, X, MapPin, Cpu,
} from "lucide-react";
import "./styles.css";

/* ================= YOUR LINKS (edit here) ================= */

const GITHUB_URL = "https://github.com/Nish192004";
const LINKEDIN_URL = "https://www.linkedin.com/"; // TODO: put your LinkedIn profile URL
const EMAIL = "rajshekhar192004@gmail.com";

/* ================= TECH LOGOS (skillicons.dev names) ================= */
// Technologies not listed here (JWT, bcrypt, REST APIs, SQL, OpenAI API, React Router)
// simply show a small dot instead of a logo.

const techIcons = {
  "HTML5": "html",
  "CSS3": "css",
  "JavaScript": "js",
  "React.js": "react",
  "Redux": "redux",
  "Tailwind CSS": "tailwind",
  "Vite": "vite",
  "Node.js": "nodejs",
  "Express.js": "express",
  "Prisma ORM": "prisma",
  "Prisma": "prisma",
  "PHP": "php",
  "Python": "py",
  "PostgreSQL": "postgres",
  "MongoDB": "mongodb",
  "MySQL": "mysql",
  "Sequelize": "sequelize",
  "Git": "git",
  "GitHub": "github",
  "Postman": "postman",
  "Jest": "jest",
  "AWS Basics": "aws",
};

function TechPill({ name }) {
  const icon = techIcons[name];
  return (
    <span className="tech-pill">
      {icon ? (
        <img
          src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
          alt=""
          width="22"
          height="22"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <i className="pill-dot" aria-hidden="true" />
      )}
      {name}
    </span>
  );
}

/* ================= DATA ================= */

const skills = [
  { id: "frontend", number: "01", title: "Frontend Development", icon: Code2,
    summary: "Building responsive, accessible interfaces and interactive web applications.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router", "Redux", "Tailwind CSS", "Vite"],
    capabilities: ["Reusable React components, props, and composition", "State management using React Hooks and Context", "Client-side routing and navigation", "Responsive layouts and interactive user interfaces"],
    deliverable: "Responsive websites with reusable components, clear navigation, and polished user interfaces." },
  { id: "backend", number: "02", title: "Backend Development", icon: Layers3,
    summary: "Developing server-side logic, REST APIs, authentication, and application workflows.",
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt", "Prisma ORM", "PHP", "Python"],
    capabilities: ["API routes, controllers, and service layers", "Authentication and protected routes", "Request validation and error handling", "Connecting backend services to databases"],
    deliverable: "Structured backend services that connect frontend applications to data and business logic." },
  { id: "database", number: "03", title: "Databases & ORM", icon: Database,
    summary: "Designing data structures and connecting applications to relational and document databases.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Prisma", "Sequelize"],
    capabilities: ["Database schema and model design", "CRUD operations and data queries", "Relationships between application entities", "ORM-based database access and migrations"],
    deliverable: "Organized data models and reliable database integration for full-stack applications." },
  { id: "ai-tools", number: "04", title: "AI, Tools & Workflow", icon: Sparkles,
    summary: "Using development tools and AI integrations to build, test, and improve applications.",
    technologies: ["Python", "OpenAI API", "Git", "GitHub", "Postman", "Jest", "AWS Basics", "Vite"],
    capabilities: ["API testing and debugging with Postman", "Version control and GitHub workflows", "Integrating AI APIs into applications", "Testing application logic and debugging issues"],
    deliverable: "Maintainable development workflows with API integrations, source control, and testing." },
];

// Add each project's repo link in `github` (and a deployed link in `live`) to show the buttons.
const projects = [
  { number: "01", type: "FULL-STACK WEB APPLICATION", title: "Prescripto — Doctor Appointment System",
    description: "A doctor appointment platform built to streamline appointment booking and management. Includes authentication, doctor and patient workflows, and Razorpay payment integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Tailwind CSS"], github: "", live: "" },
  { number: "02", type: "AI-POWERED APPLICATION", title: "Multi-Agent Research System",
    description: "An AI research project built around multiple cooperating agents and a structured research workflow. Explore the repository for implementation details.",
    technologies: ["AI", "Python", "LLM Integration", "GitHub"], github: GITHUB_URL, live: "" },
  { number: "03", type: "FULL-STACK MANAGEMENT SYSTEM", title: "Inventory Management System",
    description: "Inventory app covering products, stock, sales, purchases, suppliers, customers, and reporting, with a React frontend and a Node.js backend on PostgreSQL.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"], github: "", live: "" },
];

const navigation = [
  { label: "About", href: "#about" }, { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" },
];

const roles = ["Full-Stack Developer", "AI Integrator", "API Architect", "Problem Solver"];

/* ================= NEURAL NETWORK BACKGROUND ================= */

function NeuralBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    const mouse = { x: -999, y: -999 };
    let w, h, raf, pts = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
      const n = Math.min(110, Math.floor((w * h) / 17000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p, i) => {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 140) {
            ctx.strokeStyle = `rgba(34,229,255,${0.16 * (1 - d / 140)})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        const m = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (m < 180) {
          ctx.strokeStyle = `rgba(139,92,246,${0.5 * (1 - m / 180)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = "rgba(34,229,255,.75)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, 6.28); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);
  return <canvas ref={ref} className="neural-canvas" aria-hidden="true" />;
}

/* ================= ROBOT (inline SVG, eyes track cursor) ================= */

function Robot() {
  const ref = useRef(null);
  const [eye, setEye] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => {
      const r = ref.current.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.max(1, Math.hypot(dx, dy));
      setEye({ x: (dx / d) * 6, y: (dy / d) * 5 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <svg ref={ref} className="robot" viewBox="0 0 400 460" role="img" aria-label="Animated AI robot head">
      <defs>
        <linearGradient id="rb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2540" /><stop offset="1" stopColor="#0a0f20" />
        </linearGradient>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22e5ff" /><stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="eg"><stop offset="0" stopColor="#fff" /><stop offset=".35" stopColor="#22e5ff" /><stop offset="1" stopColor="#0a3a55" /></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="robot-float">
        {/* antenna */}
        <line x1="200" y1="40" x2="200" y2="85" stroke="url(#rg)" strokeWidth="5" />
        <circle className="antenna" cx="200" cy="32" r="10" fill="#22e5ff" filter="url(#glow)" />
        {/* ears */}
        <rect x="52" y="190" width="28" height="86" rx="12" fill="url(#rb)" stroke="url(#rg)" strokeWidth="2" />
        <rect x="320" y="190" width="28" height="86" rx="12" fill="url(#rb)" stroke="url(#rg)" strokeWidth="2" />
        {/* head */}
        <rect x="76" y="85" width="248" height="230" rx="52" fill="url(#rb)" stroke="url(#rg)" strokeWidth="3" />
        <path d="M110 112 H290" stroke="#22e5ff" strokeOpacity=".25" strokeWidth="2" />
        {/* visor */}
        <rect x="106" y="150" width="188" height="92" rx="40" fill="#050810" stroke="#22e5ff" strokeOpacity=".5" strokeWidth="2" />
        <g transform={`translate(${eye.x} ${eye.y})`} filter="url(#glow)">
          <circle cx="158" cy="196" r="22" fill="url(#eg)" />
          <circle cx="242" cy="196" r="22" fill="url(#eg)" />
          <circle className="blink" cx="158" cy="196" r="22" fill="#050810" />
          <circle className="blink" cx="242" cy="196" r="22" fill="#050810" />
        </g>
        {/* mouth equalizer */}
        <g fill="#22e5ff" filter="url(#glow)">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} className="eq" style={{ animationDelay: `${i * 0.12}s` }}
              x={146 + i * 16} y="266" width="8" height="22" rx="4" />
          ))}
        </g>
        {/* neck + shoulders */}
        <rect x="170" y="315" width="60" height="30" fill="url(#rb)" stroke="url(#rg)" strokeWidth="2" />
        <path d="M70 450 Q70 355 200 345 Q330 355 330 450 Z" fill="url(#rb)" stroke="url(#rg)" strokeWidth="3" />
        <circle cx="200" cy="395" r="16" fill="none" stroke="#8b5cf6" strokeWidth="3" filter="url(#glow)" />
        <circle className="antenna" cx="200" cy="395" r="6" fill="#8b5cf6" />
      </g>
    </svg>
  );
}

/* ================= TYPEWRITER ================= */

function useTyper(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, j = 0, del = false, t;
    const tick = () => {
      const word = words[i];
      j += del ? -1 : 1;
      setText(word.slice(0, j));
      let delay = del ? 35 : 80;
      if (!del && j === word.length) { del = true; delay = 1400; }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; delay = 300; }
      t = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
  return text;
}

/* ================= APP ================= */

export default function App() {
  const [activeSkill, setActiveSkill] = useState("frontend");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const role = useTyper(roles);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      setProgress((d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className="site-shell" id="top">
      <NeuralBackground />
      <div className="grid-floor" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="progress" style={{ width: `${progress}%` }} />

      <header className="topbar">
        <a href="#top" className="brand" aria-label="Go to homepage" onClick={closeMenu}>
          <span className="brand-mark"><Cpu size={16} /></span>
          <span className="brand-name">RAJSHEKHAR OJHA</span>
        </a>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map((n) => (<a href={n.href} key={n.href} onClick={closeMenu}>{n.label}</a>))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let's Talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" />Open to opportunities</div>
            <p className="eyebrow">SYSTEM ONLINE // PORTFOLIO v2.0</p>
            <h1>
              Engineering
              <br />the future,
              <br /><span className="gradient-text">one build at a time.</span>
            </h1>
            <p className="typer">&gt; {role}<span className="caret" /></p>
            <p className="hero-description">
              Hi, I'm <strong>Rajshekhar Ojha</strong>. I build modern web applications,
              scalable backend APIs, and practical AI-powered products.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={16} /></a>
              <a href="#contact" className="button button-ghost">Get in touch <ArrowUpRight size={15} /></a>
            </div>
            <div className="social-row">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={15} /> GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={15} /> LinkedIn</a>
              <span className="social-divider" />
              <span className="location-note"><MapPin size={13} /> India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="robot-halo" />
            <Robot />
            <div className="hud hud-top"><span className="pulse-dot" /> AI CORE: ACTIVE</div>
            <div className="hud hud-bottom"><small>stack</small> React · Node · PostgreSQL</div>
            <div className="hud hud-side"><small>latency</small> 12ms</div>
          </div>

          <a href="#about" className="scroll-cue"><span />Scroll<ArrowDown size={13} /></a>
        </section>

        {/* ABOUT */}
        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">// 01 ABOUT</p>
            <h2>Developer by craft.<br /><span className="muted-heading">Problem solver.</span></h2>
          </div>
          <div className="about-content">
            <p className="large-copy">I turn complex problems into simple, useful digital experiences.</p>
            <p className="body-copy">
              My focus is full-stack web development, from intuitive React interfaces to backend
              APIs and database integration. I enjoy learning new technologies, debugging hard
              problems, and raising the quality of what I ship.
            </p>
            <p className="body-copy">
              Through hands-on projects I keep growing in application architecture,
              authentication, data management, and clean code practices.
            </p>
            <div className="stat-row">
              <div><strong>UI</strong><span>Frontend</span></div>
              <div><strong>API</strong><span>Backend</span></div>
              <div><strong>DB</strong><span>Data design</span></div>
              <div><strong>AI</strong><span>LLM integration</span></div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section section-wrap">
          <div className="horizontal-heading">
            <div className="section-heading">
              <p className="eyebrow">// 02 TOOLKIT</p>
              <h2>My technical<br /><span className="muted-heading">toolkit.</span></h2>
            </div>
            <p className="heading-aside">
              The technologies I use to build full-stack applications, APIs, and data-driven
              solutions. Select a module to inspect it.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon, isActive = activeSkill === skill.id;
                return (
                  <button key={skill.id} type="button" onMouseMove={spot}
                    className={`skill-card ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveSkill(isActive ? null : skill.id)}
                    aria-expanded={isActive} aria-controls={`skill-details-${skill.id}`}>
                    <div className="skill-card-top">
                      <span className="skill-icon"><Icon size={21} strokeWidth={1.7} /></span>
                      <span className="card-number">MOD_{skill.number}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <p className="skill-summary">{skill.summary}</p>
                    <span className="skill-card-action">
                      {isActive ? "Hide details" : "Inspect module"}
                      <span aria-hidden="true">{isActive ? "−" : "↗"}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {skills.map((skill) => {
              if (activeSkill !== skill.id) return null;
              const Icon = skill.icon;
              return (
                <div key={skill.id} id={`skill-details-${skill.id}`} className="skill-detail-panel">
                  <div className="skill-detail-header">
                    <div className="skill-detail-title">
                      <span className="skill-icon"><Icon size={23} strokeWidth={1.7} /></span>
                      <div><p className="eyebrow">MODULE_{skill.number}</p><h3>{skill.title}</h3></div>
                    </div>
                    <span className="skill-status"><span className="pulse-dot" />Loaded</span>
                  </div>
                  <p className="skill-detail-description">{skill.summary}</p>
                  <div className="skill-detail-columns">
                    <div>
                      <p className="detail-label">Technologies & tools</p>
                      <div className="skill-tags">
                        {skill.technologies.map((t) => (<TechPill key={t} name={t} />))}
                      </div>
                    </div>
                    <div>
                      <p className="detail-label">Practical knowledge</p>
                      <ul className="capability-list">
                        {skill.capabilities.map((c) => (<li key={c}><span className="capability-check">↗</span>{c}</li>))}
                      </ul>
                    </div>
                  </div>
                  <div className="skill-deliverable">
                    <span className="deliverable-mark">+</span>
                    <div><p className="detail-label">What I can build</p><p>{skill.deliverable}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section section-wrap">
          <div className="horizontal-heading">
            <div className="section-heading">
              <p className="eyebrow">// 03 PROJECTS</p>
              <h2>Things I've<br /><span className="muted-heading">been building.</span></h2>
            </div>
            <p className="heading-aside">
              Projects that show my interest in full-stack development, practical problem-solving,
              and AI-powered applications.
            </p>
          </div>

          <div className="project-list">
            {projects.map((p) => (
              <article className="project-card" key={p.number} onMouseMove={spot}>
                <span className="project-number">{p.number}</span>
                <div className="project-main">
                  <p className="project-type">{p.type}</p>
                  <h3>{p.title}</h3>
                  <p className="project-description">{p.description}</p>
                  <div className="tag-row">{p.technologies.map((t) => (<span key={t}>{t}</span>))}</div>
                  {(p.github || p.live) && (
                    <div className="project-actions">
                      {p.github && (<a href={p.github} target="_blank" rel="noreferrer" className="project-action-link"><Github size={14} />Source code<ArrowUpRight size={13} /></a>)}
                      {p.live && (<a href={p.live} target="_blank" rel="noreferrer" className="project-action-link"><ExternalLink size={14} />Live demo<ArrowUpRight size={13} /></a>)}
                    </div>
                  )}
                </div>
                <a href={p.github || "#contact"} target={p.github ? "_blank" : undefined}
                  rel={p.github ? "noreferrer" : undefined} className="project-link" aria-label={`View ${p.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-inner section-wrap">
            <p className="eyebrow">// 04 CONTACT</p>
            <h2>Let's build<br /><span className="gradient-text">something great.</span></h2>
            <p className="contact-copy">
              I'm interested in software development roles, collaborative projects, and solving
              meaningful problems with technology.
            </p>
            <a href={`mailto:${EMAIL}`} className="button button-primary contact-button">
              <Mail size={16} />Get in touch<ArrowUpRight size={15} />
            </a>
            <p className="contact-email">{EMAIL}</p>
            <div className="contact-socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href={`mailto:${EMAIL}`}><Mail size={15} /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#top" className="brand"><span className="brand-mark"><Cpu size={16} /></span><span className="brand-name">RAJSHEKHAR OJHA</span></a>
        <p>Designed & built with care.<span>© {new Date().getFullYear()}</span></p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}