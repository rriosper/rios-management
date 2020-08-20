import { combineReducers } from "redux";

import alerts from "./alerts";
import auth from "./auth";

const reducers = combineReducers({
  alerts,
  auth,
});

export default reducers;
