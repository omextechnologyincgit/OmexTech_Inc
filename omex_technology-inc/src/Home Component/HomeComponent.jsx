"use client"

import { useState, useEffect, useRef } from "react"
import "../Home CSS/global.css";
import { Search, Menu, X } from 'lucide-react'
import {Link} from 'react-router-dom';
import logo from '../assets/logoonly.jpg'

const HomeMitt = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
  const [isChangingHeading, setIsChangingHeading] = useState(false)
  
  // Array of different headings to cycle through
  const headings = [
    "Make your websites look 10x awesome and Beautiful",
    "Create stunning UI Applications with user Friendly",
    "Build professional websites in Animatic and Responsive",
    " We have excellent and smartworking Team of Developers and Designers and Testers",
    "Transform your ideas into reality"
  ]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Effect for changing the heading text every 3 seconds
  useEffect(() => {
    const headingInterval = setInterval(() => {
      setIsChangingHeading(true)
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length)
        setIsChangingHeading(false)
      }, 500) // Half of the transition time
      
    }, 3000)

    return () => clearInterval(headingInterval)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="bodyofhomemitt">
    <div className="aceternity-ui">
      {/* Announcement Banner */}
      <div className="announcement-banner">
        Introducing Omex Technology - Transforming visions into reality, one breakthrough at a time to build awesome websites.
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <div className="logo-icon">
                <img src={logo} alt="classic cassino" style={{width:'200px',height:'50px'}}/>
            </div>
            <span className="logo-text">Omex Technology</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-only">
            <Link to="/">Home</Link>
            <Link to="/aboutOmex" className="templates-link">
              About Omex
               
            </Link>
            <Link to="servicesOmex">Services</Link>
            <Link to="/careerOmex">Careers</Link>
            <Link to="/supportOmex">Support</Link>
          </div>
        </div>

        <div className="navbar-right">
          <button className="menu-toggle mobile-only" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
            <img src={logo} alt="classic cassino" style={{width:'200px',height:'50px'}}/>
            </div>
            <span className="logo-text">Omex Technology</span>
          </div>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>
        <div className="sidebar-links">
        <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/aboutOmex" onClick={toggleSidebar}>
            About Omex
          </Link>
          <Link to="/servicesOmex" onClick={toggleSidebar}>
            Services
          </Link>
          <Link to="/careerOmex" onClick={toggleSidebar}>
            Careers
          </Link>
          
          <Link to="/supportOmex" onClick={toggleSidebar}>
            Support
          </Link>
          <Link to="/supportOmex" onClick={toggleSidebar}>
            Contact
          </Link>
        </div>
         
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-left">
            <div className="template-badge">
              <span>Introducing Omex Technology Inc</span>
              <span className="arrow">→</span>
            </div>
            <h1 className={`hero-title ${isChangingHeading ? 'fade-out' : 'fade-in'}`}>
              {headings[currentHeadingIndex]}
            </h1>
            <p className="hero-description">
            Innovation drives us forward, and technology shapes the future. At the heart of progress, we stand committed to delivering 
            cutting-edge solutions that empower businesses to reach their full potential.
            </p>
            <div className="hero-buttons">
              <Link to="/supportOmex"><button className="btn-primary">Contact Omex Technology Inc</button></Link>
              <Link to="/servicesOmex"><button className="btn-secondary">Custom Software development</button> </Link>
               
            </div>
            
          </div>
          <div className="hero-right">
            
            <div className="demo-card">
                <h2 className="demo-title">Beautify your website with omex Technology</h2>
                <p className="demo-description" style={{color:'white'}}>
                  With Omex Technology, you can build great looking websites within Time.
                </p>
                <div className="demo-content">
                  <div className="hover-text" style={{fontWeight:'bold'}}>A website speak more than words</div>
                  {/* Moving dots - increased to 30 dots */}
                  {Array.from({ length: 30 }).map((_, index) => (
                    <div
                      key={index}
                      className={`moving-dot dot-${index + 1}`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 3}px`,
                        height: `${Math.random() * 4 + 3}px`,
                        opacity: Math.random() * 0.3 + 0.2,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            <div className="feature-cards">
              <div className="feature-card blue">
                <div className="feature-icon">→</div>
                <h3 className="feature-title">Amazing Tailwind CSS Grid Layouts</h3>
                <div className="image-grid">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid-image"></div>
                  ))}
                </div>
              </div>
              <div className="feature-card dark">
                <div className="feature-arrow">→</div>
              </div>
            </div>
            
            {/* Additional containers - first row */}
            <div className="additional-containers">
              <div className="additional-card blue">
                <div className="additional-icon">→</div>
                <h3 className="additional-title">Responsive Design</h3>
                <p className="additional-description">Build modern interfaces with our Designers and Developers</p>
                <div className="additional-footer">
                  <div className="tag">Web development</div>
                  <div className="tag">Mobile development</div>
                  <div className="tag">QA Services</div>
                </div>
              </div>
              <div className="additional-card dark">
                <div className="additional-content">
                  <div className="additional-arrow">→</div>
                  <span className="additional-text">QA Services</span>
                </div>
              </div>
            </div>
            
            {/* Additional containers - second row */}
             
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
    </div>
  )
}

export default HomeMitt;
