import { View, Text,StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

const MediumButton = ({text, onPress}) => {
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
        width:250,
        height:50,
        alignSelf:'center',
        borderRadius:5,

    },
    text:{
        color:'white',
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop:10,
        fontSize:18,
    }
})

export default MediumButton;