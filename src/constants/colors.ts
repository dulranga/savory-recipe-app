import { DarkTheme } from "@react-navigation/native";

// const { dark } = DarkTheme;
const dark = false; // for testing
export default {
  primary: "#D53C25",
  background: dark ? "#202020" : "#FBFBFB",
  test: "tomato",
  fontSecondary: "#2f2f2f",
  font: !dark ? "#000" : "#fff",
  grey: !dark ? "#ececec" : "#414141",
  darkGrey: "#c5c5c5",
  white: !dark ? "#fff" : "#000",
  black: !dark ? "#121212" : "#fff",
};
