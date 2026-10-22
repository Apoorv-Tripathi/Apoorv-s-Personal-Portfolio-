import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaBolt } from 'react-icons/fa';
import '../styles/Projects.css';

const publicUrl = process.env.PUBLIC_URL || '';

const PROJECTS = [
  {
    id: 1,
    title: 'Project D.R.I.S.H.T.I.',
    description: 'A qualified aeronautical engineering decision-support platform for the Ministry of Defence (MoD / Defence Services Staff College, SIH 2026). Unites 20Hz synced telemetry, acoustic vibration analytics, 3D combat airframe digital twins, and predictive failure physics to transform reactive grounding into proactive combat fleet readiness.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', '3D Digital Twin', 'Telemetry Bus', 'Predictive AI'],
    image: `${publicUrl}/Assets/Drishti.png`,
    github: 'https://github.com/Apoorv-Tripathi/DRISHTI.git',
    live: 'https://drishti-diagnostic-reliability-inte.vercel.app',
    category: 'fullstack',
    featured: true,
    tag: 'MoD Defence Suite',
    metrics: 'SIH 2026 PS 26249'
  },
  {
    id: 2,
    title: 'SpendLens AI',
    description: 'A full-stack AI Spend Audit SaaS platform that helps engineering teams analyze, optimize, and manage AI tool spending across platforms like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and AI APIs. Features AI-generated audit summaries, real-time spend analysis, public shareable reports, and a modern SaaS-style user experience.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI'],
    image: `${publicUrl}/Assets/SpendLense.png`,
    github: 'https://github.com/Apoorv-Tripathi/SpendPilot-AI.git',
    live: 'https://spend-lense-ai-phi.vercel.app',
    category: 'fullstack',
    featured: true,
    tag: 'Groq AI SaaS',
    metrics: 'Production SaaS'
  },
  {
    id: 3,
    title: 'INOTEC — Industrial Air Systems Platform',
    description: 'A modern, responsive web platform designed for an industrial equipment manufacturer. Features an interactive product catalog with category filtering, a real-time pneumatic pressure converter, full technical data sheets, and a government tender compliance desk with one-click detail copying.',
    techStack: ['React', 'Vite', 'Modern CSS', 'Design Systems', 'Responsive UI'],
    image: `${publicUrl}/Assets/Inotec.png`,
    github: 'https://github.com/Apoorv-Tripathi/Inotec-Landing-Page.git',
    live: '',
    category: 'frontend',
    featured: true,
    tag: 'Industrial Web App',
    metrics: 'Production Client'
  },
  {
    id: 4,
    title: 'Unified Education Platform',
    description: 'A government-focused unified data platform developed during Smart India Hackathon 2025 for the Ministry of Education. Led end-to-end development (70% contribution) integrating student, teacher, and institutional data. Includes analytics modules for academic performance, rankings, and scheme tracking using Aadhaar, APAR ID, and AISHE codes.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Data Analytics'],
    image: `${publicUrl}/Assets/UnifiedEduction.png`,
    github: 'https://github.com/Apoorv-Tripathi/Unified-Edu-Platform.git',
    live: 'https://unified-edu-platform-o47m.vercel.app/login',
    category: 'fullstack',
    featured: true,
    tag: 'SIH 2025 Finalist',
    metrics: 'National Hackathon'
  },
  {
    id: 5,
    title: 'Modern Portfolio Website',
    description: 'An interactive personal portfolio designed with custom glassmorphism, responsive dot-grid shader, dark/light themes, and fluid typography. Built to showcase projects, skills, certificates, and live contact integrations.',
    techStack: ['React.js', 'Bootstrap 5', 'Custom CSS', 'EmailJS'],
    image: `${publicUrl}/Assets/PersonalPortfolio.png`,
    github: 'https://github.com/Apoorv-Tripathi/Apoorv-s-Personal-Portfolio-.git',
    live: 'https://apoorvs-personal-portfolio.vercel.app',
    category: 'frontend',
    featured: true,
    tag: 'Interactive Web',
    metrics: 'Live Production'
  },
  {
    id: 6,
    title: 'Zerodha Clone (Trading Platform)',
    description: 'A full-stack stock trading simulation platform inspired by Zerodha, featuring interactive portfolio tracking, watchlists, order execution, and secure backend APIs. Simulates real-time market data flows in a clean trading UI.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    image: `${publicUrl}/Assets/ZerodhaClone.png`,
    github: 'https://github.com/Apoorv-Tripathi/ZerodhaClone.git',
    live: '',
    category: 'fullstack',
    featured: true,
    tag: 'Fintech Simulation',
    metrics: 'MERN Stack'
  },
  {
    id: 7,
    title: 'Postify (Community Forum)',
    description: 'A responsive full-stack discussion and query forum similar to Quora where users can publish, edit, and discover community posts with clean RESTful API state synchronization and responsive UI.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs'],
    image: `${publicUrl}/Assets/Postify.png`,
    github: 'https://github.com/Apoorv-Tripathi/PostifyProject.git',
    live: 'https://postify-project.vercel.app/posts',
    category: 'fullstack',
    featured: false,
    tag: 'Social Web App',
    metrics: 'RESTful API'
  },
  {
    id: 8,
    title: 'Spotify Web Player Clone',
    description: 'A pixel-perfect frontend replica of the Spotify web player UI featuring sidebar navigation, album card grids, media player controls, and responsive audio layout.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: `${publicUrl}/Assets/Spotify.png`,
    github: 'https://github.com/Apoorv-Tripathi',
    live: '',
    category: 'frontend',
    featured: false,
    tag: 'UI/UX Replica',
    metrics: 'Design Systems'
  },
  {
    id: 9,
    title: 'API Wonderland',
    description: 'An interactive multi-API hub consuming diverse real-time endpoints to showcase asynchronous data fetching, dynamic DOM rendering, and JSON parsing in vanilla JavaScript.',
    techStack: ['HTML5', 'CSS3', 'JavaScript (Fetch API)', 'Public APIs'],
    image: `${publicUrl}/Assets/APIWonderland.png`,
    github: 'https://github.com/Apoorv-Tripathi/APIWonderlandProject.git',
    live: 'https://api-wonderland-project.vercel.app',
    category: 'frontend',
    featured: false,
    tag: 'API Hub',
    metrics: 'Asynchronous JS'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & UI' },
];

