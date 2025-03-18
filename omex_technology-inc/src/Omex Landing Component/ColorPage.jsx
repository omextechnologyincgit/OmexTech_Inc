import React, { useState, useEffect } from 'react';
import '../Omex Technology Style Component/HeroColor.css';
import image1 from '../assets/imagelandingpage1.jpg';
import image2 from '../assets/imagelandingpage2.jpg';
import { Link } from 'react-router-dom';
const HeroColor = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.filmora-hero-container');
      const rect = heroSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Trigger the animation when the section is in the viewport
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`filmora-hero-container ${isVisible ? 'visible' : ''}`}>
      <div className="filmora-hero-content">
        <div className="filmora-hero-left">
          <div className="filmora-logo-container">
            <div className="filmora-logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#00BCD4" />
                <path d="M29 14L20 20L11 14V26L20 32L29 26V14Z" fill="white" />
              </svg>
            </div>
            <div className="filmora-logo-text">
              
            </div>
          </div>
          <div className="filmora-hero-text">
            <h2>Innovating the future, one line of code at a time.</h2>
          </div>
          <div className="filmora-hero-buttons">
            <button className="btn-get-started">
              
              <Link to="/supportOmex" style={{textDecoration:'none'}}>Get in Touch</Link>
            </button>
           
          </div>
        </div>
        <div className="filmora-hero-right">
          <div className="filmora-image-stack">
            <div className="filmora-image image-1"  style={{height:'100%'}}>
              <img src={image1} alt="Woman in white dress" />
            </div>
            <div className="filmora-image image-2" style={{height:'100%',width:'600px'}}>
              <img src={image2} alt="Man with camera" />
              <div className="ai-badge">
                <span>AI</span>
              </div>
            </div>
            <div className="filmora-image image-3">
              <img src={image1} alt="Man with guitar" />
            </div>
            <div className="filmora-floating-element purple-circle">
              <div className="circle-inner"></div>
            </div>
            <div className="filmora-floating-element video-control">
              <div className="control-bar">
                <span className="control-icon"></span>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroColor;
