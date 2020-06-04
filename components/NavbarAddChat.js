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
import { THEME } from "../themes/theme";
import { LinearGradient } from 'expo-linear-gradient';

// import App from "../App";

export const NavbarAddChat = () => {
  return (
    <View style={styles.conteiner}>
       <TouchableOpacity>
      <LinearGradient 
      colors={['#FFDE67', '#FFA467', '#FF6666']}  
      start={[1.0, 0.2]}
      end={[0.2,1.0]}
      style={styles.conteiner}>
      <Text style={styles.title}>Add</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    //position: 'absolute',
    //flex: 1,
   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    //backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 42,
    width: 328,

    borderRadius: 10,
    borderTopColor: "black",
    borderTopWidth: 0,
    bottom: 8,
    marginLeft: 15,

    //bottom: 0,
  },
  title: {
    fontFamily: "nunito_bold",
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 20,
  },
});
