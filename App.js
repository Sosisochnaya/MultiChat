import React, {useState} from "react";
import {StyleSheet, Text, View, MaskedViewBase} from "react-native";
import {Provider} from "react-redux";
import {AppLoading} from "expo";
import {AppNavigation} from "./navigation/AppNavigation";

import {MainScreen} from "./screens/MainScreen";
import {PlanScreen} from "./screens/PlanScreen";
import {Navbar} from "./components/Navbar";
import {InputPlane} from "./screens/InputPlane";
import {ChoseMesser} from "./screens/AddDialog1";
import {AddChatScreen} from "./screens/AddChatScreen";
import {NavbarAddChat} from "./components/NavbarAddChat";
import {bootstrap} from "./bootstrap";

export default function App() {
  const [isReedy, setIsReady] = useState(false);
  const [dialogs, chosemesser] = useState([]);
  const [screen, setScreen] = useState([]);
<<<<<<< HEAD
 
  
  let content = <MainScreen/>;
=======
>>>>>>> 0b06519a27499b3be1eacb9aa9043876e563268b

  if (!isReedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

<<<<<<< HEAD
  

  return <View style={styles.container}>{content}</View>;
=======
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
>>>>>>> 0b06519a27499b3be1eacb9aa9043876e563268b
}

const styles = StyleSheet.create({
  container: {},
});
