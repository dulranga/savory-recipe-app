import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

export default rootReducer;
