import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./Component/Chat/Chat";
import User from "./Component/User/User";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeUserId, setActiveUserId] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <div className="container">
        {isMobile ? (
          activeUserId ? (
            <Chat activeUserId={activeUserId} setActiveUserId={setActiveUserId} isMobile={isMobile} />
          ) : (
            <User setActiveUserId={setActiveUserId} />
          )
        ) : (
          <>
            <User setActiveUserId={setActiveUserId} />
            <Chat activeUserId={activeUserId} setActiveUserId={setActiveUserId} />
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
