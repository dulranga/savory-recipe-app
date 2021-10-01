import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";
import styled from "styled-components/native";
// import image from "../assets/images/photo (1).svg";
export interface RecipeMiniProps {}

const RecipeMini: React.FC<RecipeMiniProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cat.png")}
        style={{ width: "100%", height: 140, backgroundColor: colors.primary }}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text>hello world</Text>
        <Text>23,232 recipes</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  info: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.primary,
  },
});

// const Info = styled.

export default RecipeMini;
