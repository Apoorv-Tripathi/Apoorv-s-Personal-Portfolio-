import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaBolt } from 'react-icons/fa';
import '../styles/Projects.css';

const publicUrl = process.env.PUBLIC_URL || '';

const PROJECTS = [
  {
    id: 1,
    title: 'Project D.R.I.S.H.T.I.',
    description: 'Project D.R.I.S.H.T.I. is an advanced aircraft health monitoring and predictive maintenance web application built to keep defense aviation fleets safe. The system tracks continuous sensor readings such as engine temperature, mechanical vibrations, oil pressure, and structural stress during flights. It connects this incoming data directly to an interactive 3D digital model of the aircraft, clearly highlighting stressed or overheating parts before they cause safety hazards. This empowers maintenance engineers and fleet operators to schedule preventive repairs early, avoid unexpected groundings, and maximize aircraft readiness.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', '3D Digital Twin', 'Telemetry Analytics', 'Predictive AI'],
    image: `${publicUrl}/Assets/Drishti.png`,
    github: 'https://github.com/Apoorv-Tripathi/DRISHTI.git',
    live: 'https://drishti-diagnostic-reliability-inte.vercel.app',
    category: 'fullstack',
    featured: true,
    tag: 'Defence Aviation Suite',
    metrics: 'Aviation Health AI'
  },
  {
    id: 2,
    title: 'SpendLens AI',
    description: 'SpendLens AI is an intelligent SaaS platform that helps development teams and modern companies track, audit, and optimize their spending on AI tools and cloud APIs. As organizations adopt multiple AI services like ChatGPT, Claude, Cursor, and Gemini, tracking scattered subscription costs becomes difficult. SpendLens solves this by centralizing team expenses into visual cost dashboards, identifying duplicate licenses, and running AI-driven audits to suggest practical cost reductions. The platform also generates shareable spending reports, alerts administrators to sudden usage spikes, and delivers actionable insights to keep software budgets completely under control.',
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
    description: 'INOTEC is a modern, responsive web application engineered for an industrial manufacturer specializing in digital tyre inflators, nitrogen generation machines, and heavy-duty air compressors. The platform features an interactive equipment catalog with category filtering, automated quotation routing that pre-fills user inquiries into the contact system, and full-spec Technical Data Sheet modals. It also integrates an in-browser pneumatic pressure converter supporting PSI, BAR, and kPa units, alongside a dedicated government tender compliance desk that allows procurement officers to copy verified company credentials and statutory details with a single click.',
    techStack: ['React', 'Vite', 'Modern CSS', 'Design Systems', 'Responsive UI'],
    image: `${publicUrl}/Assets/Inotec.png`,
    github: 'https://github.com/Apoorv-Tripathi/Inotec-Landing-Page.git',
    live: '#',
    category: 'frontend',
    featured: true,
    tag: 'Industrial Web App',
    metrics: 'Production Client'
  },
  {
    id: 4,
    title: 'Unified Education Platform',
    description: 'The Unified Education Platform is a comprehensive digital data portal designed to centralize and streamline records for schools, colleges, and educational departments. Fragmented databases often make it challenging for administrators to monitor academic standards and distribute student resources effectively. This system unites student profiles, faculty credentials, and institutional metrics under a unified dashboard powered by secure unique identifiers. It delivers automated analytics for academic performance, tracks educational resource distribution, and features role-based access portals so educators, students, and education officers can securely access accurate academic data anytime.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Data Analytics'],
    image: `${publicUrl}/Assets/UnifiedEduction.png`,
    github: 'https://github.com/Apoorv-Tripathi/Unified-Edu-Platform.git',
    live: 'https://unified-edu-platform-o47m.vercel.app/login',
    category: 'fullstack',
    featured: true,
    tag: 'Education Portal',
    metrics: 'Education Analytics'
  },
  {
    id: 5,
    title: 'Modern Portfolio Website',
    description: 'A modern, highly interactive personal portfolio website engineered from the ground up to showcase software engineering projects, technical skillsets, and professional milestones. Built with React and responsive design principles, the site features a sleek dark and light mode switcher, fluid typographic scaling, and accessible navigation. It includes an interactive project filtering system that sorts work by tech stack, high-resolution visual previews, and a direct contact integration powered by EmailJS. The entire interface is optimized for rapid loading and seamless usability across mobile phones, tablets, and wide desktop screens.',
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
    description: 'A full-stack financial trading simulation web application inspired by Zerodha Kite platform, designed to give users a realistic stock market trading experience without financial risk. The application features a dynamic watchlist that tracks real-time market price movements, interactive technical price charts, and an intuitive order execution modal for buying and selling shares. Users can manage a simulated investment portfolio, review historical trade logs, and analyze gains and losses in real time. Built using React and Node.js, the backend securely handles user authentication, balance updates, and trade executions.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    image: `${publicUrl}/Assets/ZerodhaClone.png`,
    github: 'https://github.com/Apoorv-Tripathi/ZerodhaClone.git',
    live: '#',
    category: 'fullstack',
    featured: true,
    tag: 'Fintech Simulation',
    metrics: 'MERN Stack'
  },
  {
    id: 7,
    title: 'Postify (Community Forum)',
    description: 'Postify is a full-stack community discussion and knowledge-sharing web application where users can ask questions, publish articles, and exchange ideas across various topics. The platform provides full content creation capabilities, allowing users to compose rich-text posts, edit existing submissions, comment on community threads, and vote on helpful responses. Built with a robust RESTful API architecture and clean database modeling, Postify ensures instant content synchronization and fast page rendering. Its responsive interface includes real-time search, topic filtering, and user profiles, creating an engaging and friendly environment for community discussions.',
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
    description: 'A pixel-perfect, responsive frontend reproduction of the popular Spotify Web Player, crafted to showcase advanced UI component architecture and interactive audio media controls. The interface includes a collapsible music navigation sidebar, a dynamic browse grid displaying curated music albums, and a sticky bottom playback controller complete with play, pause, track skipping, and volume adjustment sliders. Users can explore playlist views, search for tracks, and enjoy smooth hover micro-animations that mirror the authentic desktop streaming experience. The layout adapts seamlessly across all viewport sizes, ensuring comfortable navigation on both desktop and mobile devices.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: `${publicUrl}/Assets/Spotify.png`,
    github: 'https://github.com/Apoorv-Tripathi',
    live: '#',
    category: 'frontend',
    featured: false,
    tag: 'UI/UX Replica',
    metrics: 'Design Systems'
  },
  {
    id: 9,
    title: 'API Wonderland',
    description: 'An interactive multi-API web application designed as a central hub for exploring and consuming diverse real-time public data services. The platform connects to several external REST APIs, delivering live weather updates, global country facts, currency conversion calculations, and inspirational daily quotes within a unified dashboard. Built using asynchronous JavaScript and modern DOM manipulation, the application gracefully handles loading states, network error boundaries, and dynamic JSON response parsing. Users can search and interact with each API module individually through an intuitive card-based layout featuring instant feedback and zero page reloads.',
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
                    <a 
                      href={project.live || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="overlay-btn live-btn"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
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
                    <a 
                      href={project.live || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="proj-btn primary"
                      aria-label={`Open live project ${project.title}`}
                    >
                      <FaEye /> Live Demo
                    </a>
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