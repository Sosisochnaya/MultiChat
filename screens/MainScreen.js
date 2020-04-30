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
import {THEME} from "../themes/theme";


export const MainScreen = (props) => {
  return (
    <View style={styles.conteiner}>

      <View style={styles.header}>

        <View style={styles.line1}>
          <Text style={styles.text}>Chats</Text>
          <View style={styles.buttonView}>
            <Button style={styles.button} title="+" color = '#ffffff' />
          </View>
          
        </View>

        <TextInput defaultValue="Find message..." style={styles.input} />
      </View>

      <ScrollView>
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
    backgroundColor: THEME.BACKGROUNG_COLOR,
    //position: 'relative',
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
    width: '100%',
    position: "relative",
    alignItems: "center",
    
  },
  input: {
    paddingLeft: 10,
    backgroundColor: '#111111',
    height: 30,
    width: "85%",
    borderColor: "#5e5e5e",
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 14,
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: 'normal',
    fontSize: 24,
  },
  button: {
    //position: "absolute",
    //right: 0,
    //backgroundColor: '#111111',
    color: '#ffffff'
    
  },
  buttonView:{
    position: 'absolute',
    right: 10,
    backgroundColor: '#111111',
    width: 21,
    height: 30,
    color: '#ffffff',
  },
  dialog: {},
});
