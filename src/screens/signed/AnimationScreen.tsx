import React from "react";
import { useRef } from "react";
import { Animated, ListRenderItem } from "react-native";
import styled from "styled-components/native";
import { LongRecipeCard } from "../../components/recipes";

const DATA = [1, 0, 2, 2234, 23, 4, 23, 4, 32, 4, 2, 2234, 23, 4, 23, 4, 32, 4];
const ITEM_HEIGHT = 155;
function AnimationScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const Item: ListRenderItem<number> = ({ index }) => {
    const scale = scrollY.interpolate({
      inputRange: [-1, 0, ITEM_HEIGHT * index, ITEM_HEIGHT * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: [-1, 0, ITEM_HEIGHT * (index + 1), ITEM_HEIGHT * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <LongRecipeCard id={Math.random()} />
      </Animated.View>
    );
  };

  return (
    <Container>
      <Animated.FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(_, i) => `card.${i}`}
        bounces={true}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
      />
    </Container>
  );
}
const Container = styled.View`
  padding: 10px;
  background-color: #fff;
`;
export default AnimationScreen;
