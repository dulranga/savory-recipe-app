import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar as RNStatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Provider, useSelector } from "react-redux";
import { colors, Fonts } from "./src/constants";
import { SignedNavigation, SignUpNavigation } from "./src/navigations";
import store, { RootState } from "./src/store";

const Root: React.FC = () => {
  const isLoggedIn = useSelector<RootState, boolean>(
    (state) => state.auth.logged
  );
  console.log(isLoggedIn);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavigationContainer>
        {/* <SignedNavigation /> */}
        {isLoggedIn ? <SignedNavigation /> : <SignUpNavigation />}
      </NavigationContainer>
    </ScrollView>
  );
};
const App = () => {
  console.log("=======================");
  const [loaded] = useFonts({
    [Fonts.PRIMARY]: require("./src/assets/fonts/inter.ttf"),
    [Fonts.PRIMARY_BOLD]: require("./src/assets/fonts/static/Inter-ExtraBold.ttf"),
  });

  if (!loaded)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: RNStatusBar.currentHeight,
    backgroundColor: colors.background,
  },
});

export default App;
