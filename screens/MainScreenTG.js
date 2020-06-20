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
  Image,
} from "react-native";
import {DialogInListTG} from "../components/DialogInListTG";
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {ChooseMessangerScreen} from "./ChooseMessanger";

var _retrieveData = async () => {
  try {
    number = await AsyncStorage.getItem("number");
    if (number !== null) {
      // console.log(number);
    }
  } catch (error) {
    console.log("error number");
  }
};

var number = _retrieveData();

export const MainScreenTG = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [tg_list, setTgList] = useState([]);
  const openDialogHendler = (item) => {
    navigation.navigate("DialogTG", {dialog: item});
  };

  const goToChooseMessanger = () => {
    setModal(true);
  };

  function tg_dialog_list() {
    _retrieveData();
    fetch("http://vtsrrdf.pythonanywhere.com/get_dialogs?phone=" + number)
      .then((list) => list.json())
      .then((list) => {
        setTgList(list);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    tg_dialog_list();
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
            name="vk"
            size={30}
            color="white"
            onPress={() => navigation.navigate("Main")}
          />
        </View>

        <View style={styles.line1}>
          <Text style={styles.text}>Chats</Text>
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
          data={tg_list}
          keyExtractor={(dialog) => dialog.id}
          renderItem={({item}) => (
            <DialogInListTG dialog={item} onOpen={openDialogHendler} />
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

  swapmes: {
    position: "absolute",
    left: 20,
    top: 0,
    paddingTop: 30,
  },
});
