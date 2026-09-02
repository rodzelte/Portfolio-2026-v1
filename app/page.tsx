'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useRef } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  ScanLine,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';

const projects = [
  {
    title: 'CoinFusion',
    category: 'Web3 product experience',
    description: 'A bold product story that makes a technical Bitcoin ecosystem feel direct, credible, and easy to explore.',
    image: '/projects/coinfusion.jpg', width: 1920, height: 7194, tone: 'violet', size: 'wide',
  },
  {
    title: 'VerbalizeIt',
    category: 'Language learning platform',
    description: 'A friendly, focused landing page that turns an education app into a simple and motivating learning journey.',
    image: '/projects/verbalizeit.jpg', width: 1920, height: 5528, tone: 'yellow', size: 'standard',
  },
  {
    title: 'Krate Motion',
    category: 'Creative studio showcase',
    description: 'An immersive dark portfolio where motion, high-contrast imagery, and structured typography do the talking.',
    image: '/projects/krate-motion.png', width: 1440, height: 6168, tone: 'blue', size: 'standard',
  },
  {
    title: 'Elementum',
    category: 'Strategy studio website',
    description: 'A people-first studio experience with expressive typography, generous space, and an editorial rhythm.',
    image: '/projects/elementum.jpg', width: 1920, height: 6665, tone: 'mint', size: 'wide',
  },
  {
    title: 'Ardio Revenue',
    category: 'Digital agency landing page',
    description: 'A conversion-minded agency presence that balances quiet confidence with energetic visual details.',
    image: '/projects/ardio-studio.png', width: 1990, height: 3720, tone: 'peach', size: 'standard',
  },
  {
    title: 'Teamollo',
    category: 'Design company portfolio',
    description: 'A long-form studio narrative that brings services, selected work, and social proof into one cohesive flow.',
    image: '/projects/teamollo.jpg', width: 1920, height: 13290, tone: 'lime', size: 'standard',
  },
  {
    title: 'Spring Creative',
    category: 'Creative services website',
    description: 'A bright modular service page built around clear hierarchy, approachable visuals, and direct calls to action.',
    image: '/projects/spring-creative.png', width: 1920, height: 6407, tone: 'sun', size: 'wide',
  },
  {
    title: 'Spring Studio',
    category: 'Design agency refresh',
    description: 'A colorful agency concept that combines playful imagery with a confident, conversion-led structure.',
    image: '/projects/spring-studio.png', width: 1920, height: 6518, tone: 'coral', size: 'standard',
  },
] as const;

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <article className={`project-card ${project.size}`}>
      <button
        type="button"
        className={`project-button tone-${project.tone}`}
        aria-label={`View the full ${project.title} project`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <span className="project-image-wrap">
          <Image src={project.image} alt={`${project.title} website design`} fill sizes={project.size === 'wide' ? '(max-width: 800px) 100vw, 64vw' : '(max-width: 800px) 100vw, 42vw'} />
          <span className="scan-line" aria-hidden="true" />
          <span className="view-project">View full project <ArrowUpRight size={16} /></span>
        </span>
        <span className="project-info">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <span><strong>{project.title}</strong><small>{project.category}</small></span>
          <ArrowUpRight className="project-arrow" size={25} />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby={`project-title-${index}`}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
      >
        <div className="dialog-inner">
          <button className="dialog-close" type="button" aria-label="Close project" onClick={() => dialogRef.current?.close()}><X size={20} /></button>
          <header className="dialog-head">
            <div><h2 id={`project-title-${index}`}>{project.title}</h2><p>{project.category} — {project.description}</p></div>
            <span className="scroll-note"><ScanLine size={16} /> Scroll to explore</span>
          </header>
          <div className="full-project-image">
            <Image src={project.image} alt={`Full-page view of the ${project.title} website`} width={project.width} height={project.height} sizes="(max-width: 1100px) 94vw, 1050px" />
          </div>
        </div>
      </dialog>
    </article>
  );
}

const services = [
  { icon: LayoutTemplate, number: '01', title: 'WordPress', text: 'Flexible, easy-to-manage websites shaped around your brand and business goals.' },
  { icon: ShoppingBag, number: '02', title: 'Shopify', text: 'Clear, conversion-aware storefronts that make browsing and buying feel effortless.' },
  { icon: MonitorSmartphone, number: '03', title: 'Wix', text: 'Polished, responsive Wix experiences built for speed, clarity, and easy ownership.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rodzel John Te — home">
          <span className="brand-mark">RJT</span><span>Rodzel John Te</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Available for select projects</div>
        <h1>I design and build<span>websites that feel right.</span></h1>
        <div className="hero-bottom">
          <p>WordPress, Shopify, and Wix designer/developer creating expressive, conversion-aware digital experiences.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={28} /></a>
        </div>
        <div className="hero-meta" aria-label="Experience overview">
          <span>Based in the Philippines</span><span>1 year of experience</span><span>Design + development</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <span>01 / Selected work</span>
          <h2>Built to be seen.<br />Designed to be used.</h2>
        </div>
        <p className="gallery-intro"><ScanLine size={18} /> Select any project to scan the full page in detail.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-top">
          <span>02 / What I do</span>
          <h2>From the first frame<br />to the final click.</h2>
          <p>I combine visual design and front-end thinking to create sites that look intentional, work smoothly, and stay easy to manage.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article className="service-card" key={title}>
              <div><span>{number}</span><Icon size={24} /></div><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">03 / About</div>
        <div className="about-main">
          <p className="about-lead">One year in, still curious about every pixel.</p>
          <p className="about-copy">I&apos;m Rodzel John Te, a website designer and developer focused on turning ideas into clear, memorable digital experiences. I work across platforms and care equally about how a site looks, feels, and performs.</p>
          <div className="experience-stat"><strong>1</strong><span>year of hands-on<br />design experience</span></div>
        </div>
        <div className="skills-block">
          <div className="skills-heading"><Sparkles size={18} /><span>Toolkit & capabilities</span></div>
          <div className="skills-list">
            {['Lovable', 'VS Code', 'JavaScript', 'HTML', 'CSS', 'Figma', 'ChatGPT', 'Claude'].map((skill, index) => (
              <span key={skill} style={{ '--i': index } as CSSProperties}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading process-heading"><span>04 / Approach</span><h2>Clear thinking.<br />Clean execution.</h2></div>
        <div className="process-list">
          <div><span>01</span><strong>Understand</strong><p>Clarify the audience, goals, and the one action the website needs to make easy.</p></div>
          <div><span>02</span><strong>Shape</strong><p>Build a visual direction and structure that gives every section a reason to exist.</p></div>
          <div><span>03</span><strong>Build</strong><p>Turn the design into a responsive, polished experience across screen sizes.</p></div>
          <div><span>04</span><strong>Refine</strong><p>Check the details, strengthen the flow, and prepare the site for a confident launch.</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true"><Code2 size={42} /></div>
        <span className="contact-kicker">Have a project in mind?</span>
        <h2>Let&apos;s make something<br /><em>worth scrolling for.</em></h2>
        <p>Open to freelance projects, thoughtful redesigns, and collaborations. Reach out through the platform where you found this portfolio.</p>
        <a className="contact-link" href="#work">Explore the work <ArrowRight size={20} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">RJT</span><span>Rodzel John Te</span></a>
        <span>WordPress · Shopify · Wix</span><span>Designer + Developer</span><span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
