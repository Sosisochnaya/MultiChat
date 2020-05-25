import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {THEME} from "../themes/theme";

const token =
  "641e87ef1bf4531c92d165b454b232e7db1cc69fd3537a0b8203df29bb4ba16ebd8a87e2b7bdb0670c644";

export const DialogInList = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [isCount, setCount] = useState(false);

  function init() {
    if (dialog.conversation.peer.type == "user") {
      fetch(
        "https://api.vk.com/method/users.get?user_ids=" +
          dialog.conversation.peer.id +
          "&fields=photo_50&v=5.103&access_token=" +
          token
      )
        .then((user) => user.json())
        .then((user) => {
          let fullname = user.response[0];
          fullname = fullname.first_name + " " + fullname.last_name;
          setName(fullname);
          setIcon(user.response[0].photo_50);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

      // setName(user.response[0].first_name + user.response.last_name);
      // setLoading(false);

      // fetch("https://reactnative.dev/movies.json")
      //   .then((response) => response.json())
      //   .then((json) => setData(json.movies))
      //   .catch((error) => console.error(error))
      //   .finally(() => setLoading(false));
    } else {
      if (dialog.conversation.peer.type == "chat") {
        let title_chat = dialog.conversation.chat_settings.title;
        setName(title_chat);
        setIcon(dialog.conversation.chat_settings.photo.photo_50);
      } else {
        if (dialog.conversation.peer.type == "group") {
          setName("its group (" + dialog.conversation.peer.local_id + ")");
        } else {
          setName("ti kto(who)?");
        }
      }
    }
  }

  useEffect(() => {
    init();
    if (dialog.conversation.unread_count) {
      setCount(true);
    } else {
      setCount(false);
    }
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
            <Text style={styles.name}>{name}</Text>
            <View style={styles.logoMes}>
              <Text style={styles.logoMesText}>VK</Text>
            </View>
          </View>

          <View style={styles.line2}>
            <Text style={styles.lastMes}>{dialog.last_message.text}</Text>
          </View>
        </View>

        <View style={styles.thirdColumn}>
          <View>
            <Text style={styles.time}>{dialog.last_message.date}</Text>
          </View>
          {isCount ? (
            <View style={styles.countUnreadMes}>
              <Text style={styles.countUnreadMesNumeral}>
                {dialog.conversation.unread_count}
              </Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
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
    width: 50,
    height: 50, // размеры
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
  },
  line2: {
    //flexDirection: 'row',
    //justifyContent: 'flex-start'
  },
  name: {
    fontStyle: "normal", //не знает шрфиты вообще
    fontSize: 16,
    color: THEME.DIALOG_NAME_COLOR,
  },
  logoMes: {
    marginLeft: 10,
    marginTop: 3,
    width: 22, //явно задал размеры , думаю тут адаптив не нужен
    height: 16,
    borderRadius: 5,
    backgroundColor: "#65CAE0",
    alignItems: "center",
  },
  logoMesText: {
    marginTop: 1,
    textAlign: "center",
    fontSize: 10,
  },
  lastMes: {
    marginBottom: 6,
    //color: 'white'
    fontSize: 14,
    color: THEME.LASTMES_TEXT_COLOR,
  },

  //3 часть где время ласт сообщения и кол-вл непрочитанных сообщений
  thirdColumn: {
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
    right: 0,
    marginRight: 10,
  },
  time: {
    marginTop: 10,
    fontSize: 12,
    color: THEME.DIALOG_NAME_COLOR,
  },
  countUnreadMes: {
    marginTop: 7,
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: "#65CAE0",
    alignItems: "center",
  },
  countUnreadMesNumeral: {
    marginTop: 2,
    fontSize: 12,
  },
});
