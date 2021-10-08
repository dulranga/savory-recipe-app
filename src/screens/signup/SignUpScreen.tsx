import CheckBox from "@react-native-community/checkbox";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ContinueButton from "../../components/ContinueButton";
import { SignInButtonProps } from "../../components/SigninButton";
import { colors, Fonts, other } from "../../constants";
import Screens, { RootStackParamList } from "../../constants/screens";
import { RootState } from "../../store";
import { editCredentails } from "../../store/action-creators/signUpActions";
import { SignUpState } from "../../store/reducers/signUpReducer";
import { Links } from "./GoOnScreen";

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.SIGN_UP_SCREEN
>;
type Credentials = SignUpState["credentials"];

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const initialCredentials = useSelector<RootState, Credentials>(
    (state) => state.signUp.credentials
  );
  const dispatch = useDispatch();

  const signInButtons: SignInButtonProps[] = [
    {
      color: "#2E2E2E",
      icon: "instagram",
      label: "Instagram",
      onClick: () => {},
    },
    {
      color: "#4760A9",
      icon: "facebook-official",
      label: "Facebook",
      onClick: () => {},
    },
    { color: "#1DA1F2", icon: "twitter", label: "Twitter", onClick: () => {} },
  ];

  const getInputs = (key: keyof Credentials) => (value: any) => {
    dispatch(editCredentails({ [key]: value }));
  };

  const navigate = (screen: Screens) => () => {
    navigation.navigate(screen);
  };

  const sendData = async () => {
    navigation.navigate(Screens.DIET_SELECTOR_SCREEN);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: "100%" }}>
        {inputs.map((input) => (
          <TextInput
            {...input}
            style={styles.input}
            placeholderTextColor={colors.darkGrey}
            onChangeText={getInputs(input.key)}
            defaultValue={initialCredentials[input.key].toString()}
          />
        ))}
        <View style={styles.policy}>
          <CheckBox
            tintColors={{ true: colors.primary }}
            onValueChange={getInputs("agreedToPolicy")}
            value={initialCredentials.agreedToPolicy}
          />
          <Text style={styles.disclaimer}>
            By joining Savory you agree that you are over 18 years of age or
            older, will receive email updates, promotions and special offers.
          </Text>
        </View>
        <ContinueButton
          style={{ marginTop: 10 }}
          onPress={sendData}
          customText={"Join Us"}
        />
      </View>
      <Links buttons={signInButtons} style={{ marginTop: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    minHeight: "100%",
    minWidth: "100%",
    paddingHorizontal: other.buttonPadding * 2,
  },
  input: {
    padding: other.buttonPadding,
    fontSize: 18,
    width: "100%",
    borderRadius: other.borderRadius,
    fontFamily: Fonts.PRIMARY,
    borderColor: colors.grey,
    borderWidth: 2,
    marginBottom: other.buttonPadding,
  },
  policy: {
    flexDirection: "row",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
  },
  disclaimer: {
    fontSize: 14,
    fontFamily: Fonts.PRIMARY,
    textAlign: "justify",
    flex: 1,
    lineHeight: 18,
    color: colors.fontSecondary,
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: other.buttonPadding,
    marginVertical: other.buttonPadding,
    alignItems: "center",
    borderRadius: other.borderRadius,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: colors.primary,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

const inputs: TextInputProps & { key: keyof Credentials }[] = [
  {
    placeholder: "First and last name",
    key: "full_name",
    returnKeyType: "next",
  },
  { placeholder: "Email address", key: "email", keyboardType: "email-address" },
  {
    key: "password",
    placeholder: "Password (8 - 20 characters)",
    secureTextEntry: true,
    passwordRules:
      "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;",
  },
  {
    key: "mobile",
    placeholder: "Mobile number (For delivery updates)",
    keyboardType: "phone-pad",
  },
];
export default SignUpScreen;
