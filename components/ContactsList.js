import React from 'react'
import { StyleSheet, Text, View, Image, CheckBox, Button} from 'react-native'


export const ContactsList = props =>{
    
    return(
    
        <View style={styles.container}> 
            <Image style={styles.icon}
            source={require("../assets/Ellipse.png")}
            /> 

            <Button  title="Name Sename" color='black' style={styles.text} /> 

      

        </View>

           
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        position: 'relative',
        alignItems: 'center',
     
    },
    icon:{
        marginLeft: 13, 
        marginTop: 9,
        marginBottom: 9,
        width: 30, 
        height: 30,
        resizeMode: 'cover', 
        borderRadius: 50,   
    },

    
})
