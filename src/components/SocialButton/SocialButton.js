import { View, Text,StyleSheet,Pressable,Image } from 'react-native'
import React from 'react'
import logo from '../../../assets/images/google.png';

const SocialButton = ({text, onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.text}>{text}</Text>
            
        </Pressable>
      );
    };
    const styles=StyleSheet.create({
        container:{
            backgroundColor:'#EBECF0',
            margin:20,
            width:350,
            height:50,
            flexDirection:'row',
            borderRadius:40,
    
        },
        text:{
            color:'black',
            textAlign:'center',
            alignContent:'center',
            alignItems:'center',
            paddingTop:15,
            paddingLeft:70,
            fontSize:15,
        },
        logo:{
            marginLeft:20,
            marginTop:15,
            width:20,

            height:20,
        }
    });

export default SocialButton;