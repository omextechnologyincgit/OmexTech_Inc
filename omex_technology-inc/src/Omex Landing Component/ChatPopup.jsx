import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "../Omex Technology Style Component/ChatPopup.css";  

const ChatPopup = ({ closePopup }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    setMessages([...messages, { sender: "user", text: userInput }]);
    setMessages([
      ...messages,
      { sender: "user", text: userInput },
      { sender: "bot", text: "Thank you for reaching out!" },
    ]);
    setUserInput("");
  };

  return (
    <div className="chat-popup">
      <div className="popup-header">
        <span>AI Chatbot</span>
        <FaRegWindowClose size={25} onClick={closePopup} />
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "bot" ? "bot-message" : "user-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..." style={{color:'black'}}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPopup;
