import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {MainScreen} from "../screens/MainScreen";
import {DialogScreen} from "../screens/DialogScreen";
import {AddChatScreen} from "../screens/AddChatScreen";
import {InputPlane} from "../screens/InputPlane";
import {ChooseMessangerScreen} from "../screens/ChooseMessanger";
import {EditModal} from "../components/EditModal";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    Dialog: {
      screen: DialogScreen,
    },
    AddChat: AddChatScreen,
    ChooseMessanger: ChooseMessangerScreen,
    ChooseMessangerModal: EditModal,
    Plan: InputPlane,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export const AppNavigation = createAppContainer(Navigation);
