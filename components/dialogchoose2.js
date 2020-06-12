import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";

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

var token;
export const DialogChoose = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  _retrieveData();
  function init() {
    if (dialog.conversation.peer.type == "user") {
      fetch(
        "https://api.vk.com/method/users.get?user_ids=" +
          dialog.conversation.peer.id +
          "&fields=photo_50&v=5.123&access_token=" +
          token
      )
        .then((user) => user.json())
        .then((user) => {
          if (user.error == null) {
            let fullname = user.response[0];
            fullname = fullname.first_name + " " + fullname.last_name;
            setName(fullname);
            setIcon(user.response[0].photo_50);
            setLoading(false);
          }
        });
    } 
    else if (dialog.conversation.peer.type == "chat") {
      let title_chat = dialog.conversation.chat_settings.title;
      setName(title_chat);
      if(dialog.conversation.chat_settings.photo != undefined) setIcon(dialog.conversation.chat_settings.photo.photo_50);
    }
  }

  useEffect(() => {
    init();
    //console.log("update listok");
    // setTimeout(init, 5000);
    // setTimeout(console.log, 5000, "update listok");
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(dialog)}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.icon}
          source={{uri: icon}}
          borderRadius={50}
        />
        <View style={styles.text}>
          <View style={styles.line1}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {name}
            </Text>
          
          </View>

          
        </View>

       
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: THEME.DIALOG_BORDER_COLOR,
    //borderBottomWidth: 0.5,
    paddingTop: 1,
    position: "relative",
    marginTop: 2,
  },
  icon: {
    margin: 10, //отсутп со всех сторон по 10 пикселей
    width: 30,
    height: 30, // размеры
    resizeMode: "cover", //чтобы при изменении размера пропорции сохранялись
  },

  //2 часть где тескт с именем и ласт сообщением
  text: {
    //alignItems:
    justifyContent: "space-around",
    borderBottomColor: THEME.DIALOG_BORDER_COLOR,
    borderBottomWidth: 0.5,
    width: "100%",
  },
  line1: {
    //alignItems: 'baseline',
    flexDirection: "row",
    //justifyContent: 'flex-start'
    width: "64%",
  },
 
  name: {
    fontStyle: "normal", //не знает шрфиты вообще
    fontSize: 16,
    color: THEME.DIALOG_NAME_COLOR_BLACK,
    fontFamily: "roboto_bold",
    // width: "55%",
  },
 
});
