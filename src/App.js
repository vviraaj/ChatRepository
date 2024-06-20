import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./Component/Chat/Chat";
import User from "./Component/User/User";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

const AppContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const selectedUserId = useSelector((state) => state.user.activeUserId);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      {isMobile ? (
        selectedUserId ? (
          <Chat isMobile={isMobile} />
        ) : (
          <User />
        )
      ) : (
        <>
          <User />
          <Chat />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
