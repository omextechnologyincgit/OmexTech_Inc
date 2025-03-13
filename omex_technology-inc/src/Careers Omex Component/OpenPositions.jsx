 

// OpenPositionsSection.jsx
import React, { useState } from 'react';
import '../Careers style Component/CareersPagestyle.css';
const OpenPositionsSection = () => {
  const departments = ["Engineering", "Product", "Design", "Marketing", "Operations"];
  const [activeTab, setActiveTab] = useState("Engineering");

  const positions = {
    "Engineering": [
      {
        title: "Senior Full Stack Developer",
        location: "Remote / San Francisco",
        type: "Full-Time"
      },
      {
        title: "DevOps Engineer",
        location: "New York",
        type: "Full-Time"
      },
      {
        title: "Mobile Developer (iOS/Android)",
        location: "Remote",
        type: "Full-Time"
      }
    ],
    "Product": [
      {
        title: "Product Manager",
        location: "San Francisco",
        type: "Full-Time"
      },
      {
        title: "Product Analyst",
        location: "Remote",
        type: "Full-Time"
      }
    ],
    "Design": [
      {
        title: "UX/UI Designer",
        location: "Remote / San Francisco",
        type: "Full-Time"
      }
    ],
    "Marketing": [
      {
        title: "Digital Marketing Specialist",
        location: "New York",
        type: "Full-Time"
      }
    ],
    "Operations": [
      {
        title: "HR Specialist",
        location: "San Francisco",
        type: "Full-Time"
      },
      {
        title: "Office Manager",
        location: "New York",
        type: "Part-Time"
      }
    ]
  };

  return (
    <section className="positions-section" id="open-positions">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Open Positions</h2>
          <div className="underline"></div>
        </div>
        <div className="positions-container" data-aos="fade-up" data-aos-delay="200">
          <div className="department-tabs">
            {departments.map(dept => (
              <button 
                key={dept} 
                className={`tab-button ${activeTab === dept ? 'active' : ''}`}
                onClick={() => setActiveTab(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="positions-list">
            {positions[activeTab].map((position, index) => (
              <div className="position-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{position.title}</h3>
                <div className="position-details">
                  <span><i className="fas fa-map-marker-alt"></i> {position.location}</span>
                  <span><i className="fas fa-clock"></i> {position.type}</span>
                </div>
                <a href="#" className="apply-button">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
        <div className="no-positions" data-aos="fade-up" data-aos-delay="300">
          <p>Don't see a position that fits your skills?</p>
          <a href="#" className="general-apply-button">Send a General Application</a>
        </div>
      </div>
    </section>
  );
};
 