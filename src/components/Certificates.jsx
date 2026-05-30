import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaTimes, FaSearch } from 'react-icons/fa';
import '../styles/Certificates.css';

const Certificates = ({ isDarkMode }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const certificates = [
 {
  id: 2,
  title: 'Smart India Hackathon 2025 Grand Finale',
  issuer: 'Ministry of Education, Government of India',
  date: 'Dec 2025',
  description: 'Selected for and participated in the Grand Finale of Smart India Hackathon 2025, contributing to the design and development of innovative software solutions in a highly competitive national-level hackathon.',
  image: '/Assets/SIHCertificate.png',
  link: '',
  tag: 'Innovation',
},
    {
      id: 2,
      title: 'Delta - Full Stack Web Development',
      issuer: 'Apna College',
      date: '2025',
      description: 'Successfully completed an intensive full-stack web development program covering MERN stack, REST APIs, and real-world project building with practical implementation.',
      image: '/Assets/delta.png',
      link: '',
      tag: 'Full Stack',
    },
    {
      id: 3,
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL (IIT Madras)',
      date: 'Oct 2025',
      description: 'Completed a 12-week NPTEL course with Elite certification, scoring 80%. Developed strong problem-solving skills and Python programming fundamentals through assignments and proctored exam.',
      image: '/Assets/nptel-python.png',
      link: '',
      tag: 'Programming',
    },
    {
      id: 4,
      title: 'Web Development Internship',
      issuer: 'Pinnacle Labs',
      date: 'Feb 2025',
      description: 'Completed a 4-week virtual internship in web development. Worked on real-world projects involving HTML, CSS, JavaScript, and Node.js, receiving a certificate of completion.',
      image: '/Assets/pinnacle.png',
      link: '',
      tag: 'Internship',
    },
    {
      id: 5,
      title: 'Data Visualization Using Python',
      issuer: 'IBM Skills Network',
      date: 'Jan 2024',
      description: 'Gained hands-on experience in data visualization using Python libraries such as Matplotlib, Seaborn, and Folium for the creation and customization of graphical representation outputs for both small and large-scale data sets.',
      image: '/Assets/ibm-dataviz.png',
      link: '',
      tag: 'Data Science',
    },
    {
      id: 6,
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'Jan 2025',
      description: 'Completed a practical simulation of real-world AWS architecture tasks including designing scalable cloud systems, cost optimization, and best-practice implementation.',
      image: '/Assets/forage-aws.png',
      link: '',
      tag: 'Cloud',
    },
  ];

  return (
    <section id="certificates" className={`certificates-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Certificates</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Verified credentials and professional achievements</p>
            </div>
          </Col>
        </Row>

        <Row>
          {certificates.map((cert) => (
            <Col lg={4} md={6} key={cert.id} className="mb-4">
              <div className="cert-card">
                <div
                  className="cert-image-wrapper"
                  onClick={() => cert.image && setLightboxImg(cert.image)}
                >
                  {cert.image ? (
                    <>
                      <img src={cert.image} alt={cert.title} className="cert-image" />
                      <div className="cert-zoom-overlay">
                        <span><FaSearch /> Click to zoom</span>
                      </div>
                    </>
                  ) : (
                    <div className="cert-image-placeholder">
                      <FaCertificate />
                    </div>
                  )}
                </div>

                <div className="cert-body">
                  <span className="cert-tag">{cert.tag}</span>

                  <h5 className="cert-title">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        {cert.title} <FaExternalLinkAlt style={{ fontSize: '0.6rem' }} />
                      </a>
                    ) : cert.title}
                  </h5>

                  <div className="cert-meta">
                    <span className="cert-issuer"><FaBuilding /> {cert.issuer}</span>
                    <span className="cert-date"><FaCalendarAlt /> {cert.date}</span>
                  </div>

                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {lightboxImg && (
        <div className="cert-lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Certificate" className="lightbox-img" onClick={e => e.stopPropagation()} />
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
