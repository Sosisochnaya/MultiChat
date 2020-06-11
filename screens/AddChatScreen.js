import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from "react-native";
import { THEME } from "../themes/theme";
import { DialogChoose } from "../components/dialogchoose";
import { LinearGradient } from "expo-linear-gradient";

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

var _setWhitelist = async () => {
  try {
    await AsyncStorage.setItem("whitelist", JSON.stringify(whitelist));
    console.log("set whitelist");
  } catch (error) {
    console.log("error whitelist");
  }
};

var _removeWhitelist = async () => {
  try {
    await AsyncStorage.removeItem("whitelist");
    console.log("removed whitelist");
  } catch (error) {
    console.log("error whitelist");
  }
};

const AddHandler = () => {
  _setWhitelist();
};

var token;

var whitelist = [];

export const AddChatScreen = (props, onOpen, navigation) => {
  const [vk_list, setVKlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const handlePress = () => true;
  //export const AddDialog = ()

  const openAddingHandler = (item) => {
    if (whitelist.includes(item.conversation.peer.id) == false) {
      whitelist.push(item.conversation.peer.id);
    } else {
      whitelist.splice(whitelist.indexOf(item.conversation.peer.id), 1);
    }
  };

  _retrieveData();

  function vk_dialog_list_1() {
    // return
    fetch(
      "https://api.vk.com/method/messages.getConversations?count=20&v=5.103&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.error == null) {
          setVKlist(json.response.items);
          setLoading(false);
        }
      });
  }

  useEffect(() => {
    setTimeout(vk_dialog_list_1, 5000);
    //_removeWhitelist();
    // vk_dialog_list_1();
    // tg_auth();
  });

  return (
    // <TouchableOpacity>
    // onPress={() => onOpen()}
    // </TouchableOpacity>

    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Add chat</Text>
        </View>

        <TextInput
          placeholder="Find dialog..."
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
        />
      </View>
      {isLoading ? (
        <View></View>
      ) : (
        <FlatList
          data={vk_list}
          keyExtractor={(dialog) => dialog.conversation.peer.id.toString()}
          renderItem={({ item }) => (
            <DialogChoose dialog={item} onOpen={openAddingHandler} />
          )}
        />
      )}

      <TouchableOpacity style={styles.buttoncont}>
        <LinearGradient
          colors={["#FFDE67", "#FFA467", "#FF6666"]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.button}
        >
          <Text style={styles.title}>Add</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

AddChatScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
  },
  header: {
    paddingTop: 20,
    height: 110,
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

  imageLoupe: {
    marginRight: 4,
    marginTop: 4,
  },

  input: {
    marginTop: 10,
    paddingLeft: 115,
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

  conteinernav: {
    // position: 'relative',
    // flex: 1,

    //flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: THEME.BTN_ORANGE_COLOR,
    // height: 42,
    //height: "5%",
    backgroundColor: "transparent",
    height: 57,
    width: "100%",
    bottom: 0,
    top: 3,
    // left: 30,
  },
  title: {
    fontFamily: "nunito_bold",
    color: THEME.TEXT_COLOR_BLACK,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    borderRadius: 10,
    height: 42,

    // marginLeft: 30,
  },

  buttoncont: {
    width: "100%",

    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    bottom: 18,

    // marginLeft: 30,
  },
});
