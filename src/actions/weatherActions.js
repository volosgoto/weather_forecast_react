import { GET_WEATHER, SET_LOCATION } from "./types";
import axios from "axios";

// const apiKey = "e3e797fbded50fc538e05975b37532a2";
const apiKey = "5aaae38caa80db1a92ab821d250efed7";
const defaultLocation = "kyiv";

export const getWeather = () => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${defaultLocation}&APPID=${apiKey}`
  );
  // console.log('res', res);
  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};

