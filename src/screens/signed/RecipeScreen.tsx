import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useEffect, useRef } from "react";
import { Animated, FlatList, Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { getRecipeImageID } from "../../animations/shared-ids";
import { Font, Hr, Padding } from "../../components/Common";
import Ingredient from "../../components/recipes/Ingredient";
import Instruction from "../../components/recipes/Instruction";
import {
  colors,
  Fonts,
  other,
  RootStackParamList,
  SignedUpScreens as Screens,
} from "../../constants";
import { IFullRecipe } from "../../interfaces/FullRecipe";
import { RootState } from "../../store";

export type RecipeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.RECIPE
>;

const IMAGE_HEIGHT = 300;
const opacity = new Animated.Value(0);
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const RecipeScreen: FC<RecipeScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;

  const scrollY = useRef(new Animated.Value(0)).current;
  // scrollY.addListener((e) => console.log(e.value));

  const recipe = useSelector<RootState, IFullRecipe>(
    (state) => state.recipe.fullPost
  );

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 500,
      useNativeDriver: true,
    }).start();

    return scrollY.removeAllListeners();
  }, []);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const backgroundColor = scrollY.interpolate({
    inputRange: [-1, 0, IMAGE_HEIGHT],
    outputRange: ["transparent", "transparent", "#fff"],
  });

  const color = scrollY.interpolate({
    inputRange: [-1, 0, IMAGE_HEIGHT],
    outputRange: ["#fff", "#fff", "#000"],
  });

  const headerColor = scrollY.interpolate({
    inputRange: [-1, 0, IMAGE_HEIGHT],
    outputRange: ["transparent", "transparent", "#000"],
  });

  const contentTranslate = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  return (
    <View>
      <TopButtons style={{ backgroundColor }}>
        <AnimatedIcon
          name="arrow-back"
          onPress={navigation.goBack}
          size={30}
          style={{ color }}
        />

        <Animated.Text
          style={{
            color: headerColor,
            fontFamily: Fonts.PRIMARY_BOLD,
            fontSize: 20,
            maxWidth: 250,
            textAlign: "center",
          }}
        >
          Seafood Pasta with Clams & Chili
        </Animated.Text>

        <AnimatedIcon name="heart-outline" style={{ color }} size={30} />
      </TopButtons>
      <Animated.View onScroll={onScroll}>
        <SharedElement id={getRecipeImageID(id)}>
          <Animated.Image
            source={{ uri: recipe.mainImage }}
            style={{
              width: "100%",
              height: IMAGE_HEIGHT,
            }}
            resizeMode="cover"
          />
        </SharedElement>

        <Padding
          style={{
            paddingTop: other.buttonPadding * 2,
            // transform: [{ translateY: contentTranslate }],
            opacity,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Author>
              <Image
                source={{ uri: recipe?.authorAvatar }}
                style={{ width: 50, aspectRatio: 1, borderRadius: 10 }}
              />
              <View style={{ paddingLeft: 10 }}>
                <Font fontFamily={Fonts.PRIMARY_BOLD}>By {recipe?.author}</Font>
                <Font>Chef</Font>
              </View>
            </Author>
            <Label>{recipe?.recipeType}</Label>
          </View>
          <Hr />

          <Font fontSize={24} fontFamily={Fonts.PRIMARY_BOLD}>
            {recipe?.name}
          </Font>

          <MetaInfoContainer>
            <MetaInfo icon="circle" label={`${recipe?.serving} Servings`} />
            <MetaInfo icon="bolt" label="218 Kcal" />
            <MetaInfo icon="clock-o" label={recipe?.totalTime || ""} />
            <MetaInfo icon="thumbs-up" label="Medium" />
          </MetaInfoContainer>
          <MetaInfoContainer>
            <View>
              <Font>Price:</Font>
              <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={24}>
                $12.34
              </Font>
            </View>
            <Order>
              <Ionicons name="md-briefcase" size={20} color={colors.white} />
              <Font
                color={colors.white}
                fontFamily={Fonts.PRIMARY_BOLD}
                fontSize={20}
                textAlign="center"
              >
                Shop Recipe
              </Font>
            </Order>
          </MetaInfoContainer>
          <Hr />

          <View>
            <Font fontSize={30} marginBottom={20}>
              Ingredients
            </Font>
            <FlatList
              data={recipe?.ingredients}
              renderItem={({ item, index }) => (
                <Ingredient key={index} {...item} />
              )}
              keyExtractor={({ name }, index) => name + index}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <MetaInfoContainer>
            <View>
              <Font>Price:</Font>
              <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={24}>
                $12.34
              </Font>
            </View>
            <Order>
              <Ionicons name="md-briefcase" size={20} color={colors.white} />
              <Font
                color={colors.white}
                fontFamily={Fonts.PRIMARY_BOLD}
                fontSize={20}
                textAlign="center"
              >
                Shop Recipe
              </Font>
            </Order>
          </MetaInfoContainer>

          {!!recipe?.instructions?.length && (
            <View>
              <Font fontSize={30} marginVertical={20}>
                Preparation step by step
              </Font>
              <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={recipe?.instructions}
                renderItem={({ item, index }) => (
                  <Instruction
                    instruction={item}
                    index={index + 1}
                    image={recipe?.squareImage}
                  />
                )}
                keyExtractor={(_, index) => `Instruction.${index}`}
              />
            </View>
          )}

          {/* <Font>{JSON.stringify(recipe)}</Font> */}
        </Padding>
      </Animated.View>
    </View>
  );

  // return <ActivityIndicator color={colors.primary} size="large" />;
};
interface MetaInfoProps {
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}
const MetaInfo: FC<MetaInfoProps> = ({ icon, label }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <FontAwesome name={icon} size={25} />
      <Font>{label}</Font>
    </View>
  );
};

const TopButtons = styled(Animated.View)`
  position: absolute;
  top: 0;
  z-index: 5;
  padding: ${other.buttonPadding}px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled(Animated.View)`
  background-color: ${colors.white};
`;
const Author = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  flex-direction: row;
  background-color: #fff5d8;
  padding: 10px;
  font-family: ${Fonts.PRIMARY};
  border-radius: ${other.borderRadius}px;
`;
const MetaInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${other.buttonPadding}px;
`;
const Order = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 5px;
  padding: 20px;
  flex: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default RecipeScreen;
