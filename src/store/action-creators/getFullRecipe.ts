import { Dispatch } from "react";
import { ActionCreator, Reducer } from "redux";
import { RootState } from "..";
import { getRecipeByID } from "../../services/RecipeMiniService";
import { RecipeActions } from "../actions-types";
import { Action } from "../reducers/recipeReducer";

export const getFullRecipe = (id: string) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const prevState = getState();

    // fetch only if another recipe clicked. no fetching for re clicking same recipe.
    if (prevState.recipe.fullPost.id !== id) {
      const recipe = await getRecipeByID(id);
      dispatch({
        type: RecipeActions.GET_FULL_RECIPE,
        payload: {
          id,
          ...recipe,
        },
      });
    }
  };
};
