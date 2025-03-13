import React, { useEffect, useRef } from 'react';
import '../ServiceComponentStyle/ServiceComponent.css';
import serviceimage from '../assets/website image.jpeg';
import serviceimage1 from '../assets/web application.jpeg';
import serviceimage2 from '../assets/qa service image.jpeg';
import {Link} from 'react-router-dom';
const FeatureBoxes = () => {
    const featureBoxesRef = useRef([]);
    const toolButtonsRef = useRef([]);

    useEffect(() => {
        // Intersection Observer to handle scroll animations
        const featureBoxes = featureBoxesRef.current;

        // Set first box as active immediately
        featureBoxes[0].classList.add('active');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, options);

        // Start observing from the second box
        featureBoxes.forEach((box, index) => {
            if (index > 0) {
                observer.observe(box);
            }
        });

        // Add hover effect to tool buttons
        toolButtonsRef.current.forEach((button) => {
            button.addEventListener('click', function () {
                // Remove active class from siblings
                const parentGrid = this.closest('.tools-grid');
                if (parentGrid) {
                    parentGrid.querySelectorAll('.tool-button').forEach((btn) => {
                        btn.classList.remove('active');
                    });
                }
                // Add active class to clicked button
                this.classList.add('active');
            });
        });

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="bodyofservicebox">
        <div className="container">
            {/* Video Editing Feature Box */}
            <div className="feature-box video-editing" ref={(el) => (featureBoxesRef.current[0] = el)}>
                <div className="feature-content">
                    <div className="feature-text">
                        <div className="feature-tagline" style={{color:'white'}}>Time, Less</div>
                        <h1 className="feature-title" style={{color:'white'}}>Website Development</h1>
                        <p className="feature-description">
                        We Create stunning, responsive websites that engage and convert visitors. We design with purpose and build with precision
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button active" ref={(el) => (toolButtonsRef.current[0] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-cut"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Responsive Design</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[1] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-film"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Expert Developers</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[2] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-magic"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Animatic Design</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[3] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-user-edit"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Modern Tools and UI</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                        <img src={serviceimage} alt="website kaka" style={{height:'300px'}} />
                        <div className="feature-overlay">
                            <div className="scene-buttons">
                            
                            <Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}><div className="scene-button">Support</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}> <div className="scene-button">Contact Omex</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none',color:'white'}}> <div className="scene-button">Get in Touch</div></Link>
                            </div>
                            <div className="scene-snippets">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Audio Editing Feature Box */}
            <div className="feature-box audio-editing" ref={(el) => (featureBoxesRef.current[1] = el)}>
                <div className="feature-content">
                    <div className="feature-text">
                        <div className="feature-tagline" style={{color:'white'}}>Better productivity</div>
                        <h1 className="feature-title" style={{color:'white'}}>Web Application Development</h1>
                        <p className="feature-description">
                        Custom web apps that are fast, scalable, and tailored to your business needs. Innovating solutions for a seamless user experience
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[4] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-volume-up"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Custom Solutions</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[5] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-microphone-alt"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Scalable Solutions</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[6] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-music"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>High Performance</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[7] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-sliders-h"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Seamless Integration</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                    <img src={serviceimage1} alt="web app kkk" style={{height:'300px'}} />
                        <div className="feature-overlay">
                            <div className="scene-buttons">
                            <Link to="/supportOmex" style={{textDecoration:'none'}}><div className="scene-button">Support</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none'}}> <div className="scene-button">Contact Omex</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none'}}> <div className="scene-button">Get in Touch</div></Link>
                            </div>
                            <div className="scene-snippets">
                                
                                
                                 
                                 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transitions Feature Box */}
            <div className="feature-box transitions" ref={(el) => (featureBoxesRef.current[2] = el)}>
                <div className="feature-content">
                    <div className="feature-text">
                        <div className="feature-tagline" style={{color:'white'}}>Seamless Flow</div>
                        <h1 className="feature-title" style={{color:'white'}}>QA Services</h1>
                        <p className="feature-description">
                        We Deliver flawless experiences with our expert QA services. We test thoroughly to ensure your product is bug-free and ready for launch
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[8] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-random"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Bug-Free Launches</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[9] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Affordable Testing</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[10] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Reliable Results</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[11] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Exprt Team</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                    <img src={serviceimage2} alt="tablll" style={{height:'300px'}} />
                        <div className="feature-overlay">
                            <div className="scene-buttons">
                            <Link to="/supportOmex" style={{textDecoration:'none'}}><div className="scene-button">Support</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none'}}> <div className="scene-button">Contact Omex</div></Link>
                            <Link to="/supportOmex" style={{textDecoration:'none'}}> <div className="scene-button">Get in Touch</div></Link>
                            </div>
                            <div className="scene-snippets">
                                
                                
                                
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>



            
        </div>
        </div>
    );
};

export default FeatureBoxes;
