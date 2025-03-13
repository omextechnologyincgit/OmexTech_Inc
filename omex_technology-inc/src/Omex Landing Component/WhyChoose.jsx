import React, { useState, useEffect } from 'react';
import '../Omex Technology Style Component/WhyChoose.css';
import image from '../assets/eximage.jpeg';
import image1 from '../assets/choose 1.png';
import image2 from '../assets/choose 2.png';
import image3 from '../assets/choose 3.png';

const WhyChooseOmex = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Images for alag alag steps 
  const stepImages = [
    image1, 
    image2, 
    image3  
  ];
  
  // rotate steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % 3) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="guide-container">
      <h1 className="guide-title">Ready to innovate? Let’s create something amazing together.</h1>
      
      <p className="guide-intro">
      We don’t just build software. We craft powerful, game-changing solutions that fuel growth, ignite innovation, and drive success. As a bold and forward-thinking startup,
       we’re here to disrupt the ordinary and create 
      extraordinary digital experiences that leave a lasting impact.
      </p>
      
       
      <div className="guide-content">
        <div className="guide-image-container">
          <img 
            src={stepImages[currentStep - 1]} 
            alt={`Step ${currentStep} demonstration`} 
            className="guide-image"
          />
        </div>
        
        <div className="guide-steps-container">
          <div className={`step-indicator ${currentStep >= 1 ? 'active' : ''}`}></div>
          
          <div className="guide-steps">
            <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
              <h3 className="step-title">Omex Technology: Fast, Furious, and Future-Ready with Technology</h3>
              <p className="step-description">
              We move at lightning speed without compromising quality. With Omex, you get cutting-edge technology that’s
               future-proof, scalable, and ready to evolve with your business.
              </p>
            </div>
            
            <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
              <h3 className="step-title">Omex Technology: Agile and Responsive</h3>
              <p className="step-description">
              In the fast-paced digital world, agility is key. We adapt swiftly to your evolving needs,
               ensuring timely delivery without compromising quality.
              </p>
            </div>
            
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
              <h3 className="step-title">Omex Technology: Innovative Excellence</h3>
              <p className="step-description">
              We don't just follow industry trends; we set them. Our team thrives on pushing boundaries, 
              delivering cutting-edge solutions that keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-container">
        <button className="cta-button">Get into Action</button>
      </div>
    </div>
  );
};

export default WhyChooseOmex;