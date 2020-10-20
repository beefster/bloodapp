import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';



export default function Results({navigation}) {
    const handleLogin = () => {
       // navigation.navigate('Home');
        //navigation.navigate('HomeStack', { screen: 'Home' });
        navigation.goBack();
      }
   
     return (
   
       
       <View style={globalStyles.container}>
         
         <Ionicons name="md-checkmark-circle" size={120} color="green" />
         <Text style = {globalStyles.greeting1}>Results!</Text>
        
         <Button color='green' title="Login" onPress={handleLogin} />
         <Text>{ navigation.getParam('temp') }</Text>
        
         
         

       </View>
    
     );
   }