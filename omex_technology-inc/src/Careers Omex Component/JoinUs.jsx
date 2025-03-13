// JoinUs.jsx
import React, { useEffect } from 'react';
import '../Careers style Component/JoinUs.css';

const JoinUs = () => {
  useEffect(() => {
    // Add animation classes when the component mounts
    const joinUsElement = document.querySelector('.join-us-content');
    joinUsElement.classList.add('animate-from-bottom');
  }, []);

  return (
    <section className="join-us-section">
      <div className="join-us-image">
        <img src="/path/to/your/image.jpg" alt="Team Collaboration" />
      </div>
      <div className="join-us-content">
        <h2>Join Our Innovative Team!</h2>
        <p>We’re building the future of technology, and we want you to be a part of it. If you're passionate about creativity, innovation, and making an impact, this is the place for you!</p>
        <a href="#open-positions" className="cta-button">Explore Open Positions</a>
      </div>
    </section>
  );
};

export default JoinUs;
