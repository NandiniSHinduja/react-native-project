import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack =createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
    <Stack.Screen name="LogIn" component={LogInScreen}></Stack.Screen>
    <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>


</Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigation;