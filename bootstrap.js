import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    open_bold: require("./fonts/OpenSans-Bold.ttf"),
    open_regular: require("./fonts/OpenSans-Regular.ttf"),
  });
}
