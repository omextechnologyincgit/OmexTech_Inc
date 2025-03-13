// components/TechStack.jsx
import React, { useEffect, useRef } from 'react';
import '../AboutStyle/TeamStack.css';

const TechStack = () => {
  const techRef = useRef(null);
  
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
    
    const elements = techRef.current.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="tech-section section" ref={techRef}>
      <div className="container">
       <center><h2 className="section-title fade-up">Our Technology Stack</h2></center>
        <p className="tech-intro fade-up">
          We leverage cutting-edge technologies to deliver scalable, secure, and high-performance solutions tailored to your business needs.
        </p>
        
        <div className="tech-grid fade-up">
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Frontend Developers</h3>
            <p>We create responsive, intuitive interfaces using React, Angular, and Vue.js to deliver exceptional user experiences.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Backend Developers</h3>
            <p>Our robust backend solutions use Node.js, Python, Java, and .NET to power your applications with scalable architecture.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 16l-8-8-8 8"></path>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <h3>Full Stack Developers</h3>
            <p>We build native and cross-platform mobile applications using React Native, Flutter, and Swift for iOS and Android.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v12"></path>
                <path d="M6 12h12"></path>
              </svg>
            </div>
            <h3>UI / UI Designers</h3>
            <p>Our cloud expertise spans AWS, Azure, and Google Cloud, enabling secure, scalable, and cost-effective solutions.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Mobile App Developers</h3>
            <p>We implement CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes for seamless delivery.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <h3>QA Software Testers</h3>
            <p>We leverage AI and ML technologies to create intelligent applications that learn and adapt to your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;