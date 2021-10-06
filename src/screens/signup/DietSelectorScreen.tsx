import { useDeviceOrientation } from "@react-native-community/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { Absolute } from "../../components/Common";
import ContinueButton from "../../components/ContinueButton";
import RecipeMini, {
  AddedRecipe,
  RecipeMiniProps,
} from "../../components/RecipeMini";
import { colors, other, Screens } from "../../constants";
import { RootStackParamList } from "../../constants/screens";
import { RootState } from "../../store";
import { addDiet, removeDiet } from "../../store/action-creators/signUpActions";

const recipes: RecipeMiniProps[] = [
  {
    count: 10002,
    image: require("../../assets/images/cat.png"),
    title: "Hello 1",
    id: 1,
  },
  {
    count: 10002,
    image: require("../../assets/images/bag_yellow.jpg"),
    title: "Hello 2",
    id: 2,
  },
  {
    count: 10002,
    image: require("../../assets/images/bag_brown.jpg"),
    title: "Hello 3",
    id: 3,
  },
];

export type DietSelectorProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.DIET_SELECTOR_SCREEN
>;
const DietSelectorScreen: React.FC<DietSelectorProps> = ({ navigation }) => {
  const { portrait } = useDeviceOrientation();
  const dispatch = useDispatch();

  const selectedRecipes = useSelector<RootState, number[]>(
    (state) => state.signUp.selectedDiets
  );

  const addRecipe = (id: number) => dispatch(addDiet(id));
  const removeRecipe = (id: number) => dispatch(removeDiet(id));

  const goForward = () => navigation.navigate(Screens.DISLIKES);
  return (
    <Container portrait={portrait}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces
        style={{ width: "100%", flex: 1, marginBottom: 10 }}
      >
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => (
            <RecipeMini
              {...item}
              id={item.id}
              functions={{ add: addRecipe, remove: removeRecipe }}
              selected={selectedRecipes.find((id) => item.id === id)}
            />
          )}
        />
      </ScrollView>

      <View style={{ flex: portrait ? 0.3 : 0.8 }}>
        <AddedRecipes
          data={recipes.filter((recipe) => selectedRecipes.includes(recipe.id))}
          renderItem={({ item, index }) => (
            <AddedRecipe remove={removeRecipe} id={item?.id} {...item} />
          )}
          horizontal
          keyExtractor={(_, index) => `Added-Recipe-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}
        />

        <ContinueButton onPress={goForward} />
      </View>
    </Container>
  );
};

export interface ContainerProps {
  portrait?: boolean;
}
const Container = styled.View`
  padding-left: ${other.buttonPadding}px;
  padding-right: ${other.buttonPadding}px;
  background: ${colors.background};
  height: 100%;
  min-width: 100%;
  position: relative;
  padding-bottom: ${other.buttonPadding}px;
  flex-direction: ${(props: ContainerProps) =>
    props.portrait ? "column" : "row"};
`;
const AddedRecipes = styled.FlatList`
  /* flex: 0.2; */
  flex: 1.5;
  width: 100%;
`;

export default DietSelectorScreen;
