import React, { useState, useEffect } from "react";
import "./User.css";
import ChatUser from "./ChatUsers/ChatUser";
import data from "../../data";

const User = ({ setActiveUserId }) => {
  const [activeUserId, setActiveUserIdState] = useState(null);
 

  return (
    <div className="user">
      <div className="user-container">
        <p className="title">Chat</p>
        {data.map((user) => (
          <ChatUser
            key={user.userId}
            user={user}
            activeUserId={activeUserId}
            setActiveUserId={(id) => {
              setActiveUserIdState(id);
              setActiveUserId(id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
