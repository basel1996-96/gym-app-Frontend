//
import axios from "axios";
import instance from "./instance";

import decode from "jwt-decode";
// Action Types
import * as actionType from "./types";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await instance.get("/users");
    dispatch({
      type: actionType.FETCH_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signup`, userData);

    dispatch(setUser(res.data.token));

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signupOwner = (userData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem("myToken");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    const res = await instance.post("/signup/owner", userData);
    dispatch({
      type: actionType.SET_OWNER,
      payload: decode(res.data.token),
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signin`, userData);

    dispatch(setUser(res.data.token));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (history) => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) return setUser();
    else return setUser(token);
  }

  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);

    return {
      type: actionType.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");

    return {
      type: actionType.SET_USER,
      payload: null,
    };
  }
};
