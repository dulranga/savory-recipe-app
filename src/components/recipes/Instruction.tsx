import React, { FC } from "react";
import { Dimensions, Image, View } from "react-native";
import styled from "styled-components/native";
import { colors, Fonts, other } from "../../constants";
import { Font } from "../Common";

interface InstructionProps {
  instruction: string;
  index: number;
  image?: string;
}
const { width } = Dimensions.get("window");

const ITEM_WIDTH = width - (other.buttonPadding * 2 + 40);
const IMAGE_SIZE = 80;
const Instruction: FC<InstructionProps> = ({ instruction, index, image }) => {
  return (
    <Container>
      <Image
        source={{ uri: image }}
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          aspectRatio: 1,
          borderRadius: other.borderRadius,
        }}
      />
      <Text>
        <Font>{instruction}</Font>
      </Text>
      <Index>
        <Font
          color={colors.white}
          fontSize={20}
          fontFamily={Fonts.PRIMARY_BOLD}
        >
          {index}
        </Font>
      </Index>
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: ${other.borderRadius}px;
  margin: 20px;
  position: relative;
  width: ${ITEM_WIDTH}px;
`;
const Index = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  margin: -10px;
  width: 30px;
  height: 30px;
  background: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: ${other.borderRadius}px;
`;
const Text = styled.View`
  flex: 1;
  margin-left: 10px;
`;
export default Instruction;
