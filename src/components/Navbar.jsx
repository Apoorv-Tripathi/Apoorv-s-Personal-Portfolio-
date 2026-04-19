import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon, FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <BootstrapNavbar 
      expand="lg" 
      className={`modern-navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}
      fixed="top"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="brand-logo">
          <div className="logo-container">
            <span className="logo-text">Portfolio</span>
            <div className="logo-dot"></div>
          </div>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="modern-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="modern-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Nav.Link 
                key={id}
                href={`#${id}`}
                className={`modern-nav-link ${activeSection === id ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span className="nav-text">{label}</span>
                <div className="nav-indicator"></div>
              </Nav.Link>
            ))}
            
            <button className="theme-toggle-btn" onClick={toggleTheme}>
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