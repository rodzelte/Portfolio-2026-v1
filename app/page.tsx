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
    title: 'Ardio Studio',
    category: 'Digital agency landing page',
    description: 'A bright, editorial agency experience with a clear story, confident typography, and a generous project showcase.',
    image: '/projects/landingpages/01-ardio-studio.png', width: 1990, height: 3720, tone: 'peach', size: 'wide',
  },
  {
    title: '4Generations Private Care',
    category: 'Healthcare service website',
    description: 'A trust-first care website that makes services, proof, and next steps easy to understand for families.',
    image: '/projects/landingpages/02-4generations.png', width: 1920, height: 3359, tone: 'coral', size: 'wide',
  },
  {
    title: 'CoinFusion',
    category: 'Crypto trading platform',
    description: 'A dark, product-led landing page that turns a complex crypto platform into a focused path from curiosity to action.',
    image: '/projects/landingpages/03-coinfusion.png', width: 1440, height: 8794, tone: 'violet', size: 'wide',
  },
  {
    title: 'Fox on John',
    category: 'Restaurant & events landing page',
    description: 'A high-energy hospitality page built around atmosphere, social proof, memorable moments, and event enquiries.',
    image: '/projects/landingpages/04-fox-on-john.png', width: 1920, height: 4466, tone: 'blue', size: 'wide',
  },
  {
    title: 'Fox on John — dark campaign',
    category: 'Restaurant campaign concept',
    description: 'A darker campaign variation that keeps the brand feeling premium while letting the venue imagery lead.',
    image: '/projects/landingpages/05-fox-on-john-dark.png', width: 1920, height: 4466, tone: 'lime', size: 'standard',
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

const proofStats = [
  { value: '62.5%', label: 'lead-to-won pipeline conversion' },
  { value: '$23.6K', label: 'collected across 94 paid invoices' },
  { value: '99.4%', label: 'email deliverability, 0 spam complaints' },
  { value: '+129.6%', label: 'site visitors in 28 days' },
  { value: '40', label: 'IT students mentored in Java' },
  { value: '5', label: 'Philippine Startup Challenge awards' },
];

type ProofImage = { src: string; width: number; height: number; alt: string };

const proofs: { title: string; category: string; description: string; tone: string; images: ProofImage[] }[] = [
  {
    title: 'Casting appointment automation',
    category: 'GoHighLevel workflow',
    description: 'Multi-trigger workflow for group and one-on-one casting bookings: branches by trigger, finds the opportunity, moves it to the right pipeline stage, and tags the contact.',
    tone: 'violet',
    images: [{ src: '/proof/ghl-casting-workflow.png', width: 899, height: 841, alt: 'GoHighLevel casting appointment workflow with condition branches' }],
  },
  {
    title: 'Talent recruitment onboarding',
    category: 'GoHighLevel workflow',
    description: 'Pipeline-stage trigger with tag-based conditions that sends the welcome package and keeps the opportunity in sync.',
    tone: 'mint',
    images: [{ src: '/proof/ghl-recruitment-workflow.png', width: 495, height: 735, alt: 'GoHighLevel talent recruitment workflow' }],
  },
  {
    title: 'Proposal and invoice follow-up',
    category: 'GoHighLevel workflow',
    description: 'Email and SMS follow-up sequence with timed waits, reply detection, internal notifications, and an "invoice sent" stop condition.',
    tone: 'peach',
    images: [
      { src: '/proof/ghl-proposal-followup.png', width: 493, height: 786, alt: 'Proposal sent follow-up workflow' },
      { src: '/proof/ghl-followup-sequence.png', width: 645, height: 785, alt: 'Second and third follow-up steps with reply and timeout branches' },
      { src: '/proof/ghl-reply-timeout-branch.png', width: 699, height: 766, alt: 'Final follow-up that moves the opportunity back to the previous pipeline' },
    ],
  },
  {
    title: 'Event reminders',
    category: 'GoHighLevel workflow',
    description: 'Automatic email and SMS reminders two days and one day before each event, skipped for contacts who are no longer active.',
    tone: 'yellow',
    images: [
      { src: '/proof/ghl-event-reminders.png', width: 442, height: 847, alt: 'Event reminder workflow two days before' },
      { src: '/proof/ghl-reminder-condition.png', width: 453, height: 697, alt: 'Event reminder workflow one day before' },
    ],
  },
  {
    title: 'Pipeline and funnel reporting',
    category: 'GoHighLevel CRM',
    description: '62.5% lead-to-won conversion on the agency funnel ($12.48K won) and 38.46% conversion on the talent recruitment pipeline.',
    tone: 'blue',
    images: [
      { src: '/proof/ghl-funnel.png', width: 1657, height: 651, alt: 'Pipeline funnel with stage-by-stage conversion' },
      { src: '/proof/ghl-pipeline-dashboard.png', width: 1649, height: 438, alt: 'Opportunity status, value, and conversion rate dashboard' },
    ],
  },
  {
    title: 'Invoicing and payments',
    category: 'GoHighLevel payments',
    description: '94 paid invoices totaling $23,686.71 collected through GoHighLevel invoicing.',
    tone: 'lime',
    images: [{ src: '/proof/ghl-invoices-summary.png', width: 1338, height: 250, alt: 'Invoice summary showing 94 invoices received' }],
  },
  {
    title: 'Email campaign performance',
    category: 'GoHighLevel email',
    description: '501 emails delivered with only 3 bounces (99.4% deliverability) and zero spam complaints.',
    tone: 'coral',
    images: [
      { src: '/proof/ghl-email-engagement.png', width: 1333, height: 742, alt: 'Email engagement summary' },
      { src: '/proof/ghl-open-rate.png', width: 1315, height: 398, alt: 'Email open rate over time' },
    ],
  },
  {
    title: 'WordPress sites on Hostinger',
    category: 'WordPress + Hostinger',
    description: 'Manage three client WordPress sites on Hostinger Business; one recorded 129.6% visitor growth over 28 days.',
    tone: 'sun',
    images: [
      { src: '/proof/hostinger-wordpress-sites.png', width: 1234, height: 530, alt: 'Hostinger dashboard listing three WordPress sites' },
      { src: '/proof/site-traffic-growth.png', width: 1399, height: 676, alt: 'Site traffic growth of 129.6 percent' },
    ],
  },
  {
    title: 'Skills Clinic mentor',
    category: 'University of Mindanao, 2025 - 2026',
    description: 'Mentor at the College of Computing Education Skills Clinic, teaching Java to 40 IT students.',
    tone: 'yellow',
    images: [{ src: '/proof/skills-clinic-mentors.webp', width: 1920, height: 1080, alt: 'Skills Clinic new mentors group photo' }],
  },
  {
    title: 'Philippine Startup Challenge',
    category: 'DICT pitching competitions',
    description: 'Champion and 2nd Place (8th PSC Davao Region, 2023), 3rd Runner-Up (5th PSC Finals, 2023), and 2nd and 3rd Place (7th PSC Region XI, 2022).',
    tone: 'peach',
    images: [
      { src: '/proof/psc-2023-awards.webp', width: 900, height: 2000, alt: '8th Philippine Startup Challenge champion and 2nd place trophies' },
      { src: '/proof/psc-awards-2022-2023.webp', width: 2000, height: 900, alt: 'Philippine Startup Challenge 3rd runner-up, 2nd place and 3rd place trophies' },
    ],
  },
];

type Proof = (typeof proofs)[number];

function ProofCard({ proof, index }: { proof: Proof; index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [cover] = proof.images;
  const isWide = cover.width / cover.height > 1.3;

  return (
    <article className="proof-card">
      <button
        type="button"
        className={`proof-button tone-${proof.tone}`}
        aria-label={`View proof: ${proof.title}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <span className={`proof-image-wrap${isWide ? ' is-wide' : ''}`}>
          <Image src={cover.src} alt={cover.alt} fill style={{ objectFit: isWide ? 'contain' : 'cover' }} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          <span className="view-project">View proof <ArrowUpRight size={16} /></span>
        </span>
        <span className="proof-info">
          <small>{proof.category}</small>
          <strong>{proof.title}</strong>
          <span>{proof.description}</span>
        </span>
      </button>

      <dialog ref={dialogRef} className="project-dialog" aria-labelledby={`proof-title-${index}`}>
        <div className="dialog-inner">
          <button className="dialog-close" type="button" aria-label="Close proof" onClick={() => dialogRef.current?.close()}><X size={20} /></button>
          <header className="dialog-head">
            <div><h2 id={`proof-title-${index}`}>{proof.title}</h2><p>{proof.category} — {proof.description}</p></div>
          </header>
          {proof.images.map((image) => (
            <div className="full-project-image" key={image.src}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 1100px) 94vw, 1050px" />
            </div>
          ))}
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
          <a href="#work">Work</a><a href="#proof">Proof</a><a href="#about">About</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Available for VA &amp; automation roles</div>
        <h1>I build websites<span>&amp; automations that work.</span></h1>
        <div className="hero-bottom">
          <p>Virtual Assistant and full-stack developer specializing in GoHighLevel automation, WordPress, and custom web apps, from CRM workflows and pipelines to Discord bots and dashboards.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={28} /></a>
        </div>
        <div className="hero-meta" aria-label="Experience overview">
          <span>Based in Davao City, Philippines</span><span>GoHighLevel · WordPress · Full-stack</span><span>BSIT, University of Mindanao</span>
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

      <section className="proof-section" id="proof">
        <div className="section-heading">
          <span>02 / Proof of work</span>
          <h2>Real systems.<br />Real numbers.</h2>
        </div>
        <div className="proof-stats" aria-label="Results at a glance">
          {proofStats.map(({ value, label }) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
        <p className="gallery-intro"><ScanLine size={18} /> Select any card to see the full screenshots.</p>
        <div className="proof-grid">
          {proofs.map((proof, index) => (
            <ProofCard key={proof.title} proof={proof} index={index} />
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-top">
          <span>03 / What I do</span>
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
        <div className="about-label">04 / About</div>
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
        <div className="section-heading process-heading"><span>05 / Approach</span><h2>Clear thinking.<br />Clean execution.</h2></div>
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
        <div className="contact-actions">
          <a className="contact-link" href="#work">Explore the work <ArrowRight size={20} /></a>
          <a className="contact-link contact-link-secondary" href="https://github.com/rodzelte" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={20} /></a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">RJT</span><span>Rodzel John Te</span></a>
        <span>WordPress · Shopify · Wix</span><span>Designer + Developer</span><span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
