import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  auth: authenticationReducer,
});

export default rootReducer;
