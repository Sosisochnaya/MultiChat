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

export const DialogSearch = ({item, onOpen, dialog}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // init();
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onOpen(dialog);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.icon}
          source={{uri: dialog.icon}}
          borderRadius={50}
        />
        <View style={styles.text}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {dialog.name}
          </Text>
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
    // paddingTop: 1,
    position: "relative",
    // marginTop: 2,
    borderBottomWidth: 1,
  },
  icon: {
    margin: 10, //отсутп со всех сторон по 10 пикселей
    width: 30,
    height: 30, // размеры
    resizeMode: "cover", //чтобы при изменении размера пропорции сохранялись
  },

  text: {
    //alignItems:
    justifyContent: "space-around",
    borderBottomColor: THEME.DIALOG_BORDER_COLOR,
    // borderBottomWidth: 1,
    width: "100%",
  },
  name: {
    fontStyle: "normal", //не знает шрфиты вообще
    fontSize: 16,
    color: THEME.DIALOG_NAME_COLOR_BLACK,
    fontFamily: "roboto_bold",
    // width: "55%",
  },
});
