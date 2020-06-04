import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {ContactsList} from "../components/ContactsList";
import {NavbarAddChat} from "../components/NavbarAddChat";
import {THEME} from "../themes/theme";

export const AddChatScreen = (props, onOpen, navigation) => {
  const handlePress = () => true;
  //export const AddDialog = ()

  return (
    // <TouchableOpacity>
    //   onPress={() => onOpen()}
    // </TouchableOpacity>

    <View style={styles.conteiner}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.text}>Add chat</Text>
        </View>

        
         <TextInput placeholder="Find dialog..." placeholderTextColor={THEME.TEXT_COLOR_BLACK} style={styles.input} />
        
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

AddChatScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
  },
  header: {
    paddingTop: 20,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  heading: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },

  text: {
    color: THEME.TEXT_COLOR_BLACK,
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
    paddingLeft: 115,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 30,
    width: "85%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 17,
    fontFamily: "roboto_regular",
  },
});
