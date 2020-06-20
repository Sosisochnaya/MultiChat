import React, {useEffect, useState, useReducer} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import {DialogInList} from "../components/DialogInList";
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {AntDesign} from "@expo/vector-icons";
import {ChooseMessangerScreen} from "./ChooseMessanger";

var _retrieveData = async () => {
  try {
    token = await AsyncStorage.getItem("vk_token");
    if (token !== null) {
      // console.log(token);
    }
  } catch (error) {
    console.log("error token");
  }
};

var token;
var list = [];
var last_message_text = "default";
var your_id;

export const MainScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [vk_list, setVKlist] = useState([]);
  const [whitelist, setWhitelist] = useState([]);
  const [tojson1, setToJson1] = useState([]);
  const [tojson2, setToJson2] = useState([]);

  const openDialogHendler = (item) => {
    navigation.navigate("Dialog", {dialog: item});
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
    if (whitelist != null) {
      whitelist.forEach((item) => {
        fetch(
          "https://api.vk.com/method/messages.getConversationsById?peer_ids=" +
            item +
            "&extended=1&v=5.123&access_token=" +
            token
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.error == null) {
              if (json.response.items[0].peer.type == "user") {
                fetch(
                  "https://api.vk.com/method/messages.getById?message_ids=" +
                    json.response.items[0].last_message_id +
                    "&v=5.123&access_token=" +
                    token
                )
                  .then((response) => response.json())
                  .then((json_lol) => {
                    if (json_lol.error == null) {
                      if (
                        json_lol.response.items[0].text == "" &&
                        json_lol.response.items[0].fwd_messages[0] != null
                      ) {
                        last_message_text = "Forwarded messages";
                      } else if (json_lol.response.items[0].text == "") {
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "photo"
                        ) {
                          last_message_text = "Photo";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "video"
                        ) {
                          last_message_text = "Video";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "audio"
                        ) {
                          last_message_text = "Audio";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "doc"
                        ) {
                          last_message_text = "Document";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "point"
                        ) {
                          last_message_text = "Map";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "gift"
                        ) {
                          last_message_text = "Gift";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "link"
                        ) {
                          last_message_text = "Link";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "sticker"
                        ) {
                          last_message_text = "Sticker";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "wall"
                        ) {
                          last_message_text = "Wall post";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "audio_message"
                        ) {
                          last_message_text = "Voice message";
                        }
                      } else
                        last_message_text = json_lol.response.items[0].text;
                      if (json_lol.response.items[0].from_id == your_id)
                        last_message_text = "You: " + last_message_text;
                      list.forEach((lol) => {
                        if (lol.id == item) {
                          list.splice(indexOf(lol), 1);
                        }
                      });
                      list.push({
                        id: item,
                        type: "user",
                        name:
                          json.response.profiles[0].first_name +
                          " " +
                          json.response.profiles[0].last_name,
                        photo: json.response.profiles[0].photo_50,
                        unread_count: json.response.items[0].unread_count,
                        last_message_id: json.response.items[0].last_message_id,
                        last_message_text: last_message_text,
                        last_message_from: json_lol.response.items[0].from_id,
                        last_message_date: json_lol.response.items[0].date,
                      });
                    }
                  });
              }
              if (json.response.items[0].peer.type == "chat") {
                fetch(
                  "https://api.vk.com/method/messages.getById?message_ids=" +
                    json.response.items[0].last_message_id +
                    "&v=5.123&access_token=" +
                    token
                )
                  .then((response) => response.json())
                  .then((json_lol) => {
                    if (json_lol.error == null) {
                      if (
                        json_lol.response.items[0].text == "" &&
                        json_lol.response.items[0].fwd_messages[0] != null
                      ) {
                        last_message_text = "Forwarded messages";
                      } else if (json_lol.response.items[0].text == "") {
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "photo"
                        ) {
                          last_message_text = "Photo";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "video"
                        ) {
                          last_message_text = "Video";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "audio"
                        ) {
                          last_message_text = "Audio";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "doc"
                        ) {
                          last_message_text = "Document";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "point"
                        ) {
                          last_message_text = "Map";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "gift"
                        ) {
                          last_message_text = "Gift";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "link"
                        ) {
                          last_message_text = "Link";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "sticker"
                        ) {
                          last_message_text = "Sticker";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "wall"
                        ) {
                          last_message_text = "Wall post";
                        }
                        if (
                          json_lol.response.items[0].attachments[0].type ==
                          "audio_message"
                        ) {
                          last_message_text = "Voice message";
                        }
                      } else
                        last_message_text = json_lol.response.items[0].text;
                      if (json_lol.response.items[0].from_id == your_id)
                        last_message_text = "You: " + last_message_text;
                      var ids = [];
                      var temp = list.indexOf(item);
                      list.forEach((lol) => {
                        if (lol.id == item) {
                          list.splice(indexOf(lol), 1);
                        }
                      });
                      list.push({
                        id: item,
                        type: "chat",
                        name: json.response.items[0].chat_settings.title,
                        photo:
                          json.response.items[0].chat_settings.photo.photo_50,
                        unread_count: json.response.items[0].unread_count,
                        last_message_id: json.response.items[0].last_message_id,
                        last_message_text: last_message_text,
                        last_message_from: json_lol.response.items[0].from_id,
                        last_message_date: json_lol.response.items[0].date,
                      });
                    }
                  });
              }
            }
          });
      });
      list.sort(function (a, b) {
        return (
          parseFloat(b.last_message_date) - parseFloat(a.last_message_date)
        );
      }); //сосисочная иван денис женя
      // console.log(list);
      if (list != "") setVKlist(list);
      setLoading(false);
    } else setLoading(false);
  }

  useEffect(() => {
    setTimeout(vk_dialog_list_1, 5000);
    _retrieveData();
    // vk_dialog_list_1();
    // tg_auth();
  });

  return (
    <View style={styles.conteiner}>
      <ChooseMessangerScreen
        navigation={navigation}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      <View style={styles.header}>
        <View style={styles.swapmes}>
          <MaterialCommunityIcons
            name="telegram"
            size={30}
            color="white"
            onPress={() => navigation.navigate("MainTG")}
          />
        </View>
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

      {isLoading ? (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={vk_list}
          keyExtractor={(dialog) => dialog.id.toString()}
          // data={vk_list}
          // keyExtractor={(dialog) => dialog.conversation.peer.id.toString()}
          renderItem={({item}) => (
            // <Text>{item.last_message.text}</Text>

            <DialogInList dialog={item} onOpen={openDialogHendler} />
          )}
        />
      )}
      <Navbar navigation={navigation} />
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

  swapmes: {
    position: "absolute",
    left: 20,
    top: 0,
    paddingTop: 30,
  },
});
