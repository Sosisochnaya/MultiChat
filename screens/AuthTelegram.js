import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";

//var _storeData = async () => {
// try {
//    await AsyncStorage.setItem("vk_token", this.token);
//    console.log("set token");
//  } catch (error) {
//    console.log("error token");
//  }
//};
export const AuthTelegram = ({navigation}) => {
  const [number, setNumber] = useState();
  const SendHendler = () => {
    fetch("http://vtsrrdf.pythonanywhere.com/send_code?phone=" + number);
    AsyncStorage.setItem("number", number);
    navigation.navigate("Check", {number: number});
  };
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Auth TG</Text>
        </View>
      </View>

      <View style={styles.phone}>
        <Text style={styles.phoneh1}>Phone</Text>
        <Text style={styles.phoneh2}>Enter your phone number</Text>
      </View>

      <View style={styles.input_wrap}>
        <TextInput
          placeholder="+7..."
          keyboardType="number-pad"
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
          onChangeText={(text) => setNumber(text)}
        />
      </View>

      <View style={styles.wrap}>
        <TouchableOpacity onPress={SendHendler}>
          <LinearGradient
            colors={["#FFDE67", "#FFA467", "#FF6666"]}
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.button1}
          >
            <Text style={styles.label}>Send</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AuthTelegram.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
  },

  header: {
    paddingTop: 20,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  heading: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },

  text: {
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  input_wrap: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },

  input: {
    paddingLeft: 10,
    //paddingRight: "25%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 30,
    width: "80%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 17,
    fontFamily: "roboto_regular",
  },

  wrap: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },

  button1: {
    //marginLeft: "10%",
    alignItems: "center",
    width: "80%",
    //justifyContent: "center",
    flexDirection: "row",
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    height: 40,
    borderRadius: 10,
  },

  label: {
    paddingLeft: "40%",
    paddingRight: "40%",
    color: THEME.TEXT_COLOR_BLACK,
    fontFamily: "nunito_bold",
    fontSize: 18,
  },

  phone: {
    alignItems: "center",
    marginTop: 100,
  },

  phoneh1: {
    color: "white",
    fontSize: 30,
  },
  phoneh2: {
    color: "white",
    paddingTop: 20,
  },
});
