import { FETCH_DISCOVER } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DISCOVER:
      const data = action.payload.data.results;
      return { ...state, data };
    default:
      return state;
  }
}
