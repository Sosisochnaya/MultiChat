import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { DialogInList } from "../components/DialogInList";
import { Navbar } from "../components/Navbar";
import { THEME } from "../themes/theme";
import { AntDesign } from "@expo/vector-icons";
// import {EditModal} from "../components/EditModal";
import { DATA } from "../data";
import { ChooseMessangerScreen } from "../screens/ChooseMessanger";

export const MainScreen = ({ navigation }) => {
  const [modal, setModal] = useState(false);

  const openDialogHendler = (dialog) => {
    navigation.navigate("Dialog", { dialogId: dialog.id });
  };

  const goToChooseMessanger = () => {
    setModal(true);
  };

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

      <FlatList
        data={DATA}
        keyExtractor={(dialog) => dialog.id.toString()}
        renderItem={({ item }) => (
          <DialogInList dialog={item} onOpen={openDialogHendler} />
        )}
      />

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
