import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { THEME } from "../themes/theme";
import { LinearGradient } from "expo-linear-gradient";

export const ChooseMessangerScreen = ({
  navigation,
  visible,
  onCancel,
  theme,
}) => {
  const goToAddChatScreenVK = () => {
    // onCancel;
    onCancel();
    navigation.navigate("AddChat", { messager: "VK", theme: theme });
  };
  const goToAddChatScreenTG = () => {
    // onCancel;
    onCancel();
    navigation.navigate("AddChat", { messager: "TG", theme: theme });
  };
  const goBackHendler = () => {
    onCancel();
  };

  const styles = StyleSheet.create({
    box: {
      alignItems: "center",
    },

    TouchHeader: {
      height: "30%",
    },

    TouchFooter: {
      height: 1000,
    },

    wrap1: {
      alignItems: "center",
      height: 60,
      width: "90%",
      backgroundColor: theme.background,
      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10,
      // borderBottomColor: theme.headerstroke,
      // borderBottomWidth: 0.5,
      // marginTop: 0,
      // marginLeft: 7,
    },

    wrap2: {
      alignItems: "center",
      height: 172,
      width: "90%",
      backgroundColor: theme.background,
      // borderBottomLeftRadius: 10,
      // borderBottomRightRadius: 10,
      // borderLeftWidth: 0.5,
      // borderRightWidth: 0.5,
      // borderBottomWidth: 0.5,
      // borderColor: theme.headerstroke,
      // marginLeft: 7,
    },

    button1: {
      marginTop: 16,
      justifyContent: "space-around",
      flexDirection: "row",
      //backgroundColor: THEME.BTN_ORANGE_COLOR,
      height: 60,
      width: "90%",
      borderRadius: 20,
      alignItems: "center",
    },

    button2: {
      marginTop: 26,
      justifyContent: "space-around",
      flexDirection: "row",
      //backgroundColor: THEME.BTN_ORANGE_COLOR,
      height: 60,
      width: "90%",
      borderRadius: 20,
      bottom: 10,
      alignItems: "center",
    },

    text: {
      color: theme.headertext,
      marginTop: 15,
      fontSize: 24,
      fontFamily: "nunito_bold",
    },
    label: {
      color: theme.white,
      fontFamily: "nunito_bold",
      fontSize: 18,
    },
    imageVk1: {
      height: 27,
      width: 43.57,
      marginLeft: 15,
    },

    imageVk2: {
      height: 27,
      width: 43.57,
      marginRight: 15,
    },

    imageTelegram1: {
      height: 30,
      width: 33,
      marginLeft: 15,
    },

    imageTelegram2: {
      height: 30,
      width: 33,
      marginRight: 15,
    },
  });

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      style={styles.box}
    >
      <TouchableOpacity
        style={styles.TouchHeader}
        onPress={goBackHendler}
      ></TouchableOpacity>

      <View style={styles.box}>
        <View style={styles.wrap1}>
          <Text style={styles.text}>Chosee messeger </Text>
        </View>

        <View style={styles.wrap2}>
          <TouchableOpacity onPress={goToAddChatScreenVK}>
            <LinearGradient
              colors={[theme.GcolorR, theme.GcolorS, theme.GcolorL]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.button1}
            >
              <Image
                style={styles.imageVk1}
                source={require("../assets/vk.png")}
              />
              <Text style={styles.label}>VKONTAKTE</Text>
              <Image
                style={styles.imageVk2}
                source={require("../assets/vk.png")}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToAddChatScreenTG}>
            <LinearGradient
              colors={[theme.GcolorR, theme.GcolorS, theme.GcolorL]}
              start={[1.0, 0.2]}
              end={[0.2, 1.0]}
              style={styles.button2}
            >
              <Image
                style={styles.imageTelegram1}
                source={require("../assets/telegram.png")}
              />
              <Text style={styles.label}>TELEGRAM</Text>
              <Image
                style={styles.imageTelegram2}
                source={require("../assets/telegram.png")}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.TouchFooter}
        onPress={goBackHendler}
      ></TouchableOpacity>
    </Modal>
  );
};

// EditModal.navigationOptions = {
//   //headerShown: false,
// };
