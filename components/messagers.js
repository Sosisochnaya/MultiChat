import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Message = ({mes, id}) => {
  if (mes.from_id == id)
    return (
      <View style={stylesL.wrap}>
        <Text style={stylesL.text}>{mes.text}</Text>
      </View>
    );
  else
    return (
      <View style={stylesR.wrap}>
        <Text style={stylesR.text}>{mes.text}</Text>
      </View>
    );
};

const stylesL = StyleSheet.create({
  wrap: {
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    width: 227,

    backgroundColor: "#467ff2",
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 17,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    left: 10,
  },
  text: {
    color: "white",
  },
});

const stylesR = StyleSheet.create({
  wrap: {
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    width: 227,

    backgroundColor: "#46476d",
    borderBottomLeftRadius: 17,
    borderBottomEndRadius: 5,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    left: 140,
  },
  text: {
    color: "white",
  },
});

// денис блять сука
