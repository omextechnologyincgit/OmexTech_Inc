import React from "react";
import "../AboutStyle/CultureValues.css";
import { FaLightbulb, FaUsers, FaBell, FaRocket } from "react-icons/fa";

const CultureValues = () => {
  const values = [
    {
      icon: <FaLightbulb />, 
      title: "Innovation First", 
      description: "We encourage creative thinking and embrace new ideas. Our workspace is designed to inspire innovation and breakthrough solutions."
    },
    {
      icon: <FaUsers />, 
      title: "Collaborative Spirit", 
      description: "We believe in the power of teamwork. Our success is built on open communication, mutual respect, and shared goals."
    },
    {
      icon: <FaBell />, 
      title: "Growth Mindset", 
      description: "We invest in our people's development. Every day is an opportunity to learn, grow, and push boundaries."
    },
    {
      icon: <FaRocket />, 
      title: "Excellence Driven", 
      description: "We strive for excellence in everything we do, continuously improving and setting higher standards."
    }
  ];

  return (
    <div className="bodyofaboutcore">
    <div className="culture-container">
      <h2 className="culture-title">Our Culture & Values</h2>
      <div className="culture-grid">
        {values.map((value, index) => (
          <div className="culture-card" key={index}>
            <div className="icon-container">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CultureValues;