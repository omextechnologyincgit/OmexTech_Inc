// ContactPage.jsx
import React, { useState } from 'react';
import '../ContactStyle/Contact.css';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCommentAlt, 
  FaLaptopCode, 
  FaHeadset, 
  FaMapMarkerAlt, 
  FaClock 
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bodyofcontact">
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-image-container">
          <div className="image-overlay">
            <h1 style={{color:'black'}}>Get in Touch</h1>
            <p>We'd love to hear from you. Let's build something amazing together!</p>
            
            <div className="email-box">
              <div className="email-icon">
                <FaEnvelope />
              </div>
              <div className="email-content">
                <h3 style={{color:'black'}}>Email Us</h3>
                <p style={{color:'black'}}>contact@omextechnologyinc.com</p>
              </div>
            </div>
            
            <h1 style={{color :'black',fontWeight:'bold',fontSize:'24px'}}>Follow Omex Technology Inc</h1>
               
            <div className="company-info">
              <div className="info-box">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 style={{color:'black'}}>Location</h4>
                  <p>Austin, TX</p>
                </div>
              </div>
              
              <div className="info-box">
                 
                
              </div>
              
              <div className="info-box">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div>
                  <h4 style={{color:'black'}}>Working Hours</h4>
                  <p>Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and our team will get back to you soon</p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="input-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group full-width">
              <div className="input-icon">
                <FaLaptopCode />
              </div>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Purpose</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
              </select>
            </div>
            
            <div className="form-group full-width">
              <div className="input-icon textarea-icon">
                <FaCommentAlt />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="support-container">
        <div className="support-icon">
          <FaHeadset />
        </div>
        <div className="support-content">
          <h2>24/7 Customer Support</h2>
          <p>Our team of expert engineers and software developers are here round the clock to help you overcome any technical challenges. We're dedicated to providing innovative solutions for your business needs.</p>
          <div className="support-stats">
            <div className="stat-box">
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>30min</h3>
              <p>Average Response Time</p>
            </div>
            <div className="stat-box">
              <h3>100+</h3>
              <p>Enterprise Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;