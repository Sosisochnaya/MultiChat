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
import { TimeModaliOs } from "./TimeModaliOs";

import { THEME } from "../themes/theme";
import { Navbar } from "../components/Navbar";

export const EditTodo = ({ visible, onCancel, todo, Add }) => {
  const [modali, setModali] = useState(false);
  const [modala, setModala] = useState(false);
  const [value, setValue] = useState("");
  const [name, setname] = useState("");
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setModala(false);
    setDate(currentDate);
  };

  const pressHandler = () => {
    if (!name.trim() || !value.trim()) {
      Alert.alert("Введите имя и текст");
    } else {
      {
        Add(
          value,
          name,
          todo.status,
          date.getDay().toString() +
            "." +
            date.getMonth().toString() +
            "." +
            date.getFullYear().toString(),
          date.getHours().toString() + ":" + date.getMinutes().toString()
        );
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
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === "ios") {
                setModali(true);
              } else {
                setModala(true);
              }
            }}
          >
            <View style={styles.input}>
              <Text style={styles.inputtext}>
                {date.toTimeString()}
                {/* {" "}
                {date.getDate().toString()}.{(date.getMonth() + 1).toString()}.
                {date.getFullYear().toString()}
                {"    "}
                {date.getHours().toString()}:{date.getMinutes().toString()} */}
              </Text>
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
        <TimeModaliOs
          style={styles.TimeModal}
          visible={modali}
          onCancel={() => setModali(false)}
          onDate={(date) => {
            setDate(date);
            console.log("sdf", date);
          }}
        />
        {modala && (
          <DateTimePicker
            testID="datdfgedd"
            timeZoneOffsetInMinutes={0}
            display="default"
            onChange={onChange}
            is24Hour={true}
            value={new Date()}
            mode={"time"}
            textColor="#fff"
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <LinearGradient
          colors={["#FFDE67", "#FFA467", "#FF6666"]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.button1}
        >
          <Text style={styles.add}>Save</Text>
        </LinearGradient>
      </TouchableOpacity>
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

    height: 42,
    width: 328,
  },

  button1: {
    justifyContent: "space-around",
    flexDirection: "row",

    height: 42,
    width: "95%",
    marginLeft: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  add: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "nunito_bold",
    fontWeight: "700",
  },

  TimeModal: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
