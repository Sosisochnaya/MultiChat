import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native'
import { DialogInList } from '../components/DialogInList'

export const MainScreen = props =>{
    return(
        <View>
          <View style={styles.header}>

            <View style={styles.line1}>
              <Text style={styles.text}>Main Screen</Text>
              <Button title='+'/>
            </View>
            
            <TextInput style={styles.input} />
          </View>

          <ScrollView>
            
              <DialogInList/>
              <DialogInList/>
           
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 35,
    //marginTop: 24,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#394944'
  },
  line1:{
    flexDirection: 'row',

  },
  input:{
    width: '70%'

  },
  text:{
    color: 'white'
  },
  dialog:{

  }
})