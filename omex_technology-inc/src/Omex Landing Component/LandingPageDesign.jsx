import React from 'react';
import '../Omex Technology Style Component/LandingPageDesign.css';
import imagel from '../assets/omexlandingimage.jpg';
import { IoLaptopOutline } from "react-icons/io5";
const LandingPageDesign = () => {
  return (
    <div className="enhancer-container">
      {/* Breadcrumb navigation */}
      <div className="breadcrumb">
        <a href="#">Home</a>
        <span>&gt;</span>
        <a href="#">About Omex</a>
        <span>&gt;</span>
        <span className="active">Omex Technology Inc</span>
      </div>

      {/* Main content wrapper */}
      <div className="content-wrapper">
        {/* Left side content */}
        <div className="content-left">
          <h1>Omex Technology Inc : Improve your Project Productivity</h1>
          
          <p className="description">
          At Omex Technology Inc., we’re not just a software company; 
          we’re your next strategic partner in technological success. We specialize in delivering cutting-edge, tailor-made software solutions that drive your business forward. Whether you’re a startup looking to scale or an established enterprise aiming to innovate, Omex Technology Inc.
           has the expertise, creativity, and dedication to make it happen.
          </p>
          
          <button className="try-free-btn">
            
            <IoLaptopOutline />&nbsp;&nbsp; Support
          </button>
          
          <p className="os-support">
          Let’s innovate and start your dream together.
          </p>
        </div>
        
        {/* Right side image */}
        <div className="content-right">
         <img src={imagel} alt="gdpr" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageDesign;