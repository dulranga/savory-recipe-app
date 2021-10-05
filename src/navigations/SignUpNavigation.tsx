import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignupHeader from "../components/SignupHeader";
import { Screens } from "../constants";
import {
  DietSelectorScreen,
  DislikesScreen,
  GoOnScreen,
  MotivationScreen,
  SignUpScreen,
} from "../screens/signup";
import TermsScreen from "../screens/signup/TermsScreen";

interface ScreenProps {
  name: Screens;
  component: React.FC<any>;
  title: string;
  instructions?: string;
}
const screens: ScreenProps[] = [
  {
    name: Screens.DIET_SELECTOR_SCREEN,
    component: DietSelectorScreen,
    title: "What kind of recipes do you like to see in your feed?",
    instructions: "Tap at least 2",
  },
  {
    name: Screens.SIGN_UP_SCREEN,
    component: SignUpScreen,
    title: "Join Us",
    instructions:
      "Create an account so you can stay up to date with awesome recipes",
  },
  {
    name: Screens.DISLIKES,
    component: DislikesScreen,
    title: "Any dislikes?",
    instructions: "Tap the ingredients you don’t like",
  },
  {
    name: Screens.MOTIVATIONAL,
    component: MotivationScreen,
    title: "What is your goal?",
    instructions:
      "Tap to choose the reasons that suit you best. Keep an eye on them once in a while to refresh",
  },
  {
    name: Screens.TERMS,
    component: TermsScreen,
    title: "Terms & Conditions",
  },
];

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
      {screens.map((screen, key) => (
        <Stack.Screen
          key={`screen-${key}`}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.title,
            header: (props) => (
              <SignupHeader {...props} instructions={screen.instructions} />
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default SignUpNavigation;
