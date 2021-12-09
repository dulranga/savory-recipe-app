import { DarkTheme } from "@react-navigation/native";

// const { dark } = DarkTheme;
const dark = false; // for testing
export default {
  primary: "#D53C25",
  background: dark ? "#202020" : "#c9c9c9",
  test: "tomato",
  fontSecondary: "#2f2f2f",
  font: !dark ? "#000" : "#fff",
  grey: !dark ? "#ececec" : "#414141",
  darkGrey: "#c5c5c5",
  white: !dark ? "#fff" : "#000",
  green: "#79B955",
  black: !dark ? "#121212" : "#fff",
};
