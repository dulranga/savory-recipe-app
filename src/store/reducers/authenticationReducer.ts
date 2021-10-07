import { AuthenticationActions as Actions } from "../actions-types";

const INITIAL_STATE = {
  logged: true,
};

type AuthenticationState = typeof INITIAL_STATE;
type Action = {
  type: string;
  payload: any;
};

const authenticationReducer = (
  state: AuthenticationState = INITIAL_STATE,
  action: Action
): AuthenticationState => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        logged: action.payload,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
