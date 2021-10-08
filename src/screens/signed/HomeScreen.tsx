import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FC } from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { Font, Padding } from "../../components/Common";
import { LongRecipeCard } from "../../components/recipes";
import ShortRecipeCard from "../../components/recipes/ShortCard";
import SearchBar from "../../components/SearchBar";
import Tag from "../../components/Tag";
import { colors, Fonts, other } from "../../constants";
import { RootState } from "../../store";
export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Container>
      <Padding>
        <SearchBar />
      </Padding>
      <ScrollView>
        <WelcomeMessage />
        <Section>
          <Header title="Best Matches for You" />
          <View>
            <LongRecipeCard />
            <LongRecipeCard />
            <LongRecipeCard />
            <LongRecipeCard />
            <LongRecipeCard />
            <LongRecipeCard />
          </View>
        </Section>

        <Section>
          <Header title="Immune Support" />
          <ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
          </ScrollView>
        </Section>
        <Section>
          <Header title="Low Carb" />
          <ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
            <ShortRecipeCard />
          </ScrollView>
        </Section>
      </ScrollView>
    </Container>
  );
};
const WelcomeMessage = () => {
  const username = useSelector<RootState, string>(
    (state) => state.auth.username
  );
  return (
    <Padding>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flex: 0.8 }}>
          <WelcomeText>Hi, {username} </WelcomeText>
          <Font fontSize={16} maxWidth={"90%"} marginTop={10}>
            2422 recipes based on your preferences
          </Font>
        </View>
        <Image
          source={{
            uri: "https://pps.whatsapp.net/v/t61.24694-24/s96x96/151672385_288749755975702_8276206754246497785_n.jpg?ccb=11-4&oh=2497f565f85a7049ce9065ac382e4663&oe=616358B9",
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
          }}
        />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: other.buttonPadding }}
      >
        {[1, 1, 1, 423, 2, 1, 3, 2].map((tag, i) => (
          <Tag key={i} selected={i % 2 ? true : false} />
        ))}
      </ScrollView>
    </Padding>
  );
};

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Font fontFamily={Fonts.PRIMARY_BOLD} fontSize={24}>
        {title}
      </Font>
    </View>
  );
};

const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;
const WelcomeText = styled.Text`
  font-family: ${Fonts.PRIMARY_BOLD};
  font-size: 35px;
`;
const Section = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: ${other.buttonPadding}px;
`;
export default HomeScreen;
