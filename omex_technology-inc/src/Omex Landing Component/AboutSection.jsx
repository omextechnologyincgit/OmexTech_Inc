import React, { useEffect } from 'react';
import '../Omex Technology Style Component/AboutSection.css';
import aboutomex from '../assets/omex image about sectionn.png'
import {Link} from 'react-router-dom';
const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    const sectionContainer = document.querySelector('.section-container');
    if (sectionContainer) {
      observer.observe(sectionContainer);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (sectionContainer) {
        observer.unobserve(sectionContainer);
      }
    };
  }, []);

  return (
    <div className="section-container" id="read-more-button">
      {/* Who We Are Section */}
      <div className="who-we-are">
        <h2>WHO WE ARE</h2>
        <p>
  Omex Technology - renowned for its expertise in providing innovative software solutions across various industries. With a strong commitment to quality and cutting-edge technology, Omex Technology has been at the forefront of digital transformation, offering a wide range of custom software, cloud solutions, and enterprise applications. Our solutions empower businesses to streamline operations, enhance productivity, and accelerate growth, playing a pivotal role in shaping the future of technology and contributing to the success of our clients.
</p>
         <Link to="/aboutOmex" className="about-btn">ABOUT US</Link>
      </div>

      {/* How We Do It Section */}
      <div className="how-we-do-it">
        <div className="image-container">
          <img src={aboutomex} alt="Handshake over blueprints" />
        </div>
        <div className="content">
          <h2>HOW WE DO IT</h2>
          <p>
            At Omex Technology, we understand that our success is driven by the talent and dedication of our people. This is why we are committed to making Shalom Constructions a great place to work, where every individual has the opportunity to thrive and grow. Our core values and culture are built on excellence, teamwork, and innovation, and we are constantly evolving to provide an environment that nurtures both professional and personal development.
          </p>
           <Link to="/supportOmex" className="get-in-touch">GET IN TOUCH</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
