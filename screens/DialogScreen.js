import React from "react";
import { useState } from "react";
import {
  Text,
  View,
} from "react-native";

import { THEME } from "../themes/theme";
import { AntDesign } from '@expo/vector-icons';
import { EditModal } from '../components/EditModal'


export const DialogScreen = (props) => {
  const [modal, setModal] = useState(false)
  
  return (
      <View>
          <Text>Dialog</Text>
      </View>
  )
}