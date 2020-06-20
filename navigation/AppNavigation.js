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
import {AuthTelegram} from "../screens/AuthTelegram";
import {CheckAuth} from "../screens/CheckAuth";
import {MainScreenTG} from "../screens/MainScreenTG";
import {DialogScreenTG} from "../screens/DailogScreenTG";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    MainTG: MainScreenTG,
    Dialog: {
      screen: DialogScreen,
    },
    DialogTG: DialogScreenTG,
    AddChat: AddChatScreen,
    Token: TokenScreen,
    Telegram: AuthTelegram,
    Check: CheckAuth,
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
