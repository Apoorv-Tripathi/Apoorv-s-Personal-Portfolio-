import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TechBg from './components/TechBg';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDarkMode(saved !== 'light');
    const t = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-ring"></div>
          <p className="loader-text"><span>~/</span> apoorv.tripathi</p>
        </div>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'} style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Single fixed tech background — renders behind everything */}
      <TechBg isDarkMode={isDarkMode} />

      <Navbar     isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home       isDarkMode={isDarkMode} />
      <About      isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects   isDarkMode={isDarkMode} />
      <Education  isDarkMode={isDarkMode} />
      <Certificates isDarkMode={isDarkMode} />
      <Contact    isDarkMode={isDarkMode} />
      <Footer     isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
