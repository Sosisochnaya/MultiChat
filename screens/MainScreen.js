import React, {useEffect, useState} from "react";
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

export const MainScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [vk_list, setVKlist] = useState([]);

  const openDialogHendler = (item) => {
    navigation.navigate("Dialog", {dialog: item});
  };

  const goToChooseMessanger = () => {
    setModal(true);
  };

  function vk_dialog_list_1() {
    // return
    fetch(
      "https://api.vk.com/method/messages.getConversations?count=15&v=5.103&access_token=" +
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
    setTimeout(console.log, 1000, "update");
    _retrieveData();
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

      {isLoading ? (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={vk_list}
          keyExtractor={(dialog) => dialog.conversation.peer.id.toString()}
          renderItem={({item}) => (
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

  dialog: {},
});
