import React from "react";
import "./ChatSendMesage.css";
import Attach from "../../../Assets/Images/Attach.svg";
import Voice from "../../../Assets/Images/Voice.svg";
import Send from "../../../Assets/Images/Send.svg";

const ChatSendMessage = () => {
  return (
    <div className="chat-send-message">
      <div className="icons">
        <img src={Attach} alt="attach" />
        <img src={Voice} alt="voice" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type a message..." />
        <img src={Send} alt="send" className="send-icon" />
      </div>
    </div>
  );
};

export default ChatSendMessage;
