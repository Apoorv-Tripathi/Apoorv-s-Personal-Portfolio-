import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const publicUrl = process.env.PUBLIC_URL || '';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('apoorvtripathi895@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      emailjs
        .send(
          'service_i004vho',   
          'template_chjmndo',  
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'xA4XaXAWwQcsY8iC9'    
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
          setTimeout(() => setShowAlert(false), 4000);
        });
    } else {
      setErrors(newErrors);
      setAlertType('danger');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <span className="about-eyebrow">Get In Touch</span>
              <h2 className="section-title mt-3">Let's Build Something Great</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Have a project, a full-time opening, or want to discuss architecture? Reach out anytime!</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info-card">
              <div className="contact-profile">
                <img 
                  src={`${publicUrl}/Assets/ApoorvProffesionalPhoto.png`} 
                  alt="Apoorv Tripathi" 
                  className="contact-avatar" 
                />
                <div className="contact-name">Apoorv Tripathi</div>
                <div className="contact-role">Full Stack Developer</div>
                <div className="contact-status-chip">
                  <span className="chip-dot"></span> Available for Hire
                </div>
              </div>

              <div className="info-section-title">Direct Contact</div>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-wrap"><FaEnvelope /></div>
                  <div className="info-content-flex">
                    <div>
                      <div className="info-label">Email</div>
                      <a href="mailto:apoorvtripathi895@gmail.com" className="info-value info-link">
                        apoorvtripathi895@gmail.com
                      </a>
                    </div>
                    <button 
                      className="contact-copy-btn" 
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <FaCheck className="copy-done" /> : <FaCopy />}
                    </button>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrap"><FaPhone /></div>
                  <div>
                    <div className="info-label">Phone</div>
                    <a href="tel:+919580775636" className="info-value info-link">
                      +91 9580775636
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrap"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">Kanpur, UP, India (Open to Remote / Relocate)</div>
                  </div>
                </div>
              </div>

              <div className="social-section-title">Professional Profiles</div>
              <div className="contact-socials">
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/apoorvtripathi1/', label: 'LinkedIn' },
                  { icon: FaGithub, href: 'https://github.com/Apoorv-Tripathi', label: 'GitHub' },
                  { icon: SiLeetcode, href: 'https://leetcode.com/u/ApoorvTripathi89/', label: 'LeetCode' },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a 
                    key={i} 
                    href={href} 
                    className="contact-social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Open ${label}`}
                    title={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={8} className="mb-4">
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-subtitle">
                Fill out the form below and I'll respond within 24 hours. You can also email directly at{' '}
                <a href="mailto:apoorvtripathi895@gmail.com" className="direct-email-inline">
                  apoorvtripathi895@gmail.com
                </a>.
              </p>

              {showAlert && (
                <div className={`form-alert ${alertType}`}>
                  {alertType === 'success' 
                    ? '✓ Message sent successfully! Thank you for reaching out, I will get back to you shortly.' 
                    : '✗ Submission failed. Please try again or reach out directly at apoorvtripathi895@gmail.com.'}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                        required
                      />
                      {errors.name && <div className="field-error">{errors.name}</div>}
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                        required
                      />
                      {errors.email && <div className="field-error">{errors.email}</div>}
                    </div>
                  </Col>
                </Row>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`form-control-custom ${errors.subject ? 'is-invalid' : ''}`}
                    required
                  />
                  {errors.subject && <div className="field-error">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or role details..."
                    className={`form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                    required
                  />
                  {errors.message && <div className="field-error">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                  aria-label="Send message to Apoorv"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;