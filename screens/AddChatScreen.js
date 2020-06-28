import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { THEME } from "../themes/theme";
import { DialogChoose } from "../components/dialogchoose";
import { LinearGradient } from "expo-linear-gradient";

var whitelistVK = [];
var whitelistTG = [];

export const AddChatScreen = ({ navigation }) => {
  const theme = navigation.getParam("theme");
  const messager = navigation.getParam("messager");
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const handlePress = () => true;

  const AddHandler = () => {
    // _removeWhitelist();
    _setWhitelist();
    navigation.navigate("Main");
  };

  var _setWhitelist = async () => {
    try {
      if (messager == "VK")
        await AsyncStorage.setItem("whitelistVK", JSON.stringify(whitelistVK));
      else
        await AsyncStorage.setItem("whitelistTG", JSON.stringify(whitelistTG));
      console.log("set whitelist");
    } catch (error) {
      console.log("error whitelist");
    }
  };

  var _removeWhitelist = async () => {
    try {
      if (messager == "VK") await AsyncStorage.removeItem("whitelistVK");
      else await AsyncStorage.removeItem("whitelistTG");
      console.log("removed whitelist");
    } catch (error) {
      console.log("error whitelist");
    }
  };

  const openAddingHandler = (item) => {
    if (messager == "VK")
      if (whitelistVK.includes(item.id) == false) whitelistVK.push(item.id);
      else whitelistVK.splice(whitelistVK.indexOf(item.id), 1);
    else if (whitelistTG.includes(item.id) == false) whitelistTG.push(item.id);
    else whitelistTG.splice(whitelistTG.indexOf(item.id), 1);
  };

  // _retrieveData();

  async function listVK() {
    fetch(
      "http://109.227.206.136:5000/get_dialogs_vk?token=" +
        (await AsyncStorage.getItem("vk_token"))
    )
      .catch((error) => console.log(error))
      .then((list) => list.json())
      .then((list) => {
        setList(list);
        // console.log(vk_list);
        // console.log(list);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function listTG() {
    fetch(
      "http://109.227.206.136:5000/get_dialogs_tg?phone=" +
        (await AsyncStorage.getItem("number"))
    )
      .catch((error) => console.log(error))
      .then((list) => list.json())
      .then((list) => {
        setList(list);
        // console.log(vk_list);
        // console.log(list);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    // console.log(list);
    if (messager == "TG") setTimeout(listTG, 2000);
    else setTimeout(listVK, 2000);
  });

  const styles = StyleSheet.create({
    conteiner: {
      height: "100%",
      backgroundColor: theme.background,
    },
    header: {
      paddingTop: 20,
      height: 110,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.headermenu,
      borderBottomColor: theme.headerstroke,
      borderBottomWidth: 0.5,
    },
    heading: {
      width: "100%",
      position: "relative",
      alignItems: "center",
    },

    text: {
      color: theme.headertext,
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
      // paddingLeft: 115,
      textAlign: "center",
      backgroundColor: theme.background,
      height: 30,
      width: "85%",
      borderColor: theme.headerstroke,
      borderWidth: 1,
      borderRadius: 10,
      color: "white",
      fontSize: 17,
      fontFamily: "roboto_regular",
    },

    conteinernav: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      height: 57,
      width: "100%",
      bottom: 0,
      top: 3,
    },
    title: {
      fontFamily: "nunito_bold",
      color: theme.white,
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      borderRadius: 10,
      height: 42,
    },

    buttoncont: {
      width: "100%",
      position: "absolute",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      bottom: "2%",
    },
  });

  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Add chat</Text>
        </View>
        <TextInput
          placeholder="Find dialog..."
          placeholderTextColor={theme.textmess}
          style={styles.input}
        />
      </View>
      {isLoading ? (
        <View style={{ padding: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(dialog) => dialog.id}
          renderItem={({ item }) => (
            <DialogChoose
              dialog={item}
              onOpen={openAddingHandler}
              theme={theme}
            />
          )}
        />
      )}
      <TouchableOpacity style={styles.buttoncont} onPress={AddHandler}>
        <LinearGradient
          colors={[theme.GcolorR, theme.GcolorS, theme.GcolorL]}
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
