import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import {THEME} from "../themes/theme";
import {LinearGradient} from "expo-linear-gradient";
import {DialogSearch} from "../components/DialogInSearch";
export const SearchResult = ({navigation, visible, onCancel, list}) => {
  const openDialogHendler = (item) => {
    onCancel();
    navigation.navigate("Dialog", {dialog: item});
  };
  const goBackHendler = () => {
    onCancel();
  };

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
        <FlatList
          data={list}
          keyExtractor={(dialog) => dialog.id.toString()}
          renderItem={({item}) => (
            <DialogSearch dialog={item} onOpen={openDialogHendler} />
          )}
        />
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

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    // backgroundColor: "green",
    paddingTop: 15,
    paddingBottom: 15,
    width: "90%",
    left: "5%",
    height: "75%",
    borderRadius: 20,
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: THEME.DIALOG_BORDER_COLOR,
  },

  TouchHeader: {
    height: "15%",
  },

  TouchFooter: {
    height: 1000,
  },
});
