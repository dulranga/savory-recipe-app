import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { colors, other } from "../constants";
import { Fonts } from "../constants";

interface TestimonialProps {}

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 50, height: 50 }}
        />
        <View>
          <Text style={{ ...styles.text, fontSize: 24, fontWeight: "700" }}>
            Name
          </Text>
          <Text
            style={{
              ...styles.text,
              fontSize: 18,
              color: colors.fontSecondary,
            }}
          >
            Role
          </Text>
        </View>
      </View>

      <Text style={styles.bio}>
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ad
        corporis dolorum numquam laborum sunt facilis enim nobis a
        voluptatibus!"
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bio: {
    fontFamily: Fonts.PRIMARY,
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colors.grey,
    borderRadius: other.borderRadius,
    maxWidth: Dimensions.get("screen").width - 30,
    width: "100%",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 150,
  },
  text: {
    fontFamily: Fonts.PRIMARY,
  },
});
export default Testimonial;
