import React from "react";
import { StyleSheet, Text, View, Image, Button, ImageBackground } from "react-native";
import App from "../App";



export const NavbarAddChat = () => {
  
  return (
    





    
    <View style={styles.conteiner}>  
 
      <Button style={styles.button} title="Add" color='white' />  
      
    </View>




  );
  
};

const styles = StyleSheet.create({
  conteiner: {
    //position: 'absolute',
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#57B8FF",
    height: 42,
    width: 328,
    

    borderRadius: 10,
    borderTopColor: "black",
    borderTopWidth: 0,
    bottom: 18,
    marginLeft: 20

    //bottom: 0,
  },
  button: {
    
  },

 
});
