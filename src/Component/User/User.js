import React from "react";
import { useSelector } from "react-redux";
import "./User.css";
import ChatUser from "./ChatUsers/ChatUser";

const User = () => {
  const users = useSelector((state) => state.user.users);
  const activeUserId = useSelector((state) => state.user.activeUserId);

  return (
    <div className="user">
      <div className="user-container">
        <p className="title">Chat</p>
        {users.map((user) => (
          <ChatUser
            key={user.userId}
            user={user}
            activeUserId={activeUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
