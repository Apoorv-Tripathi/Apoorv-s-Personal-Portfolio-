import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaTimes } from 'react-icons/fa';
import '../styles/Certificates.css';

const Certificates = ({ isDarkMode }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Apna College',
      date: 'Apr 2025',
      description: 'Completed an intensive MERN stack program covering React.js, Node.js, Express.js, and MongoDB with hands-on real-world projects.',
      image: null,           
      link: '',              
      tag: 'Web Dev',
    },
    {
      id: 2,
    title: 'Delta - Full Stack Web Development',
    issuer: 'Apna College',
    date: '2025',
    description: 'Successfully completed an intensive full-stack web development program covering MERN stack, REST APIs, and real-world project building with practical implementation.', //  [oai_citation:1‡certificate-delta-50-6716395d4c764ca4230ca8c7.pdf](sediment://file_0000000070247208b6266e350b36c3f6)
    image: '/Assets/delta.png',
    link: '',
    tag: 'Full Stack',
    },
    {
  id: 3,
  title: 'The Joy of Computing using Python',
  issuer: 'NPTEL (IIT Madras)',
  date: 'Oct 2025',
  description: 'Completed a 12-week NPTEL course with Elite certification, scoring 80%. Developed strong problem-solving skills and Python programming fundamentals through assignments and proctored exam.', //  [oai_citation:0‡Apoorv NPTEL .pdf](sediment://file_00000000f7f4720892dba12d67fbd259)
  image: '/Assets/nptel-python.png',
  link: '',
  tag: 'Programming',
},
    {
      id: 4,
       title: 'Web Development Internship',
        issuer: 'Pinnacle Labs',
        date: 'Feb 2025',
        description: 'Completed a 4-week virtual internship in web development, demonstrating strong technical skills, dedication, and contributing effectively to real-world projects and tasks.', //  [oai_citation:2‡PL_2025_JANP6_074_CERTIFICATE.pdf](sediment://file_0000000018e47208b30f0280d5b7f671)
        image: '/Assets/pinnacle.png',
        link: '',
        tag: 'Internship',
    },
    {
      id: 5,
      title: 'Data Visualization Using Python',
  issuer: 'IBM Skills Network',
  date: 'Jan 2024',
  description: 'Gained hands-on experience in data visualization using Python libraries like Matplotlib, Seaborn, and Folium to create and customize graphical representations for small and large datasets.',
  image: '/Assets/ibm-dataviz.png',
  link: '',
  tag: 'Data Science',
    },
    {
        id: 6,
       title: 'AWS Solutions Architecture Job Simulation',
  issuer: 'Forage',
  date: 'Jan 2025',
  description: 'Completed a practical simulation designing scalable, secure, and cost-efficient cloud solutions using core AWS services and architecture principles.',
  image: '/Assets/forage-aws.png',
  link: '',
  tag: 'Cloud',
    },
  ];

  return (
    <>
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
                <p className="section-subtitle">
                  Verified credentials and professional achievements
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="certificates-grid">
                {certificates.map((cert) => (
                  <div key={cert.id} className="cert-card">

                    <div className="cert-image-area">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          onClick={() => setLightboxImg(cert.image)}
                        />
                      ) : (
                        <div className="cert-no-image">
                          <FaCertificate size={38} />
                          <span>Certificate Image</span>
                        </div>
                      )}
                    </div>

                    <div className="cert-card-body">
                      {cert.tag && <span className="cert-tag">{cert.tag}</span>}

                      <div className="cert-title">{cert.title}</div>

                      <div className="cert-meta">
                        {cert.issuer && (
                          <div className="cert-meta-item">
                            <FaBuilding className="cert-meta-icon" />
                            <span>{cert.issuer}</span>
                          </div>
                        )}
                        {cert.date && (
                          <div className="cert-meta-item">
                            <FaCalendarAlt className="cert-meta-icon" />
                            <span>{cert.date}</span>
                          </div>
                        )}
                      </div>

                      {cert.description && (
                        <p className="cert-description">{cert.description}</p>
                      )}

                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          <FaExternalLinkAlt size={10} />
                          View Certificate
                        </a>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {lightboxImg && (
        <div className="cert-lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button className="cert-lightbox-close" onClick={() => setLightboxImg(null)}>
            <FaTimes />
          </button>
          <img
            src={lightboxImg}
            alt="Certificate"
            className="cert-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Certificates;