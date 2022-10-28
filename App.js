import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { Text, View } from 'react-native';

// import Login from "./src/Views/Login/index";
import Register from "./src/Views/Register/index";
import {stylesGlobal} from './styleGlobal';

export default function App() {
 
  return (
    <View style={stylesGlobal.container}>
      <Register/>
    </View>
  );
}