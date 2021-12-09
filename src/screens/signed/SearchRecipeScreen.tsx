import { FC, useRef } from "react";
import { Animated, Dimensions, Image, View } from "react-native";
import React from "react";
import {
  colors,
  other,
  RootStackParamList,
  SignedUpScreens,
} from "../../constants";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { IMiniRecipe } from "../../interfaces/MiniRecipe";
import styled from "styled-components/native";
import { LongRecipeCard } from "../../components/recipes";
import { getFullRecipe } from "../../store/action-creators/getFullRecipe";
import { ITEM_HEIGHT } from "../../components/recipes/LongCard";
import { Font } from "../../components/Common";
import SearchBar from "../../components/SearchBar";

export type SearchRecipeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SignedUpScreens.SEARCH_RECIPE
>;
const { height } = Dimensions.get("window");
const SearchRecipeScreen: FC<SearchRecipeScreenProps> = ({
  navigation,
  route,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const results = useSelector<RootState, IMiniRecipe[]>(
    (state) => state.recipe.searchedPosts
  );

  const dispatch = useDispatch();

  const navigate = (id: string) => () => {
    dispatch(getFullRecipe(id));
    navigation.navigate(SignedUpScreens.RECIPE, { id });
  };

  const onScroll = Animated.event(
    [
      {
        nativeEvent: { contentOffset: { y: scrollY } },
      },
    ],
    { useNativeDriver: true }
  );
  return (
    <Container>
      <View>
        <Font fontSize={50}>Results for</Font>
        <Font fontSize={25}> {route.params.term}</Font>
      </View>

      <Animated.FlatList
        data={results}
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={(recipe) => recipe.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const outputRange = [1, 1, 1, 0];
          const scale = scrollY.interpolate({
            inputRange: [-1, 0, ITEM_HEIGHT * index, ITEM_HEIGHT * (index + 2)],
            outputRange,
          });
          const opacity = scrollY.interpolate({
            inputRange: [-1, 0, ITEM_HEIGHT * index, ITEM_HEIGHT * (index + 2)],
            outputRange,
          });
          return (
            <Animated.View style={{ transform: [{ scale }], opacity }}>
              <LongRecipeCard {...item} onPress={navigate(item.id)} />
            </Animated.View>
          );
        }}
        ListEmptyComponent={NotFound}
      />
    </Container>
  );
};

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <Image
        source={require("../../assets/images/not-found.png")}
        style={{ width: 200, height: 200, alignSelf: "center" }}
      />
      <Font alignSelf="center" fontSize={30}>
        Nothing found
      </Font>
      <SearchBar />
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.View`
  /* align-items: center; */
  height: ${height * 0.6}px;
  margin: 10px;
  justify-content: space-evenly;
`;
const Container = styled.View`
  background-color: ${colors.white};
  padding: ${other.buttonPadding}px;
  flex: 1;
`;
export default SearchRecipeScreen;
