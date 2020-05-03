import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image
} from "react-native";
import { ContactsList } from "../components/ContactsList";
import { NavbarAddChat } from "../components/NavbarAddChat";

export const AddChatScreen = (props) => {
  const handlePress = () => true
  return (
    
    <View style={styles.conteiner}>

      <View style={styles.header}>

        <View style={styles.heading}>
          <Text style={styles.text}>Add chat</Text>
        </View>
        
        <View style={styles.loupe}>

        <Image
                    style={styles.imageLoupe}
                    source={require("../assets/loupe.png")}
                /> 
          <TextInput defaultValue="Find dialog..." style={styles.input}  />
        </View>
      </View>

      <ScrollView>
        <ContactsList />
        <ContactsList />
        <ContactsList />
        <ContactsList />
      </ScrollView>

      <NavbarAddChat />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    paddingTop: 20,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderBottomColor: '#5E5E5E',
    borderBottomWidth: 1,
    
  },
  heading: {
    width: '100%',
    position: "relative",
    alignItems: "center",  
  },
  
  text: {
    color: "#5E5E5E",
    alignItems: "center",
    fontStyle: 'normal',
    fontSize: 24,
    fontWeight: 'bold'
  },

  loupe:{
    flexDirection: 'row',
    paddingLeft: 103,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    height: 26,
    width: "90%",
    borderColor: "#5e5e5e",
    borderWidth: 1,
    borderRadius: 10,
  },

  imageLoupe:{
    marginRight: 4,
    marginTop: 4,
  },

  input:{
    color: '#858585',
    backgroundColor: '#FFFFFF',
    fontSize: 18,
  }
});
