import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TextInput,
} from "react-native";
import {Navbar} from "../components/Navbar";

export const PlanScreen = (props) => {
  return (
    <View>
      <View>
        <View style={styles.iphonetop}></View>
        <View style={styles.imageContainer}>
          <Text style={styles.text}>Plan</Text>
          <Image style={styles.image} source={require("../assets/Plan.png")} />
        </View>
      </View>
      {/* <Navbar />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "relative",
    height: 30.77,
    width: 29,
    alignSelf: "flex-end",
    marginRight: 25,
  },

  imageContainer: {
    borderBottomWidth: 1,
    borderColor: "#6970A6",
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    alignSelf: "center",
    alignItems: "center",
  },

  iphonetop: {
    height: 20,
    backgroundColor: "black",
  },
});
