import React from "react";
import {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

import {THEME} from "../themes/theme";
import {DialogInList} from "../components/DialogInList";
import {Ionicons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {DATA} from "../data";

export const DialogScreen = ({navigation}) => {
  const dialogId = navigation.getParam("dialogId");

  const dialog = DATA.find((d) => d.id === dialogId);

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.buttonBack}>
          <Ionicons.Button
            name="ios-arrow-back"
            size={32}
            color={THEME.DIALOG_NAME_COLOR}
            backgroundColor="transparent"
            onPress={() => navigation.goBack(null)}
            //TouchableOpacity={}
          />
        </View>
        <View style={styles.centerBlock}>
          <ImageBackground style={styles.icon} borderRadius={50} />
          <Text style={styles.name}>{}</Text>
        </View>
        <View style={styles.buttonPlan}>
          <AntDesign.Button
            name="filetext1"
            size={35}
            backgroundColor="transparent"
            onPress={() => navigation.navigate("Plan")}
          ></AntDesign.Button>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonPlus}>
          <AntDesign.Button
            name="plus"
            size={30}
            backgroundColor="transparent"
          ></AntDesign.Button>
        </View>

        <TextInput placeholder="Text..." style={styles.input} />

        <View style={styles.buttonSendMes}>
          {/* <Ionicons.Button
            name="md_send"
            size={34}
            color={THEME.DIALOG_NAME_COLOR}
            backgroundColor="transparent"
            //onPress={() => navigation.goBack(null)}
          /> */}
          <AntDesign.Button
            name="rightsquareo"
            size={34}
            backgroundColor="transparent"
          ></AntDesign.Button>
        </View>
      </View>

      {/* <Text>{dialogId}</Text> */}
    </View>
  );
};

DialogScreen.navigationOptions = ({navigation}) => {};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: THEME.BACKGROUNG_COLOR,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  header: {
    paddingTop: 22,
    width: "100%",
    height: 90,
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR,
    position: "relative",
    alignItems: "center",
  },
  buttonBack: {
    position: "absolute",
    left: 10,
    paddingTop: 32,
  },
  centerBlock: {
    flexDirection: "row",
    paddingRight: 40,
  },
  icon: {
    margin: 10,
    width: 45,
    height: 45,
    resizeMode: "cover",
  },
  name: {
    color: THEME.HEADER_TEXT_COLOR,
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 14,
  },
  buttonPlan: {
    position: "absolute",
    paddingTop: 28,
    right: 0,
  },

  footer: {
    position: "absolute",
    flexDirection: "row",
    height: 55,
    width: "100%",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR,
    bottom: 0,
  },
  buttonPlus: {
    paddingTop: 4,
  },
  input: {
    marginTop: 9,
    paddingLeft: 10,
    backgroundColor: THEME.BACKGROUNG_COLOR,
    height: 35,
    width: "70%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 15,
    color: "white",
    fontSize: 14,
  },
  buttonSendMes: {
    marginLeft: 10,
    width: 34,
    height: 34,
    //backgroundColor: THEME.BACKGROUNG_COLOR,
    //borderRadius: 50,
  },
});
