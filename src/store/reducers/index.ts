import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import recipeReducer from "./recipeReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  auth: authenticationReducer,
  recipe: recipeReducer,
});

export default rootReducer;
