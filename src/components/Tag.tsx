import { View } from "react-native";
import { colors, Fonts, other } from "../constants";
import { Font } from "./Common";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

export interface TagProps {
  selected: boolean;
}
const Tag: React.FC<TagProps> = ({ selected }) => {
  return (
    <Container
      style={{
        backgroundColor: selected ? colors.primary : colors.grey,
      }}
    >
      <MaterialCommunityIcons
        name="food"
        style={{
          backgroundColor: colors.background,
          width: 36,
          height: 36,
          borderRadius: 5,
          textAlign: "center",
          textAlignVertical: "center",
        }}
        size={30}
      />
      <Font
        color={selected ? colors.white : colors.black}
        fontFamily={Fonts.PRIMARY_BOLD}
        flex={1}
        textAlign="center"
      >
        All
      </Font>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100px;
  justify-content: flex-start;
  padding: 5px;
  border-radius: ${other.borderRadius}px;
  margin-right: 10px;
`;
export default Tag;
