// components/AnimationLogic.jsx
import React, { useEffect } from 'react';

const AnimationLogic = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return null;
};

export default AnimationLogic;