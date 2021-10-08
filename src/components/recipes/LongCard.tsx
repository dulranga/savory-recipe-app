import React, { FC } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { colors, Fonts, other } from "../../constants";
import { Font, Price } from "../Common";
export interface LongRecipeCardProps {}

const LongRecipeCard: FC<LongRecipeCardProps> = () => {
  return (
    <Container activeOpacity={0.8}>
      <Content>
        <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={16}>
          Chicken Burger with French Potatoes
        </Font>
        <Price price={85.5} />
      </Content>
      <Image
        source={{
          uri: "https://pps.whatsapp.net/v/t61.24694-24/s96x96/151672385_288749755975702_8276206754246497785_n.jpg?ccb=11-4&oh=2497f565f85a7049ce9065ac382e4663&oe=616358B9",
        }}
        style={{ width: 100, aspectRatio: 1, borderRadius: other.borderRadius }}
      />
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
