import { useDeviceOrientation } from "@react-native-community/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import SignInButton, { SignInButtonProps } from "../components/SigninButton";
import Testimonial from "../components/Testimonial";
import { colors, Fonts, other, Screens } from "../constants";
import { RootStackParamList } from "../constants/screens";

type GoOnScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.GO_ON_SCREEN
>;

const GoOnScreen: FC<GoOnScreenProps> = ({ navigation }) => {
  const { portrait } = useDeviceOrientation();
  const navigate = (screen: Screens) => () => {
    navigation.navigate(screen);
  };
  const signInButtons: SignInButtonProps[] = [
    {
      color: "#2E2E2E",
      icon: "instagram",
      label: "Instagram",
      onClick: () => {},
    },
    {
      color: "#4760A9",
      icon: "facebook-official",
      label: "Facebook",
      onClick: () => {},
    },
    { color: "#1DA1F2", icon: "twitter", label: "Twitter", onClick: () => {} },
    {
      color: "#D53C25",
      icon: "envelope",
      label: "Email Address",
      onClick: navigate(Screens.SIGN_UP_SCREEN),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: portrait ? "stretch" : "center",
        padding: other.buttonPadding,
        backgroundColor: colors.background,
        flexDirection: portrait ? "column" : "row",
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: 200 }}
          pagingEnabled
        >
          {[1, 2, 3, 4].map((testimonial) => (
            <Testimonial key={Math.random()} />
          ))}
        </ScrollView>
      </View>
      <Links buttons={signInButtons} />
    </View>
  );
};
interface LinkProps {
  buttons: SignInButtonProps[];
  style?: StyleProp<ViewStyle>;
}
const Links: FC<LinkProps> = ({ buttons, style }) => (
  <View style={[{ flex: 0.7, width: "100%" }, style]}>
    <Text style={styles.header}>Continue with</Text>
    {buttons.map((button) => (
      <SignInButton {...button} key={Math.random()} />
    ))}
  </View>
);
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  logo: {
    width: 400,
    height: 150,
    paddingVertical: 50,
    right: "50%",
    left: "-40%",
    // position: "absolute",
    // top: 0,
  },
  header: {
    fontFamily: Fonts.PRIMARY_BOLD,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
});
export { Links };
export default GoOnScreen;
