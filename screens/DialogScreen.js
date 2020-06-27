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
import {Message} from "../components/messagers";
import {Ionicons, AntDesign} from "@expo/vector-icons";

var _retrieveData = async () => {
  try {
    token = await AsyncStorage.getItem("vk_token");
    number = await AsyncStorage.getItem("number");
    if (token !== null) {
      // console.log(token);
    }
  } catch (error) {
    console.log("error token");
  }
};

var token;
var number;
export const DialogScreen = ({navigation}) => {
  const dialog = navigation.getParam("dialog");
  const [mess, setMess] = useState();
  const [list_mess, setmesslist] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function mess_history() {
    _retrieveData();
    if (dialog.namemes == "TG")
      fetch(
        "http://109.227.206.136:5000/get_messages_tg?id=" +
          dialog.id +
          "&phone=" +
          (await AsyncStorage.getItem("number")) +
          "&limit=" +
          100
      )
        .then((response) => response.json())
        .then((json) => {
          setmesslist(json);
          setLoading(false);
        });
    else
      fetch(
        "http://109.227.206.136:5000/get_messages_vk?id=" +
          dialog.id +
          "&token=" +
          (await AsyncStorage.getItem("vk_token")) +
          "&type=" +
          dialog.type
      )
        .then((response) => response.json())
        .then((json) => {
          setmesslist(json);
          setLoading(false);
        });
  }

  async function sendMessage() {
    if (mess != "") {
      if (dialog.namemes == "TG")
        fetch(
          "http://109.227.206.136:5000/send_message_tg?id=" +
            dialog.id +
            "&text=" +
            mess +
            "&phone=" +
            (await AsyncStorage.getItem("number"))
        );
      else {
        let idi = "" + dialog.id + "";
        idi = idi.slice(0, -1);
        console.log(idi);
        fetch(
          "https://api.vk.com/method/messages.send?peer_id=" +
            idi +
            "&message=" +
            mess +
            "&random_id=" +
            Math.random(9223372036854775807) +
            "&v=5.110&access_token=" +
            (await AsyncStorage.getItem("vk_token"))
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.error == null) {
              setmesslist(json.response.items);
              setLoading(false);
            }
          });
      }
      setMess("");
    }
  }

  useEffect(() => {
    _retrieveData();
    mess_history();
    // console.log("update messages");
  });

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.buttonBack}>
          <TouchableOpacity
            style={styles.op}
            onPress={() => navigation.goBack(null)}
          >
            <Image
              style={styles.image}
              source={require("../assets/backTODO.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centerBlock}>
          <ImageBackground
            style={styles.icon}
            borderRadius={50}
            source={{uri: dialog.icon}}
          />
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {dialog.name}
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
            data={list_mess}
            keyExtractor={(mes) => mes.id_mes}
            renderItem={({item}) => (
              <Message mes={item} typeChat={dialog.type} />
            )}
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
          value={mess}
        />

        <View style={styles.buttonSendMes}>
          <TouchableOpacity
            onPress={() => {
              sendMessage();
              setMess("");
            }}
          >
            <Image
              style={styles.send}
              source={require("../assets/SendBut.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>{dialogId}</Text> */}
    </View>
  );
};

DialogScreen.navigationOptions = ({navigation}) => {};

const styles1 = StyleSheet.create({
  conteiner: {
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  header: {
    paddingTop: 22,
    width: "100%",
    height: 90,
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    position: "relative",
    alignItems: "center",
  },
  buttonBack: {
    position: "absolute",
    left: "6%",
    paddingTop: 32,
    // top: "50%",
    // backgroundColor: "red",
  },
  image: {
    top: "50%",
    // left: "3%",
    height: 20,
    width: 12,
  },
  centerBlock: {
    flexDirection: "row",
    // paddingRight: 40,
    width: "70%",
    height: "100%",
  },
  icon: {
    margin: 10,
    width: 45,
    height: 45,
    resizeMode: "cover",
  },
  name: {
    color: THEME.HEADER_TEXT_COLOR_BLACK,
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 14,
    fontFamily: "nunito_bold",
    // backgroundColor: "white",
    width: "80%",
  },
  buttonPlan: {
    position: "absolute",
    // paddingTop: 32,
    top: "55%",
    right: "3%",
  },

  flat: {
    paddingBottom: 150,
    // marginBottom: 25,
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
    left: "15%",
    top: "3%",
    // marginTop: 4,
    width: "100%",
    //height: 44,
    //backgroundColor: THEME.BACKGROUNG_COLOR,
    //borderRadius: 50
    //backgroundColor: 'red',
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

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  header: {
    paddingTop: 22,
    width: "100%",
    height: 90,
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    position: "relative",
    alignItems: "center",
  },
  buttonBack: {
    position: "absolute",
    left: "6%",
    // paddingTop: 32,
    top: "70%",
    // backgroundColor: "red",
  },
  image: {
    // top: "77%",
    // left: "3%",
    height: 20,
    width: 12,
  },
  centerBlock: {
    flexDirection: "row",
    // paddingRight: 40,
    top: "1%",
    width: "80%",
    height: "100%",
    // backgroundColor: 'green',
  },
  icon: {
    margin: 10,
    width: 45,
    height: 45,
    resizeMode: "cover",
  },
  name: {
    color: THEME.HEADER_TEXT_COLOR_BLACK,
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 14,
    fontFamily: "nunito_bold",
    // backgroundColor: "white",
    width: "70%",
    // backgroundColor: 'red',
  },
  buttonPlan: {
    position: "absolute",
    // paddingTop: 32,
    top: "55%",
    right: "3%",
  },

  flat: {
    paddingBottom: 150,
    // marginBottom: 25,
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
    top: "1%",
    left: "5%",
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
    // backgroundColor: 'green',
  },
  buttonSendMes: {
    left: "15%",
    top: "3%",
    // marginTop: 4,
    width: "100%",
    //height: 44,
    //backgroundColor: THEME.BACKGROUNG_COLOR,
    //borderRadius: 50
    //backgroundColor: 'red',
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

  send: {
    width: 34,
    height: 34,
  },
});
