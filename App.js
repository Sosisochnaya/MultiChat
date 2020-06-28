import React, { useState } from "react";
import { AppLoading } from "expo";
import { AsyncStorage } from "react-native";
import { AppNavigation } from "./navigation/AppNavigation";
import { bootstrap } from "./bootstrap";

export default function App() {
  const [isReedy, setIsReady] = useState(false);

  if (!isReedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <AppNavigation />;
}
