import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {stylesGlobal} from './styleGlobal';


import Login from "./src/Views/Login/index";
import Register from "./src/Views/Register/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
         name="Login"
         component={Login}
         options={{title: 'Login'}}
         />
        <Stack.Screen
         name="Cadastro"
         component={Register}
         options={{title: 'Cadastro'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}