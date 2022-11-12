import React, {useState} from 'react';
import {View, Text,Image,StyleSheet, ScrollView} from 'react-native';
import logo from '../../../assets/images/guvi_logo.png';
import register from '../../../assets/images/register_img.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SocialButton from '../../components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignUpScreen = () =>{
   
    const navigation=useNavigation();
    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();

    const onSignUpPressed = data => {
        console.log(data);
        // validate user
        navigation.navigate('Profile');
    };
    const onLogInPressed=()=>{
        navigation.navigate('LogIn');
    };
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={logo} style={styles.logo} resizeMode="contain"/>
            <Text style={styles.baseText}>Sign Up</Text>
            <Image source={register} style={styles.register} resizeMode="contain"/>
            <SocialButton text="Sign-up with Google" onPress={onSignUpPressed}/>
            <Text style={styles.frontText}>OR SIGN-UP WITH EMAIL</Text>
            <CustomInput
            name="firstname"
            placeholder="Enter first name"
            secureTextEntry={false}
            control={control}
            rules={{required: 'First name is required'}}
            />
            <CustomInput
            name="lastname"
            placeholder="Enter last name"
            control={control}
            rules={{required: 'Last name is required'}}
            secureTextEntry={false}
            />
            <CustomInput
            name="email"
            placeholder="Enter email"
            control={control}
            rules={{required: 'Email is required'}}
            secureTextEntry={false}
            />
            <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            rules={{required: 'Password is required', minLength:{ value:3, message:'Password should be minimum 3 characters long', },}}
            secureTextEntry={true}
            />
            <CustomInput
            name="mobilenumber"
            placeholder="Mobile number"
            secureTextEntry={false}
            rules={{required: 'Mobile number is required'}}
            control={control}
            />
            <CustomButton 
            text="Sign up"
            onPress={handleSubmit(onSignUpPressed)}/>
            <Pressable><Text style={styles.endText}>Already registered User? <Text style={styles.buttonText} onPress={onLogInPressed}>Log in</Text> </Text></Pressable>
  
        </View>
        </ScrollView>
    )
};
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        backgroundColor:'white',
    },
    logo:{
        width:200,
        height:200,
    },
    register:{
        width:300,
        height:300,
        marginBottom:10,

    },
    frontText:{
        marginBottom:10,
    },
    baseText:{
        fontSize:28,
        fontWeight:'bold',
        color:"black",
        marginBottom:50,
    },
    endText:{
        marginBottom:20,
    },
    buttonText:{
        marginBottom:20,
        color:'black',
    }
});

export default SignUpScreen;