import React from 'react';
import '../styles/SkillsShowcase.css';

const SkillsShowcase = ({ isDarkMode }) => {
  const skills = [
    { name: 'React', percentage: 90, icon: '⚛️', color: '#6366f1' },
    { name: 'Frontend', percentage: 95, icon: '🖥️', color: '#8b5cf6' },
    { name: 'Backend', percentage: 90, icon: '⚙️', color: '#06b6d4' },
    { name: 'Figma', percentage: 80, icon: '🎨', color: '#10b981' },
    { name: 'Bootstrap', percentage: 80, icon: '📐', color: '#f59e0b' },
    { name: 'Illustrator', percentage: 90, icon: '✏️', color: '#f43f5e' },
  ];

  return (
    <div className="skills-showcase-section">
      <div className="skills-showcase-container">
        <h3 className="skills-showcase-title">Design Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-circle-container">
              <div className="skill-circle-wrapper">
                <div
                  className="skill-circle"
                  style={{
                    background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, rgba(255,255,255,0.06) 0deg)`
                  }}
                >
                  <div className="skill-inner-circle">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-percentage" style={{ color: skill.color }}>{skill.percentage}%</div>
                  </div>
                </div>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;
