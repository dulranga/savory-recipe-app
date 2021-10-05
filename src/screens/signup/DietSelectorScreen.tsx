import { useDeviceOrientation } from "@react-native-community/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import styled from "styled-components/native";
import ContinueButton from "../../components/ContinueButton";
import RecipeMini, {
  AddedRecipe,
  RecipeMiniProps,
} from "../../components/RecipeMini";
import { colors, Fonts, other, Screens } from "../../constants";
import { RootStackParamList } from "../../constants/screens";

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

  const [selectedRecipes, setSelectedRecipes] = useState<number[]>([]);
  useEffect(() => {
    console.log({ selectedRecipes });
  }, [selectedRecipes]);

  const addRecipe = (id: number) => setSelectedRecipes((prev) => [...prev, id]);
  const removeRecipe = (id: number) =>
    setSelectedRecipes((prev) => prev.filter((eachId) => eachId !== id));

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
          keyExtractor={(item, index) => `Added-Recipe-${index}`}
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
const Continue = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.primary};
  align-items: center;
  border-radius: ${other.borderRadius}px;
  padding: 10px;
  justify-content: center;
  flex: 1;
`;
const AddedRecipes = styled.FlatList`
  /* flex: 0.2; */
  flex: 1.5;
  width: 100%;
`;

export default DietSelectorScreen;
