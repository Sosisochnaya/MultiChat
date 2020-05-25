import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import {DialogInList} from "../components/DialogInList";
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {AntDesign} from "@expo/vector-icons";
// import {EditModal} from "../components/EditModal";
import {DATA} from "../data";
// import {items} from "../data/listDialogs";
import {ChooseMessangerScreen} from "../screens/ChooseMessanger";
import * as FileSystem from "expo-file-system";

const token =
  "641e87ef1bf4531c92d165b454b232e7db1cc69fd3537a0b8203df29bb4ba16ebd8a87e2b7bdb0670c644";

// var fileString;

export const MainScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [vk_list, setVKlist] = useState([]);
  const [data, setData] = useState([]);

  const openDialogHendler = (dialog) => {
    navigation.navigate("Dialog", {dialogId: dialog.id});
  };

  const goToChooseMessanger = () => {
    setModal(true);
  };

  function vk_dialog_list_1() {
    // return
    fetch(
      "https://api.vk.com/method/messages.getConversations?count=10&v=5.103&access_token=" +
        token
    )
      .then((response) => response.json())
      .then((json) => setVKlist(json.response.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    // fetch("https://reactnative.dev/movies.json")
    //   .then((response) => response.json())
    //   .then((json) => setData(json.movies))
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  }

  useEffect(() => {
    setTimeout(vk_dialog_list_1, 5000);
    setTimeout(console.log, 5000, "update");
    // vk_dialog_list_1();
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
            //onPress={() => setModal(true)}
            onPress={goToChooseMessanger}
          ></AntDesign.Button>
        </View>
        <TextInput placeholder="Find message..." style={styles.input} />
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={vk_list}
          keyExtractor={(dialog) => dialog.conversation.peer.id.toString()}
          renderItem={({item}) => (
            // <Text>{item.last_message.text}</Text>

            <DialogInList dialog={item} onOpen={openDialogHendler} />
          )}
        />
      )}
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )} */}

      <Navbar navigation={navigation} />
    </View>
  );
};

MainScreen.navigationOptions = {
  //headerShown: false,
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR,
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
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR,
  },
  line1: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    paddingBottom: 10,
  },
  input: {
    paddingLeft: 10,
    backgroundColor: THEME.BACKGROUNG_COLOR,
    height: 30,
    width: "85%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 14,
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
  },
  button: {
    position: "absolute",
    right: 0,
    top: 3,
    paddingTop: 25,
  },
  dialog: {},
});
