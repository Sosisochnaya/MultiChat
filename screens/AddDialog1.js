import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TextInput, Button} from "react-native";

export const TGAuthScreen = ({navigation}) => {
  const [number, setNumber] = useState();

  function tg_auth() {}
  return (
    <View style={styles.main}>
      <Text>Chose messager Screen</Text>
      <TextInput onChangeText={(text) => (number = text)} />
      <Button onPress={tg_auth} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
  },
});
