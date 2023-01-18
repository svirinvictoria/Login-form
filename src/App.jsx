import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import DataList from "./components/DataList";
//import Condition from'./components/Condition';

function App() {
  // debugger;

  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("Unknown user");

  const logoutHandler = () => {
     setName("Unknown user");
     setIsLogin(false)
  };
  const loggingIn = () => {
    // debugger;
    setIsLogin(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div> Web site</div>
        <div className="welcome">
          <p>Welcome, {name} </p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </header>

      {isLogin === true ? (
        <DataList />
      ) : (
        <LoginForm setIsLogin={loggingIn} setName={setName} />
      )}
    </div>
  );
}

export default App;
