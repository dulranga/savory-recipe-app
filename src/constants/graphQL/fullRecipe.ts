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
    totalTime
    instructions
    squareImage
    ingredients {
      name
      cpc
      priority
      
    } 
  }
}
`;
export default fullRecipeQuery;
