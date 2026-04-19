// Projects.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar } from 'react-icons/fa';
import '../styles/Projects.css';

// <- Projects data moved outside component and cleaned (unique ids, no duplicates)
const PROJECTS = [
  {
    id: 1,
    title: 'Unified Education Platform (SIH 2025)',
    description: 'A government-focused unified data platform developed during Smart India Hackathon 2025 for the Ministry of Education. Led end-to-end development (70% contribution) integrating student, teacher, and institutional data. Includes analytics modules for academic performance, rankings, and scheme tracking using Aadhaar, APAR ID, and AISHE codes.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    image: '/Assets/UnifiedEduction.png',
    github: 'https://github.com/Apoorv-Tripathi/unified-education-frontend-part1.git',
    live: 'https://unified-education-frontend-part1.vercel.app/login',
    category: 'fullstack',
    featured: true,
    stars: 5.0

  },
  {
    id:2,
    title: 'Portfolio Website',
    description: 'A portfolio website built with React and Bootstrap to showcase my projects, skills, and achievements. Features responsive design, clean UI, smooth navigation, and optimized performance for seamless user experience.',
    techStack: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
    image: '/Assets/PersonalPortfolio.png',
    github: 'https://github.com/Apoorv-Tripathi/Apoorv-s-Personal-Portfolio-.git',
    live: '#',
    category: 'frontend',
    featured: true,
    stars: 5.0
  },
  {
    id: 3,
    title: 'EcoJharkhand (SIH Project)',
    description: 'Smart tourism platform developed during Smart India Hackathon. As lead developer, I built responsive UI, listings, and seamless navigation to promote Jharkhand tourism, gaining teamwork and real-world deployment experience.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    image: '/Assets/SIHProject.png',
    github: 'https://github.com/Apoorv-Tripathi/SIH-Project.git',
    live: 'https://sih-project-one-gold.vercel.app/',
    category: 'fullstack',
    featured: true,
    stars: 4.9
  },
  {
    id: 4,
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
    id: 5,
    title: 'Postify',
    description: 'A platform similar to Quora where users can create, edit, and manage posts. Built using Node.js, Express.js, and REST APIs with a responsive frontend for smooth user interactions.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    image: '/Assets/Postify.png',
    github: 'https://github.com/Apoorv-Tripathi/PostifyProject.git',
    live: '#',
    category: 'fullstack',
    featured: false,
    stars: 4.6
  },
  {
    id: 6,
    title: 'API Wonderland',
    description: 'A fun project integrating multiple APIs to display random facts, images, and jokes. Provides engaging, dynamic content with simple design, highlighting my ability to connect APIs effectively with JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: '/Assets/APIWonderland.png',
    github: 'https://github.com/Apoorv-Tripathi/APIWonderlandProject.git',
    live: '#',
    category: 'fullstack',
    featured: false,
    stars: 4.5
  },
  {
    id: 7,
    title: 'Project X (Association Website)',
    description: 'A responsive website created for an association with a focus on elegant UI, structured content, and intuitive navigation. Developed using HTML and CSS to ensure accessibility and professional design.',
    techStack: ['HTML', 'CSS'],
    image: '/Assets/Projectx.png',
    github: 'https://github.com/Apoorv-Tripathi/LibuxHealthProject.git',
    live: '#',
    category: 'frontend',
    featured: false,
    stars: 3.8
  },
  {
    id: 8,
    title: 'Spotify Homepage Clone',
    description: 'A pixel-perfect clone of Spotify’s homepage designed with HTML and CSS. Includes navigation bar and music player interface, replicating the look and feel of Spotify’s original web design.',
    techStack: ['HTML', 'CSS'],
    image: '/Assets/Spotify.png',
    github: 'https://github.com/Apoorv-Tripathi/SpotifyClone.git',
    live: '#',
    category: 'frontend',
    featured: false,
    stars: 3.5
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'featured', label: 'Featured' },
];

const Projects = ({ isDarkMode }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : filter === 'featured'
        ? PROJECTS.filter(project => project.featured)
        : PROJECTS.filter(project => project.category === filter);
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
              <p className="section-subtitle">
                Here are some of my recent works showcasing my skills and creativity
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <div className="filter-container">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                  aria-pressed={filter === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          {filteredProjects.map((project, idx) => (
            // use a stable unique key (id + idx is safe if ids unique)
            <Col lg={6} md={6} key={`${project.id}-${idx}`} className="mb-4">
              <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                {project.featured && (
                  <div className="featured-badge">
                    <FaStar /> Featured
                  </div>
                )}

                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <Button variant="outline-light" size="sm" href={project.github} target="_blank" rel="noreferrer" className="overlay-btn">
                        <FaGithub /> Code
                      </Button>
                      <Button variant="outline-light" size="sm" href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                        <FaExternalLinkAlt /> Live
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-stats">
                      <span className="project-stars">
                        <FaStar /> {project.stars}
                      </span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Button className="action-btn primary" href={project.live} target="_blank" rel="noreferrer">
                      <FaEye /> View Project
                    </Button>
                    <Button className="action-btn secondary" href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub /> Source Code
                    </Button>
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