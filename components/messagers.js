import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Message = ({mes, id}) => {
  if (mes.from_id == id)
    return (
      <View style={stylesL.wrap}>
        <Text>L{mes.text}</Text>
      </View>
    );
  else
    return (
      <View style={stylesR.wrap}>
        <Text>R{mes.text}</Text>
      </View>
    );
};

const stylesL = StyleSheet.create({
  wrap: {
    left: 0,
    backgroundColor: "blue",
  },
});

const stylesR = StyleSheet.create({
  wrap: {
    left: 60,
    backgroundColor: "red",
  },
});

// денис блять сука
