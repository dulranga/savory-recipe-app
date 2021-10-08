import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { colors, Fonts, other } from "../constants";
export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Box>
      <Ionicons
        name="search"
        style={{
          position: "absolute",
          left: 5,
          alignSelf: "center",
        }}
        color={colors.fontSecondary}
        size={25}
      />
      <Input placeholder="Type a Restaurant Name" textAlign="center" />
    </Box>
  );
};

const Box = styled.View`
  background-color: ${colors.grey};
  height: 40px;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  border-radius: ${other.borderRadius}px;
`;
const Input = styled.TextInput`
  /* flex: 1; */
  width: 80%;
  font-size: 18px;
  font-family: ${Fonts.PRIMARY};
  text-align: center;
`;
export default SearchBar;
