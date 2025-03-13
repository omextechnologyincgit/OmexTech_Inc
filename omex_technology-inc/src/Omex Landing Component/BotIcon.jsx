import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import ChatPopup from "../Omex Landing Component/ChatPopup";
import "../Omex Technology Style Component/BotIcon.css";   

const BotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`bot-icon ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <FaRobot size={40} color="black" />
      </div>
      {isOpen && <ChatPopup closePopup={handleClick} />}
    </div>
  );
};

export default BotIcon;
