import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export const Navbar = props =>{
    return(
        <View style={styles.conteiner}>
            <Button 
                style={styles.button} 
                title='set' />
            <Button 
                style={styles.button} 
                title='mes' />
            <Button 
                style={styles.button}
                
                title='set' />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        //position: 'absolute',
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#394944',
        height: 80,

        borderTopColor: 'black',
        borderTopWidth: 2,
        
        //bottom: 0,
    },
    button:{

    }
})