import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import {setLightEstimationEnabled} from "expo/build/AR";
import {Image} from "native-base";

var token;
var _retrieveData = async () => {
  try {
    token = await AsyncStorage.getItem("vk_token");
    if (token !== null) {
      // console.log(token);
    }
  } catch (error) {
    console.log("error token");
  }
};

export const Message = ({mes, id, typeChat, myid}) => {
  useEffect(() => {
    //_retrieveData();
    // init_users_chat();
    // console.log(id);
    // setstate();
  });

  if (typeChat == "user") {
    if (mes.text == "" && mes.photo == "") return <View></View>;
    if (mes.text == "" && mes.photo != "") {
      if (mes.from_me == "true")
        return (
          <View style={stylesR.photo}>
            <ImageBackground
              style={stylesR.photo}
              source={{uri: mes.photo}}
              borderRadius={6}
            />
          </View>
        );
      else
        return (
          <View style={stylesL.photo}>
            <ImageBackground
              style={stylesL.photo}
              source={{uri: mes.photo}}
              borderRadius={6}
            />
          </View>
        );
    }
    if (mes.text != "" && mes.photo == "")
      if (mes.from_me == "true" || mes.from_me == "True") {
        return (
          <View>
            <Text style={stylesR.text}>{mes.text}</Text>
          </View>
        );
      } else
        return (
          <View>
            <Text style={stylesL.text}>{mes.text}</Text>
          </View>
        );
  }

  if (typeChat == "chat") {
    if (mes.text == "" && mes.photo == "") return <View></View>;
    if (mes.text == "" && mes.photo != "") {
      if (mes.from_me == "true")
        return (
          <View style={stylesR.photo}>
            <ImageBackground
              style={stylesR.photo}
              source={{uri: mes.photo}}
              borderRadius={6}
            />
          </View>
        );
      else
        return (
          <View style={stylesL.photo}>
            <Text style={stylesL.name}>{mes.from_who}</Text>
            <ImageBackground
              style={stylesL.photo}
              source={{uri: mes.photo}}
              borderRadius={6}
            />
          </View>
        );
    }
    if (mes.text != "" && mes.photo == "")
      if (mes.from_me == "true" || mes.from_me == "True") {
        return (
          <View>
            <Text style={stylesR.text}>{mes.text}</Text>
          </View>
        );
      } else
        return (
          <View>
            <Text style={stylesL.name}>{mes.from_who}</Text>
            <Text style={stylesL.text}>{mes.text}</Text>
          </View>
        );
  }

  if (typeChat == "type") {
    if (mes.text == "") return <View></View>;
    if (mes.from_me == "true" || mes.from_me == "True")
      return (
        <View>
          <Text style={stylesR.text}>{mes.text}</Text>
        </View>
      );
    else
      return (
        <View>
          <Text style={stylesL.text}>{mes.text}</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  photo: {
    resizeMode: "cover",
    height: 100,
    width: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  photoR: {},
  photoL: {},
});

const stylesL = StyleSheet.create({
  photo: {
    margin: 8,
    marginBottom: 30,
    // marginLeft: 20,
    resizeMode: "cover",
    alignSelf: "flex-start",
    height: 250,
    width: 250,

    // paddingTop: 6,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingBottom: 8,

    // backgroundColor: "#467ff2",
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 17,
    // borderTopLeftRadius: 17,
    // borderTopRightRadius: 17,
  },
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
  name: {
    // borderWidth: 1,
    borderColor: "#fff",
    fontSize: 12,
    color: "white",
    width: "100%",
    marginTop: 14,

    paddingLeft: 12,
    // paddingRight: 8,
    marginBottom: -2,

    alignSelf: "flex-start",
  },
});

const stylesR = StyleSheet.create({
  photo: {
    margin: 8,
    marginBottom: 30,
    resizeMode: "cover",
    alignSelf: "flex-end",
    height: 250,
    width: 250,
  },
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
