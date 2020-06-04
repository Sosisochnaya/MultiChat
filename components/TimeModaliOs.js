import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { THEME } from "../themes/theme";
import { Navbar } from "./Navbar";
export const TimeModaliOs = ({ visible, onCancel, onDate }) => {
  const Press = () => {
    onCancel();
    onDate(date);
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("datetime");
    console.log(date);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.TimePicker}>
        <View style={styles.change}>
          <DateTimePicker
            testID="date"
            timeZoneOffsetInMinutes={0}
            display="default"
            onChange={onChange}
            is24Hour={true}
            value={date}
            mode={mode}
            textColor="#fff"
          />
          <Button
            title={"Ok"}
            onPress={() => {
              Press();
            }}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  TimePicker: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  change: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    height: 300,
    width: 300,
  },
});
