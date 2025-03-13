"use client"

import React, { useEffect, useRef } from "react"
import { Search, Bell, Settings, Code, Database, Cloud } from "lucide-react"
import "../Omex Technology Style Component/OmexHomeNew.css"

const FloatingElements = () => {
  const elementsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const elements = elementsRef.current?.querySelectorAll(".floating-element")
    if (!elements) return

    const animateElements = () => {
      elements.forEach((element, index) => {
        
        // Create random gentle floating movement
        const translateY = Math.sin(Date.now() / 1000 + index) * 10
        const translateX = Math.cos(Date.now() / 1500 + index) * 5
        htmlElement.style.transform = `translate(${translateX}px, ${translateY}px)`
      })

      // Continue the animation by requesting the next frame
      requestAnimationFrame(animateElements)
    }

    // Start the animation loop
    const animationId = requestAnimationFrame(animateElements)

    // Clean up when component unmounts
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="floating-elements-container" ref={elementsRef}>
      <div className="floating-element search-bar">
        <Search size={16} />
        <input type="text" placeholder="Search solutions..." />
      </div>

      <div className="floating-element notification">
        <Bell size={16} />
        <span>New features available!</span>
      </div>

      <div className="floating-element code-block">
        <Code size={16} />
        <pre>
          <code>{"const future = await tech.innovate();"}</code>
        </pre>
      </div>

      <div className="floating-element feature-card">
        <Database size={20} />
        <h3>Cloud Storage</h3>
        <p>Secure, scalable storage solutions</p>
      </div>

      <div className="floating-element feature-card">
        <Cloud size={20} />
        <h3>API Integration</h3>
        <p>Seamless connectivity</p>
      </div>

      <div className="floating-element settings">
        <Settings size={16} />
        <span>Configure</span>
      </div>
    </div>
  )
}

export default FloatingElements
