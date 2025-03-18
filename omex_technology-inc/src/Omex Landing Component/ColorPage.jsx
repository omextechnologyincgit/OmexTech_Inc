"use client"

import { useState, useEffect } from "react"
import "../Omex Technology Style Component/HeroColor.css"
import { Link } from "react-router-dom"
import { MessageSquare } from "lucide-react" 
import image1 from '../assets/landingpageimage.jpg';
import image2 from '../assets/qa services image landingpage.jpeg'

const HeroColor = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".filmora-hero-container")
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true) // Trigger the animation when the section is in the viewport
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`filmora-hero-container ${isVisible ? "visible" : ""}`}>
      <div className="filmora-hero-content">
        <div className="filmora-hero-left">
          <div className="filmora-logo-container">
            <div className="filmora-logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#00BCD4" />
                <path d="M29 14L20 20L11 14V26L20 32L29 26V14Z" fill="white" />
              </svg>
            </div>
            <div className="filmora-logo-text"></div>
          </div>
          <div className="filmora-hero-text">
            <h2>Innovating the future, one line of code at a time.</h2>
          </div>
          <div className="filmora-hero-buttons">
            <button className="btn-get-started">
              <MessageSquare size={18} className="contact-icon" /> {/* Added icon */}
              <Link to="/supportOmex" style={{ textDecoration: "none", color: "inherit" }}>
                Get in Touch
              </Link>
            </button>
          </div>
        </div>
        <div className="filmora-hero-right">
          <div className="filmora-image-stack">
            <div className="filmora-image image-1">
              <img
                src={image1}
                alt="Mobile app development interface showing smartphone applications"
              />
              <div className="tech-badge">
                <span>Mobile</span>
              </div>
            </div>
            <div className="filmora-image image-2">
              <img
                src={image2}
                alt="Web development interface showing responsive design on laptop"
              />
              <div className="ai-badge">
                <span>Web</span>
              </div>
            </div>
            {/* Removed image-3 */}
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
  )
}

export default HeroColor

