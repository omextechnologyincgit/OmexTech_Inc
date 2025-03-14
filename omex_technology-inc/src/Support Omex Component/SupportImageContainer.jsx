// ContactHero.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../Support Omex Component/ContactHero.css';

const ContactHeroo = () => {
  return (
    <div className="contact-hero">
      <div className="hero-content">
        <h1>Get In Touch With Omex Technology Inc</h1>
        <p>We'd love to hear from you! Reach out today and let's start a conversation.</p>
        
        <div className="contact-buttons">
        <a href="mailto:contact@omextechnologyinc.com" style={{textDecoration:'none'}}>
          <button className="contact-btn">
            <Mail size={18} />
            <span>Email Us</span>
          </button>
          </a>
           
        </div>
      </div>
    </div>
  );
};

export default ContactHeroo;