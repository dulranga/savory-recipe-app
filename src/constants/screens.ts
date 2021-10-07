enum SignUpScreens {
  GO_ON_SCREEN = "go_on_screen",
  SIGN_UP_SCREEN = "signup",
  DIET_SELECTOR_SCREEN = "diet_selector",
  DISLIKES = "dislikes",
  MOTIVATIONAL = "motivational",
  TERMS = "terms",

  // Signed Up screens
}

export enum SignedUpScreens {
  HOME = "home",
  RECIPE = "recipe",
  USER = "user",
  ADD_RECIPE = "add_recipe",
  CART = "cart",
}
export type RootStackParamList = {
  [SignUpScreens.GO_ON_SCREEN]: undefined;
  [SignUpScreens.SIGN_UP_SCREEN]: undefined;
  [SignUpScreens.DIET_SELECTOR_SCREEN]: undefined;
  [SignUpScreens.DISLIKES]: undefined;
  [SignUpScreens.MOTIVATIONAL]: undefined;
  [SignUpScreens.TERMS]: undefined;
};

export default SignUpScreens;
