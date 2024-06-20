import React from "react";
import "./ChatTitle.css";
import MenuVertical from "../../../Assets/Images/MenuVertical.svg";
import Call from "../../../Assets/Images/Call.svg";
import VideoCall from "../../../Assets/Images/VideoCall.svg";
import { useDispatch, useSelector } from "react-redux";
import data from "../../../data";
import arrow from "../../../Assets/Images/ChevronLeft.svg";
import { setActiveUserId } from "../../../redux/slices/Userslice";

const ChatTitle = ({ isMobile }) => {
  const selectedUserId = useSelector((state) => state.user.activeUserId);
  const dispatch = useDispatch();

  const filteredData = data.find((item) => item.userId === selectedUserId);

  return (
    <div className="chat-conatiner">
      {selectedUserId && isMobile ? (
        <img
          className="back-button"
          onClick={() =>  dispatch(setActiveUserId(null))}
          src={arrow}
          alt=""
        />
      ) : (
        ""
      )}
      <div className="info_container">
        <img
          src={filteredData?.profilePictureURL || "./avatar.png"}
          alt="avatar"
          className="avatar"
        />

        <div className="description-container">
          <div className="title-online">
            <p className="chat-title-name">{filteredData?.name}</p>
            <div className="online-dot"></div>
          </div>

          <p className="chat-title-decr">{filteredData?.description}</p>
        </div>
      </div>
      <div className="icons_container">
        <img src={Call} alt="avatar" />
        <img src={VideoCall} alt="avatar" />
        <img src={MenuVertical} alt="avatar" />
      </div>
    </div>
  );
};

export default ChatTitle;
