import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MainScreen } from './screens/MainScreen'
import { ChoseMesser } from './screens/AddDialog1'


export default function App() {
  const [dialogs, chosemesser] = useState([])

  
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
