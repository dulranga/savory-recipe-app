import React, { FC } from "react";
import { Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
import { getRecipeImageID } from "../../animations/shared-ids";
import { colors, Fonts, other } from "../../constants";
import { Font, Price } from "../Common";
export interface LongRecipeCardProps {
  onPress?: () => void;
  id: string | number;
}

const LongRecipeCard: FC<LongRecipeCardProps> = ({ onPress, id }) => {
  // console.log(`${id}.image`);

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <Content>
        <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={16}>
          Chicken Burger with French Potatoes
        </Font>
        <Price price={85.5} />
      </Content>
      <SharedElement id={getRecipeImageID(id)}>
        <Image
          // source={{require("../../assets/images/bag_black.jpg")}}
          source={{
            uri: "https://pps.whatsapp.net/v/t61.24694-24/s96x96/151672385_288749755975702_8276206754246497785_n.jpg?ccb=11-4&oh=2497f565f85a7049ce9065ac382e4663&oe=616358B9",
          }}
          style={{
            width: 100,
            height: 100,
            aspectRatio: 1,
            borderRadius: other.borderRadius,
          }}
        />
      </SharedElement>
    </Container>
  );
};
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

export default LongRecipeCard;
