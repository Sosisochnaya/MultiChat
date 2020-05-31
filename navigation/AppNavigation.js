import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {MainScreen} from "../screens/MainScreen";
import {DialogScreen} from "../screens/DialogScreen";
import {AddChatScreen} from "../screens/AddChatScreen";
import {PlanScreen} from "../screens/PlanScreen";
import {ConfigScreen} from "../screens/ConfigScreen";
import {ChooseMessangerScreen} from "../screens/ChooseMessanger";
// import {EditModal} from "../components/EditModal";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    //Main2: MainScreen2,
    Dialog: {
      screen: DialogScreen,
    },
    AddChat: AddChatScreen,
    Config: ConfigScreen,
    ChooseMessanger: ChooseMessangerScreen,
    Plan: {
      screen: PlanScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export const AppNavigation = createAppContainer(Navigation);
