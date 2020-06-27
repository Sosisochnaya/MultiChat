import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {THEME} from "../themes/theme";

export const DialogChoose = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);
  const [icon, setIcon] = useState();
  const [status, setstatus] = useState(false);

  useEffect(() => {
    // init();
    //console.log("update listok");
    // setTimeout(init, 5000);
    // setTimeout(console.log, 5000, "update listok");
    setIcon(dialog.icon);
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onOpen(dialog);
        setstatus(!status);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.icon}
          source={{uri: icon}}
          borderRadius={50}
        />
        <View style={styles.text}>
          <View style={styles.line1}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {dialog.name}
            </Text>
          </View>
        </View>
        <View style={styles.zone}>
          <View style={!status ? styles.change : styles.change2}></View>
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

  zone: {
    right: 16,
    marginTop: 13.5,
    position: "absolute",
  },

  change: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FF6D67",

    height: 25,
    width: 25,
  },

  change2: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FF6D67",
    backgroundColor: "#FF6D67",
    height: 25,
    width: 25,
  },
});
