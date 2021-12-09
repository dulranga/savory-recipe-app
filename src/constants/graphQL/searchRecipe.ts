export const searchRecipeQuery = `
query searchRecipe($term:String!){
  recipeSearch(query:$term) {
    edges {
      node{
        name
        mainImage
        authorAvatar
        id
      }
    }
  }
}`;
