// AboutSection.jsx
import React from 'react';
import '../Careers style Component/CareersPagestyle.css';
const AboutCareers = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right" data-aos-delay="200">
            <h3>We're Transforming Industries Through Innovation</h3>
            <p>
              Founded in 2018, our company has been at the forefront of developing
              cutting-edge software solutions that empower businesses to thrive in
              the digital era. We combine technical excellence with creative problem-solving
              to deliver products that make a real difference.
            </p>
            <p>
              Our team consists of passionate individuals who are committed to pushing
              the boundaries of what's possible in software development. We value
              collaboration, continuous learning, and the pursuit of excellence.
            </p>
          </div>
          <div className="about-image" data-aos="fade-left" data-aos-delay="300">
            <img src="/api/placeholder/500/400" alt="Team collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutCareers;