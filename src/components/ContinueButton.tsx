import React from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { colors, Fonts, other } from "../constants";

export interface ContinueButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  customText?: string;
  style?: StyleProp<ViewStyle>;
  keyboardShown?: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  customText,
  style = {},
  keyboardShown,
}) => {
  if (keyboardShown) return null;
  return (
    <Continue style={style} activeOpacity={0.8} onPress={onPress}>
      <Font>{customText || "Continue"}</Font>
    </Continue>
  );
};

const Continue = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: ${other.buttonPadding}px;
  justify-content: center;
  align-items: center;
  border-radius: ${other.borderRadius}px;
`;
export const Font = styled.Text`
  font-family: ${Fonts.PRIMARY_BOLD};
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
export default ContinueButton;
