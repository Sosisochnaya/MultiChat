import React, {useEffect, useState, useReducer} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import {DialogInList} from "../components/DialogInList";
import {Navbar} from "../components/Navbar";
import {THEME} from "../themes/theme";
import {AntDesign} from "@expo/vector-icons";
import {ChooseMessangerScreen} from "./ChooseMessanger";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {SearchResult} from "./SearchResult";

async function _retrieveData() {
  try {
    token = await AsyncStorage.getItem("vk_token");
    number = AsyncStorage.getItem("number");
    if (token !== null) {
      // console.log(token);
    }
  } catch (error) {
    console.log("error token");
  }
}

var token;
var number;

export const MainScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [modalChoseMes, setModalCS] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [list, setList] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  const [seacrhtext, setSearch] = useState();

  const openDialogHendler = (item) => {
    // setModalSearch(false);
    navigation.navigate("Dialog", {dialog: item});
    setSearch("");
  };

  const goToChooseMessanger = () => {
    setModalCS(true);
    // navigation.navigate("AddChat");
  };

  _retrieveData();

  async function all_gialogs() {
    // _retrieveData();
    ids = [
      {
        id: 3592830872,
      },
      {
        id: 20000000652,
      },
      {
        id: 12450412591,
      },
      {
        id: 10611717871,
      },
      {
        id: 1407408602,
      },
    ];
    // var wl_json = "[";
    var wl_json = [];

    await AsyncStorage.getItem("whitelistVK")
      .then((req) => JSON.parse(req))
      .then((json) => {
        if (json != [])
          json.forEach((item) => {
            wl_json.push({id: parseInt(item, 10)});
          });
      })
      .catch((error) => console.log("error vk wl"));

    await AsyncStorage.getItem("whitelistTG")
      .then((req) => JSON.parse(req))
      .then((json) => {
        if (json != [])
          json.forEach((item) => {
            wl_json.push({id: parseInt(item, 10)});
          });
      })
      .catch((error) => console.log("error tg wl"));
    // console.log(wl_json);
    if (wl_json != []) {
      fetch(
        "http://109.227.206.136:5000/get_dialogs?phone=" +
          (await AsyncStorage.getItem("number")) +
          "&token=" +
          (await AsyncStorage.getItem("vk_token")),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wl_json),
        }
      )
        .catch((error) => console.log(error))
        .then((list) => list.json())
        .then((list) => {
          setList(list);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function search_name() {
    let list2 = [];
    if (seacrhtext != "" && list != []) {
      list.forEach((item) => {
        if (item.name.toLowerCase().indexOf(seacrhtext.toLowerCase()) + 1) {
          list2.push(item);
        }
      });
      setListSearch(list2);
      setModalSearch(true);
    }
  }

  useEffect(() => {
    setTimeout(all_gialogs, 2000);
    // all_gialogs();
  });

  console.disableYellowBox = true;

  return (
    <View style={styles.conteiner}>
      <ChooseMessangerScreen
        navigation={navigation}
        visible={modalChoseMes}
        onCancel={() => {
          setModalCS(false);
        }}
      />
      <SearchResult
        navigation={navigation}
        visible={modalSearch}
        onCancel={() => {
          setModalSearch(false);
          setSearch("");
        }}
        list={listSearch}
      />

      <View style={styles.header}>
        <View style={styles.line1}>
          <Text style={styles.text}>Chats</Text>
        </View>

        <View style={styles.button}>
          <AntDesign.Button
            name="plus"
            size={25}
            backgroundColor="transparent"
            onPress={goToChooseMessanger}
          ></AntDesign.Button>
        </View>
        <TextInput
          placeholder="Find message..."
          placeholderTextColor={THEME.TEXT_COLOR_BLACK}
          style={styles.input}
          onChangeText={(text) => setSearch(text)}
          value={seacrhtext}
          onSubmitEditing={search_name}
        />
      </View>

      {isLoading ? (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(dialog) => dialog.id.toString()}
          renderItem={({item}) => (
            <DialogInList dialog={item} onOpen={openDialogHendler} />
          )}
        />
      )}
      <Navbar navigation={navigation} status={"Chat"} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    position: "relative",
    paddingBottom: 60,
  },
  header: {
    //width: "100%",
    paddingTop: 20,
    //marginTop: 24,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.HEADER_BACKGROUND_COLOR_BLACK,
  },
  line1: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    paddingBottom: 10,
  },
  input: {
    // paddingLeft: 110,
    textAlign: "center",
    backgroundColor: THEME.BACKGROUNG_COLOR_BLACK,
    height: 30,
    width: "85%",
    borderColor: THEME.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 17,
    fontFamily: "roboto_regular",
  },
  text: {
    color: "white",
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 24,
    fontFamily: "nunito_bold",
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingTop: 25,
  },

  swapmes: {
    position: "absolute",
    left: 20,
    top: 0,
    paddingTop: 30,
  },
});
