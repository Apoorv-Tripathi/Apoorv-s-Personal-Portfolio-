import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaCertificate, FaAward, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Education.css';

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      id: 5,
      type: 'degree',
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Maharana Pratap Engineering College',
      location: 'Kanpur, UP',
      period: '2023 - 2027',
      description: 'Pursuing a Bachelor of Technology in Computer Science and Engineering with a focus on software development, full-stack web technologies, data structures, and algorithms. Actively working on projects and internships to build real-world technical expertise.',
      grade: 'Ongoing',
      highlights: ['Full Stack Web Development Projects', 'Internship at Pinnacle Labs', 'Hands-on experience with MERN stack, SQL, and Cloud tools'],
      status: 'ongoing'
    },
    {
      id: 3,
      type: 'degree',
      title: 'Higher Secondary Education (Science)',
      institution: 'Harmilap Mission School',
      location: 'Kanpur, UP',
      period: '2021 - 2023',
      description: 'Completed Class XII (CBSE) in the Science stream with core subjects including Physics, Chemistry, Mathematics, and Computer Science. Strengthened problem-solving, logical reasoning, and programming fundamentals.',
      grade: 'CBSE Class XII - 2023',
      highlights: ['Focused on PCM + Computer Science', 'Built strong analytical and logical skills', 'Active involvement in academic and extracurricular activities'],
      status: 'completed'
    },

    {
      id: 3,
      type: 'degree',
      title: 'Secondary Education',
      institution: 'Harmilap Mission School',
      location: 'Kanpur, UP',
      period: '2019 - 2021',
      description: 'Completed Class X (CBSE) with a focus on core subjects including Mathematics, Science, Social Studies, English, and Computer Applications. Developed strong analytical skills and a disciplined academic foundation.',
      grade: 'CBSE Class X - 2021',
      highlights: ['Consistent academic performance', 'Participation in extracurricular and school events', 'Solid base in Mathematics and Science'],
      status: 'completed'
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'degree': return FaGraduationCap;
      case 'certification': return FaCertificate;
      default: return FaAward;
    }
  };

  return (
    <section id="education" className={`education-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Education </h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">
                My academic journey 
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="timeline-container">
              <div className="timeline-line"></div>

              {educationData.map((item, index) => {
                const IconComponent = getIcon(item.type);
                return (
                  <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${item.status}`}>
                    <div className="timeline-marker">
                      <div className="timeline-icon">
                        <IconComponent />
                      </div>
                      {item.status === 'ongoing' && <div className="pulse-ring"></div>}
                    </div>

                    <div className="timeline-content">
                      <div className="timeline-card">
                        <div className="card-header">
                          <div className="card-meta">
                            <span className={`status-badge ${item.status}`}>
                              {item.status === 'ongoing' ? 'In Progress' : 'Completed'}
                            </span>
                            <span className={`type-badge ${item.type}`}>
                              {item.type === 'degree' ? 'Degree' : 'Certification'}
                            </span>
                          </div>

                          <h4 className="card-title">{item.title}</h4>

                          <div className="card-info">
                            <div className="info-item">
                              <FaGraduationCap className="info-icon" />
                              <span>{item.institution}</span>
                            </div>
                            <div className="info-item">
                              <FaMapMarkerAlt className="info-icon" />
                              <span>{item.location}</span>
                            </div>
                            <div className="info-item">
                              <FaCalendarAlt className="info-icon" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                          <p className="card-description">{item.description}</p>

                          <div className="grade-container">
                            <strong className="grade-label">Achievement:</strong>
                            <span className="grade-value">{item.grade}</span>
                          </div>

                          <div className="highlights">
                            <h6 className="highlights-title">Key Highlights:</h6>
                            <div className="highlights-list">
                              {item.highlights.map((highlight, idx) => (
                                <span key={idx} className="highlight-item">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;