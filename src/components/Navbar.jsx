import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon, FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope, FaAward } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'experience', 'projects', 'certificates', 'education', 'contact'];
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'certificates', label: 'Certificates', icon: FaAward },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <BootstrapNavbar 
      expand="lg" 
      expanded={expanded}
      onToggle={setExpanded}
      className={`modern-navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}
      fixed="top"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="brand-logo" onClick={() => setExpanded(false)}>
          <div className="logo-container">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Apoorv</span>
            <span className="logo-accent">.dev</span>
            <span className="logo-bracket"> /&gt;</span>
            <span className="status-ping" title="Available for opportunities"></span>
          </div>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="modern-navbar-nav" 
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="modern-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Nav.Link 
                key={id}
                href={`#${id}`}
                onClick={() => setExpanded(false)}
                className={`modern-nav-link ${activeSection === id ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span className="nav-text">{label}</span>
                <div className="nav-indicator"></div>
              </Nav.Link>
            ))}
            
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="toggle-track">
                <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                  {isDarkMode ? <FaMoon /> : <FaSun />}
                </div>
              </div>
            </button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;