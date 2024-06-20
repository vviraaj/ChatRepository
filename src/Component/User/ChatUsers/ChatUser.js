import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActiveUserId, updateUnreadCount } from "../../../redux/slices/Userslice";
import "./ChatUser.css";
import MenuVertical from "../../../Assets/Images/MenuVertical.svg";

const ChatUser = ({ user, activeUserId }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const userId = user.userId;
  const dropdownRef = useRef(null);

  const latestMessage =
    user.chat && user.chat.length > 0 ? user.chat[user.chat.length - 1] : null;
  const latestUserMessage =
    latestMessage && latestMessage[userId]
      ? latestMessage[userId].message
      : "No messages";

  useEffect(() => {
    const closeDropdown = (event) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [showDropdown]);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleClick = (userId) => {
    console.log(`Marking messages as read for user: ${userId}`);
    dispatch(updateUnreadCount({ userId, unreadCount: 0 }));
    dispatch(setActiveUserId(userId));
  };

  const handleMarkAsUnread = () => {
    console.log(`Marking messages as unread for user: ${userId}`);
    dispatch(updateUnreadCount({ userId, unreadCount: user.chat.length }));
    setShowDropdown(false);
  };

  return (
    <div
      className={`chat-user ${activeUserId === userId ? "active" : ""}`}
     
    >
      <div className="avatar" onClick={() => handleClick(userId)} >
        <img
          src={user?.profilePictureURL}
          alt={user.name}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      <div className="user-details-message" onClick={() => handleClick(userId)}>
        <div className="userName">{user.name}</div>
        <div className="latestUserMessage-count-container">
          <div className="latestUserMessage-container">
            <p>{latestUserMessage}</p>
          </div>

          {user.unreadCount > 0 && (
            <div className="unread-count-container">
              <p className="unread-count">{user.unreadCount}</p>
            </div>
          )}
        </div>
      </div>

      <div className="dropdown" ref={dropdownRef}>
        <img
          src={MenuVertical}
          alt="MenuVertical"
          className="MenuVertical"
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className="dropdown-content">
            <button onClick={handleMarkAsUnread}>Mark as Unread</button>
            <button onClick={() => console.log("Delete")}>Delete</button>
            <button onClick={() => setShowDropdown(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatUser;
