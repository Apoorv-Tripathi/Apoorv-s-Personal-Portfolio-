import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Footer.css';
import {
  FaHeart
} from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer className={`minimal-footer ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <div className="footer-content">
          {/* Logo/Brand */}
          <div className="footer-logo">
            <span className="logo-text">Apoorv Tripathi</span>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            {navLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="footer-nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p className="copyright">
              © {currentYear} Apoorv Tripathi. Made with <FaHeart className="heart-icon" /> in React
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;