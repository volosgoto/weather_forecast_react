import { combineReducers } from "redux";
import contactReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer
});
