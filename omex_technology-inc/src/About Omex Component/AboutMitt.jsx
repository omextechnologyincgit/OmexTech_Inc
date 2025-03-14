import React, { useEffect, useState, useRef } from 'react';
import '../AboutStyle/AboutMitt.css';
import {Link} from 'react-router-dom';
const AboutMitt = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [visibleSections, setVisibleSections] = useState({
    section0: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false
  });

  useEffect(() => {
    setIsLoaded(true);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [`section${index}`]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-index', index);
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="bodyofaboutmitt">
    <div className="about-us-container">
      {/* Section 1: Hero Section */}
      <section 
        ref={sectionRefs[0]} 
        className={`hero-section ${visibleSections.section0 ? 'visible' : ''}`}
      >
        <div className="section-content">
          <div className="hero-text">
            <h1 className="section-title">
              We're <span className="gradient-text">Innovating</span> the Future of Software
            </h1>
            <p className="section-description">
              Omex Technology we've been at the forefront of digital transformation, 
              helping businesses leverage technology to achieve extraordinary results.
            </p>
            <div className="stats-container">
               
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="floating-shape shape1"></div>
              <div className="floating-shape shape2"></div>
              <div className="floating-shape shape3"></div>
              <div className="image-placeholder">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4A90E2" d="M47.7,-57.2C59.9,-45.7,67.2,-28.7,69.2,-11.1C71.1,6.4,67.7,24.5,57.7,37.1C47.7,49.7,31.1,56.8,13.2,62.5C-4.8,68.1,-24,72.3,-39.1,65.9C-54.1,59.5,-65,42.5,-70.2,23.9C-75.4,5.3,-74.9,-14.9,-66.1,-30.4C-57.3,-45.9,-40.3,-56.7,-23.5,-66.1C-6.7,-75.5,9.9,-83.5,24.8,-79.1C39.7,-74.7,52.9,-57.9,47.7,-57.2Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      {/* <section 
        ref={sectionRefs[1]} 
        className={`our-story-section ${visibleSections.section1 ? 'visible' : ''}`}
      >
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Story</span></h2>
            <p className="section-subtitle">From a small startup to an industry leader</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <h4>The Beginning</h4>
                <p>Founded in a small garage by three passionate engineers with a vision to change how businesses interact with technology.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2017</h3>
                <h4>First Major Client</h4>
                <p>Secured our first Fortune 500 client and expanded our team to 25 talented individuals across engineering and design.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <h4>International Expansion</h4>
                <p>Opened offices in London and Singapore, bringing our innovative solutions to a global market.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>2021</h3>
                <h4>Product Innovation</h4>
                <p>Launched our flagship AI-powered platform that revolutionized how companies manage their digital infrastructure.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Today</h3>
                <h4>Industry Leader</h4>
                <p>Now a team of 150+ experts serving clients in 30+ countries, we continue to push the boundaries of what's possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 3: Mission & Values */}
      <section 
        ref={sectionRefs[2]} 
        className={`mission-section ${visibleSections.section2 ? 'visible' : ''}`}
      >
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Mission & Values</span></h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="mission-statement">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.</p>
          </div>
          
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Collaboration</h4>
              <p>We believe in the power of teamwork and partnership with our clients to achieve shared success.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>We are committed to delivering the highest quality in everything we do, without compromise.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4>Integrity</h4>
              <p>We operate with transparency, honesty, and ethical standards in all our interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Team */}
      {/* <section 
        ref={sectionRefs[3]} 
        className={`team-section ${visibleSections.section3 ? 'visible' : ''}`}
      >
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Meet Our <span className="gradient-text">Leadership</span></h2>
            <p className="section-subtitle">The visionaries driving our company forward</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                
                 
              </div>
              <h4>Sarah Johnson</h4>
              <p className="member-title">Chief Executive Officer</p>
              
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
                <div className="member-social">
                 
                </div>
              </div>
              <h4>Michael Chen</h4>
              <p className="member-title">Chief Technology Officer</p>
               
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
                <div className="member-social">
                  <a href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <h4>Jessica Rodriguez</h4>
              <p className="member-title">Chief Product Officer</p>
              
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
                <div className="member-social">
                  <a href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <h4>David Wilson</h4>
              <p className="member-title">Chief Marketing Officer</p>
              
            </div>
          </div>
          
          <div className="team-cta">
            <p>Join our team of innovators and problem-solvers</p>
             <Link to="/careerOmex"><button className="cta-button">View Career Opportunities</button></Link>
          </div>
        </div>
      </section> */}

      {/* Section 5: Achievements */}
      <section 
        ref={sectionRefs[4]} 
        className={`achievements-section ${visibleSections.section4 ? 'visible' : ''}`}
      >
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Team of Talents</span></h2>
            <p className="section-subtitle">Milestones that mark our journey of excellence</p>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <h3>Frontend Developers</h3>
              <p> Innovating Web Experiences – TechCrunch Recognized for Excellence in Developing Websites.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Backend Developers</h3>
              <p>We have a Team of Talented and smartWorking Backend Developers.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h3>Ful Stack Developers</h3>
              <p>A Fully creative and scalable application building Developers</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>DevOps Team</h3>
              <p>Fully experienced devops team that deploy your Project into Browsers.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </div>
              <h3>UI / UX Designers</h3>
              <p>Talented RUI / UX Designers.</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Expert QA Testers</h3>
              <p>Fully expert in QA Service.</p>
            </div>
          </div>
          
           
          
          <div className="contact-cta">
            <h3>Ready to transform your business?</h3>
            <p>Let's discuss how our innovative solutions can help you achieve your goals.</p>
             <Link to="/supportOmex"><button className="cta-button">Get in Touch</button></Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutMitt;
