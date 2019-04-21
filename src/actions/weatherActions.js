import { GET_WEATHER } from "./types";
import axios from "axios";

// const apiKey = "e3e797fbded50fc538e05975b37532a2";
const apiKey = "5aaae38caa80db1a92ab821d250efed7";
const defaultLocation = "kyiv";

export const getWeather = (city) => async dispatch => {
  const location = city || defaultLocation;
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${apiKey}`
  );
  // console.log('res', res);
  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};
