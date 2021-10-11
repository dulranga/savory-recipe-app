import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, SignedUpScreens as Screens } from "../../constants";
import HomeScreen from "./HomeScreen";
import { StyleProp, TextStyle, View } from "react-native";
import styled from "styled-components/native";

export interface ScreenProps {
  name: Screens;
  icon: keyof typeof Ionicons.glyphMap;
  iconBlurred: keyof typeof Ionicons.glyphMap;
  size?: number;
  style?: StyleProp<TextStyle>;
  component: React.FC<any>;
}
const screens: ScreenProps[] = [
  {
    name: Screens.HOME,
    icon: "restaurant",
    iconBlurred: "restaurant-outline",
    component: HomeScreen,
  },
  {
    name: Screens.ADD_RECIPE,
    icon: "fast-food",
    iconBlurred: "fast-food-outline",
    component: HomeScreen,
  },
  {
    name: Screens.RECIPE,
    icon: "add",
    iconBlurred: "add-outline",
    component: HomeScreen,
    style: {
      backgroundColor: colors.primary,
      color: colors.white,
      width: 40,
      height: 40,
      borderRadius: 5,
      textAlign: "center",
      textAlignVertical: "center",
    },
  },

  {
    name: Screens.CART,
    icon: "cart",
    iconBlurred: "cart-outline",
    component: HomeScreen,
  },
  {
    name: Screens.USER,
    icon: "person-circle",
    iconBlurred: "person-circle-outline",
    component: HomeScreen,
    size: 35,
  },
];

export interface TabsProps {}

const Tab = createBottomTabNavigator();
const Tabs: React.FC<TabsProps> = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 65,
          elevation: 0,
          borderTopColor: "transparent",
        },
      }}
    >
      {screens.map((screen, i) => (
        <Tab.Screen
          key={i}
          name={screen.name}
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => <Icon {...props} screen={screen} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Icon: React.FC<{
  focused: boolean;
  screen: ScreenProps;
}> = ({ focused, screen }) => (
  <View>
    <Ionicons
      name={`${!focused ? screen.iconBlurred : screen.icon}`}
      size={screen.size || 30}
      color={focused ? colors.primary : colors.darkGrey}
      style={screen.style}
    />
    {!focused && <NotificationIcon />}
  </View>
);

const NotificationIcon = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${colors.primary};
  width: 10px;
  height: 10px;
  align-items: center;
  justify-content: center;
  border-radius: ${10 / 2}px;
`;
export default Tabs;
