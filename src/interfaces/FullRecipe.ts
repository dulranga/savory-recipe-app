export interface IFullRecipe {
  id: string;
  name: string;
  author: string;
  mainImage: string;
  recipeType: string;
  authorAvatar: string;
  serving: number;

  totalTime: string;
  instructions: string[];
  squareImage: string;
  ingredients: IngredientProps[];
  ingredientsCount: number;
  text: string;
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };

  nutrientsPerServing: {
    fiber: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

export interface IngredientProps {
  name: string;
  cpc: string;
  priority: number;
}
