import { SET_LOCATION, GET_CITY } from "../actions/types";

let initialState = {
  cities: [],
  city: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        cities: [action.payload, ...state.cities]
      };
    case GET_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}
