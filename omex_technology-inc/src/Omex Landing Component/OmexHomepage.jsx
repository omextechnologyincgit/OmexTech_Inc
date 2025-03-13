import React from 'react';
import '../Omex Technology Style Component/OmexHomePage.css';
import imageHome from '../assets/eximage.jpeg';
const OmexHomePage = () => {
  return (
    <div className="home-container">
      {/* Background Image */}
      <div className="bg-image" />
      
      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            <span className="title-part">The</span>
            <span className="title-part progressive">Progressive</span>
            <span className="title-part">JavaScript Framework</span>
          </h1>
          
          <p className="hero-description">
            An approachable, performant and versatile framework for building web user interfaces.
          </p>
          
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="18" height="18" className="play-icon">
                <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
                <path d="M15,12L10,15V9L15,12Z" fill="currentColor" />
              </svg>
              Why Vue
            </a>
            <a href="#" className="btn btn-secondary">
              Get Started →
            </a>
            <a href="#" className="btn btn-secondary">
              Install
            </a>
            <a href="#" className="btn btn-outline">
              Get Security Updates for Vue 2 ↗
            </a>
          </div>
        </div>
        
        
      </main>
    </div>
  );
};

export default OmexHomePage;