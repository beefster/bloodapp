import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles/global';
import Navigator from './routes/homeStack';

export default function App() {
 
  return (
    <Navigator/>
  );
}

