import React, { useEffect } from 'react';
import '../ServiceComponentStyle/ServiceEnhance.css';

const PodcastFeatures = () => {
  useEffect(() => {
    // Animation for feature cards on scroll or page load
    const featureCards = document.querySelectorAll('.feature-card');
    
    const animateCards = () => {
      featureCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200); // Stagger the animations
      });
    };
    
    // Run animation on component mount
    animateCards();
    
    // Optional: Re-run animation when scrolled into view
    const handleScroll = () => {
      const section = document.querySelector('.podcast-features-container');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        animateCards();
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="podcast-features-container">
      <div className="podcast-bg-overlay"></div>
      
      {/* Main content with two people podcasting */}
      <div className="podcast-content">
        {/* Feature Card - Top */}
        <div className="feature-card top-card">
          <h3>Innovative Solutions for Your Business</h3>
          <p>At Omex, we provide cutting-edge software solutions that drive growth and innovation.</p>
        </div>
        
        {/* Feature Card - Left */}
        <div className="feature-card left-card">
          <h3>Transforming Ideas into Reality</h3>
          <p>Omex specializes in custom software development, turning your unique ideas into robust, scalable solutions that are built to last.</p>
        </div>
        
        {/* Feature Card - Right */}
        <div className="feature-card right-card">
          <h3>Reliable Support, Anytime You Need It</h3>
          <p>With Omex, you're never alone. Our dedicated support team is always available to help, ensuring your systems run smoothly and efficiently.</p>
        </div>
      </div>
      
      {/* Bottom gradient/bar */}
      <div className="bottom-gradient"></div>
    </div>
  );
};

export default PodcastFeatures;