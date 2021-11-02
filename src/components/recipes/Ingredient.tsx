import React, { FC } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { colors, Fonts } from "../../constants";
import { IngredientProps } from "../../interfaces/FullRecipe";
import { Font } from "../Common";

const Ingredient: FC<IngredientProps> = ({ name, cpc }) => {
  return (
    <Container>
      <View>
        <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={20}>
          {name}
        </Font>
        <Font>{cpc}</Font>
      </View>
      <Font>H</Font>
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: 20px;
  margin-bottom: 20px;
`;

export default Ingredient;
