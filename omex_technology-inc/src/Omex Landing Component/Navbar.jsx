import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import '../Omex Technology Style Component/OmexNavbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoonly.jpg';

const OmexNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="terran" style={{ width: '60px',height:'50px' }} /> <span style={{color:'#0a152f'}}>Omex Technology Inc</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutOmex" className="nav-link">About Omex</Link>
          <Link to="/servicesOmex" className="nav-link">Services</Link>
          
          
          <Link to="/careerOmex" className="nav-link">Careers</Link>
          <Link to="/supportOmex" className="nav-link">
            Support
            <span className="badge">Contact</span>
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="right-icons">
          <button className="icon-button">
            <span className="translate-icon"></span>
          </button>
          <button className="icon-button">
            
          </button>
          <button className="icon-button">
            
          </button>
           
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="mobile-sidebar-overlay" style={{ backgroundColor: 'whitesmoke' }} onClick={closeSidebar}></div>
      )}
      
      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={logo} alt="terran" style={{ width: '200px' }} />
          </div>
          
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link">Home</Link>
          <Link to="/aboutOmex" className="sidebar-link">About Omex</Link>
          <Link to="/servicesOmex" className="sidebar-link">Services</Link>
         
          <Link to="/careerOmex" className="sidebar-link">Careers</Link>
          <Link to="/supportOmex" className="sidebar-link">Support</Link>
          <Link to="/supportOmex" className="sidebar-link">
            <span className="badge mobile-badge">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default OmexNavbar;
