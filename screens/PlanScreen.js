import React, {useState} from "react";
import {useEffect} from "react";
import {AsyncStorage} from "react-native";
// import {DB} from "../Tododb";
import {LinearGradient} from "expo-linear-gradient";
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
import {THEME} from "../themes/theme";
import {Navbar} from "../components/Navbar";
import {PlanModal} from "../components/PlanModal";
import {Todo} from "../components/Todo";
import {EditTodo} from "../components/EditTodo";

export const PlanScreen = ({navigation}) => {
  const [editmodal, seteditModal] = useState(false);
  const [editid, seteditid] = useState({});

  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(true);

  //console.log("То что мне нужно");
  // DB.insertPosts("Name", "Tite");
  //console.log(DB.getPosts());
  const goBack = () => {
    navigation.goBack(null);
  };
  const addTodo = (title, name, status, date, time, datefull) => {
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
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     Alert.alert("ГО ДЕЛАТЬ");
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
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
      {cancelable: false}
    );
  };

  return (
    <View style={styles.screen}>
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
      <View style={styles.Container}>
        <Text style={styles.text}>Plan</Text>
        <TouchableOpacity
          style={styles.op}
          onPress={() =>
            navigation.navigate("AddPlan", {
              Add: addTodo,
              goBack: goBack,
            })
          }
        >
          <Image style={styles.image} source={require("../assets/Plan.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.choose}>
        <TouchableOpacity
          style={!status ? styles.statuscont : styles.statuscont1}
          onPress={() => setStatus(true)}
        >
          <View height={5}></View>
          <Text style={styles.statustext}>In porogress</Text>
          <LinearGradient
            colors={
              !status
                ? ["#111111", "#111111", "#111111"]
                : ["#FFDE67", "#FFA467", "#FF6666"]
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
          <Text style={styles.statustext}>Done</Text>
          <LinearGradient
            colors={
              status
                ? ["#111111", "#111111", "#111111"]
                : ["#FFDE67", "#FFA467", "#FF6666"]
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
        renderItem={({item}) => (
          <Todo
            todo={item}
            status={status}
            setTodos={setTodos}
            addTodo={addTodo}
            onRemove={removeTodo}
            EditTodoPress={EditTodoPress}
          />
        )}
      />

      <Navbar navigation={navigation} status={"Plan"} />
    </View>
  );
};

PlanScreen.navigationOptions = ({navigation}) => {};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#111111",
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
    color: "#fff",
  },

  Container: {
    borderBottomWidth: 0.5,
    borderColor: "#fff",
    height: 60,
    width: "100%",
    backgroundColor: "#272727",
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
