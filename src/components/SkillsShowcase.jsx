import React, { useState } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAmazonaws,
  SiGit,
  SiPostman,
  SiVercel,
  SiCplusplus,
  SiPython,
  SiVite,
  SiFigma
} from 'react-icons/si';
import { FaServer, FaBrain, FaLock, FaDatabase } from 'react-icons/fa';
import '../styles/SkillsShowcase.css';

const SKILLS_DATA = [
  // Frontend
  { name: 'React.js', category: 'frontend', icon: SiReact, color: '#61DAFB', level: 'Production' },
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: SiJavascript, color: '#F7DF1E', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4', level: 'Production' },
  { name: 'Bootstrap 5', category: 'frontend', icon: SiBootstrap, color: '#8852EC', level: 'Advanced' },
  { name: 'HTML5 & CSS3', category: 'frontend', icon: SiHtml5, color: '#E34F26', level: 'Expert' },
  { name: 'Redux Toolkit', category: 'frontend', icon: SiRedux, color: '#764ABC', level: 'Proficient' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#5FA04E', level: 'Production' },
  { name: 'Express.js', category: 'backend', icon: SiExpress, color: '#A8B2C1', level: 'Production' },
  { name: 'RESTful APIs', category: 'backend', icon: FaServer, color: '#06B6D4', level: 'Advanced' },
  { name: 'GenAI & LLM APIs', category: 'backend', icon: FaBrain, color: '#A855F7', level: 'Production' },
  { name: 'JWT & Session Auth', category: 'backend', icon: FaLock, color: '#10B981', level: 'Advanced' },

  // Databases & Cloud
  { name: 'MongoDB & Mongoose', category: 'cloud', icon: SiMongodb, color: '#47A248', level: 'Production' },
  { name: 'SQL & Relational DBs', category: 'cloud', icon: FaDatabase, color: '#336791', level: 'Proficient' },
  { name: 'AWS Cloud Simulation', category: 'cloud', icon: SiAmazonaws, color: '#FF9900', level: 'Certified' },
  { name: 'Git & GitHub', category: 'cloud', icon: SiGit, color: '#F05032', level: 'Advanced' },
  { name: 'Postman API Testing', category: 'cloud', icon: SiPostman, color: '#FF6C37', level: 'Advanced' },
  { name: 'Vercel Deployment', category: 'cloud', icon: SiVercel, color: '#E2E8F0', level: 'Production' },

  // Core & Languages
  { name: 'C++ (DSA & OOP)', category: 'core', icon: SiCplusplus, color: '#00599C', level: 'Advanced' },
  { name: 'Python (NPTEL Elite)', category: 'core', icon: SiPython, color: '#3776AB', level: 'Elite (80%)' },
  { name: 'Vite Build Tool', category: 'core', icon: SiVite, color: '#646CFF', level: 'Advanced' },
  { name: 'Figma UI/UX Design', category: 'core', icon: SiFigma, color: '#F24E1E', level: 'Proficient' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Tech' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cloud', label: 'Databases & Cloud' },
  { id: 'core', label: 'Core CS & Languages' },
];

const SkillsShowcase = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <div className="skills-showcase-section">
      <div className="skills-showcase-container">
        <div className="skills-header-row">
          <div>
            <h3 className="skills-showcase-title">Technical Expertise</h3>
            <p className="skills-showcase-subtitle">
              Battle-tested tools and frameworks I use to build scalable products end-to-end
            </p>
          </div>
          <div className="skills-category-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`skill-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-modern-grid">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="skill-card-modern"
                style={{ '--tech-color': skill.color }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrap" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
                <div className="skill-card-body">
                  <h4 className="skill-title">{skill.name}</h4>
                  <div className="skill-category-tag">{skill.category.toUpperCase()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;