const Projects = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : activeFilter === 'featured'
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS.filter(p => p.category === activeFilter);

  const getCount = (id) => {
    if (id === 'all') return PROJECTS.length;
    if (id === 'featured') return PROJECTS.filter(p => p.featured).length;
    return PROJECTS.filter(p => p.category === id).length;
  };

  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <span className="about-eyebrow">Portfolio Showcase</span>
              <h2 className="section-title mt-3">Featured Projects</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">
                A selection of scalable SaaS applications, hackathon prototypes, and web systems
              </p>
            </div>
          </Col>
        </Row>

        <div className="projects-filter">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
              aria-label={`Filter by ${label}`}
            >
              <span>{label}</span>
              <span className="filter-count">({getCount(id)})</span>
            </button>
          ))}
        </div>

        <Row>
          {filtered.map((project) => (
            <Col lg={6} xl={6} key={project.id} className="mb-4">
              <div className="project-card">
                {project.featured && (
                  <div className="featured-badge">
                    <FaStar /> FEATURED
                  </div>
                )}

                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="project-image-overlay">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="overlay-btn code-btn"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="overlay-btn live-btn"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <span className="project-tag-badge">
                      <FaBolt className="tag-bolt" /> {project.tag}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.live ? (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="proj-btn primary"
                        aria-label={`Open live project ${project.title}`}
                      >
                        <FaEye /> Live Demo
                      </a>
                    ) : (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="proj-btn primary"
                        aria-label={`Explore repository for ${project.title}`}
                      >
                        <FaGithub /> Repository Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="proj-btn secondary"
                        aria-label={`View GitHub source code for ${project.title}`}
                      >
                        <FaGithub /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;