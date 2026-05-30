import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = ({ isDarkMode }) => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experienceData = [
    {
      id: 1,
      position: 'Full Stack Web Developer Intern',
      company: 'Pinnacle Labs',
      location: 'Remote',
      period: 'January 2025 – March 2025',
      type: 'Internship',
      description: 'Contributing to the development and optimization of web applications using modern full-stack technologies, focusing on responsive UI, backend integration, and performance improvements.',
      responsibilities: [
        'Develop and maintain web applications using HTML, CSS, JavaScript, Node.js, and Express.js',
        'Work with RESTful APIs to fetch, manipulate, and display dynamic data',
        'Build responsive and interactive user interfaces to enhance user experience',
        'Collaborate with the development team to optimize website performance and security',
        'Implement backend functionalities to ensure smooth frontend-server integration'
      ],
      achievements: [
        'Improved application load speed by optimizing frontend performance and API calls',
        'Contributed to enhanced website security through better session handling and validation',
        'Delivered responsive UI components that improved cross-device accessibility'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
      status: 'current'
    },
  ];

  const job = experienceData[selectedJob];

  return (
    <section id="experience" className={`experience-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Work Experience</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">My professional journey and key accomplishments in the tech industry</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="mb-4">
            <div className="jobs-list">
              {experienceData.map((job, index) => (
                <div
                  key={job.id}
                  className={`job-item ${selectedJob === index ? 'active' : ''} ${job.status === 'current' ? 'current' : ''}`}
                  onClick={() => setSelectedJob(index)}
                >
                  <div className="job-header">
                    <div className="job-title">
                      <h5>{job.position}</h5>
                      <span className="company">{job.company}</span>
                    </div>
                    <div className="job-period">{job.period}</div>
                  </div>
                  <div className="job-meta">
                    <span className="location"><FaMapMarkerAlt /> {job.location}</span>
                    <span className={`job-type ${job.type.toLowerCase().replace('-', '')}`}>{job.type}</span>
                  </div>
                  <FaChevronRight className="arrow-icon" />
                </div>
              ))}
            </div>
          </Col>

          <Col lg={7} className="mb-4">
            <div className="job-detail">
              <h3 className="detail-position">{job.position}</h3>
              <div className="detail-meta">
                <span className="detail-company"><FaBriefcase /> {job.company}</span>
                <span className="detail-period">· {job.period}</span>
              </div>

              <p className="detail-description">{job.description}</p>

              <div className="detail-section-title">Key Responsibilities</div>
              <ul className="responsibilities-list">
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <div className="detail-section-title">Major Achievements</div>
              <ul className="achievements-list">
                {job.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>

              <div className="detail-section-title">Technologies</div>
              <div className="tech-tags">
                {job.technologies.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
