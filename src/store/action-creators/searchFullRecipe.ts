import { Dispatch } from "react";
import { searchRecipes } from "../../services/RecipeMiniService";
import { RecipeActions } from "../actions-types";
import { Action } from "../reducers/recipeReducer";

export const searchRecipe = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const data = await searchRecipes(query);
    dispatch({
      type: RecipeActions.SEARCH_RECIPE,
      payload: data,
    });
  };
};
