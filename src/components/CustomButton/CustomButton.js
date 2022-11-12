import { View, Text,StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text 
        style={styles.text}>{text}</Text>
        
    </Pressable>
  );
};
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#32CD32',
        margin:20,
        width:350,
        height:50,
        borderRadius:5,

    },
    text:{
        color:'white',
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop:10,
        fontSize:20,
    }
})

export default CustomButton