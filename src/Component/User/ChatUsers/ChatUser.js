import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "../../../redux/slices/Userslice";
import "./ChatUser.css";
import MenuVertical from "../../../Assets/Images/MenuVertical.svg";

const ChatUser = ({ user, activeUserId, setActiveUserId }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadMessageCount, setUnreadMessageCount] = useState(
    user.unreadCount
  );
  const [originalUnreadCount, setOriginalUnreadCount] = useState(
    user.unreadCount
  );
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
    setOriginalUnreadCount(user.unreadCount);
  }, [user.unreadCount]);

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
    setUnreadMessageCount(0);
    dispatch(setUserId(userId));
    setActiveUserId(userId);
  };

  const handleMarkAsUnread = () => {
    setTimeout(()=>{
      setUnreadMessageCount(originalUnreadCount);
    },50)
 
    setShowDropdown(false);
  };

  return (
    <div
      className={`chat-user ${activeUserId === userId ? "active" : ""}`}
      onClick={() => handleClick(userId)}
    >
      <div className="avatar">
        <img
          src={user?.profilePictureURL}
          alt={user.name}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      <div className="user-details-message">
        <div className="userName">{user.name}</div>
        <div className="latestUserMessage-count-container">
          <div className="latestUserMessage-container">
            <p>{latestUserMessage}</p>
          </div>

          {unreadMessageCount > 0 && (
            <div className="unread-count-container">
              <p className="unread-count">{unreadMessageCount }</p>
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
