import React, { FC } from "react";
import { Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
import { getRecipeImageID } from "../../animations/shared-ids";
import { colors, Fonts, other } from "../../constants";
import { Font, Price } from "../Common";

const IMAGE_WIDTH = 150;
const coveredHeight = IMAGE_WIDTH - 70;

export interface ShortRecipeCardProps {
  onPress?: () => void;
  id: string | number;
}
const ShortRecipeCard: FC<ShortRecipeCardProps> = ({ id, onPress }) => {
  return (
    <Container>
      <Box activeOpacity={0.8} onPress={onPress}>
        <AbsoluteImage>
          <SharedElement id={getRecipeImageID(id)}>
            <Image
              source={require("../../assets/images/web.jpg")}
              style={{
                width: IMAGE_WIDTH,
                aspectRatio: 1,
                height: "100%",
                resizeMode: "cover",
              }}
            />
          </SharedElement>
        </AbsoluteImage>

        <View style={{ height: coveredHeight }}></View>
        <Font
          textAlign="center"
          fontFamily={Fonts.PRIMARY_BOLD}
          fontSize={16}
          maxWidth={"90%"}
        >
          Quinoa Salad with Hump Seeds
        </Font>
        <Font>Good Fibers</Font>
        <Price price={54.52} />
      </Box>
    </Container>
  );
};

const Container = styled.View`
  width: 200px;
  height: 300px;
  margin: 10px;
  justify-content: flex-end;
`;
const Box = styled.TouchableOpacity`
  background-color: ${colors.white};
  elevation: 20;
  width: 100%;
  height: 250px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: ${other.buttonPadding}px;
  border-radius: ${other.borderRadius}px;
`;
const AbsoluteImage = styled.View`
  position: absolute;
  top: -50px;
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_WIDTH}px;
  border-radius: ${other.borderRadius}px;
  overflow: hidden;
`;
export default ShortRecipeCard;
