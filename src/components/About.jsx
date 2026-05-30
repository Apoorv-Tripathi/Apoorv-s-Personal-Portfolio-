import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaLightbulb, FaRocket, FaPalette, FaCogs, FaUsers, FaDownload, FaArrowRight } from 'react-icons/fa';
import SkillsShowcase from './SkillsShowcase';
import '../styles/About.css';

const About = ({ isDarkMode }) => {
  const services = [
    { icon: FaCode,      title: 'Web Development',         description: 'Creating responsive and performant web applications using modern frameworks with focus on user experience and scalability.' },
    { icon: FaPalette,   title: 'UI/UX Design',             description: 'Designing beautiful and intuitive user interfaces with emphasis on accessibility and modern design principles.' },
    { icon: FaCogs,      title: 'Frontend Development',     description: 'Building dynamic user interfaces with responsive design, secure client-side interactions, and efficient data sync.' },
    { icon: FaLightbulb, title: 'Problem Solving',          description: 'Analyzing complex technical challenges and delivering innovative solutions through critical thinking.' },
    { icon: FaRocket,    title: 'Performance Optimization', description: 'Optimizing applications for maximum speed, efficiency, and best user experience across all devices.' },
    { icon: FaUsers,     title: 'Team Collaboration',       description: 'Working effectively in agile teams with excellent communication and collaborative project management.' },
  ];

  const stats = [
    { number: '8+',  label: 'Projects',     icon: '🚀' },
    { number: '2+',  label: 'Years Exp.',   icon: '⚡' },
    { number: '11+', label: 'Clients',      icon: '🤝' },
    { number: '12+', label: 'Technologies', icon: '🛠' },
  ];

  return (
    <section id="about" className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>

        {/* ── Header ── */}
        <Row>
          <Col lg={12} className="text-center mb-5">
            <span className="about-eyebrow">Who am I?</span>
            <h2 className="section-title mt-3">About Me</h2>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
            <p className="section-subtitle">
              Passionate developer with expertise in creating digital solutions that make a difference
            </p>
          </Col>
        </Row>

        {/* ── Stats ── */}
        <Row className="mb-5">
          {stats.map((s, i) => (
            <Col xs={6} md={3} key={i} className="mb-3">
              <div className="about-stat-card">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-num">{s.number}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            </Col>
          ))}
        </Row>

        {/* ══════════════════════════════════════════
            BLOCK 1 — STORY
        ══════════════════════════════════════════ */}
        <div className="about-block">
          <div className="about-block-label">01 — My Story</div>
          <Row className="align-items-start g-4">

            {/* Left — text with readable card bg */}
            <Col lg={6}>
              <div className="story-card">
                <h3 className="story-heading">
                  Hello! I'm a Passionate{' '}
                  <span className="story-highlight">Full Stack Developer</span>
                </h3>
                <p className="story-para">
                  I am a Computer Science undergraduate and Full Stack Developer passionate about building impactful web applications and solving real-world problems through technology. Using React.js, Node.js, Express.js, and MongoDB, I have developed multiple full-stack projects ranging from AI-powered SaaS platforms to scalable web applications.
                </p>
                <p className="story-para">
                  As a Smart India Hackathon 2025 Finalist and Team Lead, I led the development of a unified education platform designed to streamline large-scale academic data management. I also completed a Full Stack Web Developer Internship at Pinnacle Labs, where I gained hands-on experience in building responsive applications, integrating APIs, and improving application performance.
                </p>
                <p className="story-para" >I enjoy turning ideas into practical digital solutions while continuously exploring modern web technologies, software engineering, and AI-driven innovation.</p>
                <a href="/Assets/ApoorvResume.pdf" target="_blank" rel="noopener noreferrer" className="story-cta">
                  <FaDownload /> Download Resume
                  <FaArrowRight className="cta-arrow" />
                </a>
              </div>
            </Col>

            {/* Right — terminal + facts */}
            <Col lg={6}>
              <div className="terminal-card">
                <div className="terminal-bar">
                  <span className="t-dot red" />
                  <span className="t-dot yellow" />
                  <span className="t-dot green" />
                  <span className="t-title">apoorv.config.js</span>
                </div>
                <div className="terminal-body">
                  <p><span className="t-key">const</span> <span className="t-var">developer</span> <span className="t-op">=</span> {'{'}</p>
                  <p className="t-indent"><span className="t-key">name</span>: <span className="t-str">"Apoorv Tripathi"</span>,</p>
                  <p className="t-indent"><span className="t-key">role</span>: <span className="t-str">"Full Stack Developer"</span>,</p>
                  <p className="t-indent"><span className="t-key">college</span>: <span className="t-str">"MPEC Kanpur"</span>,</p>
                  <p className="t-indent"><span className="t-key">stack</span>: <span className="t-str">"MERN"</span>,</p>
                  <p className="t-indent"><span className="t-key">learning</span>: <span className="t-str">"always"</span>,</p>
                  <p className="t-indent"><span className="t-key">available</span>: <span className="t-bool">true</span>,</p>
                  <p>{'}'}<span className="t-op">;</span></p>
                </div>
              </div>

              <div className="quick-facts">
                {[
                  { label: 'Location', value: 'Kanpur, UP, India' },
                  { label: 'Degree',   value: 'B.Tech CSE (2023–27)' },
                  { label: 'Focus',    value: 'MERN Stack + Cloud' },
                  { label: 'Status',   value: '🟢 Open to Work' },
                ].map((f, i) => (
                  <div key={i} className="fact-row">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* ══════════════════════════════════════════
            BLOCK 2 — SKILLS
        ══════════════════════════════════════════ */}
        <div className="about-block">
          <div className="about-block-label">02 — Skills</div>
          <SkillsShowcase isDarkMode={isDarkMode} />
        </div>

        {/* ══════════════════════════════════════════
            BLOCK 3 — WHAT I DO
        ══════════════════════════════════════════ */}
        <div className="about-block">
          <div className="about-block-label">03 — What I Do</div>
          <Row>
            {services.map((s, i) => (
              <Col lg={4} md={6} key={i} className="mb-4">
                <div className="service-card-v2">
                  <div className="svc-index">0{i + 1}</div>
                  <div className="svc-icon-wrap"><s.icon /></div>
                  <h5 className="svc-title">{s.title}</h5>
                  <p className="svc-desc">{s.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default About;
