import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/images/guvi_logo.png';
import login from '../../../assets/images/login.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SocialButton from '../../components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const LogInScreen = () => {

  const navigation=useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onLogInPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('Profile');
  };
const onSignUpPressed=()=>{
    navigation.navigate('SignUp');
};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.baseText}>Welcome Back..!</Text>
        <Image source={login} style={styles.login} resizeMode="contain"/>
        <SocialButton text="Login with Google" onPress={onLogInPressed}/>
        <Text style={styles.frontText}>OR LOGIN WITH EMAIL</Text>
        <CustomInput
        name="username"
        placeholder="Enter email"
        control={control}
        secureTextEntry={false}
        rules={{required: 'Username is required'}}/>
        <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
        rules={{required: 'Password is required', minLength:{ value:3, message:'Password should be minimum 3 characters long', },}}/>
        <Text style={styles.sideText}>Forgot password?</Text>
        <CustomButton text="Login" onPress={handleSubmit(onLogInPressed)}></CustomButton>
        <Pressable><Text style={styles.endText}>Don't have an account? <Text style={styles.buttonText} onPress={onSignUpPressed}>Sign up</Text></Text></Pressable>

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
login:{
    width:300,
    height:300,
    marginBottom:10,

},
sideText:{
    marginTop:10,
},
baseText:{
    fontSize:28,
    color:"black",
    marginBottom:50,
},
endText:{
    marginBottom:20,
},
buttonText:{
    marginBottom:20,
    color:'black',
},
frontText:{
    marginBottom:10,
},

});


export default LogInScreen;