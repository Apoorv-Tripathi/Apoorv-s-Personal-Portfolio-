import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaMapMarkerAlt, FaChevronRight, FaRocket } from 'react-icons/fa';
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
              <p className="section-subtitle">
                My professional journey and key accomplishments in the tech industry
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Jobs List */}
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
                    <span className="location">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className={`job-type ${job.type.toLowerCase().replace('-', '')}`}>
                      {job.type}
                    </span>
                  </div>
                  <FaChevronRight className="arrow-icon" />
                </div>
              ))}
            </div>
          </Col>

          {/* Job Details */}
          <Col lg={7}>
            <div className="job-details">
              <div className="details-header">
                <div className="position-info">
                  <h3 className="position-title">{experienceData[selectedJob].position}</h3>
                  <div className="company-info">
                    <FaBriefcase className="company-icon" />
                    <span className="company-name">{experienceData[selectedJob].company}</span>
                    <span className="separator">•</span>
                    <span className="job-period">{experienceData[selectedJob].period}</span>
                  </div>
                </div>
                {experienceData[selectedJob].status === 'current' && (
                  <div className="current-indicator">
                    <span>Currently Working</span>
                  </div>
                )}
              </div>

              <div className="job-description">
                <p>{experienceData[selectedJob].description}</p>
              </div>

              <div className="responsibilities">
                <h6>Key Responsibilities</h6>
                <ul>
                  {experienceData[selectedJob].responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="achievements">
                <h6>Major Achievements</h6>
                <div className="achievements-list">
                  {experienceData[selectedJob].achievements.map((achievement, index) => (
                    <div key={index} className="achievement">
                      <FaRocket className="achievement-icon" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="technologies">
                <h6>Technologies Used</h6>
                <div className="tech-list">
                  {experienceData[selectedJob].technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;