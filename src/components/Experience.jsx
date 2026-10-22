import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = ({ isDarkMode }) => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experienceData = [
    {
      id: 1,
      position: 'Full Stack Web Developer Intern',
      company: 'Pinnacle Labs',
      location: 'Remote',
      period: 'January 2025 – March 2025',
      type: 'Internship',
      badge: 'Completed',
      description: 'Contributed to the development and optimization of web applications using modern full-stack technologies, focusing on responsive UI, backend integration, and performance improvements.',
      responsibilities: [
        'Developed and maintained modular web features using HTML5, CSS3, JavaScript (ES6+), Node.js, and Express.js',
        'Engineered RESTful API endpoints to handle dynamic data transactions with MongoDB',
        'Built responsive and interactive user interfaces to optimize cross-device user experience',
        'Collaborated with senior engineers to implement input sanitization and secure session management',
        'Refactored legacy DOM operations to improve rendering performance and reduce layout shifts'
      ],
      achievements: [
        'Improved page load speed by optimizing asset pipelines and reducing unneeded API roundtrips',
        'Hardened application security through token verification and request validation schemas',
        'Delivered clean, reusable UI modules praised for responsiveness on mobile viewports'
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Git'],
      status: 'completed'
    },
    {
      id: 2,
      position: 'Team Lead & Full Stack Architect',
      company: 'Smart India Hackathon (Ministry of Education)',
      location: 'National Grand Finale',
      period: 'September 2025 – December 2025',
      type: 'Hackathon Leadership',
      badge: 'Grand Finalist',
      description: 'Led a 6-developer squad to the Grand Finale of Smart India Hackathon 2025 (Top 1% nationwide), architecting an end-to-end unified national education analytics platform.',
      responsibilities: [
        'Orchestrated system architecture combining React, Node.js, Express, and MongoDB for large-scale academic records',
        'Integrated Aadhaar, APAR ID, and AISHE code validation modules into unified user dashboards',
        'Directed agile sprint milestones under intense 36-hour non-stop hackathon conditions',
        'Designed intuitive administrative analytics interfaces for school rankings and government scheme disbursements',
        'Presented prototype and live architecture demos to Ministry evaluation panels'
      ],
      achievements: [
        'Selected for national Grand Finale among thousands of competing collegiate engineering teams',
        'Built a working prototype supporting institutional data synchronization in real time',
        'Recognized for exceptional UI/UX clarity and robust database schema design'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Data Analytics'],
      status: 'highlight'
    },
    {
      id: 3,
      position: 'Freelance Full Stack Engineer',
      company: 'Independent Client Solutions',
      location: 'Kanpur / Remote',
      period: '2024 – Present',
      type: 'Freelance & Contract',
      badge: 'Active',
      description: 'Designing and deploying bespoke full-stack applications, business landing pages, and web platforms for early-stage clients and commercial enterprises.',
      responsibilities: [
        'Developed custom web solutions including corporate consultancy websites and SaaS dashboards',
        'Built responsive, high-converting interfaces with modern CSS, Tailwind, and React',
        'Configured CI/CD pipelines, SSL certificates, and custom domain routing on Vercel and cloud hosts',
        'Collaborated directly with stakeholders to translate business workflows into interactive software'
      ],
      achievements: [
        'Delivered 100% on-time project completion with responsive client satisfaction',
        'Engineered lead-generation wizards and real-time messaging integrations',
        'Maintained 95+ Google Lighthouse scores across performance and accessibility audits'
      ],
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Vercel', 'UI/UX Design'],
      status: 'current'
    }
  ];

  const job = experienceData[selectedJob];

  return (
    <section id="experience" className={`experience-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <span className="about-eyebrow">Career Path</span>
              <h2 className="section-title mt-3">Work Experience &amp; Leadership</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Hands-on engineering roles, hackathon leadership, and client collaborations</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="mb-4">
            <div className="jobs-list">
              {experienceData.map((item, index) => (
                <div
                  key={item.id}
                  className={`job-item ${selectedJob === index ? 'active' : ''} ${item.status}`}
                  onClick={() => setSelectedJob(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedJob(index); }}
                  aria-pressed={selectedJob === index}
                >
                  <div className="job-header">
                    <div className="job-title">
                      <h5>{item.position}</h5>
                      <span className="company">{item.company}</span>
                    </div>
                    <span className="job-badge">{item.badge}</span>
                  </div>
                  <div className="job-meta">
                    <span className="location"><FaMapMarkerAlt /> {item.location}</span>
                    <span className="job-period">{item.period}</span>
                  </div>
                  <FaChevronRight className="arrow-icon" />
                </div>
              ))}
            </div>
          </Col>

          <Col lg={7} className="mb-4">
            <div className="job-detail">
              <div className="detail-top-badge">{job.type}</div>
              <h3 className="detail-position">{job.position}</h3>
              <div className="detail-meta">
                <span className="detail-company"><FaBriefcase /> {job.company}</span>
                <span className="detail-period">· {job.period}</span>
                <span className="detail-location">· {job.location}</span>
              </div>

              <p className="detail-description">{job.description}</p>

              <div className="detail-section-title">Key Responsibilities</div>
              <ul className="responsibilities-list">
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <div className="detail-section-title">Major Achievements</div>
              <ul className="achievements-list">
                {job.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>

              <div className="detail-section-title">Technologies Used</div>
              <div className="tech-tags">
                {job.technologies.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;