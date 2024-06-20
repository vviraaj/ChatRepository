import React from "react";
import "./Chat.css";
import ChatTitle from "./ChatTitle/ChatTitle";
import ChatScreen from "./ChatScreen/ChatScreen";
import ChatSendMessage from "./ChatSendMessage/ChatSendMessage";

const Chat = ({ isMobile }) => {
  return (
    <div className="chat">
      <ChatTitle isMobile={isMobile} />
      <ChatScreen />
      <ChatSendMessage />
    </div>
  );
};

export default Chat;
