import React, { useEffect, useState } from 'react';
import '../Omex Technology Style Component/OmexServices.css';
import image1 from '../assets/image 1 omex.jpeg';
import image2 from '../assets/mobile app dev image.webp';
import image3 from '../assets/QA SERVICES.png';
import image4 from '../assets/image 2 omex.jpeg';
import image5 from '../assets/web app development.jpeg';
import image6 from '../assets/custom software development.jpg'
const OmexServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showPosition = 100; // Adjust this value to control when the animation triggers
      
      if (scrollPosition > showPosition) {
        setIsVisible(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Website Development",
      info: "Automatically detect and precisely cut out portrait subjects with smart edge detection.",
      image: image1 
    },
    {
      title: "Web Application Development",
      info: "Remove video backgrounds with one click, perfect for professional content creation.",
      image: image5
    },
    {
      title: "QA Services",
      info: "Intelligently match and harmonize colors across your entire project with AI assistance.",
      image: image3
    },
    {
      title: "Support Projects",
      info: "AI-powered editing tools that enhance your content with professional quality results.",
      image: image4
    },
    {
      title: "Mobile App Development",
      info: "Clean up and enhance audio automatically with advanced AI processing.",
      image: image2
    },
    {
      title: "Custom Software development",
      info: "Generate accurate captions for your videos using state-of-the-art speech recognition.",
      image: image6
    }
  ];

  return (
    <div className={`ai-features-container ${isVisible ? 'visible' : ''}`}>
      <div className="ai-features-gradient-bg">
        <div className="ai-features-content">
          <h2 className="ai-features-title">Omex Software Services</h2>
          
          <div className="ai-features-grid">
            {features.map((feature, index) => (
              <div className="ai-feature-box" key={index}>
                <div className="ai-feature-image-container">
                  <img src={feature.image} alt={feature.title} className="ai-feature-image" />
                  <div className="ai-feature-overlay">
                    <div className="ai-feature-info">
                      <p>{feature.info}</p>
                    </div>
                  </div>
                </div>
                <h3 className="ai-feature-title">{feature.title}</h3>
              </div>
            ))}
          </div>
          
           
        </div>
      </div>
    </div>
  );
};

export default OmexServices;