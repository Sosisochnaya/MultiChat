import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createCompatNavigatorFactory} from "@react-navigation/compat";
import {MainScreen} from "../screens/MainScreen";
import {DialogScreen} from "../screens/DialogScreen";
import {AddChatScreen} from "../screens/AddChatScreen";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    Dialog: {
      screen: DialogScreen,
    },
    AddChat: AddChatScreen,
  },
  {
    initialRouteName: "Main",
  }
);

export const AppNavigation = createAppContainer(Navigation);
