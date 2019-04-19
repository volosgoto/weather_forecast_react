import { SET_LOCATION, GET_CITY, DISABLE_CITY_INPUT } from "./types";
import axios from "axios";

// const apiKey = "e3e797fbded50fc538e05975b37532a2";
const apiKey = "5aaae38caa80db1a92ab821d250efed7";

export const setLocation = city => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
  );
  dispatch({
    type: SET_LOCATION,
    payload: res.data
  });
};

export const getCity = city => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
  );
  dispatch({
    type: GET_CITY,
    payload: res.data
  });
};

export const disableCityInput = () => {
  return {
    type: DISABLE_CITY_INPUT,
    payload: true
  };
};
