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
  Dimensions,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";

// const token =
//   "c500ccffc1e44e680733c0de7ed493d7c48682757d484fd08057fba936daa3e4cd2137df66ad9fe9a111d";
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
export const DialogInList = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [isCount, setCount] = useState(false);
  const [lastmes, setLastmes] = useState();
  const [date, setDate] = useState();
  const centralBlockWidth = Math.round(Dimensions.get("window").width) - 70;

  function init() {
    setName(dialog.name);
    setIcon(dialog.icon);
    setLoading(false);

    if (typeof dialog.unread_count != undefined) {
      if (dialog.unread_count > 0) setCount(true);
    } else {
      setCount(false);
    }

    let d = new Date();
    d.setTime(dialog.last_message_date + "000");
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
    setLastmes(limitStr(dialog.last_message_text, 35));
  }

  useEffect(() => {
    init();
    _retrieveData();
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
                <Text style={styles.logoMesText}>{dialog.namemes}</Text>
              </View>
            </LinearGradient>
          </View>

          <View style={styles.line2}>
            <Text style={styles.lastMes} numberOfLines={1} ellipsizeMode="tail">
              {dialog.last_message_text}
            </Text>
          </View>
        </View>

        <View style={styles.thirdColumn}>
          <View>
            <Text style={styles.time}>{date}</Text>
          </View>
          {isCount ? (
            <LinearGradient
              colors={["#FFDE67", "#FFA467", "#FF6666"]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.countUnreadMes}
            >
              <View>
                <Text style={styles.countUnreadMesNumeral}>
                  {dialog.unread_count}
                </Text>
              </View>
            </LinearGradient>
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
    width: "60%",
  },
  line2: {
    //flexDirection: 'row',
    //justifyContent: 'flex-start'
    // backgroundColor: "white",
    width: "70%",
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
    color: "white",
  },
});
