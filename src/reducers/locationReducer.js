import { SET_LOCATION } from "../actions/types";

let initialState = {
  cities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        cities: [action.payload, ...state.cities]
      };
    default:
      return state;
  }
}
