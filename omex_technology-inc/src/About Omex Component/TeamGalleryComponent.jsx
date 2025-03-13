// components/TeamGallery.jsx
import React, { useEffect, useRef } from 'react';
import '../AboutStyle/Team.css';

const TeamGallery = () => {
  const galleryRef = useRef(null);
  
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
    
    const elements = galleryRef.current.querySelectorAll('.team-member');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const teamMembers = [
    { name: "Sarah Johnson", role: "CTO", image: "/api/placeholder/300/300" },
    { name: "Michael Chen", role: "Lead Developer", image: "/api/placeholder/300/300" },
    { name: "Elena Rodriguez", role: "UX Director", image: "/api/placeholder/300/300" },
    { name: "David Kim", role: "Product Manager", image: "/api/placeholder/300/300" },
    { name: "Jessica Williams", role: "Creative Director", image: "/api/placeholder/300/300" },
    { name: "Robert Taylor", role: "Data Scientist", image: "/api/placeholder/300/300" },
  ];

  return (
    <section className="team-section section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title fade-up">Our Team</h2>
        <p className="team-intro fade-up">
          Meet the talented professionals behind our innovative solutions. Our diverse team brings together expertise from various backgrounds.
        </p>
        
        <div className="team-grid">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div className="team-member fade-up" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="overlay-content">
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-grid second-row">
          {teamMembers.slice(3).map((member, index) => (
            <div className="team-member fade-up" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="overlay-content">
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;