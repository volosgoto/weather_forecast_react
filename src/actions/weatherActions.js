import { GET_WEATHER, SET_LOCATION } from "./types";
import axios from "axios";

const apiKey = "e3e797fbded50fc538e05975b37532a2";
const defaultLocation = "kyiv";
export const getWeather = () => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&APPID=${apiKey}`
  );
  // console.log('res', res);
  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};

export const setLocation = city => async dispatch => {
  let currentCity = city;
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=london&APPID=${apiKey}`
  );
  dispatch({
    type: SET_LOCATION,
    payload: res.data
  });
};
