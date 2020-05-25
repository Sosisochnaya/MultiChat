import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, MaskedViewBase} from "react-native";
//import { Provider } from "react-redux";
import {AppLoading} from "expo";
import {AppNavigation} from "./navigation/AppNavigation";

// import {MainScreen} from "./screens/MainScreen";
// import {PlanScreen} from "./screens/PlanScreen";
// import {Navbar} from "./components/Navbar";
// import {InputPlane} from "./screens/InputPlane";
// import {ChoseMesser} from "./screens/AddDialog1";
// import {AddChatScreen} from "./screens/AddChatScreen";
// import {NavbarAddChat} from "./components/NavbarAddChat";
import {bootstrap} from "./bootstrap";
// import {MTProto} from "@mtproto/core";
import * as FileSystem from "expo-file-system";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const [isReedy, setIsReady] = useState(false);
  // const api_id = "1312361";
  // const api_hash = "61066cf4e9fe9d8c9704171f38ff40ba";
  // const mtpromo = new MTProto({
  //   api_id,
  //   api_hash,
  //   // Use test servers
  //   test: true,
  // });
  async function vk_dialog_list_app() {
    let token =
      "641e87ef1bf4531c92d165b454b232e7db1cc69fd3537a0b8203df29bb4ba16ebd8a87e2b7bdb0670c644";
    let dialog_list = await fetch(
      "https://api.vk.com/method/messages.getConversations?count=20&v=5.103&access_token=" +
        token
    );
    dialog_list = await dialog_list.json();
    dialog_list = dialog_list.response;

    await FileSystem.writeAsStringAsync(
      `${FileSystem.documentDirectory}listDialogs.json`,
      dialog_list.items
    );
    // console.log(dialog_list);
    // console.log(JSON.stringify(dialog_list));
  }

  useEffect(() => {
    vk_dialog_list_app();
  });

  if (!isReedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <AppNavigation />;
  // return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
