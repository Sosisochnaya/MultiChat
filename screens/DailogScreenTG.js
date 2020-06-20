import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
  Image,
} from "react-native";
import {THEME} from "../themes/theme";
import {MessageTG} from "../components/messagersTG";
import {Ionicons, AntDesign} from "@expo/vector-icons";

var _retrieveData = async () => {
  try {
    number = await AsyncStorage.getItem("number");
    if (number !== null) {
    }
  } catch (error) {
    console.log("error number");
  }
};

var number = _retrieveData();

export const DialogScreenTG = ({navigation}) => {
  const dialog = navigation.getParam("dialog");
  const [mess, setMess] = useState();
  const [tg_mess, setmesslist] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function vk_mess_history() {
    // return

    fetch(
      "http://vtsrrdf.pythonanywhere.com/get_messages?id=" +
        dialog.id +
        "&phone=" +
        number +
        "&limit=" +
        50
    )
      .then((response) => response.json())
      .then((json) => {
        setmesslist(json);
        setLoading(false);
      });
  }

  function sendMessage() {
    fetch(
      "http://vtsrrdf.pythonanywhere.com/send_message?id=" +
        dialog.id +
        "&text=" +
        mess +
        "&phone=" +
        number
    );
  }

  useEffect(() => {
    vk_mess_history();
    console.log("update messages");
  });

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
          />
        </View>
        <View style={styles.centerBlock}>
          <ImageBackground
            style={styles.icon}
            borderRadius={50}
            source={{uri: dialog.icon}}
          />
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {dialog.name}{" "}
          </Text>
        </View>
        <View style={styles.buttonPlan}>
          <TouchableOpacity onPress={() => navigation.navigate("Plan")}>
            <Image
              style={styles.plan}
              source={require("../assets/PlanW.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {isLoading ? (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.flat}>
          <FlatList
            inverted
            data={tg_mess}
            keyExtractor={(mes) => mes.id_mes}
            renderItem={({item}) => <MessageTG mes={item} />}
          />
        </View>
      )}

      <View style={styles.footer}>
        <View style={styles.buttonPlus}>
          <AntDesign.Button
            name="plus"
            size={30}
            backgroundColor="transparent"
          ></AntDesign.Button>
        </View>

        <TextInput
          placeholder="Text..."
          placeholderTextColor="#7C7C7C"
          style={styles.input}
          onChangeText={(text) => setMess(text)}
        />

        <View style={styles.buttonSendMes}>
          <AntDesign.Button
            name="rightsquareo"
            size={30}
            backgroundColor="transparent"
            onPress={sendMessage}
          ></AntDesign.Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  header: {
    // paddingTop: 22,
    width: "100%",
    height: 90,
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonBack: {
    //flex: 1,
    position: "absolute",
    paddingTop: 32,
    //flexShrink: 1,
    left: 10,
    //backgroundColor: 'red',
  },
  centerBlock: {
    //flex: 2,
    flexDirection: "row",
    paddingTop: 22,
    justifyContent: "center",

    // left: 10,
    //paddingRight: 40,
    // marginLeft: 55,
    //flexShrink: 3,

    position: "absolute",
  },
  icon: {
    //margin: 10,
    width: 45,
    height: 45,
    resizeMode: "cover",
  },
  name: {
    color: THEME.HEADER_TEXT_COLOR_BLACK,
    fontStyle: "normal",
    fontSize: 20,
    paddingTop: 14,
    marginLeft: 10,
    fontFamily: "nunito_bold",
  },
  buttonPlan: {
    //flex: 1,
    position: "absolute",
    paddingTop: 32,
    // right: 10,
    right: 10,
    // flexShrink: 1,
    // backgroundColor: 'red',
    //left: 10,
  },

  flat: {
    paddingBottom: 150,
    // backgroundColor: "white",
  },

  footer: {
    position: "absolute",
    flexDirection: "row",
    height: 55,
    width: "100%",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    bottom: 0,
  },
  buttonPlus: {
    paddingTop: 4,
    marginLeft: 4,
  },
  input: {
    marginTop: 10,
    marginLeft: -5,
    paddingLeft: 10,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 35,
    width: "70%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderRadius: 20,
    color: "white",
    fontSize: 14,
    fontFamily: "roboto_regular",
  },
  buttonSendMes: {
    marginLeft: 4,
    marginTop: 4,
    width: "100%",
    height: 44,
    //backgroundColor: THEME.BACKGROUNG_COLOR,
    //borderRadius: 50,
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },

  plan: {
    position: "relative",
    height: 40,
    width: 37.63,
  },
});
