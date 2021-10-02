import React, { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors, Fonts, other } from "../constants";
import styled from "styled-components/native";
import CheckBox from "@react-native-community/checkbox";
// import image from "../assets/images/photo (1).svg";
export interface RecipeMiniProps {
  image: ImageSourcePropType;
  title: string;
  count: number;
  id: number;
}
interface ExtraProps {
  selected: number | undefined;
  functions: {
    add: (id: number) => void;
    remove: (id: number) => void;
  };
}

const RecipeMini: React.FC<RecipeMiniProps & ExtraProps> = ({
  title,
  count,
  image,
  functions,
  id,
  selected,
}) => {
  // const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    if (!selected) functions.add(id);
    else functions.remove(id);
  };
  // useEffect(() => {
  //   if (selected) functions.add(id);
  //   else functions.remove(id);
  // }, [selected]);
  return (
    <Container onPress={toggleSelected}>
      <Image
        source={image}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.primary,
          borderRadius: other.borderRadius,
        }}
        resizeMode="cover"
      />
      <Info>
        <Title>{title}</Title>
        <Count>{count} recipes</Count>
      </Info>
      <Check>
        <CheckBox
          value={selected ? true : false}
          boxType="circle"
          tintColors={{ true: colors.primary, false: colors.primary }}
        />
      </Check>
    </Container>
  );
};
export interface AddedRecipeProps {
  remove: (id: number) => void;
  id: number;
  title: string;
}

export const AddedRecipe: React.FC<AddedRecipeProps> = ({
  remove,
  id,
  title,
}) => {
  const close = () => remove(id);
  return (
    <Item>
      <Text
        style={{
          fontSize: 18,
          fontFamily: Fonts.PRIMARY_BOLD,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Close activeOpacity={0.8} onPress={close}>
        <FontAwesome name="close" />
      </Close>
    </Item>
  );
};

const Container = styled.Pressable`
  height: 160px;
  width: 100%;
  padding: ${other.buttonPadding}px;
  background-color: ${colors.background};
  margin-bottom: ${other.buttonPadding}px;
`;

const Info = styled.View`
  position: absolute;
  bottom: -25px;
  align-self: center;
  background: ${colors.background};
  align-items: center;
  padding: ${other.buttonPadding}px;
  border-radius: ${other.borderRadius}px;
  padding-left: ${other.buttonPadding * 2}px;
  padding-right: ${other.buttonPadding * 2}px;
`;

const Title = styled.Text`
  font-size: 20px;
  text-transform: capitalize;
  font-family: ${Fonts.PRIMARY_BOLD};
`;
const Count = styled.Text`
  font-family: ${Fonts.PRIMARY};
  font-size: 16px;
`;
const Check = styled.View`
  position: absolute;
  right: 0;
  background-color: ${colors.background};
  border-radius: 5px;
  /* margin: -10px; */
`;
const Item = styled.View`
  background-color: ${colors.grey};
  width: 125px;
  height: 40px;
  margin: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${other.borderRadius}px;
  overflow: hidden;
`;
const Close = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${colors.background};
`;
export default RecipeMini;
