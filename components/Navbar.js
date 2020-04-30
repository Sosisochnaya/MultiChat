import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import App from "../App";
import {THEME} from "../themes/theme";

export const Navbar = () => {
  return (
    <View style={styles.conteiner}>

      <View style={styles.button}>
        <Button title="Plan" />
      </View>

      <View style={styles.button}>
        <Button title="mes" />
      </View>

      <View style={styles.button}>
        <Button title="set" />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    //position: 'absolute',
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: THEME.NAVBAR_BACKGROUND_COLOR,
    height: 80,

    borderTopColor: "black",
    borderTopWidth: 2,

    //bottom: 0,
  },
  button: {},
});
