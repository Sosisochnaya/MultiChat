import React, { useState } from "react";
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

export const Todo = ({ todo, status, setTodos, addTodo, onRemove }) => {
  const [valswitch, setvalswitch] = useState(false);

  const swi = (valswitch, id) => {
    setvalswitch(!valswitch);
    // setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // addTodo(todo.id + 100, false);
  };

  if (todo.status !== status) {
    return (
      <TouchableOpacity onLongPress={() => onRemove(todo.id)}>
        <View style={styles.todo}>
          <Text style={styles.text}>{todo.title}</Text>
          <View style={styles.center}>
            <View>
              <Text style={styles.text2}>00:00</Text>
            </View>
            <View>
              <Text style={styles.text2}>{todo.name}</Text>
            </View>
          </View>
          <Switch
            value={valswitch}
            onValueChange={() => swi(valswitch, todo.id)}
            style={styles.switch}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return;
  }
};

const styles = StyleSheet.create({
  center: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  todo: {
    height: 54,
    borderBottomWidth: 0.5,
    borderColor: "#AAAAAA",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    width: 50,
    marginLeft: 15,
    fontSize: 24,
    color: "#fff",
  },

  text2: {
    fontSize: 12,
    color: "#fff",
  },

  switch: {
    marginRight: 15,
  },
});
