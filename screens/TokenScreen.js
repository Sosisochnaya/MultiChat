import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";

var _storeData = async () => {
  try {
    await AsyncStorage.setItem("vk_token", this.token);
  } catch (error) {
    console.log("error token");
  }
};

export const TokenScreen = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Auth VK</Text>
        </View>
      </View>

      <View style={styles.input_wrap}>
        <TextInput
          placeholder="Enter token..."
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
          onChangeText={(text) => (this.token = text)}
        />
      </View>

      <View style={styles.wrap}>
        <TouchableOpacity onPress={_storeData}>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button1}
          >
            <Text style={styles.label}>Send</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.instructions}>Instruction</Text>
        <LinearGradient
          colors={["#FFDE67", "#FFA467", "#FF6666"]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.form1}
        >
          <Text style={styles.getting_token}>
            Token can be obtained at https://vkhost.github.io/{" "}
          </Text>
          <Text style={styles.paragraph1}>
            1) You need to select the settings;
          </Text>
          <Text style={styles.paragraph2}>
            2) Enter application ID 6146827;{" "}
          </Text>
          <Text style={styles.paragraph3}>
            3) Select the necessary rights to work:
          </Text>
          <Text style={styles.paragraph4}>
            (messages and access at any time);
          </Text>
          <Text style={styles.paragraph5}>
            4)Copy from the address and paste here.
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

TokenScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
  },

  header: {
    paddingTop: 20,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  heading: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },

  text: {
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  input_wrap: {
    marginTop: 50,
  },

  input: {
    marginLeft: 25,
    marginTop: 80,
    paddingLeft: 115,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 30,
    width: 318,
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 17,
    fontFamily: "roboto_regular",
  },

  wrap: {
    alignItems: "center",
    height: 60,
    width: 328,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 7,
    borderColor: "#5E5E5E",
    borderWidth: 0.2,
  },

  button1: {
    marginTop: 16,
    marginLeft: 25,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 42,
    width: 318,
    borderRadius: 10,
    alignItems: "center",
  },

  label: {
    color: THEME.TEXT_COLOR_BLACK,
    fontFamily: "nunito_bold",
    fontSize: 18,
  },

  instructions: {
    marginTop: 50,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  getting_token: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph1: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph2: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph3: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph4: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph5: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  form: {
    alignItems: "center",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#5E5E5E",
    borderWidth: 0.2,
  },

  form1: {
    width: 360,
    borderWidth: 1,
    borderRadius: 10,
  },
});
