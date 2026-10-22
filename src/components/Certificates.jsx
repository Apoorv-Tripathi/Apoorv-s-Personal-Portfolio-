import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaTimes, FaSearch } from 'react-icons/fa';
import '../styles/Certificates.css';

const publicUrl = process.env.PUBLIC_URL || '';

const Certificates = ({ isDarkMode }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImg]);

  const certificates = [
    {
      id: 1,
      title: 'Smart India Hackathon 2025 Grand Finale',
      issuer: 'Ministry of Education, Government of India',
      date: 'Dec 2025',
      description: 'Selected for and participated in the Grand Finale of Smart India Hackathon 2025, contributing to the design and development of innovative software solutions in a highly competitive national-level hackathon.',
      image: `${publicUrl}/Assets/SIHCertificate.png`,
      link: '',
      tag: 'National Innovation',
    },
    {
      id: 2,
      title: 'Delta - Full Stack Web Development',
      issuer: 'Apna College',
      date: '2025',
      description: 'Successfully completed an intensive full-stack web development program covering MERN stack, REST APIs, and real-world project building with practical implementation.',
      image: `${publicUrl}/Assets/delta.png`,
      link: '',
      tag: 'Full Stack MERN',
    },
    {
      id: 3,
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL (IIT Madras)',
      date: 'Oct 2025',
      description: 'Completed a 12-week NPTEL course with Elite certification, scoring 80%. Developed strong problem-solving skills and Python programming fundamentals through assignments and proctored exam.',
      image: `${publicUrl}/Assets/nptel-python.png`,
      link: '',
      tag: 'Elite (80%) Score',
    },
    {
      id: 4,
      title: 'Web Development Internship',
      issuer: 'Pinnacle Labs',
      date: 'Feb 2025',
      description: 'Completed a virtual internship in web development. Worked on real-world projects involving HTML, CSS, JavaScript, and Node.js, receiving a certificate of completion.',
      image: `${publicUrl}/Assets/pinnacle.png`,
      link: '',
      tag: 'Industry Internship',
    },
    {
      id: 5,
      title: 'Data Visualization Using Python',
      issuer: 'IBM Skills Network',
      date: 'Jan 2024',
      description: 'Gained hands-on experience in data visualization using Python libraries such as Matplotlib, Seaborn, and Folium for the creation and customization of graphical representation outputs for datasets.',
      image: `${publicUrl}/Assets/ibm-dataviz.png`,
      link: '',
      tag: 'Data Science',
    },
    {
      id: 6,
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'Jan 2025',
      description: 'Completed a practical simulation of real-world AWS architecture tasks including designing scalable cloud systems, cost optimization, and best-practice implementation.',
      image: `${publicUrl}/Assets/forage-aws.png`,
      link: '',
      tag: 'Cloud Architecture',
    },
  ];

  return (
    <section id="certificates" className={`certificates-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <span className="about-eyebrow">Verified Credentials</span>
              <h2 className="section-title mt-3">Licenses &amp; Certifications</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Verified industry credentials, competitive hackathon recognitions, and professional coursework</p>
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter') setLightboxImg(cert.image); }}
                  aria-label={`View enlarged certificate for ${cert.title}`}
                >
                  {cert.image ? (
                    <>
                      <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
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
        <div 
          className="cert-lightbox" 
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
        >
          <img 
            src={lightboxImg} 
            alt="Enlarged Certificate" 
            className="lightbox-img" 
            onClick={e => e.stopPropagation()} 
          />
          <button 
            className="lightbox-close" 
            onClick={() => setLightboxImg(null)}
            aria-label="Close preview"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;