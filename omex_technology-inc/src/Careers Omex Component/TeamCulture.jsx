// TeamCultureSection.jsx
import React from 'react';
import '../Careers style Component/CareersPagestyle.css';
const TeamCultureSection = () => {
  const testimonials = [
    {
      quote: "Working here has been the highlight of my career. The culture of innovation and support has helped me grow both professionally and personally.",
      name: "Sarah J.",
      role: "Senior Developer",
      image: "/api/placeholder/80/80"
    },
    {
      quote: "I've never worked at a company that cares so much about its employees while still pushing the boundaries of what's possible in technology.",
      name: "Michael T.",
      role: "Product Manager",
      image: "/api/placeholder/80/80"
    },
    {
      quote: "The collaborative environment and growth opportunities here are unmatched. Every day brings exciting new challenges.",
      name: "Elena R.",
      role: "UX Designer",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="culture-section" id="culture">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Culture</h2>
          <div className="underline"></div>
        </div>
        <div className="culture-content">
          <div className="culture-images" data-aos="fade-right" data-aos-delay="200">
            <div className="image-grid">
              <img src="/api/placeholder/300/200" alt="Team event" />
              <img src="/api/placeholder/300/200" alt="Office space" />
              <img src="/api/placeholder/300/200" alt="Team collaboration" />
              <img src="/api/placeholder/300/200" alt="Company retreat" />
            </div>
          </div>
          <div className="culture-text" data-aos="fade-left" data-aos-delay="300">
            <h3>What Makes Us Different</h3>
            <p>
              We believe that great software is built by great people. Our culture celebrates 
              creativity, collaboration, and continuous improvement. We're committed to creating 
              an environment where innovative thinkers can thrive.
            </p>
            <p>
              Our core values guide everything we do:
            </p>
            <ul className="values-list">
              <li><strong>Innovation:</strong> We push boundaries and embrace new ideas</li>
              <li><strong>Excellence:</strong> We're committed to quality in everything we create</li>
              <li><strong>Collaboration:</strong> We achieve more by working together</li>
              <li><strong>Integrity:</strong> We do what's right, even when no one is watching</li>
              <li><strong>Growth:</strong> We're always learning and evolving</li>
            </ul>
          </div>
        </div>
        
        <div className="testimonials" data-aos="fade-up" data-aos-delay="400">
          <h3>What Our Team Says</h3>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;