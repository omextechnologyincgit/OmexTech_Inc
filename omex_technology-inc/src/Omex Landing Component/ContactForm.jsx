// ContactForm.jsx
import React, { useState } from 'react';
import '../Omex Technology Style Component/ContactForm.css';
import { FiArrowRight } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredContact: 'email',
    message: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Ready to transform your business?</h2>
          <p className="contact-description">
            Contact us today to discuss how our innovative solutions can help your business grow and succeed in the digital age.
          </p>
          
          <ul className="service-list">
            <li>Custom software development</li>
            <li>Mobile and web applications</li>
            <li>Cloud infrastructure solutions</li>
            <li>IT consulting and strategy</li>
          </ul>
        </div>
        
        <div className="contact-right">
          <h3>Get in touch</h3>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="reach-us-section">
              <label className="reach-label">Reach us via</label>
              <div className="reach-buttons">
                <button
                  type="button"
                  className={`reach-button ${formData.preferredContact === 'email' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, preferredContact: 'email'})}
                >
                  Email
                </button>
                <button
                  type="button"
                  className={`reach-button ${formData.preferredContact === 'phone' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, preferredContact: 'phone'})}
                >
                  Phone
                </button>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="terms-container">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <a href="#">Terms and Conditions</a>
              </label>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message <FiArrowRight className="arrow-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;