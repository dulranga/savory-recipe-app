import { SignUpActions } from "../actions-types";

export interface EditCredentailsAction {
  type: SignUpActions.EDIT_CREDENTIALS;
  payload: object;
}
export interface EditIDAction {
  type:
    | SignUpActions.ADD_DIET
    | SignUpActions.REMOVE_DIET
    | SignUpActions.REMOVE_DISLIKE
    | SignUpActions.ADD_DISLIKE
    | SignUpActions.ADD_GOAL
    | SignUpActions.REMOVE_GOAL;
  payload: number;
}

export interface editCustomGoalsAction {
  type: SignUpActions.EDIT_CUSTOM_GOAL;
  payload: string;
}

export const editCredentails = (credentials = {}) => {
  return {
    type: SignUpActions.EDIT_CREDENTIALS,
    payload: credentials,
  };
};

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
export const addGoal = (id: number) => ({
  type: SignUpActions.ADD_GOAL,
  payload: id,
});
export const removeGoal = (id: number) => ({
  type: SignUpActions.REMOVE_GOAL,
  payload: id,
});
export const editGoal = (text: string) => ({
  type: SignUpActions.EDIT_CUSTOM_GOAL,
  payload: text,
});
