import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {MainScreen} from "../screens/MainScreen";
import {DialogScreen} from "../screens/DialogScreen";
import {AddChatScreen} from "../screens/AddChatScreen1";
import {PlanScreen} from "../screens/PlanScreen";
import {ConfigScreen} from "../screens/ConfigScreen";
import {ChooseMessangerScreen} from "../screens/ChooseMessanger";
import {TokenScreen} from "../screens/TokenScreen";
import {PlanModal} from "../components/PlanModal";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    Dialog: {
      screen: DialogScreen,
    },
    AddChat: AddChatScreen,
    Token: TokenScreen,
    Config: ConfigScreen,
    ChooseMessanger: ChooseMessangerScreen,
    Plan: {
      screen: PlanScreen,
    },
    AddPlan: PlanModal,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export const AppNavigation = createAppContainer(Navigation);
