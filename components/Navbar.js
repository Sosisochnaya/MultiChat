import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
// import App from "../App";
import {THEME} from "../themes/theme";
import {AntDesign} from "@expo/vector-icons";

export const Navbar = ({navigation}) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.button}>
        <AntDesign.Button
          name="filetext1"
          size={38}
          backgroundColor="transparent"
          onPress={() => {
            navigation.navigate("Plan");
          }}
        ></AntDesign.Button>
      </View>

      <View style={styles.button}>
        <AntDesign.Button
          name="message1"
          size={38}
          backgroundColor="transparent"
        ></AntDesign.Button>
      </View>

      <View style={styles.button}>
        <AntDesign.Button
          name="setting"
          size={38}
          backgroundColor="transparent"
        ></AntDesign.Button>
      </View>
    </View>
  );
};

Navbar.navigationOptions = ({navigation}) => {};

const styles = StyleSheet.create({
  conteiner: {
    position: "absolute",
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: THEME.NAVBAR_BACKGROUND_COLOR,
    height: 60,
    width: "100%",

    borderTopColor: "black",
    borderTopWidth: 2,

    bottom: 0,
  },
  button: {},
});
