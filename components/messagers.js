import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, AsyncStorage} from "react-native";
import {DialogInList} from "./DialogInList";

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
  const [name, setName] = useState();
  // const [myid, setMyid] = useState();

  useEffect(() => {
    _retrieveData();
  });

  if (typeChat == "user") {
    // fetch("https://api.vk.com/method/users.get?v=5.103&access_token=" + token)
    //   .then((user) => user.json())
    //   .then((user) => {
    //     if (user.error == null) {
    //       let id = user.response[0].id;
    //       console.log(id);
    //       setMyid(id);
    //     }
    //   });
    if (mes.from_id == myid)
      return (
        <View>
          <Text style={stylesL.text}>{mes.text}</Text>
        </View>
      );
    else
      return (
        <View>
          <Text style={stylesR.text}>{mes.text}</Text>
        </View>
      );
  }

  if (typeChat == "chat") {
    // fetch("https://api.vk.com/method/users.get?v=5.103&access_token=" + token)
    //   .then((user) => user.json())
    //   .then((user) => {
    //     if (user.error == null) {
    //       let id = user.response[0].id;
    //       console.log(id);
    //       setMyid(id);
    //     }
    //   });

    fetch(
      "https://api.vk.com/method/users.get?user_ids=" +
        id +
        "&v=5.103&access_token=" +
        token
    )
      .then((user) => user.json())
      .then((user) => {
        if (user.error == null) {
          let fullname = user.response[0];
          fullname = fullname.first_name + " " + fullname.last_name;
          setName(fullname);
        }
      });

    if (mes.from_id != myid)
      return (
        <View>
          <Text numberOfLines={1} style={stylesL.name}>
            {name + "\n"}
          </Text>
          <Text style={stylesL.text}>{mes.text}</Text>
        </View>
      );
    else
      return (
        <View>
          <Text style={stylesR.text}>{mes.text}</Text>
        </View>
      );
  }
};

const stylesL = StyleSheet.create({
  own: {},

  text: {
    color: "white",
    //borderWidth: 1,
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
    marginTop: 8,

    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: -2,

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
