import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaSchool } from 'react-icons/fa';
import '../styles/Education.css';

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      id: 1,
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
      id: 2,
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

  return (
    <section id="education" className={`education-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Education</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">My academic journey</p>
            </div>
          </Col>
        </Row>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-badges">
                  <span className={`badge-status ${edu.status}`}>
                    {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                  <span className="badge-type">Degree</span>
                </div>

                <h4 className="timeline-title">{edu.title}</h4>

                <div className="timeline-meta">
                  <div className="meta-item">
                    <FaSchool /> {edu.institution}
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt /> {edu.location}
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt /> {edu.period}
                  </div>
                </div>

                <p className="timeline-description">{edu.description}</p>

                <div className="timeline-achievement">
                  <strong>Achievement:</strong> {edu.grade}
                </div>

                <div className="timeline-highlights-title">Key Highlights:</div>
                <div className="timeline-highlights">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
