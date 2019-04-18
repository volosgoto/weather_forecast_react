import { SET_LOCATION, GET_CITY } from "../actions/types";

let initialState = {
  cities: [],
  city: []
};

export default function (state = initialState, action) {
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
    default:
      return state;
  }
}
