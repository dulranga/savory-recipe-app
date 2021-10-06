import { SignUpActions } from "../actions-types";

export interface EditCredentailsAction {
  type: SignUpActions.EDIT_CREDENTIALS;
  payload: object;
}

export const editCredentails = (credentials = {}) => {
  return {
    type: SignUpActions.EDIT_CREDENTIALS,
    payload: credentials,
  };
};

export interface EditDietsAction {
  type:
    | SignUpActions.ADD_DIET
    | SignUpActions.REMOVE_DIET
    | SignUpActions.REMOVE_DISLIKE
    | SignUpActions.ADD_DISLIKE;
  payload: number;
}

export const addDiet = (recipe: number) => ({
  type: SignUpActions.ADD_DIET,
  payload: recipe,
});

export const removeDiet = (recipe: number) => ({
  type: SignUpActions.REMOVE_DIET,
  payload: recipe,
});

export const removeDislike = (id: number) => ({
  type: SignUpActions.REMOVE_DISLIKE,
  payload: id,
});
export const addDislike = (id: number) => ({
  type: SignUpActions.ADD_DISLIKE,
  payload: id,
});
