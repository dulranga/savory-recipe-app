import { AuthenticationActions } from "../actions-types";

export const login = () => {
  return {
    type: AuthenticationActions.LOGIN,
    payload: true,
  };
};
