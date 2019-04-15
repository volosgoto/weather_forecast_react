import { GET_WEATHER, SET_LOCATION } from "../actions/types";

let initialState = {
  cities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        cities: [action.payload, ...state.cities]
      };
    default:
      return state;
  }
}
