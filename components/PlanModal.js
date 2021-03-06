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

export const PlanModal = ({ navigation }) => {
  const theme = navigation.getParam("theme");
  const Add = navigation.getParam("Add");
  const goBack = navigation.getParam("goBack");
  const [modali, setModali] = useState(false);
  const [modala, setModala] = useState(false);
  const [value, setValue] = useState("");
  const [name, setname] = useState("s");
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState(false);
  const [r, setR] = useState(false);
  if (!r) {
    if (theme.buf == "W") {
      setColor(false);
    } else {
      setColor(true);
    }
    setR(true);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
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
          false,
          date.getDay().toString() +
            "." +
            date.getMonth().toString() +
            "." +
            date.getFullYear().toString(),
          date.getHours().toString() + ":" + date.getMinutes().toString(),
          date
        );
        setValue("");
        setname("");
        goBack();
      }
    }
  };

  const styles = StyleSheet.create({
    back: {
      height: "100%",
      backgroundColor: theme.background,
    },
    image: {
      height: 20,
      width: 10,
    },
    inputtext: {
      color: theme.textmess,
      marginLeft: 10,
    },
    op: {
      position: "relative",
      height: 20,
      width: 10,
      alignSelf: "flex-start",
      marginLeft: 25,
      top: "25%",
    },

    input: {
      borderWidth: 0.5,
      borderRadius: 10,
      borderColor: theme.headerstroke,
      backgroundColor: theme.background,
      height: 26,
      width: 155,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },

    line1: {
      width: "100%",
      alignItems: "center",
    },
    line2: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
    },
    Container: {
      borderBottomWidth: 0.4,
      borderColor: theme.headerstroke,
      height: 95,
      width: "100%",
      backgroundColor: theme.headermenu,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      position: "relative",
      fontSize: 23,
      fontWeight: "500",
      color: theme.headertext,
      alignSelf: "center",
      alignItems: "center",
      bottom: "25%",
    },

    iphonetop: {
      height: 24,
    },

    nav: {
      bottom: 0,
    },

    plan: {
      marginLeft: 21,
      marginTop: 24,
      fontSize: 24,
      color: theme.headertext,
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
      width: "90%",
      marginLeft: "5%",
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

  return (
    <View height={"100%"}>
      <View style={styles.iphonetop}></View>
      <View style={styles.Container}>
        <View style={styles.line1}>
          <TouchableOpacity
            style={styles.op}
            onPress={() => navigation.goBack(null)}
          >
            <Image
              style={styles.image}
              source={
                color
                  ? require("../assets/BbackTODO.png")
                  : require("../assets/WbackTODO.png")
              }
            />
          </TouchableOpacity>
          <Text style={styles.text}>Add Plan</Text>
        </View>
        <View style={styles.line2}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder={"Name"}
              placeholderTextColor={theme.textmess}
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
                {date.toTimeString().slice(0, 5)}
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
          placeholderTextColor={theme.textmess}
          placeholder={"Enter text.."}
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
          colors={[theme.GcolorR, theme.GcolorS, theme.GcolorL]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.button1}
        >
          <Text style={styles.add}>Add</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
