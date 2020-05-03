<<<<<<< HEAD
import React from "react"
=======
import React, {useState} from 'react'
>>>>>>> 30e9827627a78c0915b28d29f57bd349959d452b
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
<<<<<<< HEAD
} from "react-native"
import { DialogInList } from "../components/DialogInList"
import { Navbar } from "../components/Navbar"
import { THEME } from "../themes/theme"
import { AntDesign } from '@expo/vector-icons'
=======
} from "react-native";
import { DialogInList } from "../components/DialogInList";
import { Navbar } from "../components/Navbar";
import { EditModal } from "../components/EditModal";
import {THEME} from "../themes/theme";

>>>>>>> 30e9827627a78c0915b28d29f57bd349959d452b

export const MainScreen = (props) => {
  const [modal, setModal] = useState(false)
  
  return (
    <View style={styles.conteiner}>

      <EditModal visible={modal} />

      <View style={styles.header}>

        <View style={styles.line1}>
          <Text style={styles.text}>Chats</Text>
<<<<<<< HEAD
=======
          <View style={styles.buttonView}>
            <Button style={styles.button} title="+"  onPress={() => setModal(true)} color = '#ffffff' />
          </View>
>>>>>>> 30e9827627a78c0915b28d29f57bd349959d452b
          
        </View>

        <View style={styles.button}>
          <AntDesign.Button
            name = "plus"
            size={25}
            backgroundColor = 'transparent'
          >
          </AntDesign.Button>
        </View>
        
        <TextInput 
          defaultValue="Find message..." 
          style={styles.input} 
        />
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
    width: 'auto',
    backgroundColor: THEME.BACKGROUNG_COLOR,
    position: 'relative',
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
    color: 'white',
    fontSize: 14,
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: 'normal',
    fontSize: 24,
  },
  button:{
    position: 'absolute',
    right: 0,
    top: 3,
    paddingTop: 25,
  },
  dialog: {},
});
