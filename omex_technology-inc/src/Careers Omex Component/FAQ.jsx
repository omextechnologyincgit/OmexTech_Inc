import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import '../Careers style Component/FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <h3>What services does Omex Technology Inc. provide?</h3>
            <span>{activeIndex === 0 ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>Omex Technology Inc. offers a range of services including Website Development, Web Application Development, Mobile App Development, and QA services.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <h3>How long does it take to develop a website?</h3>
            <span>{activeIndex === 1 ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>The timeline depends on the complexity and requirements of the project. On average, a website can take anywhere from 4 to 12 weeks to develop.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <h3>Can Omex Technology Inc. help with mobile app development?</h3>
            <span>{activeIndex === 2 ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Yes, we specialize in developing both Android and iOS mobile applications tailored to your business needs and user experience goals.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <h3>What is QA testing, and why is it important?</h3>
            <span>{activeIndex === 3 ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>QA testing ensures that your software is free of bugs and errors before it reaches the market. It is crucial for maintaining quality and user satisfaction.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(4)}>
            <h3>Do you offer ongoing support after the project is completed?</h3>
            <span>{activeIndex === 4 ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          {activeIndex === 4 && (
            <div className="faq-answer">
              <p>Yes, we provide post-development support, including maintenance, updates, and troubleshooting, to ensure your product remains efficient and up-to-date.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
