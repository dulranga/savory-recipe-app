import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import {
  colors,
  Fonts,
  other,
  RootStackParamList,
  SignedUpScreens,
} from "../constants";
import { searchRecipe } from "../store/action-creators/searchFullRecipe";

export interface SearchBarProps {}

type Navigation = NavigationProp<
  RootStackParamList,
  SignedUpScreens.SEARCH_RECIPE
>;

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<Navigation>();

  const submitQuery = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    const term = e.nativeEvent.text;

    dispatch(searchRecipe(term));
    navigate(SignedUpScreens.SEARCH_RECIPE, { term });
  };

  return (
    <View>
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
        <Input
          placeholder="Type a Restaurant Name"
          textAlign="center"
          onSubmitEditing={submitQuery}
        />
      </Box>
    </View>
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
