import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
  LinearGradient,
  Image,
  Alert,
} from "react-native";
import {DialogInList} from "../components/DialogInList";
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {AntDesign} from "@expo/vector-icons";
import {ChooseMessangerScreen} from "./ChooseMessanger";

var token;
var list = [];
var last_message_text = "default";
var your_id;
var name;
var photo;

export const MainScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [isToken, setToken] = useState(true);
  const [modal, setModal] = useState(false);
  const [vk_list, setVKlist] = useState([]);
  const [whitelist, setWhitelist] = useState([]);

  // const {MTProto} = require("@mtproto/core");

  const openDialogHendler = (item) => {
    navigation.navigate("Dialog", {dialog: item});
  };
  var _retrieveData = async () => {
    try {
      token = await AsyncStorage.getItem("vk_token");
      if (token !== null) {
        // console.log(token);
        setToken(false);
      }
    } catch (error) {
      console.log("error token");
    }
  };
  const goToChooseMessanger = () => {
    setModal(true);
  };

  async function vk_dialog_list_1() {
    var _getWhitelist = async () => {
      AsyncStorage.getItem("whitelist")
        .then((req) => JSON.parse(req))
        .then((json) => setWhitelist(json))
        .catch((error) => console.log("error!"));
    };

    _getWhitelist();

    await fetch(
      "https://api.vk.com/method/users.get?v=5.123&access_token=" + token
    )
      .then((response) => response.json())
      .then((json_lol_kek) => {
        if (json_lol_kek.error == null) {
          your_id = json_lol_kek.response[0].id;
        }
      });

    await fetch(
      "https://api.vk.com/method/messages.getConversations?count=20&extended=1&v=5.123&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.error == null) {
          json.response.items.forEach((item) => {
            if (whitelist.includes(item.conversation.peer.id)) {
              if (item.conversation.peer.type == "user") {
                if (
                  item.last_message.text == "" &&
                  item.last_message.fwd_messages[0] != null
                ) {
                  last_message_text = "Forwarded messages";
                } else if (item.last_message.text == "") {
                  if (item.last_message.attachments[0].type == "photo") {
                    last_message_text = "Photo";
                  }
                  if (item.last_message.attachments[0].type == "video") {
                    last_message_text = "Video";
                  }
                  if (item.last_message.attachments[0].type == "audio") {
                    last_message_text = "Audio";
                  }
                  if (item.last_message.attachments[0].type == "doc") {
                    last_message_text = "Document";
                  }
                  if (item.last_message.attachments[0].type == "point") {
                    last_message_text = "Map";
                  }
                  if (item.last_message.attachments[0].type == "gift") {
                    last_message_text = "Gift";
                  }
                  if (item.last_message.attachments[0].type == "link") {
                    last_message_text = "Link";
                  }
                  if (item.last_message.attachments[0].type == "sticker") {
                    last_message_text = "Sticker";
                  }
                  if (item.last_message.attachments[0].type == "wall") {
                    last_message_text = "Wall post";
                  }
                  if (
                    item.last_message.attachments[0].type == "audio_message"
                  ) {
                    last_message_text = "Voice message";
                  }
                } else last_message_text = item.last_message.text;
                if (item.last_message.from_id == your_id)
                  last_message_text = "You: " + last_message_text;

                json.response.profiles.forEach((profile) => {
                  if (profile.id == item.conversation.peer.id) {
                    name = profile.first_name + " " + profile.last_name;
                    photo = profile.photo_50;
                  }
                });

                list.push({
                  id: item.conversation.peer.id,
                  type: "user",
                  name: name,
                  photo: photo,
                  unread_count: item.conversation.unread_count,
                  last_message_text: last_message_text,
                  last_message_from: item.last_message.from_id,
                  last_message_date: item.last_message.date,
                });
              }
              if (item.conversation.peer.type == "chat") {
                if (
                  item.last_message.text == "" &&
                  item.last_message.fwd_messages[0] != null
                ) {
                  last_message_text = "Forwarded messages";
                } else if (item.last_message.text == "") {
                  if (item.last_message.attachments[0].type == "photo") {
                    last_message_text = "Photo";
                  }
                  if (item.last_message.attachments[0].type == "video") {
                    last_message_text = "Video";
                  }
                  if (item.last_message.attachments[0].type == "audio") {
                    last_message_text = "Audio";
                  }
                  if (item.last_message.attachments[0].type == "doc") {
                    last_message_text = "Document";
                  }
                  if (item.last_message.attachments[0].type == "point") {
                    last_message_text = "Map";
                  }
                  if (item.last_message.attachments[0].type == "gift") {
                    last_message_text = "Gift";
                  }
                  if (item.last_message.attachments[0].type == "link") {
                    last_message_text = "Link";
                  }
                  if (item.last_message.attachments[0].type == "sticker") {
                    last_message_text = "Sticker";
                  }
                  if (item.last_message.attachments[0].type == "wall") {
                    last_message_text = "Wall post";
                  }
                  if (
                    item.last_message.attachments[0].type == "audio_message"
                  ) {
                    last_message_text = "Voice message";
                  }
                } else last_message_text = item.last_message.text;
                if (item.last_message.from_id == your_id)
                  last_message_text = "You: " + last_message_text;
                list.push({
                  id: item.conversation.peer.id,
                  type: "chat",
                  name: item.conversation.chat_settings.title,
                  photo: item.conversation.chat_settings.photo.photo_50,
                  unread_count: item.conversation.unread_count,
                  last_message_text: last_message_text,
                  last_message_from: item.last_message.from_id,
                  last_message_date: item.last_message.date,
                });
              }
            }
          });
        }
      });
    // console.log(list);
    if (list != "") setVKlist(list);
    list = [];
    setLoading(false);
  }

  useEffect(() => {
    _retrieveData();
    setTimeout(vk_dialog_list_1, 10000);
  });

  return (
    <View style={styles.conteiner}>
      <ChooseMessangerScreen
        navigation={navigation}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      <View style={styles.header}>
        <View style={styles.line1}>
          <Text style={styles.text}>Chats</Text>
        </View>

        <View style={styles.button}>
          <AntDesign.Button
            name="plus"
            size={25}
            backgroundColor="transparent"
            onPress={goToChooseMessanger}
          ></AntDesign.Button>
        </View>
        <TextInput
          placeholder="Find message..."
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
        />
      </View>

      {isToken ? (
        Alert.alert(
          "Hello",
          "You need to set token",
          [{text: "OK", onPress: () => navigation.navigate("Token")}],
          {cancelable: false}
        )
      ) : /*
        <View style={styles.tokenwrap}>
          <Text style={styles.tokentext}>Enter Token</Text>

          <View style={styles.wrapvk}>
            <TouchableOpacity onPress={() => navigation.navigate("Token")}>
              <LinearGradient
                colors={["#FFDE67", "#FFA467", "#FF6666"]}
                start={[1.0, 0.2]}
                end={[0.2, 1.0]}
                style={styles.button1}
              >
                <Text style={styles.label}>Enter VK Token</Text>
                <Image
                  style={styles.imageVk}
                  source={require("../assets/vk.png")}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>*/
      isLoading ? (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={vk_list}
          keyExtractor={(dialog) => dialog.id.toString()}
          renderItem={({item}) => (
            <DialogInList dialog={item} onOpen={openDialogHendler} />
          )}
        />
      )}
      <Navbar navigation={navigation} status={"Chat"} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    position: "relative",
    paddingBottom: 60,
  },
  header: {
    //width: "100%",
    paddingTop: 20,
    //marginTop: 24,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
  },
  line1: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    paddingBottom: 10,
  },
  input: {
    paddingLeft: 110,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 30,
    width: "85%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 17,
    fontFamily: "roboto_regular",
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingTop: 25,
  },

  dialog: {},
});
