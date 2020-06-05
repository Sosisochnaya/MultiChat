import React, {useEffect} from "react";
import {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {THEME} from "../themes/theme";
import {DialogInList} from "../components/DialogInList";
import {Message} from "../components/messagers";
import {Ionicons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {DATA} from "../data";

const token =
  "d24147844a4e218a89ec037cc9cb01b0117df41029304faccd5f330351d34756d83c5d657e26b3f64052c";

// var _retrieveData = async () => {
//   try {
//     token = await AsyncStorage.getItem('vk_token');
//     if (token !== null) {
//       console.log(token);
//     }
//   } catch (error) {
//     console.log('error token');
//   }
// };

// var token;
export const DialogScreen = ({navigation}) => {
  // const dialogId = navigation.getParam("dialog");
  const dialog = navigation.getParam("dialog");
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [mess, setMess] = useState();
  const [vk_mess, setmesslist] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function vk_mess_history() {
    // return
    fetch(
      "https://api.vk.com/method/messages.getHistory?count=50&peer_id=" +
        dialog.conversation.peer.id +
        "&v=5.103&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.error == null) {
          setmesslist(json.response.items);
          setLoading(false);
        }
      });
  }

  function init() {
    let fullname;

    if (dialog.conversation.peer.type == "user") {
      fetch(
        "https://api.vk.com/method/users.get?user_ids=" +
          dialog.conversation.peer.id +
          "&fields=photo_50&v=5.103&access_token=" +
          token
      )
        .then((user) => user.json())
        .then((user) => {
          if (user.error == null) {
            let fullnamejson = user.response[0];
            fullname = fullnamejson.first_name + " " + fullnamejson.last_name;
            setName(fullname);
            setIcon(user.response[0].photo_50);
            setLoading(false);
          }
        })
        .catch((error) => console.error(error));
    } else {
      if (dialog.conversation.peer.type == "chat") {
        fullname = dialog.conversation.chat_settings.title;
        // setName(fullname);
        setIcon(dialog.conversation.chat_settings.photo.photo_50);
      } else {
        if (dialog.conversation.peer.type == "group") {
          fullname = "its group (" + dialog.conversation.peer.local_id + ")";
          // setName(fullname);
        } else {
          setName("ti kto(who)?");
        }
      }
      function limitStr(str, n) {
        if (str.length < n) return str;
        let symb = "...";
        return str.substr(0, n - symb.length) + symb;
      }
      setName(limitStr(fullname, 19));
    }
    // <FlatList
    //   data={vk_mess}
    //   keyExtractor={(mes) => mes.conversation_message_id}
    //   renderItem={({mes}) => <Text>{mes.text}</Text>}
    // />;
    // vk_mess.forEach(function (item) {
    //   console.log(item.text);
    // });
  }

  function sendMessage() {
    if (dialog.conversation.peer.type == "user") {
      fetch(
        "https://api.vk.com/method/messages.send?peer_id=" +
          dialog.conversation.peer.id +
          "&message=" +
          mess +
          "&v=5.44&access_token=" +
          token
      );
    } else {
      if (dialog.conversation.peer.type == "chat") {
        fetch(
          "https://api.vk.com/method/messages.send?peer_id=" +
            dialog.conversation.peer.id +
            "&message=" +
            mess +
            "&v=5.44&access_token=" +
            token
        );
      } else {
        if (dialog.conversation.peer.type == "group") {
          var tmp = -dialog.conversation.peer.id;
          fetch(
            "https://api.vk.com/method/messages.send?peer_id=" +
              tmp +
              "&message=" +
              mess +
              "&v=5.44&access_token=" +
              token
          );
        }
      }
    }
  }

  useEffect(() => {
    init();
    vk_mess_history();
    console.log("update messages");
    // setTimeout(vk_mess_history, 10000);
    setTimeout(console.log, 10000, "update messages");
    // setTimeout(init, 5000);
    // setTimeout(console.log, 5000, "dialog screen load");
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
            //TouchableOpacity={}
          />
        </View>
        <View style={styles.centerBlock}>
          <ImageBackground
            style={styles.icon}
            borderRadius={50}
            source={{uri: icon}}
          />
          <Text style={styles.name}>{name}</Text>
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
      <View style={styles.flat}>
        <FlatList
          inverted
          data={vk_mess}
          keyExtractor={(mes) => mes.conversation_message_id}
          renderItem={({item}) => (
            <Message mes={item} id={dialog.conversation.peer.id} />
          )}
        />
      </View>

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
          {/* <Ionicons.Button
            name="md_send"
            size={34}
            color={THEME.DIALOG_NAME_COLOR}
            backgroundColor="transparent"
            //onPress={() => navigation.goBack(null)}
          /> */}
          <AntDesign.Button
            name="rightsquareo"
            size={30}
            backgroundColor="transparent"
            onPress={sendMessage}
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
    color: THEME.HEADER_TEXT_COLOR_BLACK,
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 14,
    fontFamily: "nunito_bold",
  },
  buttonPlan: {
    position: "absolute",
    paddingTop: 28,
    right: 0,
  },

  flat: {
    paddingBottom: 60,
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
});
