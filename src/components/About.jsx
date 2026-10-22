import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaLightbulb, FaRocket, FaPalette, FaCogs, FaUsers, FaDownload, FaArrowRight, FaCopy, FaCheck } from 'react-icons/fa';
import SkillsShowcase from './SkillsShowcase';
import '../styles/About.css';

const About = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const publicUrl = process.env.PUBLIC_URL || '';

  const services = [
    { icon: FaCode,      title: 'Full Stack MERN',          description: 'Architecting scalable applications with React, Node.js, Express, and MongoDB with modern state and API design.' },
    { icon: FaPalette,   title: 'UI/UX & Creative Frontend',description: 'Crafting responsive, high-fidelity interfaces with fluid typography, dark/light themes, and tactile micro-interactions.' },
    { icon: FaCogs,      title: 'API & Microservice Design',description: 'Building secure RESTful endpoints, JWT session auth, third-party integrations, and real-time data sync.' },
    { icon: FaLightbulb, title: 'Problem Solving & DSA',     description: 'Active competitive programmer on LeetCode with strong foundation in Data Structures, Algorithms, and C++.' },
    { icon: FaRocket,    title: 'Performance & Optimization',description: 'Optimizing client load speeds, asset compression, lazy loading, and robust clean architecture.' },
    { icon: FaUsers,     title: 'Team & Hackathon Leadership',description: 'Proven experience leading teams to the Grand Finale of Smart India Hackathon under intense sprint pressure.' },
  ];

  const stats = [
    { number: '10+',     label: 'Full Stack Projects', icon: '🚀' },
    { number: 'Top 1%',  label: 'SIH 2025 Finalist',  icon: '🏆' },
    { number: '200+',    label: 'DSA Problems Solved', icon: '⚡' },
    { number: '12+',     label: 'Core Technologies',   icon: '🛠' },
  ];

  const configCode = `const developer = {
  name: "Apoorv Tripathi",
  role: "Full Stack Developer",
  college: "MPEC Kanpur",
  stack: ["React", "Node", "Express", "MongoDB", "AI APIs"],
  hackathon: "SIH 2025 Grand Finale Finalist",
  status: "Open to Full-Time & Freelance"
};`;

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(configCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Passionate engineer blending robust full-stack logic with refined, user-centric visual design
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
          <div className="about-block-label">01 — My Story &amp; Vision</div>
          <Row className="align-items-start g-4">

            {/* Left — text with readable card bg */}
            <Col lg={6}>
              <div className="story-card">
                <h3 className="story-heading">
                  Hello! I'm a Driven{' '}
                  <span className="story-highlight">Full Stack Engineer</span>
                </h3>
                <p className="story-para">
                  I am a Computer Science undergraduate and Full Stack Developer dedicated to architecting impactful web applications and solving real-world challenges through technology. Using React.js, Node.js, Express.js, and MongoDB, I build production-grade platforms ranging from AI-powered audit SaaS systems to large-scale data platforms.
                </p>
                <p className="story-para">
                  As a <strong>Smart India Hackathon 2025 Finalist and Team Lead</strong>, I spearheaded end-to-end development for a unified national education platform for the Ministry of Education, consolidating academic metrics across student, faculty, and institutional data pipelines.
                </p>
                <p className="story-para">
                  During my Full Stack Web Developer Internship at <strong>Pinnacle Labs</strong> and freelance projects, I have engineered modular RESTful architectures, boosted frontend rendering speeds, and elevated the user journey.
                </p>
                <a 
                  href={`${publicUrl}/Assets/ApoorvResume.pdf`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="story-cta"
                  aria-label="Download Apoorv Tripathi Resume (PDF)"
                >
                  <FaDownload /> Download Resume
                  <FaArrowRight className="cta-arrow" />
                </a>
              </div>
            </Col>

            {/* Right — terminal + facts */}
            <Col lg={6}>
              <div className="terminal-card">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span className="t-dot red" />
                    <span className="t-dot yellow" />
                    <span className="t-dot green" />
                  </div>
                  <span className="t-title">apoorv.config.js</span>
                  <button 
                    className="terminal-copy-btn" 
                    onClick={handleCopyConfig} 
                    title="Copy config"
                    aria-label="Copy code to clipboard"
                  >
                    {copied ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                </div>
                <div className="terminal-body">
                  <p><span className="t-key">const</span> <span className="t-var">developer</span> <span className="t-op">=</span> {'{'}</p>
                  <p className="t-indent"><span className="t-key">name</span>: <span className="t-str">"Apoorv Tripathi"</span>,</p>
                  <p className="t-indent"><span className="t-key">role</span>: <span className="t-str">"Full Stack Developer"</span>,</p>
                  <p className="t-indent"><span className="t-key">education</span>: <span className="t-str">"B.Tech CSE (2023–27)"</span>,</p>
                  <p className="t-indent"><span className="t-key">stack</span>: [<span className="t-str">"MERN"</span>, <span className="t-str">"Cloud"</span>, <span className="t-str">"GenAI"</span>],</p>
                  <p className="t-indent"><span className="t-key">hackathon</span>: <span className="t-str">"SIH 2025 Finalist"</span>,</p>
                  <p className="t-indent"><span className="t-key">available</span>: <span className="t-bool">true</span>,</p>
                  <p>{'}'}<span className="t-op">;</span></p>
                </div>
              </div>

              <div className="quick-facts">
                {[
                  { label: 'Location', value: 'Kanpur, UP, India' },
                  { label: 'Degree',   value: 'B.Tech CSE (2023–27)' },
                  { label: 'Focus',    value: 'MERN Stack + GenAI SaaS' },
                  { label: 'Status',   value: '🟢 Open to Opportunities' },
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
          <div className="about-block-label">02 — Skills &amp; Stack</div>
          <SkillsShowcase isDarkMode={isDarkMode} />
        </div>

        {/* ══════════════════════════════════════════
            BLOCK 3 — WHAT I DO
        ══════════════════════════════════════════ */}
        <div className="about-block">
          <div className="about-block-label">03 — What I Bring To The Table</div>
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
