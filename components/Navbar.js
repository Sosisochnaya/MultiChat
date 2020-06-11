import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import App from "../App";
import { THEME } from "../themes/theme";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

export const Navbar = ({ navigation, status }) => {
  const [config, setconfig] = useState(false);
  const [chat, setchat] = useState(true);
  const [plan, setplan] = useState(false);

  return (
    <View style={styles.conteiner}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setconfig(false);
            setchat(false);
            setplan(true);
            navigation.navigate("Plan");
          }}
        >
          {"Plan" != status && (
            <Image
              style={styles.plan}
              source={require("../assets/PlanW.png")}
            />
          )}
          {"Plan" === status && (
            <Image
              style={styles.plan}
              source={require("../assets/PlanK.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setconfig(false);
            setchat(true);
            setplan(false);
            navigation.navigate("Main");
          }}
        >
          {"Chat" != status && (
            <Image
              style={styles.chat}
              source={require("../assets/ChatW.png")}
            />
          )}
          {"Chat" === status && (
            <Image
              style={styles.chat}
              source={require("../assets/ChatK.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setconfig(true);
            setchat(false);
            setplan(false);
            navigation.navigate("Config");
          }}
        >
          {"Conf" != status && (
            <Image
              style={styles.conf}
              source={require("../assets/ConfW.png")}
            />
          )}
          {"Conf" === status && (
            <Image
              style={styles.conf}
              source={require("../assets/ConfK.png")}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

Navbar.navigationOptions = ({ navigation }) => {};

const styles = StyleSheet.create({
  conteiner: {
    position: "absolute",
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: THEME.NAVBAR_BACKGROUND_COLOR_BLACK,
    height: 60,
    width: "100%",

    borderTopColor: "black",
    borderTopWidth: 2,

    bottom: 0,
  },
  plan: { height: 40, width: 37.63 },
  chat: { height: 40, width: 46.6 },
  conf: { height: 40, width: 40 },
});
