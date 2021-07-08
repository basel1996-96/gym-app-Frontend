import * as actiontype from "./types";
import instance from "./instance";

export const fetchGym = () => async (dispatch) => {
  try {
    const res = await instance.get("/gym");
    dispatch({
      type: actiontype.FETCH_GYMS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createGym = (GymData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem("myToken");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    const formData = new FormData();
    for (const key in GymData) {
      formData.append(key, GymData[key]);
    }
    const res = await instance.post("/gym/create", formData);
    dispatch({
      type: actiontype.CREATE_GYM,
      payload: res.data,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
