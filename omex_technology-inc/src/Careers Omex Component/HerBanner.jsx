// HeroBanner.jsx
import React from 'react';
import '../Careers style Component/CareersPagestyle.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="overlay"></div>
      <div className="hero-content" data-aos="fade-up">
        <h1>Join Our Team of Innovators</h1>
        <p>Build the future of software solutions with us</p>
        <a href="#open-positions" className="cta-button">View Open Positions</a>
      </div>
    </section>
  );
};
export default HeroBanner;