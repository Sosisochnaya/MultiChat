import React from 'react'
import { StyleSheet, Text, View, Image, CheckBox, Button} from 'react-native'


export const ContactsList = props =>{
    
    return(
    
        <View style={styles.container}> 

        <View style={styles.icon}>
            <Image style={styles.image}
            source={require("../assets/Ellipse.png")}
            /> 
        </View>

        <View style={styles.names}>
            <Button  title="Name Sename" color='black' style={styles.text} /> 
        </View>
    
        </View>

           
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        alignItems: 'center',
    },

    names: {
        height: 48,
        width: 314,
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    image:{
        marginLeft: 16, 
        marginRight: 15.24,
        marginTop: 9,
        marginBottom: 9,
        width: 30, 
        height: 30,
        resizeMode: 'cover', 
        borderRadius: 50,   
    },

    
})
