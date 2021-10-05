import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, Fonts, other } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { useDeviceOrientation } from "@react-native-community/hooks";
import styled from "styled-components/native";

type Props = NativeStackHeaderProps & { instructions?: string };

const SignupHeader: React.FC<Props> = ({
  navigation,
  options,
  instructions,
}) => {
  const { portrait } = useDeviceOrientation();

  return (
    <Container>
      <FontAwesome
        name="arrow-left"
        style={{
          fontSize: 25,
          position: "absolute",
          left: 0,
          margin: other.buttonPadding,
        }}
        onPress={navigation.goBack}
      />
      <Header portrait={portrait}>{options.title}</Header>
      {instructions && <Description>{instructions}</Description>}
    </Container>
  );
};
const Container = styled.View`
  align-items: center;
  padding-top: ${other.buttonPadding}px;
  padding-bottom: ${other.buttonPadding}px;
`;
const Header = styled.Text`
  font-size: 22px;
  font-family: ${Fonts.PRIMARY_BOLD};
  text-align: center;
  max-width: ${(props: { portrait: boolean }) =>
    props.portrait ? "250px" : "90%"};
`;
const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${Fonts.PRIMARY};
  margin-top: 5px;
  width: 70%;
`;
export default SignupHeader;
