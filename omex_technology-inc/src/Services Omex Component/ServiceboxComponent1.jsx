import React, { useEffect, useRef } from 'react';
import '../ServiceComponentStyle/ServiceComponent.css';
import serviceimage4 from '../assets/mobile app development.png';
import serviceimage5 from '../assets/custom software image.jpeg';
import serviceimage6 from '../assets/software support.jpeg';
import { Link } from 'react-router-dom';
const FeatureBoxes1 = () => {
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
                        <h1 className="feature-title" style={{color:'white'}}>Mobile App Development</h1>
                        <p className="feature-description">
                        Transform your ideas into powerful mobile experiences with our expert app development services. From iOS to Android,
                         we create seamless, intuitive, and user-friendly apps that engage users and drive results
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button active" ref={(el) => (toolButtonsRef.current[0] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-cut"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>User-Centric Design</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[1] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-film"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Cross-Platform Excellence</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[2] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-magic"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Engage & Retain Users</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[3] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-user-edit"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Fast Development and Deployment</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                        <img src={serviceimage4} alt="website kaka" style={{height:'300px'}} />
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

            {/* Audio Editing Feature Box */}
            <div className="feature-box audio-editing" ref={(el) => (featureBoxesRef.current[1] = el)}>
                <div className="feature-content">
                    <div className="feature-text">
                        <div className="feature-tagline" style={{color:'white'}}>Better productivity</div>
                        <h1 className="feature-title" style={{color:'white'}}>Support Projects</h1>
                        <p className="feature-description">
                        Need software that fits your business like a glove? Our custom software development provides tailored solutions to meet your unique needs, 
                        ensuring efficiency, scalability, and innovation in every line of code
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[4] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-volume-up"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Tailored Solutions</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[5] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-microphone-alt"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Scalable Architecture</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[6] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-music"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Efficient Workflow</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[7] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-sliders-h"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Fully Customizable</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                    <img src={serviceimage5} alt="web app kkk" style={{height:'300px'}} />
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
                        <h1 className="feature-title" style={{color:'white'}}>Custom Software Development:</h1>
                        <p className="feature-description">
                        Your tech challenges are our priority. We provide comprehensive support for ongoing projects, from bug fixes to enhancements, 
                        ensuring your software performs at its best—always ready for the next step
                        </p>

                        <div className="tools-grid">
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[8] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-random"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Reliable Support</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[9] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Quick Bug Fixes</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[10] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>Ongoing Enhancements</div>
                            </div>
                            <div className="tool-button" ref={(el) => (toolButtonsRef.current[11] = el)}>
                                <div className="tool-icon">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="tool-text" style={{color:'white'}}>24/7 Availability</div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-image">
                    <img src={serviceimage6} alt="tablll" style={{height:'300px'}} />
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

export default FeatureBoxes1;
