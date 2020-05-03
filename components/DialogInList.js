import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {THEME} from "../themes/theme";

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
                    <View style={styles.logoMes}>
                        <Text style={styles.logoMesText}>VK</Text>
                    </View>
                </View>


                <View style={styles.line2}>
                    <Text style={styles.lastMes}>here last message</Text>
                </View>

            </View>

            <View style={styles.thirdColumn}>
                <View >
                    <Text style={styles.time}>00:00</Text>
                </View>
                <View style={styles.countUnreadMes}>
                    <Text style={styles.countUnreadMesNumeral}>22</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#111111',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        position: 'relative',
        
        
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

    //2 часть где тескт с именем и ласт сообщением
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
        fontStyle: 'normal', //не знает шрфиты вообще
        fontSize: 16,
        color: THEME.DIALOG_NAME_COLOR,

    },
    logoMes:{
        marginLeft: 10,
        marginTop: 3,
        width: 22,//явно задал размеры , думаю тут адаптив не нужен
        height: 16,
        borderRadius: 5,
        backgroundColor: '#65CAE0',
        alignItems: "center",

        
    },
    logoMesText:{
        marginTop: 1,
        textAlign: "center",
        fontSize: 10,
    },
    lastMes:{
        marginBottom: 6,
        //color: 'white'
        fontSize: 14,
        color: THEME.LASTMES_TEXT_COLOR,

    },


    //3 часть где время ласт сообщения и кол-вл непрочитанных сообщений
    thirdColumn:{
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: "center",
        right: 0,
        marginRight: 10,

        //backgroundColor: '#5cfa31',

    },
    time:{
        marginTop: 10,
        fontSize: 12,
        color: THEME.DIALOG_NAME_COLOR,
    },
    countUnreadMes:{
        marginTop: 7,
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor : '#65CAE0',
        alignItems: "center",
        
                
    },
    countUnreadMesNumeral:{
        marginTop: 2,
        fontSize: 12,
    }
})
