import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const MessageTG = ({mes}) => {
  if (mes.text == "") return <View></View>;
  else {
    if (mes.from_me == "False")
      return (
        <View>
          <Text style={stylesL.text}>{mes.text}</Text>
        </View>
      );
    if (mes.from_me == "True")
      return (
        <View>
          <Text style={stylesR.text}>{mes.text}</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
  },
});
const stylesL = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,

    marginTop: 8,
    marginLeft: 12,
    minWidth: 50,
    maxWidth: 300,

    paddingTop: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,

    backgroundColor: "#467ff2",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 17,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,

    alignSelf: "flex-start",
  },
});

const stylesR = StyleSheet.create({
  text: {
    borderWidth: 1,
    alignSelf: "flex-end",
    height: "auto",
    color: "white",
    textAlign: "center",
    marginTop: 8,
    marginRight: 12,

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,

    backgroundColor: "#46476d",
    borderBottomLeftRadius: 17,
    borderBottomEndRadius: 5,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,

    minWidth: 50,
  },
});
