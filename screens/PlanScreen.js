import React, { useState } from "react";
import { useEffect } from "react";
import { AsyncStorage } from "react-native";
// import {DB} from "../Tododb";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { THEME } from "../themes/theme";
import { Navbar } from "../components/Navbar";
import { PlanModal } from "../components/PlanModal";
import { Todo } from "../components/Todo";
import { EditTodo } from "../components/EditTodo";

export const PlanScreen = ({ navigation }) => {
  const theme = navigation.getParam("theme");
  const [editmodal, seteditModal] = useState(false);
  const [editid, seteditid] = useState({});

  //const [i, seti] = useState(0);
  const [res, setres] = useState();

  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(true);
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
  //console.log("То что мне нужно");
  // DB.insertPosts("Name", "Tite");
  //console.log(DB.getPosts());
  // if (!ready) {
  //   AsyncStorage.getItem("todos", (err, result) => {
  //     if (result != null) {
  //       r = JSON.parse(result);
  //       console.log("asds", r);
  //     }
  //   });
  //   r.todo.forEach((el) => {
  //     setTodos(el);
  //     console.log("DDDDDDDDD", el);
  //   });

  //   setReady(true);
  // }

  const goBack = () => {
    navigation.goBack(null);
  };
  const addTodo = (title, name, status, date, time, datefull) => {
    r = { todo: todos };
    let nowid = Date.now().toString();
    setTodos((prev) => [
      ...prev,
      {
        id: nowid,
        name,
        status,
        title,
        date,
        time,
        datefull,
      },
    ]);
    console.log("fff");

    // let j;
    // var buf;
    // // AsyncStorage.multiRemove(r, (err) => {
    // //   // keys k1 & k2 removed, if they existed
    // //   // do most stuff after removal (if you want)
    // // });

    // AsyncStorage.getItem("todos", (err, result) => {
    //   console.log(result);
    //   console.log(todos);
    //   if (result == null) {
    //     AsyncStorage.setItem("todos", JSON.stringify(r), () => {});
    //   } else {
    //     AsyncStorage.removeItem("todos", (err) => {});
    //     AsyncStorage.setItem("todos", JSON.stringify(r), () => {});
    //   }
    // });

    // AsyncStorage.getAllKeys((err, keys) => {
    //   console.log(keys);
    // });

    // let nowid = "todo" + Date.now().toString();
    // let object = {
    //   id: Date.now().toString(),
    //   name,
    //   status,
    //   title,
    //   date,
    //   time,
    //   datefull,
    // };

    // let v = parseFloat(buf);
    // AsyncStorage.setItem(r.todo.toString(), JSON.stringify(object), () => {});

    // // for (let i = 1; i < r.todo; i++) {
    AsyncStorage.getItem("todos", (err, result) => {
      console.log(result);
    });
    // //   });
    // // }
    // console.log("tod = ", r.todo);
  };
  const EditTodoPress = (todobuf, id) => {
    // seteditid(todobuf);
    // setTodos((prev) => prev.filter((todobuf) => todobuf.id !== id));
    // seteditModal(true);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const TapClear = () => {
    Alert.alert(
      "Удаление элементов",
      `Вы уверены, что хотите удалить все эти элементы?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            setTodos((prev) => prev.filter((todo) => todo.status !== true));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const styles = StyleSheet.create({
    clear: {
      alignSelf: "center",
      //borderWidth: 1,
      //backgroundColor: "#fff",
      borderRadius: 10,
      position: "absolute",
      bottom: 66,
      height: 42,
      width: 328,
    },

    screen: {
      height: "100%",
      flexDirection: "column",
      backgroundColor: theme.background,
    },

    image: {
      height: 30.77,
      width: 29,
    },

    modal1: {
      marginTop: 135,
      borderWidth: 4,
      height: "100%",
      width: "100%",
    },
    modal2: {
      marginTop: 135,
      borderWidth: 4,
      borderColor: "#fff",
      height: "100%",
      width: "100%",
    },

    op: {
      position: "relative",
      height: 30.77,
      width: 29,
      alignSelf: "flex-end",
      marginRight: 25,
    },

    choose: {
      flexDirection: "row",
    },

    statuscont: {
      width: "50%",
      height: 60,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },

    statuscont1: {
      width: "50%",
      height: 60,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },

    statustext: {
      fontSize: 16,
      fontWeight: "500",
      color: theme.headertext,
    },

    cleartext: {
      fontSize: 20,
      fontFamily: "nunito_bold",
      textAlign: "center",
      top: 6,
      fontWeight: "bold",
      color: "#fff",
    },

    Container: {
      borderBottomWidth: 0.5,
      borderColor: theme.headerstroke,
      height: 64,
      width: "100%",
      backgroundColor: theme.headermenu,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      position: "absolute",
      fontSize: 23,
      fontWeight: "500",
      color: theme.headertext,
      alignSelf: "center",
      alignItems: "center",
    },

    iphonetop: {
      height: 24,
      backgroundColor: theme.headermenu,
    },

    button: {
      position: "absolute",
      height: 30.77,
      width: 29,
    },

    line: {
      borderRadius: 3,
      height: 5,
      width: "100%",

      alignSelf: "flex-end",
    },
  });

  return (
    <View backgroundColor={theme.background} style={styles.screen}>
      {/* <PlanModal
        visible={modal}
        onCancel={() => setModal(false)}
        Add={addTodo}
      /> */}
      <EditTodo
        visible={editmodal}
        onCancel={() => seteditModal(false)}
        todo={editid}
        add={addTodo}
      />
      <View style={styles.iphonetop}></View>
      <View backgroundColor={theme.headermenu} style={styles.Container}>
        <Text color={theme.headertext} style={styles.text}>
          Plan
        </Text>
        <TouchableOpacity
          style={styles.op}
          onPress={() =>
            navigation.navigate("AddPlan", {
              theme: theme,
              Add: addTodo,
              goBack: goBack,
            })
          }
        >
          <Image
            style={styles.image}
            source={
              color
                ? require("../assets/BPlanW.png")
                : require("../assets/WPlanW.png")
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.choose}>
        <TouchableOpacity
          style={!status ? styles.statuscont : styles.statuscont1}
          onPress={() => setStatus(true)}
        >
          <View height={5}></View>
          <Text color={theme.headertext} style={styles.statustext}>
            In progress
          </Text>
          <LinearGradient
            colors={
              !status
                ? [theme.background, theme.background, theme.background]
                : [theme.GcolorR, theme.GcolorS, theme.GcolorL]
            }
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.line}
          ></LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={status ? styles.statuscont : styles.statuscont1}
          onPress={() => setStatus(false)}
        >
          <View height={5}></View>
          <Text color={theme.headertext} style={styles.statustext}>
            Done
          </Text>
          <LinearGradient
            colors={
              status
                ? [theme.background, theme.background, theme.background]
                : [theme.GcolorR, theme.GcolorS, theme.GcolorL]
            }
            start={[1.0, 0.2]}
            end={[0.2, 1.0]}
            style={styles.line}
          ></LinearGradient>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            status={status}
            setTodos={setTodos}
            addTodo={addTodo}
            onRemove={removeTodo}
            EditTodoPress={EditTodoPress}
            theme={theme}
          />
        )}
      />
      {!status && (
        <LinearGradient
          colors={["#FF6666", "#FF4047", "#FF1A27"]}
          start={[1.0, 0.2]}
          end={[0.2, 1.0]}
          style={styles.clear}
        >
          <Text
            color={theme.white}
            style={styles.cleartext}
            onPress={() => {
              TapClear();
            }}
          >
            Clear
          </Text>
        </LinearGradient>
      )}
      <Navbar navigation={navigation} status={"Plan"} theme={theme} />
    </View>
  );
};

PlanScreen.navigationOptions = ({ navigation }) => {};
