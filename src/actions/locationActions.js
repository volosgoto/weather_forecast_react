import { SET_LOCATION } from "./types";
import axios from "axios";

const apiKey = "e3e797fbded50fc538e05975b37532a2";

export const setLocation = city => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  );
  dispatch({
    type: SET_LOCATION,
    payload: res.data
  });
};
