import React, { FC } from "react";
import { Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
import { getRecipeImageID } from "../../animations/shared-ids";
import { colors, Fonts, other } from "../../constants";
import { IMiniRecipe } from "../../interfaces/MiniRecipe";
import { Font } from "../Common";
export interface LongRecipeCardProps {
  onPress?: () => void;
}

const AUTHOR_IMAGE_SIZE = 30;

const LongRecipeCard: FC<LongRecipeCardProps & IMiniRecipe> = ({
  onPress,
  id,
  mainImage,
  name,
  authorAvatar,
}) => (
  <Container activeOpacity={0.8} onPress={onPress}>
    <Content>
      <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={16}>
        {name}
      </Font>
      <AuthorImage source={{ uri: authorAvatar }} resizeMode="cover" />
    </Content>
    <SharedElement id={getRecipeImageID(id)}>
      <Image
        // source={{require("../../assets/images/bag_black.jpg")}}
        source={{
          uri: mainImage,
        }}
        style={{
          width: 100,
          height: 100,
          aspectRatio: 1,
          borderRadius: other.borderRadius,
          resizeMode: "cover",
        }}
      />
    </SharedElement>
  </Container>
);
const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: ${other.buttonPadding}px;
  background-color: ${colors.white};
  elevation: 30;
  z-index: 10;
  margin-top: 20px;
  border-radius: ${other.borderRadius}px;
`;
const Content = styled.View`
  flex: 0.8;
  justify-content: space-between;
  align-items: flex-start;
`;

const AuthorImage = styled.Image`
  width: ${AUTHOR_IMAGE_SIZE}px;
  height: ${AUTHOR_IMAGE_SIZE}px;
  border-radius: ${AUTHOR_IMAGE_SIZE / 2}px;
  border-color: crimson;
  border-width: 1px;
  background-color: #c2c2c2;
`;
export default LongRecipeCard;
