import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles/global';
import Navigator from './routes/homeStack';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./routes/searchNavigator"; 
import { FirstStackNavigator } from "./routes/homeStack";


export default function App() {
 
  return (
    <NavigationContainer>
      <FirstStackNavigator />
    </NavigationContainer>
  );
}


/*
export default function App() {
 
  return (
    <Navigator/>
  );
}
*/

