import React from 'react' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./app.css"
// import LandingHome from './Omex Landing Component/LandingHome';
import OmexNavbar from './Omex Landing Component/Navbar';
import HomeMitt from './Home Component/HomeComponent';
import AboutSection from './Omex Landing Component/AboutSection';
import OmexServices from './Omex Landing Component/OmexServices';
import WhyChooseOmex from './Omex Landing Component/WhyChoose';
import LandingPageDesign from './Omex Landing Component/LandingPageDesign';
import HeroColor from './Omex Landing Component/ColorPage';
import Footer from './Omex Landing Component/Footer';
import BotIcon from './Omex Landing Component/BotIcon';

import SupportHome from './Support Omex Component/SupportHome';

import ServiceMain from './Services Omex Component/HeroCompoServices';
import FeatureBoxes from './Services Omex Component/ServiceboxComponent';
 import FeatureBoxes1 from './Services Omex Component/ServiceboxComponent1';
import PodcastFeatures from './Services Omex Component/ServiceEnhance'; 
import ServicesHome from './Services Omex Component/ServicesHome';


import AboutHomeK from './About Omex Component/AboutHome';
import AboutInfo from './About Omex Component/AboutInfo';
import JoinUsSectionAbout from './About Omex Component/JoinUsTeamImages';
import AboutComponent from './About Omex Component/AboutComponent';
import CultureValues from './About Omex Component/CoreValues';
import TechStack from './About Omex Component/TeamStackComponent';

import AboutMitt from './About Omex Component/AboutMitt';

import ContactCta from './About Omex Component/ContactCTA';

import SupportMain from './Support Omex Component/SupportMain';


import CareersClaude from './Careers Omex Component/CareersClaude';
import FAQSection from './Careers Omex Component/FAQ';

import ContactHeroo from './Support Omex Component/SupportImageContainer';

function App() {
   

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={
                    <>
                     
                     
                    <HomeMitt />
                    
                       <AboutSection/>
                       <OmexServices />
                        <WhyChooseOmex />
                        <br/>
                        <LandingPageDesign />
                        <HeroColor />  
                        <Footer />
                        <BotIcon />

                       
                       
                         
                    </>
                } />
                         <Route path="/aboutOmex" element={
                    <>
                     
                    <OmexNavbar/>
                     <AboutMitt/>
                     
                     
                    <Footer/>
                        </>
                    } />


                    <Route path="/servicesOmex" element={
                    <>
                    <OmexNavbar />
                     <ServiceMain />
                     <FeatureBoxes />
                     <FeatureBoxes1 />
                     <PodcastFeatures />
                    
                     
                    <Footer/>
                        </>
                    } />
                        {/*Career ka page*/}
                        <Route path="/careerOmex" element={
                            <>
                                 <OmexNavbar/>
                                <CareersClaude />
                                <FAQSection />
                                <Footer />
                            </>
                        } />

 {/*Support page here}*/}
                 <Route path="/supportOmex" element={
                    <>
                   <OmexNavbar/>
                   <ContactHeroo/>
                    <SupportHome/>
                     
                    <Footer/>
                        </>
                    } />

                
            </Routes>
        </Router>
     
    </>
  )
}

export default App





{/*<LandingHome />
    <AboutSection />
    <OmexServices />
    <WhyChooseOmex />
    <br/>
     <LandingPageDesign />
    
     <HeroColor />  
 
       
      <Footer />*/}
