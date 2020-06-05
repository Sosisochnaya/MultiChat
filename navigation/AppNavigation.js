import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {MainScreen} from "../screens/MainScreen";
import {DialogScreen} from "../screens/DialogScreen";
import {AddChatScreen} from "../screens/AddChatScreen";
import {PlanScreen} from "../screens/PlanScreen";
import {ConfigScreen} from "../screens/ConfigScreen";
import {ChooseMessangerScreen} from "../screens/ChooseMessanger";
import {TGAuthScreen} from "../screens/AddDialog1";
import {TokenScreen} from "../screens/TokenScreen";
// import {EditModal} from "../components/EditModal";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    //Main2: MainScreen2,
    Dialog: {
      screen: DialogScreen,
    },
    // AddChat: AddChatScreen,
    AddChat: TokenScreen,
    Config: ConfigScreen,
    ChooseMessanger: ChooseMessangerScreen,
    Plan: {
      screen: PlanScreen,
    },
    TGAuth: TGAuthScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export const AppNavigation = createAppContainer(Navigation);
