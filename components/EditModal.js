import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export const EditModal = ({navigation, visible, onCancel}) => {
  const goToAddChatScreen = () => {
    navigation.navigate("AddChat");
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <TouchableOpacity
        style={styles.TouchHeader}
        onPress={onCancel}
      ></TouchableOpacity>

      <View style={styles.wrap1}>
        <Text style={styles.text}>Chosee messeger </Text>
      </View>

      <View style={styles.wrap2}>
        <TouchableOpacity style={styles.button1} onPress={goToAddChatScreen}>
          <Image style={styles.imageVk1} source={require("../assets/vk.png")} />
          <Button title="VKONTAKTE" color="white" />
          <Image style={styles.imageVk2} source={require("../assets/vk.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={goToAddChatScreen}>
          <Image
            style={styles.imageTelegram1}
            source={require("../assets/telegram.png")}
          />
          <Button title="TELEGRAM" color="white" />
          <Image
            style={styles.imageTelegram2}
            source={require("../assets/telegram.png")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.TouchFooter}
        onPress={onCancel}
      ></TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  TouchHeader: {
    height: 210,
  },

  TouchFooter: {
    height: 198,
  },

  wrap1: {
    alignItems: "center",
    height: 60,
    width: 360,
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomColor: "#5E5E5E",
    borderBottomWidth: 0.5,
    marginTop: 0,
    marginLeft: 7,
  },

  wrap2: {
    alignItems: "center",
    height: 172,
    width: 360,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 7,
  },

  button1: {
    marginTop: 16,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#57B8FF",
    height: 60,
    width: 328,
    borderRadius: 20,
    alignItems: "center",
  },

  button2: {
    marginTop: 26,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#57B8FF",
    height: 60,
    width: 328,
    borderRadius: 20,
    bottom: 10,
    alignItems: "center",
  },

  text: {
    color: "#5E5E5E",
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
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
