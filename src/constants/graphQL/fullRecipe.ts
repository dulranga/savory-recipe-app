const fullRecipeQuery = `query GetRecipe($id:ID!){
  recipe(id: $id) {
    id
    name
    author
    mainImage
    recipeType
    authorAvatar
    serving
    
    nutritionalInfo {
      calories
      protein
      carbs
      fat
    }
    nutrientsPerServing {
      fiber
      carbs
      protein
      fat      
    }
    totalTime
    instructions
    squareImage
    ingredientsCount

    ingredients {
      name
      cpc
      priority
      
    } 
  }
}
`;
export default fullRecipeQuery;
