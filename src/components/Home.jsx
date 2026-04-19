import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Home.css';

const Home = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      'Full Stack Developer',
      'Problem Solver',
      'Tech Innovator',
      'Creative Coder',
      'Digital Creator'
    ];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting]);

  return (
    <section id="home" className={`home-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
        <div className="shape shape-8"></div>
      </div>

      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start order-2 order-lg-1">
            <div className="hero-content">
              <div className="greeting-text">
                <span className="wave">👋</span>
                Hello, I'm
              </div>

              <h1 className="hero-title">
                <span className="name-highlight">Apoorv Tripathi</span>
              </h1>

              <div className="typing-container">
                <span className="typing-prefix">I'm a </span>
                <span className="typing-text">{currentText}</span>
                <span className="cursor">|</span>
              </div>

              <p className="hero-description">
                I’m a Full Stack Web Developer & Digital Creator passionate about building scalable web applications, crafting clean UI/UX, and turning ideas into impactful digital solutions. With hands-on experience in MERN stack development, I specialize in designing responsive frontends, robust backends, and seamless API integrations.
              </p>

              <div className="hero-buttons">
                <Button
                  className="cta-button primary"
                  href="/Assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </Button>
                <Button className="cta-button secondary" href="#projects">
                  View My Work
                </Button>
              </div>

              <div className="social-links">
                {[
                  { icon: FaGithub, href: 'https://github.com/Apoorv-Tripathi', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/apoorvtripathi1/', label: 'LinkedIn' },
                  { icon: FaTwitter, href: '#', label: 'Twitter' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/techie_apoorv?igsh=MTVxaDc1b3lqZjgxdA%3D%3D&utm_source=qr', label: 'Instagram' }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a key={index} href={href} className="social-link" aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center order-1 order-lg-2">
            <div className="hero-image-container">
              <div className="image-background"></div>
              <img
                src="/Assets/ApoorvProffesionalPhoto.png"
                alt="Profile"
                className="hero-image"
              />
              <div className="image-glow"></div>
            </div>
          </Col>
        </Row>

        <div className="scroll-indicator">
          <FaArrowDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </Container>
    </section>
  );
};

export default Home;