import React from "react";

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Fonts, other } from "../constants";

export interface SignInButtonProps {
  color: string;
  /**Icon of the Button */
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
  onClick: (event?: GestureResponderEvent) => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  color,
  icon,
  label,
  onClick,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClick}
      style={[styles.button, { backgroundColor: color }]}
    >
      <FontAwesome name={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: other.buttonPadding,
    borderRadius: other.borderRadius,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    color: "#fff",
    fontSize: 25,
    position: "absolute",
    left: 0,
    marginLeft: other.buttonPadding,
  },
  label: { color: "#fff", fontFamily: Fonts.PRIMARY, fontSize: 16 },
});
export default SignInButton;
