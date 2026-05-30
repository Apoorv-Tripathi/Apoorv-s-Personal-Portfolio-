import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter,  FaPaperPlane,FaCode } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setIsSubmitting(true);
    emailjs.send('service_yn9qjxm', 'template_portfolio', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setAlertType('success');
        setShowAlert(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowAlert(false), 5000);
      })
      .catch(() => { setAlertType('danger'); setShowAlert(true); })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
              <p className="section-subtitle">Let's work together to bring your ideas to life</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info-card">
              <div className="contact-profile">
                <img src="/Assets/ApoorvProffesionalPhoto.png" alt="Apoorv Tripathi" className="contact-avatar" />
                <div className="contact-name">Apoorv Tripathi</div>
                <div className="contact-role">Full Stack Developer</div>
              </div>

              <div className="info-section-title">Contact Information</div>
              <div className="info-items">
                {[
                  { icon: FaEnvelope, label: 'Email', value: 'apoorvtripathi895@gmail.com' },
                  { icon: FaPhone, label: 'Phone', value: '+91 9580775636' },
                  { icon: FaMapMarkerAlt, label: 'Location', value: 'Kanpur, UP, India' },
                ].map(({ icon: Icon, label, value }) => (
                  <div className="info-item" key={label}>
                    <div className="info-icon-wrap"><Icon /></div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section-title">Follow Me</div>
              <div className="contact-socials">
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/apoorvtripathi1/' },
                  { icon: FaGithub, href: 'https://github.com/Apoorv-Tripathi' },
                  { icon: FaCode,   href: 'https://leetcode.com/u/ApoorvTripathi89/' },
                  
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} className="contact-social-link" target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={8} className="mb-4">
            <div className="contact-form-card">
              <h3 className="form-title">Send me a message</h3>
              <p className="form-subtitle">I'd love to hear about your project. Send me a message and I'll get back to you soon!</p>

              {showAlert && (
                <div className={`form-alert ${alertType}`}>
                  {alertType === 'success' ? '✓ Message sent successfully! I\'ll get back to you soon.' : '✗ Failed to send. Please try again or email directly.'}
                </div>
              )}

              <div>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                      />
                      {errors.name && <div className="field-error">{errors.name}</div>}
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                      />
                      {errors.email && <div className="field-error">{errors.email}</div>}
                    </div>
                  </Col>
                </Row>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`form-control-custom ${errors.subject ? 'is-invalid' : ''}`}
                  />
                  {errors.subject && <div className="field-error">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project..."
                    className={`form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                  />
                  {errors.message && <div className="field-error">{errors.message}</div>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
