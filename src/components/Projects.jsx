import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'SpendLens AI',
    description: 'A full-stack AI Spend Audit SaaS platform that helps engineering teams analyze, optimize, and manage AI tool spending across platforms like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and AI APIs. Features AI-generated audit summaries, real-time spend analysis, public shareable reports, and a modern SaaS-style user experience.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI'],
    image: '/Assets/SpendLense.png',
    github: 'https://github.com/Apoorv-Tripathi/SpendPilot-AI.git',
    live: 'https://spend-lense-ai-phi.vercel.app',
    category: 'fullstack',
    featured: true,
    stars: 5.0
  },
  {
    id: 2,
    title: 'Unified Education Platform (SIH 2025)',
    description: 'A government-focused unified data platform developed during Smart India Hackathon 2025 for the Ministry of Education. Led end-to-end development (70% contribution) integrating student, teacher, and institutional data. Includes analytics modules for academic performance, rankings, and scheme tracking using Aadhaar, APAR ID, and AISHE codes.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    image: '/Assets/UnifiedEduction.png',
    github: 'https://github.com/Apoorv-Tripathi/Unified-Edu-Platform.git',
    live: 'https://unified-edu-platform-o47m.vercel.app/login',
    category: 'fullstack',
    featured: true,
    stars: 5.0
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A portfolio website built with React and Bootstrap to showcase my projects, skills, and achievements. Features responsive design, clean UI, smooth navigation, and optimized performance for seamless user experience.',
    techStack: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
    image: '/Assets/PersonalPortfolio.png',
    github: 'https://github.com/Apoorv-Tripathi/Apoorv-s-Personal-Portfolio-.git',
    live: 'https://apoorvs-personal-portfolio.vercel.app',
    category: 'frontend',
    featured: true,
    stars: 5.0
  },
  {
    id: 5,
    title: 'Zerodha Clone',
    description: 'A full-stack stock trading platform inspired by Zerodha, featuring portfolio tracking, order placement, and secure APIs. Built with MERN stack to simulate a real-world trading environment with responsive UI.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/Assets/ZerodhaClone.png',
    github: 'https://github.com/Apoorv-Tripathi/ZerodhaClone.git',
    live: '#',
    category: 'fullstack',
    featured: true,
    stars: 4.8
  },
  {
    id: 6,
    title: 'Postify',
    description: 'A platform similar to Quora where users can create, edit, and manage posts. Built using Node.js, Express.js, and REST APIs with a responsive frontend for smooth user interactions.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    image: '/Assets/Postify.png',
    github: 'https://github.com/Apoorv-Tripathi/PostifyProject.git',
    live: 'https://postify-project.vercel.app/posts',
    category: 'fullstack',
    featured: false,
    stars: 4.6
  },
  {
    id: 7,
    title: 'API Wonderland',
    description: 'A fun project integrating multiple APIs to display random facts, images, and jokes. Provides engaging, dynamic content with simple design, highlighting my ability to connect APIs effectively with JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: '/Assets/APIWonderland.png',
    github: 'https://github.com/Apoorv-Tripathi/APIWonderlandProject.git',
    live: 'https://api-wonderland-project.vercel.app',
    category: 'fullstack',
    featured: false,
    stars: 4.5
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'featured', label: 'Featured' },
];

const Projects = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : activeFilter === 'featured'
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">My Projects</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Here are some of my recent works showcasing my skills and creativity</p>
            </div>
          </Col>
        </Row>

        <div className="projects-filter">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
            >
              {label}
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
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="project-image-overlay">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn code-btn">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-btn live-btn">
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-stars">
                      <FaStar /> {project.stars}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.live !== '#' ? project.live : project.github} target="_blank" rel="noopener noreferrer" className="proj-btn primary">
                      <FaEye /> View Project
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn secondary">
                      <FaGithub /> Source Code
                    </a>
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
