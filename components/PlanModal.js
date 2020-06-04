import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
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
import { Navbar } from "../components/Navbar";

export const PlanModal = ({ visible, onCancel, Add }) => {
  const [value, setValue] = useState("s");
  const [name, setname] = useState("s");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
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
    showMode("date");
    console.log(date);
  };

  const pressHandler = () => {
    if (!name.trim() || !value.trim()) {
      Alert.alert("Введите имя и текст");
    } else {
      {
        Add(value, name, false);
        setValue("");
        setname("");
        onCancel();
      }
    }
  };

  return (
    <Modal visible={visible}>
      <View style={styles.iphonetop}></View>
      <View style={styles.Container}>
        <View style={styles.line1}>
          <Text style={styles.text}>Add Plan</Text>
          <TouchableOpacity style={styles.op} onPress={onCancel}>
            <Image
              style={styles.image}
              source={require("../assets/Back.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line2}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder={"Name"}
              placeholderTextColor="#5e5e5e"
              name={name}
              onChangeText={setname}
            />
          </View>
          <TouchableOpacity onPress={showDatepicker}>
            <View style={styles.input}>
              {/* <TextInput style={styles.inputtext}>Time</TextInput> */}
              {show && (
                <DateTimePicker
                  testID="date"
                  timeZoneOffsetInMinutes={0}
                  display="default"
                  onChange={onChange}
                  is24Hour={true}
                  value={date}
                  mode={mode}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.back}>
        <TextInput
          placeholderTextColor="#5e5e5e"
          placeholder={"Text.."}
          style={styles.plan}
          value={value}
          onChangeText={setValue}
        />
      </View>
      <View style={styles.button}>
        <Button color="#fff" title="Add" onPress={pressHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  back: {
    height: "100%",
    backgroundColor: "#111111",
  },
  image: {
    height: 20,
    width: 10,
  },
  inputtext: {
    color: "#fff",
    marginLeft: 10,
  },
  op: {
    position: "relative",
    height: 20,
    width: 10,
    alignSelf: "flex-start",
    marginLeft: 25,
  },

  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#111111",
    height: 26,
    width: 155,
    flexDirection: "row",
    alignItems: "center",
  },

  line1: {
    width: "100%",
    alignItems: "center",
  },
  line2: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 19,
  },
  Container: {
    borderBottomWidth: 0.4,
    borderColor: "#fff",
    height: 90,
    width: "100%",
    backgroundColor: "#272727",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    fontSize: 23,
    fontWeight: "500",
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
  },

  iphonetop: {
    height: 20,
    backgroundColor: "#272727",
  },

  nav: {
    bottom: 0,
  },

  plan: {
    marginLeft: 21,
    marginTop: 24,
    fontSize: 24,
    color: "#fff",
  },
  button: {
    bottom: 18,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "#FFA467",
    height: 42,
    width: 328,
  },
});
