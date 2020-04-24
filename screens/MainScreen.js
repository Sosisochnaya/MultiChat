import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { DialogInList } from "../components/DialogInList";
import { Navbar } from "../components/Navbar";

export const MainScreen = (props) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.line1}>
          <Text style={styles.text}>Main Screen</Text>
          <Button style={styles.button} title="+" />
        </View>

        <TextInput defaultValue="Find message..." style={styles.input} />
      </View>

      <ScrollView>
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        <DialogInList />
        
      </ScrollView>

      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    backgroundColor: "#394944",
  },
  header: {
    paddingTop: 35,
    //marginTop: 24,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#394944",
  },
  line1: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
  },
  input: {
    width: "85%",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    color: "white",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    //alignItems: 'flex-end',
    right: 0,
    //alignSelf: 'flex-end,'
  },
  dialog: {},
});
