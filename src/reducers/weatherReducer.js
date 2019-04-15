import { GET_WEATHER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload
      };

    default:
      return state;
  }
}
