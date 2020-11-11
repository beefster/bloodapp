import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';

export default function Home1(props) {

  const handleButton = () => {
    props.navigation.navigate('Home');
  }

  return (
   
   <View style={globalStyles.container1}>
    <Text style = {globalStyles.greeting}>Welcome, {props.fname}!</Text>
    <Button
          onPress={handleButton }
          title="Logout"
          color="#841584"
          
    />
    

   </View>);
   
}