import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RecipeMini from "../components/RecipeMini";
import { colors, other } from "../constants";

export interface DietSelectorProps {}

const DietSelectorScreen: React.FC<DietSelectorProps> = () => {
  return (
    <View style={styles.container}>
      <RecipeMini />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    minHeight: "100%",
    minWidth: "100%",
    paddingHorizontal: other.buttonPadding * 2,
  },
});
export default DietSelectorScreen;
