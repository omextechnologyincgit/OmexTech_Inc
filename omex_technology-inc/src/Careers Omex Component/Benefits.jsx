// BenefitsSection.jsx
import React from 'react';
import '../Careers style Component/CareersPagestyle.css';
const Benefits = () => {
  const benefits = [
    {
      icon: "💻",
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and work arrangements."
    },
    {
      icon: "🌱",
      title: "Growth Opportunities",
      description: "Continuous learning, development budget, and career advancement."
    },
    {
      icon: "🏥",
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance, and competitive retirement plans."
    },
    {
      icon: "🎉",
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and wellness programs."
    },
    {
      icon: "🤝",
      title: "Inclusive Environment",
      description: "Diverse teams and a culture that celebrates differences."
    },
    {
      icon: "🚀",
      title: "Exciting Projects",
      description: "Work on cutting-edge technologies solving real-world problems."
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Work With Us</h2>
          <div className="underline"></div>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Benefits;