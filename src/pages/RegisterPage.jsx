import React, { useContext, useState } from "react";
import { authContext } from "../components/AuthContext/AuthContextProvider";

const RegisterPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const {registerUser} = useContext(authContext);

  const handleRegister = () => {
    const newUser = {
      email: emailValue,
      password: passwordValue
    };
    registerUser(newUser);
  };

  return (
    <div>
      <h1>REGISTER PAGE</h1>
      <div className="register">
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
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
