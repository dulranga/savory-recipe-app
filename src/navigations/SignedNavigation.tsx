import React from "react";
import { Dimensions } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { getRecipeImageID } from "../animations/shared-ids";
import { SignedUpScreens as Screens } from "../constants";
import RecipeScreen from "../screens/signed/RecipeScreen";
import SearchRecipeScreen from "../screens/signed/SearchRecipeScreen";
import Tabs from "../screens/signed/Tabs";

const { height } = Dimensions.get("window");
const Stack = createSharedElementStackNavigator();
const SignedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.TABS}
      defaultScreenOptions={{
        presentation: "card",
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: { opacity: progress },
        }),
      }}
    >
      <Stack.Screen
        component={Tabs}
        name={Screens.TABS}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RecipeScreen}
        name={Screens.RECIPE}
        sharedElements={(route) => [
          {
            id: getRecipeImageID(route.params.id),
            animation: "move",
            align: "center-center",
          },
        ]}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SearchRecipeScreen}
        name={Screens.SEARCH_RECIPE}
        options={{
          headerShown: false,
          presentation: "modal",
          gestureDirection: "vertical",
          gestureEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            const translateY = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            });
            return {
              cardStyle: { translateY },
              containerStyle: {
                backgroundColor: "#000000ab",
                opacity: progress,
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default SignedNavigation;
