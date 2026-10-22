import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFileAlt, FaBriefcase, FaChevronDown, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Home.css';

const TYPING_STRINGS = [
  'Full Stack MERN Engineer',
  'SIH 2025 Finalist',
  'AI SaaS Platform Builder',
  'UI/UX Creative Coder',
  'Problem Solver (DSA in C++/Python)',
];

const Home = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const publicUrl = process.env.PUBLIC_URL || '';

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const delay = isDeleting ? 45 : charIndex === current.length ? 1900 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setIsDeleting(false);
        setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  return (
    <section id="home" className={`home-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row className="align-items-center min-vh-hero">

          {/* Left — text */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="greeting-text">
              <span className="wave" role="img" aria-label="waving hand">👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-title">
              <span className="name-highlight">Apoorv Tripathi</span>
            </h1>

            <div className="typing-container" aria-live="polite">
              <span className="typing-prefix">I am a&nbsp;</span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor" aria-hidden="true">|</span>
            </div>

            <p className="hero-description">
              Computer Science undergraduate, Full Stack Developer, and Smart India Hackathon 2025 Finalist.
              I architect modern, high-performance web applications using the <strong>MERN stack</strong>, 
              scalable cloud tools, and AI APIs. Passionate about solving real-world challenges with clean code and intuitive UI.
            </p>

            <div className="hero-buttons">
              <a 
                href={`${publicUrl}/Assets/ApoorvResume.pdf`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary"
                aria-label="View Apoorv's Resume (PDF)"
              >
                <FaFileAlt /> View Resume
              </a>
              <a 
                href="#projects" 
                className="cta-button secondary"
                aria-label="View Featured Projects"
              >
                <FaBriefcase /> Explore Work
              </a>
              <a 
                href="#contact" 
                className="cta-button outline-contact"
                aria-label="Jump to Contact Section"
              >
                <FaPaperPlane /> Let's Connect
              </a>
            </div>

            <div className="social-links">
              {[
                { icon: FaGithub, href: 'https://github.com/Apoorv-Tripathi', label: 'GitHub Profile' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/apoorvtripathi1/', label: 'LinkedIn Profile' },
                { icon: SiLeetcode, href: 'https://leetcode.com/u/ApoorvTripathi89/', label: 'LeetCode Profile' }
              ].map(({ icon: Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

          {/* Right — photo */}
          <Col lg={5} className="d-flex justify-content-center">
            <div className="hero-image-container">
              <div className="image-background" />
              <img
                src={`${publicUrl}/Assets/ApoorvProffesionalPhoto.png`}
                alt="Apoorv Tripathi - Full Stack Developer"
                className="hero-image"
                onError={e => { e.target.src = 'https://via.placeholder.com/420x420?text=Apoorv+Tripathi'; }}
              />
              <div className="image-glow" />
              <div className="live-status-pill">
                <span className="live-status-dot"></span>
                <span>Open for full-time &amp; freelance opportunities</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll hint */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span>SCROLL DOWN</span>
        <FaChevronDown className="scroll-arrow" />
      </a>
    </section>
  );
};

export default Home;
