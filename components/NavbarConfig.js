import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {THEME} from "../themes/theme";
// import App from "../App";
import { LinearGradient } from 'expo-linear-gradient';




 

export const NavbarConfig = () => {
  return (
    <View style={styles.conteinernav}>
      <View style={styles.button}>
        <AntDesign.Button
          name="filetext1"
          size={38}
          backgroundColor="transparent"
          color={THEME.TEXT_COLOR_BLACK}
        
        ></AntDesign.Button>
      </View>

      <View style={styles.button}>
        <AntDesign.Button
          name="message1"
          size={38}
          backgroundColor="transparent"
          color={THEME.TEXT_COLOR_BLACK}
        ></AntDesign.Button>
      </View>

      <View style={styles.button}>
     
        <AntDesign.Button
          name="setting"
          size={38}
          backgroundColor="transparent"
          color={THEME.TEXT_COLOR_BLACK}
        >
        </AntDesign.Button>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  conteinernav: {
   
    position: "relative",
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: THEME.NAVBAR_BACKGROUND_COLOR_BLACK,
    height: 60,
    width: "100%",

    borderTopColor: THEME.INPUT_BORDER_COLOR,
    borderTopWidth: 1,

    bottom: 0,
  },
});
