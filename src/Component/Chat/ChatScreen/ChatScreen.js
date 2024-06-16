import React, { useEffect, useRef, useState } from "react";
import "./ChatScreen.css";
import { useSelector } from "react-redux";
import data from "../../../data";
import Loader from "../../../Common/Loader";

const ChatScreen = () => {
  const selectedUserId = useSelector((state) => state.user.selectedUserId);
  const [filteredUser, setFilteredUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {

    if (selectedUserId !== null) {
      setLoader(true);
      const user = data.find((user) => user.userId === selectedUserId);
      setTimeout(() => {
        setLoader(false);
        setFilteredUser(user);
      }, 1000);
    }
  }, [selectedUserId]);

  useEffect(() => {
    if (filteredUser) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [filteredUser]);

  console.log(loader,selectedUserId,"aayaya")

  return (
    <div className="chat-screen">
      {loader ? (
        <Loader />
      ) : (
        <>
          {filteredUser ? (
            filteredUser?.chat?.map((chat, index) => (
              <div key={index}>
                {Object.entries(chat).map(([sender, messageData]) => (
                  <div
                    className={`${
                      sender === "you" ? "message own" : "message"
                    }`}
                    key={messageData.timeStamp}
                  >
                    <div className="texts">
                      <p>{messageData.message}</p>
                      <span>{messageData.timeStamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="chat-screen">
              No user selected or user not found
            </div>
          )}
          <div ref={endRef}></div>
        </>
      )}
    </div>
  );
};

export default ChatScreen;
