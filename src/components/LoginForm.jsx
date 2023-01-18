import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("111");
  const [password, setPassword] = useState("111");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitCredentialsHandler = () => {
    //debugger;
    if (username === "111" && password === "111") {
      props.setName("Vika");
      props.setIsLogin(true);
    }
  };

  const clearButtonHandler = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-body">
      <div className="input-fields">
        <input
          type="text"
          id="name"
          placeholder="Username"
          value={username}
          onChange={usernameChangeHandler}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>

      <button onClick={clearButtonHandler}> Clear </button>
      <button onClick={submitCredentialsHandler}>Login </button>
    </div>
  );
};

export default LoginForm;
