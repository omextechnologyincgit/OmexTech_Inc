// Footer.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import '../Omex Technology Style Component/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import logo from '../assets/logoonly.jpg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <div className="brand">
            <div className="logo">
              <span className="logo-icon">
                <img src={logo} alt="logohere" style={{width:'50px',height:'50px'}} />
              </span>
              <span className="logo-text">Omex Technology Inc</span>
            </div>
            <p className="brand-description">
              Transforming businesses with innovative technology solutions.
            </p>
           <span style={{color:'green',fontWeight:'bold'}}>Support Mail : </span> <p>contact@omextechnologyinc.com</p>
            <br/>
            <div className="social-icons">
              <Link to="/" className="social-icon"><FaFacebook /></Link>
              <Link to="/" className="social-icon"><FaTwitter /></Link>
              <Link to="/" className="social-icon"><FaInstagram /></Link>
              <Link to="/" className="social-icon"><FaLinkedin /></Link>
              
            </div>
          </div>
        </div>
        
        <div className="footer-section links-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/servicesOmex">Custom Software Development</Link></li>
            <li><Link to="/servicesOmex">Mobile App Development</Link></li>
            <li><Link to="/servicesOmex">Website Development</Link></li>
            <li><Link to="/servicesOmex">QA Services</Link></li>
            <li><Link to="/servicesOmex">Web Application Development</Link></li>
            <li><Link to="/servicesOmex">Support Projects</Link></li>
          </ul>
        </div>
        
        <div className="footer-section links-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/aboutOmex">About Us</Link></li>
            <li><Link to="/servicesOmex">Services</Link></li>
            <li><Link to="/">Capabilities</Link></li>
            <li><Link to="/careerOmex">Careers</Link></li>
            <li><Link to="/supportOmex">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section links-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Cookie Policy</Link></li>
            <li><Link to="/">Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="footer-bottom">
        <p className="copyright">© 2025 Omex Technology Inc. All rights reserved.</p>
        <p className="credits">Designed and developed with <span className="heart">❤</span></p>
      </div>
    </footer>
  );
};

export default Footer;
