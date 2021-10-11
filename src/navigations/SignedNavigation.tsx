import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { getRecipeImageID } from "../animations/shared-ids";
import { SignedUpScreens as Screens } from "../constants";
import RecipeScreen from "../screens/signed/RecipeScreen";
import Tabs from "../screens/signed/Tabs";

const Stack = createSharedElementStackNavigator();
const SignedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.TABS}>
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
            animation: "fade",
          },
        ]}
      />
    </Stack.Navigator>
  );
};

export default SignedNavigation;
