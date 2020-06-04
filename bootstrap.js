import * as Font from "expo-font";
import { DB } from "./Tododb";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      open_bold: require("./fonts/OpenSans-Bold.ttf"),
      open_regular: require("./fonts/OpenSans-Regular.ttf"),
    });
    await DB.init();
    console.log("Database started...");
  } catch (e) {
    console.log("Error: ", e);
  }
}
