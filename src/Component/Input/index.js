import React from 'react';
import { StyleSheet, TextInput } from "react-native";

export default function InputForm (){
  return(
    <TextInput
      style={styles.inputTxt}
      placeholder='email'
    />
  );
}

export const styles = StyleSheet.create({
  inputTxt:{
    backgroundColor: "#EFFCF6",
    borderRadius: 10,
    width: '100%',
    height: 60,
    padding: 15,
    placeholderTextColor: '#829AB1',
  },
});