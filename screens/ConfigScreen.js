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
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";
import {AntDesign} from "@expo/vector-icons";

export const ConfigScreen = ({navigation}) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <Text style={styles.text1}>Config</Text>
      </View>

      <View style={styles.wraplog}>
        <View style={styles.log}>
          <View style={styles.login}>
            <Text style={styles.text}>Log in</Text>
          </View>
          <View style={styles.border}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.wrapvk}>
        <TouchableOpacity onPress={() => navigation.navigate("Token")}>
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
        <TouchableOpacity onPress={() => navigation.navigate("Telegram")}>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button2}
          >
            <Text style={styles.label2}>Log in TELEGRAM</Text>
            <Image
              style={styles.imagetg}
              source={require("../assets/telegram.png")}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapnotif}>
        <View style={styles.not}>
          <View style={styles.notif}>
            <Text style={styles.text}>Notification</Text>
          </View>
          <View style={styles.border2}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.remindtime}>
        <View style={styles.btn_1}>
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
        </View>
        <View style={styles.btn_2}>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.label4}>3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.remindfor}>
        <View style={styles.btn_3}>
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
        </View>
        <View style={styles.btn_4}>
          <TouchableOpacity style={styles.btn4}>
            <Text style={styles.label4}>6h</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.remindfor2}>
        <View style={styles.btn_5}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#FFDE67", "#FFA467", "#FF6666"]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.btn5}
            >
              <Text style={styles.label3}>REMIND FOR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_6}>
          <TouchableOpacity style={styles.btn6}>
            <Text style={styles.label4}>12h</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.remindfor3}>
        <View style={styles.btn_5}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#FFDE67", "#FFA467", "#FF6666"]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.btn5}
            >
              <Text style={styles.label3}>REMIND FOR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_6}>
          <TouchableOpacity style={styles.btn6}>
            <Text style={styles.label4}>12h</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapview}>
        <View style={styles.vi}>
          <View style={styles.view}>
            <Text style={styles.text}>View</Text>
          </View>
          <View style={styles.border3}>
            <Text></Text>
          </View>
        </View>
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

      <Navbar navigation={navigation} status={"Conf"} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    position: "relative",
    paddingBottom: "20%",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: "13%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  text1: {
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
    top: 10,
  },

  button1: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: 45,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 5,
    alignItems: "center",
  },

  button2: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: 45,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 5,
    alignItems: "center",
  },

  button3: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: "100%",
    width: "90%",
    marginLeft: "5%",

    borderRadius: 5,
    alignItems: "center",
    bottom: 0,
  },

  changetheme: {
    width: "100%",
    height: 45,
  },

  wraplog: {
    height: "8%",
    width: "100%",
    marginLeft: "10%",
  },

  log: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    //left: '35%',
  },

  login: {
    width: "20%",
  },

  border: {
    width: "80%",
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  wrapvk: {
    width: "100%",
    //height: '8%',
  },

  wraptg: {
    width: "100%",
    // height: '8%',
    top: "1%",
  },

  wrapnotif: {
    height: "8%",
    width: "100%",
    marginLeft: "10%",
  },

  not: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  notif: {
    width: "37%",
  },

  border2: {
    width: "63%",
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  wrapview: {
    marginTop: 0,
    marginLeft: "10%",
    height: "8%",
    width: "100%",
  },

  vi: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  view: {
    width: "16%",
  },

  border3: {
    width: "84%",
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  remindtime: {
    flexDirection: "row",
    width: "100%",
    //height: '8%',
    height: 45,
  },

  remindfor: {
    flexDirection: "row",
    marginTop: 6,
    width: "100%",
    //height: '8%',
    height: 45,
  },

  remindfor2: {
    flexDirection: "row",
    //top: '4%',
    marginTop: 6,
    width: "100%",
    // height: '8%',
    height: 45,
  },

  remindfor3: {
    flexDirection: "row",
    //top: '6%',
    marginTop: 6,
    width: "100%",
    //  height: '8%',
    height: 45,
  },

  btn_1: {
    width: "74%",
    marginLeft: "5%",
  },

  btn_2: {
    width: "13%",
    marginLeft: "3%",
  },

  btn1: {
    justifyContent: "space-around",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },

  btn2: {
    justifyContent: "space-around",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },

  btn_3: {
    width: "57%",
    marginLeft: "5%",
  },

  btn_4: {
    width: "30%",
    marginLeft: "3%",
  },

  btn3: {
    justifyContent: "space-around",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },

  btn4: {
    justifyContent: "space-around",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },

  btn_5: {
    width: "57%",
    marginLeft: "5%",
  },

  btn_6: {
    width: "30%",
    marginLeft: "3%",
  },

  btn5: {
    justifyContent: "space-around",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },

  btn6: {
    justifyContent: "space-around",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: THEME.TEXT_COLOR_BLACK,
  },

  text2: {
    fontSize: 20,
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
