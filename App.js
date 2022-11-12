/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Navigation from './src/navigation/Navigation';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.root}>
<Navigation></Navigation>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});

export default App;
