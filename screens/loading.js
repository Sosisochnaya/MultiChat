import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { DialogInList } from "../components/DialogInList";
import { Navbar } from "../components/Navbar";
import { THEME } from "../themes/theme";
import { AntDesign } from "@expo/vector-icons";
import { ChooseMessangerScreen } from "./ChooseMessanger";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchResult } from "./SearchResult";

let theme = {};

let black = {
  headermenu: "#272727",
  headertext: "#fff",

  messcolorL: "#467FF2",
  messcolorR: "#46476D",

  namesuname: "#fff",
  textmess: "#C6C6C6",

  headerstroke: "#5E5E5E",
  background: "#111111",
  greyext: '"#7C7C7C"',
  GcolorL: "#FF6666",
  GcolorS: "#FFA467",
  GcolorR: "#FFDE67",
  chekbox: "#FF6D67",
  clearL: "#FF1A27",
  clearS: "#FF4047",
  clearR: "#FF6666",
  white: "#fff",
};

let white = {
  headermenu: "#F6F6F6",
  headertext: "#5E5E5E",

  messcolorL: "#ECEDF1",
  messcolorR: "#CCE4FE",

  namesuname: "#000",
  textmess: "#858585",

  headerstroke: "#5E5E5E",
  background: "#fff",
  greyext: "#7C7C7C",
  GcolorL: "#516DFF",
  GcolorS: "#5492FF",
  GcolorR: "#57B8FF",
  chekbox: "#57B8FF",
  clearL: "#FF1A27",
  clearS: "#FF4047",
  clearR: "#FF6666",
  white: "#fff",
};

export const loading = ({ navigation }) => {
  const [isReedy, setIsReady] = useState(false);
  const [time, setTime] = useState(0);

  if (!isReedy) {
    AsyncStorage.setItem("white", JSON.stringify(white), () => {});
    AsyncStorage.getItem("choose", (err, result) => {
      if (result == null) {
        let choose = {
          theme: "black",
        };
        theme = black;
        AsyncStorage.setItem("choose", JSON.stringify(choose), () => {});
      } else {
        console.log("ok");
      }
    });

    AsyncStorage.getItem("choose", (err, result) => {
      let buf = JSON.parse(result);
      console.log(buf["theme"]);
      if (buf["theme"] == "black") {
        AsyncStorage.getItem("black", (err, result2) => {
          theme = black;
        });
      }
      if (buf["theme"] == "white") {
        AsyncStorage.getItem("white", (err, result2) => {
          theme = white;
        });
      }
    });

    setIsReady(true);
  }

  const gotomain = () => {
    // let buf = time;
    // buf *= 2;
    setTimeout(function () {
      console.log("THIS IS");
      navigation.navigate("Main", {
        theme: theme,
      });
    }, 3000);
    //console.log("buf = ", buf);
  };

  gotomain();

  return (
    <View style={styles.conteiner}>
      <Image style={styles.image} source={require("../assets/icon.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});
