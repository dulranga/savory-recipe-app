import React, { FC } from "react";
import { Animated, StatusBar, StyleProp, Text, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors, Fonts, other } from "../constants";

export const Absolute = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;
  align-self: center;
`;
export const Padding = styled(Animated.View)`
  padding: ${({ padding }: { padding?: number }) =>
    padding || other.buttonPadding}px;
`;

export const Font: React.FC<StyleProp<TextStyle>> = ({
  children,
  // @ts-ignore
  ...styles
}) => (
  <Text
    style={{
      fontFamily: Fonts.PRIMARY,
      color: colors.font,
      fontSize: 16,
      ...styles,
    }}
  >
    {children}
  </Text>
);

export const Price: FC<{ price: number | string }> = ({ price }) => {
  return (
    <PriceContainer>
      <Font fontSize={18} color={colors.primary}>
        $
      </Font>
      <Font fontSize={18} fontFamily={Fonts.PRIMARY_BOLD}>
        {price}
      </Font>
    </PriceContainer>
  );
};
const PriceContainer = styled.View`
  flex-direction: row;
  background-color: #fff5d8;
  padding: 10px;
  border-radius: ${other.borderRadius}px;
`;
export const Hr = styled.View`
  background-color: ${colors.grey};
  height: 2px;
  width: 100%;
  margin: ${other.buttonPadding}px;
  margin-left: 0;
  margin-right: 0;
`;
export const SafeArea = styled.View`
  padding-top: ${StatusBar.currentHeight}px;
`;
