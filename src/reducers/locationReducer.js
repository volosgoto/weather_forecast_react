import { SET_LOCATION, GET_CITY, DISABLE_CITY_INPUT } from "../actions/types";

let initialState = {
  cities: [],
  city: [],
  disableInput: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        cities: (() => {
          return [action.payload, ...state.cities].length < 6
            ? [action.payload, ...state.cities]
            : state.cities;
        })()
      };
    case GET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case DISABLE_CITY_INPUT:
      return {
        ...state,
        disableInput: action.payload
      };
    default:
      return state;
  }
}
