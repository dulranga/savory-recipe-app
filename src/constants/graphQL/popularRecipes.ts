export const popularRecipes = `
query {
  popularRecipes {
    edges {
      node {
        id         
        name
        mainImage
        ingredientsCount
        authorAvatar
      }
    }
    
  }
  
}`;
