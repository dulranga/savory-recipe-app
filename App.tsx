import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Font, { useFonts } from "expo-font";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar as RNStatusBar,
  View,
} from "react-native";
import { GoOnScreen } from "@screens";
import { colors } from "@constants";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@assets/fonts/inter.ttf"),
  });

  if (!loaded)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GoOnScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: RNStatusBar.currentHeight,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
