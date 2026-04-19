// src/components/Contact.jsx - With EmailJS Integration

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      emailjs
        .send(
          'service_i004vho',   // 🔹 Replace with your EmailJS Service ID
          'template_chjmndo',  // 🔹 Replace with your EmailJS Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'xA4XaXAWwQcsY8iC9'    // 🔹 Replace with your EmailJS Public Key
        )
        .then(() => {
          setShowAlert(true);
          setAlertType('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
          setTimeout(() => setShowAlert(false), 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setShowAlert(true);
          setAlertType('danger');
          setIsSubmitting(false);
          setTimeout(() => setShowAlert(false), 3000);
        });
    } else {
      setErrors(newErrors);
      setAlertType('danger');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'apoorvtripathi895@gmail.com',
      href: 'mailto:apoorvtripathi895@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9580775636',
      href: 'tel:+919580775636'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Kanpur, Up , India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/apoorvtripathi1/', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaGithub, href: 'https://github.com/Apoorv-Tripathi', label: 'GitHub', color: '#333' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1da1f2' },
    { icon: FaInstagram, href: 'https://www.instagram.com/techie_apoorv', label: 'Instagram', color: '#e4405f' }
  ];

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        {/* Header */}
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">
                Let's work together to bring your ideas to life
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-start">
          {/* Contact Info */}
          <Col lg={5} md={6} className="mb-5">
            <div className="contact-info-container">
              {/* Profile Section */}
              <div className="profile-section">
                <div className="profile-image-container">
                  <img
                    src="/Assets/ApoorvProffesionalPhoto.png"
                    alt="Profile"
                    className="contact-profile-image"
                  />
                  <div className="profile-glow"></div>
                </div>

                <div className="profile-info">
                  <h3 className="profile-name">Apoorv Tripathi</h3>
                  <p className="profile-title">Full Stack Developer</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="contact-details">
                <h4 className="contact-details-title">Contact Information</h4>

                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="contact-item"
                    onClick={item.href === '#' ? (e) => e.preventDefault() : undefined}
                  >
                    <div className="contact-icon">
                      <item.icon />
                    </div>
                    <div className="contact-content">
                      <h6>{item.title}</h6>
                      <span>{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="social-link"
                      style={{ '--social-color': color }}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7} md={6}>
            <div className="contact-form-container">
              <div className="form-header">
                <h3 className="form-title">Send me a message</h3>
                <p className="form-subtitle">
                  I'd love to hear about your project. Send me a message and I'll get back to you soon!
                </p>
              </div>

              {showAlert && (
                <Alert
                  variant={alertType}
                  className="custom-alert"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {alertType === 'success'
                    ? '🎉 Thank you for your message! I\'ll get back to you soon.'
                    : '⚠️ Something went wrong. Please try again.'}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'is-invalid' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Tell me more about your project..."
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </Form.Group>

                <Button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;