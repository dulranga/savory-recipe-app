import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useEffect } from "react";
import { Animated, Image, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { getRecipeImageID } from "../../animations/shared-ids";
import {
  other,
  RootStackParamList,
  SignedUpScreens as Screens,
} from "../../constants";

export type RecipeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.RECIPE
>;

const opacity = new Animated.Value(0);
const RecipeScreen: FC<RecipeScreenProps> = ({ route }) => {
  console.log(getRecipeImageID(route.params.id));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <SharedElement id={getRecipeImageID(route.params.id)}>
        <Animated.Image
          source={{
            uri: "https://pps.whatsapp.net/v/t61.24694-24/s96x96/151672385_288749755975702_8276206754246497785_n.jpg?ccb=11-4&oh=2497f565f85a7049ce9065ac382e4663&oe=616358B9",
          }}
          style={{
            width: 300,
            height: 400,
            borderRadius: other.borderRadius,
            position: "absolute",
          }}
        />
      </SharedElement>
    </View>
  );
};

export default RecipeScreen;
