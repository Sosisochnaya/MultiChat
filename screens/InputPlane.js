import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TextInput,
} from "react-native";
import { Navbar } from "../components/Navbar";

export const InputPlane = (props) => {
  return (
    <View>
      <View style={styles.iphonetop}></View>
      <View style={styles.header}>
        <View style={styles.line1}>
          <Image
            style={styles.imageBACK}
            source={require("../assets/Back.png")}
          />
          <Text style={styles.ScreenName}>Add Plan</Text>
          <Image style={styles.imageOK} source={require("../assets/ok.png")} />
        </View>
        <View style={styles.line2}>
          <TextInput style={styles.set}></TextInput>
          <TextInput style={styles.set}></TextInput>
        </View>
      </View>
      <View style={styles.writeplan}>
        <TextInput>Enter..</TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonetop: {
    height: 20,
  },

  header: {
    height: 95,
    borderBottomWidth: 1,
    borderColor: "#6970A6",
    paddingLeft: 25,
    paddingRight: 25,
  },

  line1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 19,
  },

  ScreenName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },

  imageBACK: {
    height: 15.88,
    width: 8.46,
  },

  imageOK: {
    height: 15.88,
    width: 23,
  },

  line2: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 15,
  },

  set: {
    width: 143,
    height: 27,
    backgroundColor: "#F2F3F5",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#AAAAAA",
  },

  writeplan: {
    marginLeft: 25,
    marginTop: 25,
  },
});
