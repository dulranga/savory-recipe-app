enum Screens {
  GO_ON_SCREEN = "go_on_screen",
  SIGN_UP_SCREEN = "signup",
  DIET_SELECTOR_SCREEN = "diet_selector",
  DISLIKES = "dislikes",
  MOTIVATIONAL = "motivational",
  TERMS = "terms",
}

export type RootStackParamList = {
  [Screens.GO_ON_SCREEN]: undefined;
  [Screens.SIGN_UP_SCREEN]: undefined;
  [Screens.DIET_SELECTOR_SCREEN]: undefined;
  [Screens.DISLIKES]: undefined;
  [Screens.MOTIVATIONAL]: undefined;
  [Screens.TERMS]: undefined;
};

export default Screens;
