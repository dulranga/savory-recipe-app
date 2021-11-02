// import { getRecipeByID } from "../../services/RecipeMiniService";
import { IFullRecipe } from "../../interfaces/FullRecipe";
import { RecipeActions as Actions } from "../actions-types";

const INITIAL_STATE = {
  fullPost: <IFullRecipe>{},
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
      console.log("==========");

      return { ...state, fullPost: action.payload };

    default:
      return state;
  }
};

export default recipeReducer;
