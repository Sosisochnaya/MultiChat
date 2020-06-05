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
import config from "../config";
import {LinearGradient} from "expo-linear-gradient";

const token =
  "d24147844a4e218a89ec037cc9cb01b0117df41029304faccd5f330351d34756d83c5d657e26b3f64052c";
// var _retrieveData = async () => {
//   try {
//     token = await AsyncStorage.getItem("vk_token");
//     if (token !== null) {
//       console.log(token);
//     }
//   } catch (error) {
//     console.log("error token");
//   }
// };

// var token;
export const DialogInList = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [isCount, setCount] = useState(false);
  const [lastmes, setLastmes] = useState();
  const [date, setDate] = useState();

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
          if (user.error == null) {
            let fullname = user.response[0];
            fullname = fullname.first_name + " " + fullname.last_name;
            setName(fullname);
            setIcon(user.response[0].photo_50);
            setLoading(false);
          }
        });
    } else {
      if (dialog.conversation.peer.type == "chat") {
        let title_chat = dialog.conversation.chat_settings.title;
        setName(title_chat);
        // setIcon(dialog.conversation.chat_settings.photo.photo_50);
      } else {
        if (dialog.conversation.peer.type == "group") {
          setName("its group (" + dialog.conversation.peer.local_id + ")");
        } else {
          setName("ti kto(who)?");
        }
      }
    }

    if (dialog.conversation.unread_count) {
      setCount(true);
    } else {
      setCount(false);
    }

    // setName(limitStr(name.toString(), 25));
    ///////////////set date info/////////////////////
    let d = new Date();
    d.setTime(dialog.last_message.date + "000");
    setDate(d.toTimeString());
    let dn = new Date();
    let k = (dn - d) / 86400000;
    if (k > 1) {
      setDate(Math.floor(k) + " days ago");
    } else {
      if (d.getDate().toString() != dn.getDate().toString()) {
        setDate("yesterday");
      } else setDate(d.toTimeString().slice(0, 5));
    }

    function limitStr(str, n) {
      if (str.length < n) return str;
      let symb = "...";
      return str.substr(0, n - symb.length) + symb;
    }
    setLastmes(limitStr(dialog.last_message.text, 35));
    function checkAttachments() {
      if (dialog.last_message.text == "") {
        const last_message_attachments = dialog.last_message.attachments;
        const last_message_attachment = last_message_attachments[0].type;
        if (last_message_attachment == "photo") {
          // last_message_text = "Photo";
          setLastmes("Photo");
        }
        if (last_message_attachment == "video") {
          // last_message_text = "Video";
          setLastmes("Video");
        }
        if (last_message_attachment == "audio") {
          // last_message_text = "Audio";
          setLastmes("Audio");
        }
        if (last_message_attachment == "doc") {
          // last_message_text = "Document";
          setLastmes("Document");
        }
        if (last_message_attachment == "point") {
          // last_message_text = "Map";
          setLastmes("Map");
        }
        if (last_message_attachment == "gift") {
          // last_message_text = "Gift";
          setLastmes("Gift");
        }
        if (last_message_attachment == "link") {
          // last_message_text = "Link";
          setLastmes("Link");
        }
        if (last_message_attachment == "sticker") {
          // last_message_text = "Sticker";
          setLastmes("Sticker");
        }
        if (last_message_attachment == "wall") {
          // last_message_text = "Wall post";
          setLastmes("Wall post");
        }
      } else {
        // last_message_text = "Forwarded messages";
        // setLastmes("Forwarded messages");
      }
    }
    // checkAttachments();
  }

  useEffect(() => {
    init();
    console.log("update listok");
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
            <LinearGradient
              colors={["#FFDE67", "#FFA467", "#FF6666"]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.logoMes}
            >
              <View>
                <Text style={styles.logoMesText}>VK</Text>
              </View>
            </LinearGradient>
          </View>

          <View style={styles.line2}>
            <Text style={styles.lastMes}>{lastmes}</Text>
          </View>
        </View>

        <View style={styles.thirdColumn}>
          <View>
            <Text style={styles.time}>{date}</Text>
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
    width: "54%",
  },
  line2: {
    //flexDirection: 'row',
    //justifyContent: 'flex-start'
  },
  name: {
    fontStyle: "normal", //не знает шрфиты вообще
    fontSize: 16,
    color: THEME.DIALOG_NAME_COLOR_BLACK,
    fontFamily: "roboto_bold",
    // width: "55%",
  },
  logoMes: {
    marginLeft: 10,
    marginTop: 3,
    width: 22, //явно задал размеры , думаю тут адаптив не нужен
    height: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  logoMesText: {
    marginTop: 3,
    textAlign: "center",
    fontSize: 8,
    color: THEME.TEXT_COLOR_BLACK,
    fontFamily: "roboto_bold",
    alignItems: "center",
    justifyContent: "center",
  },
  lastMes: {
    marginBottom: 6,
    //color: 'white'
    fontSize: 14,
    color: THEME.LASTMES_TEXT_COLOR_BLACK,
    fontFamily: "roboto_regular",
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
    color: THEME.DIALOG_NAME_COLOR_BLACK,
  },
  countUnreadMes: {
    marginTop: 7,
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: THEME.BTN_ORANGE_COLOR,
    alignItems: "center",
  },
  countUnreadMesNumeral: {
    marginTop: 2,
    fontSize: 12,
  },
});
