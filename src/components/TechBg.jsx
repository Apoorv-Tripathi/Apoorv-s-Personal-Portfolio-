import React from 'react';
import '../styles/TechBg.css';

const TechBg = ({ isDarkMode }) => (
  <div className={`tech-bg ${isDarkMode ? 'dark' : 'light'}`} aria-hidden="true" />
);

export default TechBg;
