import React, { useEffect, useRef } from 'react';
import '../AboutStyle/AboutUs.css';
import aboutimage from '../assets/aboutinfo.jpg';
const AboutInfo = () => {
  const imageContainerRef = useRef(null);
  
  useEffect(() => {
    // Animation on page load
    setTimeout(() => {
      if (imageContainerRef.current) {
        imageContainerRef.current.classList.add('animate-in');
      }
    }, 300);
    
    // Animation on scroll
    const handleScroll = () => {
      const container = imageContainerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible && !container.classList.contains('animate-in')) {
        container.classList.add('animate-in');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bodyofinfo">
    <div className="about-sectionn">
      <div className="content-container">
        <div className="text-content">
          <p className="about-label">ABOUT US</p>
          <h2 className="heading" style={{fontWeight:'bold',fontSize:'1.6rem'}}>Building the future, one digital solution at a time.</h2>
          <p className="description" style={{color:'black'}}>
          At Omex Technology Inc, we specialize in providing top-tier services including website development,
           web application development, mobile app development, and comprehensive quality assurance solutions. Whether you're looking to create a stunning website, develop a robust web app, or craft a seamless mobile experience, our expert team ensures innovative, reliable, and scalable solutions that meet your business needs. We also support and manage projects from start to finish, ensuring quality at every step with our dedicated QA services.
           
            experiences.
          </p>
          <button className="signup-button">Sign Up for Free</button>
        </div>
        <div className="image-container" ref={imageContainerRef}>
          <div className="circle-background"></div>
          <div className="image-wrapper">
            <img src={aboutimage} alt="Person working on laptop" className="main-image" />
          </div>
          <div className="dotted-pattern"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutInfo;