import React, { useState, useEffect } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import {Link} from 'react-router-dom';
import '../Omex Technology Style Component/LandingHome.css';
import image1 from '../assets/image1.jpeg';
const LandingHome = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <div className="bodyofcc">
    <div className="app">
      <div className="dots-background"></div>

      {/* Header */}
      <header>
        <div className="navbar">
          <div className="logo-container">
            <h1>Omex Technology Inc</h1>
            
          </div>
          
          <div className="desktop-menu">
            <nav>
              <ul>
              <li><Link to="/"><RiHome2Fill /></Link></li>
               <li><Link to="/aboutOmex">About Omex</Link></li>
               <li><Link to="/servicesOmex">Services</Link></li>
                <li><Link to="/servicesOmex">Capabilities</Link></li>
                <li><Link to="/careerOmex">Career</Link></li>
                <li><Link to="/supportOmex">Support</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="right-nav">
            <div className="new-version">
              <span><MdOutlineMail /><Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}>Contact with Omex Technologies</Link></span>
            </div>
            
            <div className="search-bar">
              <input type="text" placeholder="Omex Technology..." />
              
            </div>
          </div>

          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}><RiHome2Fill /></Link></li>
            <li><Link to="/aboutOmex" onClick={toggleMobileMenu}>About Omex</Link></li>
            <li><Link to="/servicesOmex" onClick={toggleMobileMenu}>Services</Link></li>
             
            <li><Link to="/servicesOmex" onClick={toggleMobileMenu}>Capabilities</Link></li>
            <li><Link to="/supportOmex" onClick={toggleMobileMenu}>Careers</Link></li>
            <li><Link to="/servicesOmex" onClick={toggleMobileMenu}>Support</Link></li>
          </ul>
           
        </div>
      </div>

      {/* Hero Section */}
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1 style={{color:'#0a152f'}}>
             We Create Better <span className="highlight">Applications</span><br />
              regardless of your design and User <br />
              experience.
            </h1>
            <p>We Build and develop Beautiful, fast websites using Modern Tools with Omex.</p>
            
            <div className="cta-buttons">
              <button className="get-started"><Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}>Contact</Link><span>→</span></button>
              <div className="code-snippet">
                <code style={{color:'black'}}><Link to="/aboutOmex" style={{color:'black',textDecoration:'none'}}>Learn More</Link></code>
                <span className="copy-icon">📋</span>
              </div>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="floating-box pro-box">
              <span style={{color:'black'}}>🚀 We build better applications in less time wiht good Productivity</span>
              <button className="pro-button" style={{color:'black'}}>Website Development →</button>
            </div>
            
            <div className="card-container">
              <div className="feature-card camera-card floating-element">
                <div className="camera-image">
                    <img src={image1} alt="terio" style={{width:'100px',height:'100px'}}/>
                </div>
                 
              </div>
              
              <div className="tabs floating-element">
                <div className="tab active">Web Application</div>
                <div className="tab">QA Services</div>
                <div className="tab">Custom Software Development</div>
              </div>
              
              
              
              <div className="profile-card floating-element">
                <div className="profile-header">
                  <div className="profile-pic"></div>
                  <div className="profile-info">
                    <h3>Omex Technology Inc</h3>
                    <span>@Omex</span>
                  </div>
                  <button className="follow-button"><Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}>Contact</Link></button>
                </div>
                
                 
              </div>
              
              
              
              <div className="loading-card floating-element">
                <div className="loader"></div>
              </div>
              
              <div className="love-badge floating-element">
                <span>Join with Us</span>
              </div>
              
              <div className="tooltip-demo floating-element">
                <span>Support Projects</span>
              </div>
              
              <div className="audio-image floating-element">
                {/* Audio player image with headphones */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating elements animation */}
      <div className="animated-wave"></div>
    </div>
    </div>
  );
};

export default LandingHome;