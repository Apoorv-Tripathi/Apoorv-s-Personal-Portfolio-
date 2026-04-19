import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaLightbulb, FaRocket, FaPalette, FaCogs, FaUsers } from 'react-icons/fa';
import SkillsShowcase from './SkillsShowcase';
import '../styles/About.css';

const About = ({ isDarkMode }) => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Creating responsive and performant web applications using modern frameworks and technologies with focus on user experience and scalability.'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with emphasis on user experience, accessibility, and modern design principles.'
    },
    {
      icon: FaCogs,
      title: 'Frontend Development',
      description: 'Building dynamic user interfaces with a responsive design, secure client-side interactions, and efficient data synchronization with backend services.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Analyzing complex technical challenges and delivering innovative solutions through critical thinking and creative approaches.'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Optimizing applications for maximum speed, efficiency, and best user experience across all devices and platforms.'
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams with excellent communication skills and collaborative project management approaches.'
    }
  ];

  const stats = [
    { number: '6+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Happy Clients' },
    { number: '12+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="about" className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">
                Passionate developer with expertise in creating digital solutions that make a difference
              </p>
            </div>
          </Col>
        </Row>

        {/* Detailed About Content */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="about-content-detailed">
              <Row>
                <Col lg={8} className="mb-4">
                  <div className="about-text-content">
                    <h3 className="about-main-title">Hello! I'm a Passionate Full Stack Developer</h3>

                    <div className="about-paragraphs">
                      <p className="about-paragraph">

                        My journey in software development began during my B.Tech in Computer Science and Engineering, where I discovered a passion for building digital solutions that solve real-world problems.
                      </p>

                      <p className="about-paragraph">
                        One of my most significant projects is my Portfolio Website, built using React and Bootstrap, which serves as a professional platform to showcase my skills, achievements, and projects. Through this project, I not only strengthened my expertise in React but also focused on clean UI/UX, responsive design, and structured content presentation.
                      </p>
                      <p className="about-paragraph">
                        As part of the Smart India Hackathon (SIH), I contributed as the Lead Developer (70% coding) in a team of six to build EcoJharkhand, a smart tourism platform designed to promote tourism in Jharkhand by providing interactive listings, responsive design, and a seamless user experience. This large-scale project gave me valuable experience in team collaboration, real-world deployment, and full-stack development.
                      </p>

                      <p className="about-paragraph">
                        I have also developed several other projects, including a Zerodha Clone (MERN stack) for stock trading simulation, Postify, a platform for creating and managing posts, and fun utility projects like API Wonderland. I further worked on responsive designs such as Project X (association website) and a Spotify Homepage Clone.

                      </p>

                      <p className="about-paragraph">
                        With strong expertise in React.js and hands-on experience across frontend, backend, and database systems, I focus on building seamless, user-friendly applications while continuously learning new technologies. My certifications from Apna College, IBM, and AWS further strengthen my technical foundation.<br></br>
                        Most recently, I successfully completed my Full Stack Web Developer Internship at Pinnacle Labs, where I worked on building and maintaining scalable web applications, further refining my skills in real-world development.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="stats-container-vertical">
                    {stats.map((stat, index) => (
                      <div key={index} className="stat-card">
                        <h4 className="stat-number">{stat.number}</h4>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Skills Showcase */}
        <SkillsShowcase isDarkMode={isDarkMode} />

        {/* Services Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="services-container">
              <h3 className="services-title text-center mb-5">What I Do</h3>
              <Row>
                {services.map((service, index) => (
                  <Col lg={4} md={6} key={index} className="mb-4">
                    <div className="service-card">
                      <div className="service-icon-container">
                        <service.icon className="service-icon" />
                      </div>
                      <h5 className="service-title">{service.title}</h5>
                      <p className="service-description">{service.description}</p>
                      <div className="service-hover-effect"></div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;