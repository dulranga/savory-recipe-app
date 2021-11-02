import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { Animated } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { getRecipeImageID } from "../animations/shared-ids";
import { SignedUpScreens as Screens } from "../constants";
import RecipeScreen from "../screens/signed/RecipeScreen";
import Tabs from "../screens/signed/Tabs";

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
    </Stack.Navigator>
  );
};
export default SignedNavigation;
