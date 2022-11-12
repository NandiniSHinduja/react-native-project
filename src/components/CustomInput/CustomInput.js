import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch', marginLeft:20}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};
const styles=StyleSheet.create({
    container:{
    backgroundColor:'#EBECF0',
    borderColor:'#d3d3d3',
    borderRadius:5,
    borderWidth:1,
    paddingHorizontal:10,
    marginStart:20,
    width:350,
    height:50,
    marginEnd:20,
    marginVertical:10
    },
});

export default CustomInput