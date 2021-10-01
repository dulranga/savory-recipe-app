import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignupHeader from "../components/SignupHeader";
import { Screens } from "../constants";
import { DietSelectorScreen, GoOnScreen, SignUpScreen } from "../screens";

export interface SignUpNavigationProps {}

const Stack = createNativeStackNavigator();

const SignUpNavigation: React.FC<SignUpNavigationProps> = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.GO_ON_SCREEN}>
      <Stack.Screen
        name={Screens.GO_ON_SCREEN}
        component={GoOnScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.DIET_SELECTOR_SCREEN}
        component={DietSelectorScreen}
        options={{
          title: "What kind of recipes do you like to see in your feed?",
          header: (props) => (
            <SignupHeader {...props} description="Tap at least 2" />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.SIGN_UP_SCREEN}
        component={SignUpScreen}
        options={{
          title: "Join Us",
          header: (props) => (
            <SignupHeader
              {...props}
              description="Create an account so you can stay up
        to date with awesome recipes"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigation;
