import React from 'react';
import '../styles/SkillsShowcase.css';

const SkillsShowcase = ({ isDarkMode }) => {
  const skills = [
    {
      name: 'React',
      percentage: 90,
      icon: '🎨',
      color: '#FF61F6'
    },
    {
      name: 'Frontend',
      percentage: 95,
      icon: '🎯',
      color: '#F24E1E'
    },
    {
      name: 'Backend',
      percentage: 90,
      icon: '📝',
      color: '#21759B'
    },
    {
      name: 'Figma',
      percentage: 80,
      icon: '🖼️',
      color: '#31A8FF'
    },
    {
      name: 'Bootsrap',
      percentage: 80,
      icon: '💎',
      color: '#FDB300'
    },
    {
      name: 'Illustrator',
      percentage: 90,
      icon: '🎨',
      color: '#FF9A00'
    },
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
                    background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #f0f0f0 0deg)`
                  }}
                >
                  <div className="skill-inner-circle">
                    <div className="skill-icon">{skill.icon}</div>
                  </div>
                </div>
                <div className="skill-percentage">{skill.percentage}%</div>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;