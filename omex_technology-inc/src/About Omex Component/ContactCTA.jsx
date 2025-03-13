// components/ContactCta.jsx
import React, { useEffect, useRef } from 'react';
import '../AboutStyle/ContactCta.css';
import image21 from '../assets/eximage.jpeg';
import {Link} from 'react-router-dom';
const ContactCta = () => {
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = ctaRef.current.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="contact-section section" id="contact" ref={ctaRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-text fade-up">
            <h2 className="section-title" style={{color:'black'}}>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our innovative software solutions can help you achieve your business goals. Contact us today for a free consultation.</p>
            <div className="cta-buttons">
              <Link to="/supportOmex"> <button><a href="#" className="btn" style={{borderRadius:'10px'}}>Get in Touch</a></button></Link>
              <Link to="/supportOmex"> <button><a href="#" className="btn btn-outline">View Our Services</a></button></Link>
            </div>
          </div>
          <div className="contact-image fade-up">
            <div className="image-container">
              <img src={image21} alt="Innovation Hub" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;