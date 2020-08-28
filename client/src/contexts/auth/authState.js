import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //load users
  const loadUser = async () => {
    console.log("load usre");
  };
  //register users

  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3006/api/users",
        formData,
        config
      );
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        paylaod: err.response.data.msg,
      });
    }
  };

  //login user
  const login = async () => {
    console.log("load usre");
  };
  //logout
  const logout = async () => {
    console.log("load usre");
  };
  //clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
