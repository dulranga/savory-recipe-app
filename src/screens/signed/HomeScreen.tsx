import React from "react";
import styled from "styled-components/native";
import { Font } from "../../components/ContinueButton";
import { colors } from "../../constants";
export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Container>
      <Font style={{ color: colors.black }}>Hello world {Math.random()}</Font>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: ${colors.background};
  min-height: 100%;
`;
export default HomeScreen;
