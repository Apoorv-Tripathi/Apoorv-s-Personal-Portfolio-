import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin,  FaFileAlt, FaBriefcase, FaChevronDown, FaCode } from 'react-icons/fa';
import '../styles/Home.css';

const TYPING_STRINGS = [
  'Creative Coder',
  'Full Stack Developer',
  'MERN Stack Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

const Home = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const delay = isDeleting ? 50 : charIndex === current.length ? 1800 : 90;

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
              <span className="wave">👋</span>&nbsp; Hello, I'm
            </div>

            <h1 className="hero-title">
              <span className="name-highlight">Apoorv Tripathi</span>
            </h1>

            <div className="typing-container">
              <span className="typing-prefix">I'm a&nbsp;</span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
              I'm a Full Stack Web Developer &amp; Digital Creator passionate about building
              scalable web applications, crafting clean UI/UX, and turning ideas into impactful
              digital solutions. With hands-on experience in MERN stack development, I specialize
              in designing responsive frontends, robust backends, and seamless API integrations.
            </p>

            <div className="hero-buttons">
              <a href="/Assets/ApoorvResume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                <FaFileAlt /> View Resume
              </a>
              <a href="#projects" className="cta-button secondary">
                <FaBriefcase /> View My Work
              </a>
            </div>

            <div className="social-links">
              {[
                { icon: FaGithub,    href: 'https://github.com/Apoorv-Tripathi' },
                { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/apoorvtripathi1/' },
                { icon: FaCode,   href: 'https://leetcode.com/u/ApoorvTripathi89/' }
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="social-link" target="_blank" rel="noopener noreferrer">
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
                src="/Assets/ApoorvProffesionalPhoto.png"
                alt="Apoorv Tripathi"
                className="hero-image"
                onError={e => { e.target.src = 'https://via.placeholder.com/420x420?text=Apoorv'; }}
              />
              <div className="image-glow" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll hint */}
      <div className="scroll-indicator">
        <span>scroll</span>
        <FaChevronDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Home;
