// FrameworkHero.jsx
import React, { useEffect } from 'react';
import '../Omex Technology Style Component/heroMitt.css';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroMitt = ({ backgroundImage }) => {
  useEffect(() => {
    // Add animation class after component mounts
    const titleElement = document.querySelector('.hero-title');
    setTimeout(() => {
      titleElement.classList.add('title-animated');
    }, 100);
  }, []);

  return (
    <div className="hero-container">
      {backgroundImage && <img src={backgroundImage} alt="Background" className="background-image" />}
      <div className="hero-content">
        <h1 className="hero-title">
           
          <center><span className="title-gradient" style={{fontSize:'45px'}}>Transform Your Business With
          <br/> Modern Technology with Less Time<br/>and Better Productivity</span></center>
           
        </h1>
        
        <p className="hero-description">
          An approachable, high-performance and versatile framework for creating modern web applications.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <Play size={20} className="btn-icon" />
           Better Productivity
          </button>
          
          <button className="btn btn-secondary">
          Best Desings <ArrowRight size={18} className="btn-icon" />
          </button>
          
          <button className="btn btn-secondary">
            High Performance
          </button>
          
          <Link to="/servicesOmex">
          <button className="btn btn-outline">
            Website Development <ExternalLink size={16} className="btn-icon" />
          </button>
          <button className="btn btn-outline">
            Web App Development <ExternalLink size={16} className="btn-icon" />
          </button>
          <button className="btn btn-outline">
          QA Services <ExternalLink size={16} className="btn-icon" />
          </button>
          <button className="btn btn-outline">
            Mobile App Development <ExternalLink size={16} className="btn-icon" />
          </button>
          </Link>
        </div>
      </div>
      
      <div className="sponsor-section">
        <span className="sponsor-label">contact@omextechnologyinc.com</span>
        <div className="sponsor-logo">
           
        </div>
         <Link to="/servicesOmex" style={{textDecoration:'none'}}><span className="partner-label">Get in Touch</span></Link>
      </div>
    </div>
  );
};

export default HeroMitt;