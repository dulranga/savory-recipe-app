import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, Fonts, other } from "../constants";
import { FontAwesome } from "@expo/vector-icons";

type Props = NativeStackHeaderProps & { description?: string };

const SignupHeader: React.FC<Props> = ({
  navigation,
  options,
  description,
}) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="arrow-left"
        style={styles.arrow}
        onPress={navigation.goBack}
      />
      <Text style={styles.header}>{options.title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: other.buttonPadding,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: Fonts.PRIMARY,
    width: "70%",
    marginTop: 5,
  },
  header: {
    fontSize: 20,
    fontFamily: Fonts.PRIMARY_BOLD,
    textAlign: "center",
    maxWidth: 250,
  },
  arrow: {
    fontSize: 25,
    position: "absolute",
    left: 0,
    margin: other.buttonPadding,
  },
});

export default SignupHeader;
