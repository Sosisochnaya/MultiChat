import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";

// var _storeData = async () => {
//   try {
//     await AsyncStorage.setItem("vk_token", this.token);
//     console.log("set token");
//     Alert.alert(
//       "Nice",
//       "You set your token",
//       [{text: "OK", onPress: () => navigation.goBack(null)}],
//       {cancelable: false}
//     );
//   } catch (error) {
//     console.log("error token");
//   }
// };

export const TokenScreen = ({navigation}) => {
  // var navigation = navigation.getParam("Navi");s
  var token;
  async function _storeData() {
    try {
      let name;
      if (token.length == 85) {
        await fetch(
          "https://api.vk.com/method/users.get?v=5.123&access_token=" + token
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.error == null) {
              name =
                json.response[0].first_name + " " + json.response[0].last_name;
              //await AsyncStorage.setItem("vk_token", token);
              console.log("set token");
              Alert.alert(
                "Nice",
                "You logined as: " + name,
                [
                  {text: "OK", onPress: () => navigation.navigate("Main")},
                  {
                    text: "Choose chats",
                    onPress: () =>
                      navigation.navigate("AddChat", {messager: "VK"}),
                  },
                ],
                {cancelable: false}
              );
            } else
              Alert.alert(
                "Not Nice",
                "You set bad token",
                [{text: "Try again"}],
                {cancelable: false}
              );
          });
        await AsyncStorage.setItem("vk_token", token);
      } else
        Alert.alert("Not Nice", "You set bad token", [{text: "Try again"}], {
          cancelable: false,
        });
    } catch (error) {
      console.log("error token");
      Alert.alert("Not Nice", "You set bad token", [{text: "Try again"}], {
        cancelable: false,
      });
    }
  }

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Auth VK</Text>
        </View>
      </View>

      <View style={styles.input_wrap}>
        <TextInput
          placeholder="Enter token..."
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
          onChangeText={(text) => (token = text)}
        />
      </View>

      <View style={styles.wrap}>
        <TouchableOpacity onPress={_storeData}>
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

      <View style={styles.form}>
        <Text style={styles.instructions}>Instruction</Text>
        <LinearGradient
          colors={["#FFDE67", "#FFA467", "#FF6666"]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.form1}
        >
          <Text style={styles.getting_token}>
            Token can be obtained at https://vkhost.github.io/{" "}
          </Text>
          <Text style={styles.paragraph1}>
            1) You need to select the settings;
          </Text>
          <Text style={styles.paragraph2}>
            2) Enter application ID 6146827;{" "}
          </Text>
          <Text style={styles.paragraph3}>
            3) Select the necessary rights to work:
          </Text>
          <Text style={styles.paragraph4}>
            (messages and access at any time);
          </Text>
          <Text style={styles.paragraph5}>
            4)Copy from the address and paste here.
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

TokenScreen.navigationOptions = {
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
    marginTop: 100,
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

  instructions: {
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  getting_token: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph1: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph2: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph3: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph4: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  paragraph5: {
    paddingLeft: 10,
    color: THEME.TEXT_COLOR_BLACK,
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "nunito_bold",
  },

  form: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },

  form1: {
    width: "90%",
    borderRadius: 10,
  },
});
