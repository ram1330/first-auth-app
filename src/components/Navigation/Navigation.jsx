import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthContext/AuthContextProvider";

const Navigation = () => {
  const { token: tokenContext } = useContext(authContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(() => localStorage.getItem("token"));
  }, [tokenContext]);

  const handleExit = () => {
    setToken(() => localStorage.removeItem("token"));
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <br />
      {token ? (
        <Link onClick={handleExit}>Exit</Link>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <br />
          <br />
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
