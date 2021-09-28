import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface GoOnScreenProps {}

const GoOnScreen: FC<GoOnScreenProps> = () => {
  return (
    <View>
      <Image source={require("@assets/images/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GoOnScreen;
