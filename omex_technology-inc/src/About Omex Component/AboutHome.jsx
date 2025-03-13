import React, { useState, useEffect } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import '../ServiceComponentStyle/ServiceHome.css';
import image1 from '../assets/choose 1.png';

const AboutHomeK = () => {
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
              <h1 style={{ fontSize: '1rem' }}>Omex Technology Inc</h1>
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
                <span><MdOutlineMail /><Link to="/supportOmex" style={{ textDecoration: 'none', color: 'white' }}>Contact with Omex Technologies</Link></span>
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

        {/* Hero Section with Image */}
        <div className="hero-section">
          <img src={image1} alt="Background" className="hero-image" />
          <div className="hero-content">
            <center><h1 style={{ color: '#0a152f' }}>
              We Create Better <span className="highlight">Applications</span><br />
              regardless of your design and User <br />
              experience.
            </h1></center>
            <p style={{ color: 'black' }}>We Build and develop Beautiful, fast websites using Modern Tools with Omex.</p>

            <div className="cta-buttons">
              <button className="get-started">
                <Link to="/supportOmex" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link><span>→</span>
              </button>
              <div className="code-snippet">
                <code style={{ color: 'black' }}><Link to="/aboutOmex" style={{ color: 'black', textDecoration: 'none' }}>Learn More</Link></code>
                <span className="copy-icon">📋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHomeK;
