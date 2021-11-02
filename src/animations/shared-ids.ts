/**
 * @returns {string} `recipe.[id].image`
 */
export const getRecipeImageID = (id: string | number) => `recipe.${id}.image`;
export const getRecipeTitleID = (id: string | number) => `recipe.${id}.title`;
