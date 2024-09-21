import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext(null);

const INITIAL_STATE = {
  token: "",
  currentUser: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
    case "REGISTER_USER":
      return {
        ...state,
        token: action.payload.accessToken,
        currentUser: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const navigate = useNavigate();

  const registerUser = async (newUser) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/register",
        newUser
      );
      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
      navigate("/");
    } catch (error) {
      console.error("Our err: ", error);
    }
  };

  const loginUser = async (user) => {
    try {
      const { data } = await axios.post("http://localhost:8000/login", user);
      dispatch({
        type: "LOGIN_USER",
        payload: data,
      });
      navigate("/");
    } catch (error) {
      console.error("Our error: ", error);
    };
  };

  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
    }
  }, [state.token]);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        registerUser: registerUser,
        loginUser: loginUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
