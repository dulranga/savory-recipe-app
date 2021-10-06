import {
  useDeviceOrientation,
  useKeyboard,
} from "@react-native-community/hooks";
import React, { useState } from "react";
import styled from "styled-components/native";
import { colors, Fonts, other } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import ContinueButton from "../../components/ContinueButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screens, { RootStackParamList } from "../../constants/screens";
import { ContainerProps } from "./DietSelectorScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addGoal,
  editGoal,
  removeGoal,
} from "../../store/action-creators/signUpActions";

const MAX_BOX_WIDTH_GAP = 20;
const data = [
  [
    { name: "Remove inflamation", id: 1243 },
    { name: "Live a super life", id: 3412 },
  ],
  [
    { name: "Remove inflamation", id: 3412 },
    { name: "Remove inflamation", id: 1542 },
  ],
  [
    { name: "Remove inflamation", id: 4512 },
    { name: "Remove inflamation", id: 1544 },
  ],
];
type MotivationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.DISLIKES
>;
const MotivationScreen: React.FC<MotivationScreenProps> = ({ navigation }) => {
  const { keyboardShown } = useKeyboard();
  const goals = useSelector<RootState, RootState["signUp"]["goals"]>(
    (state) => state.signUp.goals
  );
  const dispatch = useDispatch();
  const goForward = () => navigation.navigate(Screens.TERMS);
  const { portrait } = useDeviceOrientation();
  const updateGoal = (string: string) => dispatch(editGoal(string));

  return (
    <Container portrait={portrait}>
      {!keyboardShown && (
        <Goals
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {data.map((column, colID) => (
            <Column key={colID}>
              {column.map((row, rowID) => (
                <Row key={rowID}>
                  <Box selected={goals.selected.includes(row.id)} id={row.id}>
                    {row.name}
                  </Box>
                </Row>
              ))}
            </Column>
          ))}
        </Goals>
      )}
      <WriteGoalContainer focused={keyboardShown}>
        <WriteGoalHeader>Write your own custom goal</WriteGoalHeader>
        <WriteGoal
          multiline
          numberOfLines={100}
          placeholder="At least 50 characters"
          style={{ textAlignVertical: "top" }}
          defaultValue={goals.custom}
          onChangeText={updateGoal}
        />
      </WriteGoalContainer>
      <View style={{ padding: other.buttonPadding }}>
        <ContinueButton onPress={goForward} keyboardShown={keyboardShown} />
      </View>
    </Container>
  );
};

const Box: React.FC<{ selected: boolean; id: number }> = ({
  children,
  selected,
  id,
}) => {
  const dispatch = useDispatch();
  const toggle = () => dispatch(!selected ? addGoal(id) : removeGoal(id));
  return (
    <BoxContainer
      width={Math.floor(Math.random() * MAX_BOX_WIDTH_GAP) + 100}
      clicked={selected}
      onPress={toggle}
    >
      <LinearGradient
        colors={
          selected ? ["#FF784A", "#CB341D"] : [colors.white, colors.white]
        }
        end={{ x: 0, y: 1 }}
        start={{ x: 1, y: 0 }}
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: other.buttonPadding,
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.PRIMARY,
            fontSize: 16,
            color: selected ? colors.white : colors.black,
            textAlign: "center",
          }}
        >
          {children}
        </Text>
      </LinearGradient>
    </BoxContainer>
  );
};

const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  justify-content: space-between;
  flex-direction: ${(props: ContainerProps) =>
    props.portrait ? "column" : "row"};
`;
const Goals = styled.ScrollView`
  flex: 70%;
  margin-bottom: 20px;
`;

interface WriteGoalProps {
  focused: boolean;
}
const WriteGoalContainer = styled.View`
  flex: ${(props: WriteGoalProps) => (props.focused ? 100 : 50)}%;
  padding: ${other.buttonPadding}px;
`;
const WriteGoalHeader = styled.Text`
  font-size: 20px;
  font-family: ${Fonts.PRIMARY_BOLD};
  margin-bottom: ${other.buttonPadding}px;
`;
const WriteGoal = styled.TextInput`
  border-width: 2px;
  border-radius: ${other.borderRadius}px;
  border-color: ${colors.grey};
  border-style: solid;
  background-color: #fff;
  padding: 10px;
  height: 80%;
  width: 100%;
  justify-content: flex-start;
  align-items: baseline;
  font-family: ${Fonts.PRIMARY};
  font-size: 16px;
`;
interface BoxContainerProps {
  width: number;
  clicked: boolean;
}
const BoxContainer = styled.TouchableOpacity`
  aspect-ratio: 1;
  width: ${(props: BoxContainerProps) => props.width}px;
  margin: 10px;
  overflow: hidden;
  border-width: 2px;
  border-radius: ${other.borderRadius}px;
  border-color: ${colors.grey};
  border-style: solid;
  background-color: #fff;
`;

const Column = styled.View`
  align-items: center;
`;
const Row = styled.View`
  flex-direction: row;
`;
export default MotivationScreen;
