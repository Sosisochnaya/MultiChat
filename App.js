import React, { useState } from "react";
import { StyleSheet, Text, View, MaskedViewBase } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { AppNavigation } from "./navigation/AppNavigation";

import { MainScreen } from "./screens/MainScreen";
import { PlanScreen } from "./screens/PlanScreen";
import { Navbar } from "./components/Navbar";
import { ChoseMesser } from "./screens/AddDialog1";
import { AddChatScreen } from "./screens/AddChatScreen";
import { NavbarAddChat } from "./components/NavbarAddChat";
import { bootstrap } from "./bootstrap";

export default function App() {
  const [isReedy, setIsReady] = useState(false);

  if (!isReedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  // let content = <MainScreen />;

  // switch (screen) {
  //   case "Plan":
  //     content = <PlanScreen />;
  //     break;
  //   case "AddChat":
  //     content = <AddChatScreens />;
  //     break;
  //   default:
  //     break;
  // }

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {},
});
