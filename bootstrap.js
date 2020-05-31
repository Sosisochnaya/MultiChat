import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    open_bold: require("./fonts/OpenSans-Bold.ttf"),
    open_regular: require("./fonts/OpenSans-Regular.ttf"),
    nunito_bold: require("./fonts/NunitoSans-Bold.ttf"),
    roboto_bold: require("./fonts/Roboto-Bold.ttf"),
    roboto_regular: require("./fonts/Roboto-Regular.ttf"),
  });
}
