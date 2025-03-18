"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../Omex Technology Style Component/OmexNavbar.css"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logoonly.jpg"

const OmexNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  // Close sidebar when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false)
      }
    }

    if (sidebarOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when sidebar is open on mobile
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden"
      }
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [sidebarOpen])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo">
            <img src={logo || "/placeholder.svg"} alt="Omex Logo" style={{ width: "60px", height: "50px" }} />
            <span style={{ color: "#0a152f" }}>Omex Technology Inc</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link to="/aboutOmex" className={location.pathname === "/aboutOmex" ? "nav-link active" : "nav-link"}>
            About Omex
          </Link>
          <Link to="/servicesOmex" className={location.pathname === "/servicesOmex" ? "nav-link active" : "nav-link"}>
            Services
          </Link>
          <Link to="/careerOmex" className={location.pathname === "/careerOmex" ? "nav-link active" : "nav-link"}>
            Careers
          </Link>
          <Link to="/supportOmex" className={location.pathname === "/supportOmex" ? "nav-link active" : "nav-link"}>
            Support
            <span className="badge">Contact</span>
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="right-icons">
          <button className="icon-button">
            <span className="translate-icon"></span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleSidebar} aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar - Only rendered on mobile when open */}
      {window.innerWidth < 768 && (
        <>
          {sidebarOpen && <div className="mobile-sidebar-overlay" onClick={closeSidebar}></div>}

          <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <div className="logo">
                <img src={logo || "/placeholder.svg"} alt="Omex Logo" style={{ width: "50px" }} />Omex Technology Inc
              </div>
              <button className="close-button" onClick={closeSidebar} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="sidebar-nav">
              <Link to="/" className="sidebar-link" onClick={closeSidebar}>
                Home
              </Link>
              <Link to="/aboutOmex" className="sidebar-link" onClick={closeSidebar}>
                About Omex
              </Link>
              <Link to="/servicesOmex" className="sidebar-link" onClick={closeSidebar}>
                Services
              </Link>
              <Link to="/careerOmex" className="sidebar-link" onClick={closeSidebar}>
                Careers
              </Link>
              <Link to="/supportOmex" className="sidebar-link" onClick={closeSidebar}>
                Support
              </Link>
              <Link to="/supportOmex" className="sidebar-link" onClick={closeSidebar}>
                <span className="badge mobile-badge">Contact</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default OmexNavbar

