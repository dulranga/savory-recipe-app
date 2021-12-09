// import { getRecipeByID } from "../../services/RecipeMiniService";
import { IFullRecipe } from "../../interfaces/FullRecipe";
import { IMiniRecipe } from "../../interfaces/MiniRecipe";
import { RecipeActions as Actions } from "../actions-types";

const INITIAL_STATE = {
  fullPost: <IFullRecipe>{},
  searchedPosts: <IMiniRecipe[]>(<never>[]),
};

type RecipeState = typeof INITIAL_STATE;
export type Action = {
  type: string;
  payload: any;
};

const recipeReducer = (
  state: RecipeState = INITIAL_STATE,
  action: Action
): RecipeState => {
  switch (action.type) {
    case Actions.GET_FULL_RECIPE:
      return { ...state, fullPost: action.payload };

    case Actions.SEARCH_RECIPE:
      return { ...state, searchedPosts: action.payload };

    default:
      return state;
  }
};

export default recipeReducer;
