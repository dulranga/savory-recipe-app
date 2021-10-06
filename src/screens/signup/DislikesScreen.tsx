import CheckBox from "@react-native-community/checkbox";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ListViewComponent,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Absolute } from "../../components/Common";
import ContinueButton from "../../components/ContinueButton";
import { colors, Fonts, other } from "../../constants";
import Screens, { RootStackParamList } from "../../constants/screens";
import { ContainerProps } from "./DietSelectorScreen";
type DislikesProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.DISLIKES
>;

const DislikesScreen: React.FC<DislikesProps> = ({ navigation }) => {
  const { portrait } = useDeviceOrientation();

  const goForward = () => navigation.navigate(Screens.MOTIVATIONAL);
  return (
    <Container portrait={portrait}>
      <Ingredients decelerationRate="fast">
        <FlatList
          data={[
            1, 3, 4, 4, 3, 3, 3, 4, 3, 22, 1, 3, 4, 4, 3, 3, 3, 4, 1, 3, 4, 4,
            3, 3, 3, 4,
          ]}
          numColumns={3}
          renderItem={Card}
          contentContainerStyle={{ padding: other.buttonPadding }}
          keyExtractor={(item, index) => index + ""}
        />
      </Ingredients>
      <Absolute>
        <ContinueButton
          style={{
            flex: portrait ? 0.05 : 0.5,
            marginHorizontal: other.buttonPadding,
          }}
          onPress={goForward}
        />
      </Absolute>
    </Container>
  );
};

export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <CardContainer>
      <Image
        source={require("../../assets/images/bag_blue.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          borderRadius: other.borderRadius,
        }}
      />
      <CheckBox
        tintColors={{ true: colors.primary }}
        boxType="circle"
        style={{
          position: "absolute",
          right: 0,
          zIndex: 10,
        }}
      />
      <Font>Chill</Font>
    </CardContainer>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  margin-bottom: 10px;
  flex-direction: ${(props: ContainerProps) =>
    props.portrait ? "column" : "row"};
  align-items: ${(props: ContainerProps) =>
    props.portrait ? "stretch" : "center"};
`;
const Ingredients = styled.ScrollView`
  flex: 1;
  margin-bottom: 10px;
`;
const CardContainer = styled.View`
  width: 100px;
  position: relative;
  height: 100px;
  margin: auto;
  margin-bottom: ${other.buttonPadding * 2}px;
  elevation: 30;
`;
const Font = styled.Text`
  font-family: ${Fonts.PRIMARY};
  font-size: 16px;
  position: absolute;
  bottom: -15px;
  align-self: center;
  background-color: ${colors.background};
  min-width: 50px;
  max-width: 90%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
`;

export default DislikesScreen;
