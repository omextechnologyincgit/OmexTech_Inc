import React, { useEffect } from 'react';
import '../Careers style Component/CareersPagestyle.css';

import AOS from 'aos';

// Components
import HeroBanner from '../Careers Omex Component/HerBanner';
import AboutSection from '../Careers Omex Component/AboutCareers';
import BenefitsSection from '../Careers Omex Component/Benefits';
// import OpenPositionsSection from '../Careers Omex Component/OpenPositions';
import TeamCultureSection from '../Careers Omex Component/TeamCulture';
import JoinUs from '../Careers Omex Component/JoinUs';

const CareerPage = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="career-page">
      <HeroBanner />
      <AboutSection />
      <BenefitsSection />
      {/* <OpenPositionsSection /> */}
      <TeamCultureSection />
      <JoinUs />
    </div>
  );
};

export default CareerPage;