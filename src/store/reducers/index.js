import { combineReducers } from "redux";
import TrendingReducer from "./reducerTrending";
import DiscoverReducer from "./reducerDiscover";
const rootReducer = combineReducers({
  trending: TrendingReducer,
  discover: DiscoverReducer
});

export default rootReducer;
