import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTIFICATES', href: '#certificates' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`minimal-footer ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <div className="footer-content">
          {/* Logo/Brand */}
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Apoorv</span>
            <span className="logo-accent">.dev</span>
            <span className="logo-bracket"> /&gt;</span>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            {navLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="footer-nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* Back to top + Copyright */}
          <div className="footer-bottom-row">
            <p className="copyright">
              © {currentYear} Apoorv Tripathi. Engineered with precision &amp; <FaHeart className="heart-icon" /> in React.
            </p>
            <button 
              className="back-to-top-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll back to top of page"
              title="Back to Top"
            >
              <FaArrowUp /> Top
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;