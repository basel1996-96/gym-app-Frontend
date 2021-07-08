import * as actiontype from "./types";
import instance from "./instance";

export const fetchClass = () => async (dispatch) => {
  try {
    const res = await instance.get("/class");
    dispatch({
      type: actiontype.FETCH_CLASS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClass = (classData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem("myToken");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    const formData = new FormData();
    for (const key in classData) {
      formData.append(key, classData[key]);
    }
    const res = await instance.post("/class/create", formData);
    dispatch({
      type: actiontype.CREATE_CLASS,
      payload: res.data,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
