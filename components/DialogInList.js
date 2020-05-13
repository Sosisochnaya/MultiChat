import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {THEME} from "../themes/theme";

export const DialogInList = ({dialog, onOpen}) => {
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
            <Text style={styles.name}>{dialog.name}</Text>
            <View style={styles.logoMes}>
              <Text style={styles.logoMesText}>{dialog.messer}</Text>
            </View>
          </View>

          <View style={styles.line2}>
            <Text style={styles.lastMes}>{dialog.lastMes}</Text>
          </View>
        </View>

        <View style={styles.thirdColumn}>
          <View>
            <Text style={styles.time}>{dialog.date}</Text>
          </View>
          <View style={styles.countUnreadMes}>
            <Text style={styles.countUnreadMesNumeral}>
              {dialog.countUnreadMes}
            </Text>
          </View>
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
