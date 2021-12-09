import { FC } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Image, View } from "react-native";
import styled from "styled-components/native";
import { other } from "../../constants";
import { Dimensions } from "react-native";
import { useRef } from "react";
// import {PanGestureHandler}from 'react-native-gesture-handler'

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 100;
const ITEM_WIDTH_WITH_MARGIN = ITEM_WIDTH + other.buttonPadding;
interface CartScreenProps {}

const CartScreen: FC<CartScreenProps> = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={data}
      renderItem={({ item, index }) => {
        const inputRange = [
          // ITEM_WIDTH_WITH_MARGIN * (index - 2),
          ITEM_WIDTH_WITH_MARGIN * (index - 1),
          ITEM_WIDTH_WITH_MARGIN * index,
          ITEM_WIDTH_WITH_MARGIN * (index + 1),
          // ITEM_WIDTH_WITH_MARGIN * (index + 2),
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [40, 0, 40],
          extrapolate: "extend",
        });
        return (
          <ItemContainer
            style={{
              transform: [{ scale }, { translateY }],
              borderColor: item.borderColor,
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            <Item icon={item.icon} />
          </ItemContainer>
        );
      }}
      keyExtractor={(item, index) => `${item}-${index}`}
      horizontal
      bounces={false}
      contentContainerStyle={{
        paddingHorizontal: (width - ITEM_WIDTH_WITH_MARGIN) / 2,
        height: ITEM_WIDTH_WITH_MARGIN * 2,
      }}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH_WITH_MARGIN}
      onScroll={Animated.event(
        [
          {
            nativeEvent: { contentOffset: { x: scrollX } },
          },
        ],
        { useNativeDriver: true }
      )}
    />
  );
};

interface dataIcon {
  icon: keyof typeof Ionicons.glyphMap;
  borderColor: string;
}

const data: dataIcon[] = [
  { icon: "train", borderColor: "#121212" },
  { icon: "american-football", borderColor: "" },
  { icon: "airplane", borderColor: "" },
  { icon: "analytics", borderColor: "" },
  { icon: "clipboard", borderColor: "" },
  { icon: "barbell", borderColor: "" },
  { icon: "bug", borderColor: "" },
];
const Item = ({ icon }: { icon: dataIcon["icon"] }) => {
  return <Ionicons name={icon} size={30} />;
};
const ItemContainer = styled(Animated.View)`
  background-color: lightgreen;
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${other.buttonPadding / 2}px;
  border-radius: ${ITEM_WIDTH / 2}px;
`;
export default CartScreen;
