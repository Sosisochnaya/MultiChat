import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Navbar } from "../components/Navbar";
import { THEME } from "../themes/theme";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export const ConfigScreen = ({ navigation }) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.conteiner_header}>
        <View style={styles.header}>
          <View style={styles.heading}>
            <Text style={styles.text1}>Config</Text>
          </View>
        </View>
      </View>

      <View style={styles.log}>
        <Text style={styles.text}>Log in ________________________________</Text>
      </View>

      <View style={styles.wrapvk}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button1}
          >
            <Text style={styles.label}>Log in VKONTAKTE</Text>
            <Image
              style={styles.imageVk}
              source={require("../assets/vk.png")}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.wraptg}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button2}
          >
            <Text style={styles.label2}>Log in VKONTAKTE</Text>
            <Image
              style={styles.imagetg}
              source={require("../assets/telegram.png")}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.notification}>
        <Text style={styles.text2}>
          Notification __________________________
        </Text>
      </View>

      <View style={styles.remindtime}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.btn1}
          >
            <Text style={styles.label3}>REMIND TIME</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.label4}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.remindfor}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.btn3}
          >
            <Text style={styles.label3}>REMIND FOR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn4}>
          <Text style={styles.label5}>6h</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.remindfor2}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.btn3}
          >
            <Text style={styles.label3}>REMIND FOR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn4}>
          <Text style={styles.label5}>12h</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.remindfor3}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.btn3}
          >
            <Text style={styles.label3}>REMIND FOR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn4}>
          <Text style={styles.label5}>6h 15m</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view}>
        <Text style={styles.text2}>View _________________________________</Text>
      </View>

      <View style={styles.changetheme}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button3}
          >
            <Text style={styles.labelchange}>CHANGE THEME</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
  },

  conteiner_header: {
    //height: 60,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    //position: 'relative',
  },
  header: {
    width: "100%",
    paddingTop: 10,
    //marginTop: 24,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  heading: {
    width: "100%",
    //flexDirection: "row",
    position: "relative",
    alignItems: "center",
    //backgroundColor: '#111111'
  },

  text1: {
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  button1: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 45,
    width: "90%",
    marginLeft: 16,
    borderRadius: 5,
    alignItems: "center",
  },

  button2: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 45,
    width: "90%",
    marginLeft: 16,
    borderRadius: 5,
    alignItems: "center",
  },

  button3: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 45,
    width: "90%",
    marginLeft: 16,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 75,
    bottom: 20,
  },

  log: {
    marginTop: 15,
  },

  wrapvk: {
    marginTop: 15,
  },

  wraptg: {
    marginTop: 10,
  },

  remindtime: {
    flexDirection: "row",
    marginTop: 25,
  },

  remindfor: {
    flexDirection: "row",
    top: 10,
  },

  remindfor2: {
    flexDirection: "row",
    top: 20,
  },

  remindfor3: {
    flexDirection: "row",
    top: 30,
  },

  notification: {
    top: 10,
  },

  view: {
    top: 40,
  },

  changetheme: {
    top: 0,
  },

  btn1: {
    //marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    height: 45,
    width: 280,
    marginLeft: 16,
    borderRadius: 5,
    alignItems: "center",
  },

  btn2: {
    //marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 45,
    width: 45,
    marginLeft: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  btn3: {
    //marginTop: 25,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#57B8FF",
    height: 45,
    width: 210,
    marginLeft: 16,
    borderRadius: 5,
    alignItems: "center",
  },

  btn4: {
    //marginTop: 25,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 45,
    width: 115,
    marginLeft: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    // top: 15,
    left: 16,
    color: THEME.TEXT_COLOR_BLACK,
  },

  text2: {
    fontSize: 20,
    //top: 15,
    left: 22,
    color: THEME.TEXT_COLOR_BLACK,
  },
  imageVk: {
    height: 27,
    width: 43.57,
    marginRight: -35,
  },

  imagetg: {
    height: 30,
    width: 33,
    marginRight: -35,
  },

  label: {
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 16,
    marginLeft: -30,
  },

  label2: {
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 16,
    marginLeft: -33,
  },

  label3: {
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 16,
  },

  label4: {
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 16,
  },

  label5: {
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 16,
  },

  labelchange: {
    color: "white",
    fontSize: 16,
  },
});
