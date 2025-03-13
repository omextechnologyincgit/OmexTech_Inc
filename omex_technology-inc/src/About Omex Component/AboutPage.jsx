// App.jsx
import React from 'react';
import HeroBannerAbout from './HeroCompo'; 
import AboutInfo from './AboutInfo';
 import JoinUsSectionAbout from './JoinUsTeamImages';
 import AboutComponent from './AboutComponent';
import CultureValues from './CoreValues';
import TechStack from './TeamStackComponent';



const AboutPage = ()=> {
  return (
     
     <>
        <HeroBannerAbout />
        <AboutInfo />
        <JoinUsSectionAbout />
        <AboutComponent />
        <CultureValues />
        {/* <TeamGallery /> */}
        <TechStack />
         
     </>
  );
}

export default AboutPage;