import React, { useState } from "react";
import { StyleSheet, Text, View, MaskedViewBase } from "react-native";
import { MainScreen } from "./screens/MainScreen";
import { PlanScreen } from "./screens/PlanScreen";
import { Navbar } from "./components/Navbar";
import { InputPlane } from "./screens/InputPlane";
import { ChoseMesser } from "./screens/AddDialog1";
import { AddChatScreen } from "./screens/AddChatScreen";
import { NavbarAddChat } from "./components/NavbarAddChat";

export default function App() {
  
  const [dialogs, chosemesser] = useState([]);
  const [screen, setScreen] = useState([]);
  
  let content = <AddChatScreen/>;

  switch (screen) {
    case "Plan":
      content = <PlanScreen />;
      break;
    default:
      break;
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {},
});

