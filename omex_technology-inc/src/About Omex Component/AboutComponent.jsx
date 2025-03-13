// components/AboutSection.jsx
import React, { useEffect, useRef } from 'react';
import '../AboutStyle/AboutComponent.css';

const AboutComponent = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="about-section section" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title fade-up">Mission, Vision & Core Values</h2>
          </div>

          <div className="mission-vision fade-up">
            <div className="box mission-box">
              <div className="icon">
                <i className="bi bi-bullseye"></i>
              </div>
              <h3 style={{fontWeight:'bold',color:'navy'}}>Omex Mission</h3>
              <p>Empowering businesses with innovative technology solutions that enhance growth and efficiency.</p>
            </div>

            <div className="box vision-box">
              <div className="icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3 style={{fontWeight:'bold',color:'navy'}}>Omex Vision</h3>
              <p>To be a global leader in software innovation, shaping the future with groundbreaking technology.</p>
            </div>

            <div className="box values-box">
              <div className="icon">
                <i className="bi bi-award"></i>
              </div>
              <h3 style={{fontWeight:'bold',color:'navy'}}>Omex Philosophy</h3>
              <p>Integrity, innovation, and customer-centric solutions drive our mission forward.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;