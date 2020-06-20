import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import {setLightEstimationEnabled} from "expo/build/AR";

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
  const [isPhoto, setPhoto] = useState(false);
  const [isTextWithPhoto, setText] = useState(false);
  _retrieveData();

  function init_users_chat() {
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
          console.log(fullname);
          fullname = fullname.first_name + " " + fullname.last_name;
          console.log(fullname);
          setName(fullname);
        }
      });
  }
  function setstate() {
    if (typeChat == "user") {
      if (mes.attachments[0] != undefined) {
        if (mes.attachments[0].type == "photo") {
          setPhoto(true);
          if (mes.text == "") {
            setText(true);
            console.log("set text");
          }
        }
      }

      //return <View></View>;
    }
  }

  useEffect(() => {
    //_retrieveData();
    // init_users_chat();
    // console.log(id);
    setstate();
  });

  if (typeChat == "user") {
    if (mes.from_id == myid)
      return (
        <View>
          {isPhoto ? (
            <View style={stylesR.Vphoto}>
              <ImageBackground
                style={stylesR.photo}
                source={{uri: mes.attachments[0].photo.sizes[2].url}}
              ></ImageBackground>
            </View>
          ) : (
            <Text style={stylesR.text}>{mes.text}</Text>
          )}
        </View>
      );
    else
      return (
        <View>
          {isPhoto ? (
            <View style={stylesL.Vphoto}>
              <ImageBackground
                style={stylesL.photo}
                source={{uri: mes.attachments[0].photo.sizes[2].url}}
              ></ImageBackground>
            </View>
          ) : (
            <Text style={stylesL.text}>{mes.text}</Text>
          )}
        </View>
      );
  }

  if (typeChat == "chat") {
    if (mes.text == "") return <View></View>;
    let fullname;
    fetch(
      "https://api.vk.com/method/users.get?user_ids=" +
        id +
        "&v=5.103&access_token=" +
        token
    )
      .then((user) => user.json())
      .then((user) => {
        if (user.error == null) {
          fullname = user.response[0];
          // console.log(fullname);
          fullname = fullname.first_name + " " + fullname.last_name;
          // console.log(fullname);
          setName(fullname);
        }
        // console.log(user);
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
});

const stylesL = StyleSheet.create({
  photo: {
    resizeMode: "cover",
    alignSelf: "flex-start",
    height: 250,
    width: 250,

    paddingTop: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,

    backgroundColor: "#467ff2",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 17,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
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
    marginTop: 8,

    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: -2,

    alignSelf: "flex-start",
  },
});

const stylesR = StyleSheet.create({
  photo: {
    marginTop: 20,
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
