import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { EditTodo } from "./EditTodo";

export const Todo = ({
  todo,
  status,
  setTodos,
  addTodo,
  onRemove,
  EditTodoPress,
  theme,
}) => {
  const [valswitch, setvalswitch] = useState(false);
  const [stat, setstat] = useState(false);

  const swi = (id) => {
    setvalswitch(!valswitch);
    addTodo(
      todo.title,
      todo.name,
      !todo.status,
      todo.date,
      todo.time,
      todo.datefull
    );
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // AsyncStorage.removeItem(id);
  };

  const styles = StyleSheet.create({
    center: {
      // borderWidth: 1,
      width: 100,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    todo: {
      height: 54,
      borderBottomWidth: 0.5,
      borderColor: theme.headerstroke,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },

    text: {
      //borderWidth: 1,
      fontFamily: "nunito_bold",
      width: 100,
      marginLeft: 15,
      fontSize: 24,
      color: theme.headertext,
    },

    text2: {
      fontFamily: "nunito_bold",
      fontSize: 12,
      color: theme.headertext,
    },

    switch: {
      height: "100%",
      width: 69,
      // borderWidth: 1,
      paddingRight: 15,
      flexDirection: "row",
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    zone: {
      width: 115,
    },

    change: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: theme.chekbox,

      height: 25,
      width: 25,
    },

    change2: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: theme.chekbox,
      backgroundColor: theme.chekbox,
      height: 25,
      width: 25,
    },
  });

  if (todo.status !== status) {
    return (
      <TouchableOpacity
        onLongPress={() => onRemove(todo.id)}
        onPress={() => EditTodoPress(todo, todo.id)}
      >
        <View style={styles.todo}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {todo.title}
          </Text>
          <View style={styles.center}>
            <View>
              <Text style={styles.text2}>{todo.time}</Text>
            </View>
            <View>
              <Text style={styles.text2} numberOfLines={1} ellipsizeMode="tail">
                {todo.name}
              </Text>
            </View>
          </View>
          <View style={styles.zone}>
            <TouchableOpacity
              style={styles.switch}
              onPress={() => swi(todo.id)}
            >
              <View
                style={!todo.status ? styles.change : styles.change2}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <View></View>;
  }
};
