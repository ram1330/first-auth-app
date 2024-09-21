import React, { useContext, useState } from "react";
import { authContext } from "../components/AuthContext/AuthContextProvider";

const LoginPage = () => {
  const { loginUser } = useContext(authContext);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLogin = () => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    loginUser(user);
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div className="login">
        <input
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
