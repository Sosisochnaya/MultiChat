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

export const DialogInListTG = ({item, onOpen, dialog}) => {
  const [date, setDate] = useState();
  useEffect(() => {
    // let d = new Date();
    // d.setTime(dialog.last_message_date + "000");
    // setDate(d.toTimeString());
    // let dn = new Date();
    // let k = (dn - d) / 86400000;
    // if (k > 1) {
    //   setDate(Math.floor(k) + " days ago");
    // } else {
    //   if (d.getDate().toString() != dn.getDate().toString()) {
    //     setDate("yesterday");
    //   } else setDate(d.toTimeString().slice(0, 5));
    // }
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(dialog)}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.icon}
          source={{uri: dialog.icon}}
          borderRadius={50}
        />
        <View style={styles.text}>
          <View style={styles.line1}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {dialog.name}
            </Text>
            <LinearGradient
              colors={["#FFDE67", "#FFA467", "#FF6666"]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.logoMes}
            >
              <View>
                <Text style={styles.logoMesText}>TG</Text>
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
            <Text style={styles.time}>{dialog.last_message_date}</Text>
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
    marginRight: 15,
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
