import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export const DialogInList = props =>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.icon}    
                source={require('../assets/golub.jpg')}
            />
            <View style={styles.text}>

                <View style={styles.line1}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.logoMes}>TG</Text>
                </View>


                <View style={styles.line2}>
                    <Text style={styles.lastMes}>here last message</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#394914',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        
    },
    icon:{
        margin: 10, //отсутп со всех сторон по 10 пикселей
        width: 50, 
        height: 50,// размеры
        resizeMode: 'cover', //чтобы при изменении размера пропорции сохранялись
        borderRadius: 50, //чтобы аватарка была круглая
        //borderColor: 'black',
        //borderWidth: 2, //здесь можно рамку сделать, но чет не очень красиво
        
        
    },
    text:{
        //alignItems: 
        justifyContent: 'space-around',


    },
    line1:{
        //alignItems: 'baseline',
        flexDirection: 'row',
        //justifyContent: 'flex-start'

    },
    line2:{
        //flexDirection: 'row',
        //justifyContent: 'flex-start'

    },
    name:{

    },
    logoMes:{

    },
    lastMes:{
        //color: 'white'
    }
})