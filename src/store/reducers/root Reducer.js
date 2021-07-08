import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gyms from "./gymReducer";
import classes from "./classReducer";

const rootReducer = combineReducers({
  authReducer,
  gyms: gyms,
  classes: classes,
});

export default rootReducer;
