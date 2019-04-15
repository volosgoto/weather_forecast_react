import { GET_WEATHER } from "./types";
import axios from "axios";

export const getWeather = () => async dispatch => {
  const apiKey = "eaa5a4f3e94da160e4967fc1c46a8a06";
  const city = "Kuiv";
  const state = "Ukraine";
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=${apiKey}`
  );

  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};
