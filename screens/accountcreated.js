import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';



export default function Success({navigation}) {
    const handleLogin = () => {
        navigation.navigate('Home');
      }
   
     return (
   
       
       <View style={globalStyles.container}>
         
         <Ionicons name="md-checkmark-circle" size={150} color="green" />
         <Text style = {globalStyles.greeting1}>Account created successfully!</Text>
         <View style={globalStyles.container1}>
         <Button color='green' title="Login" onPress={handleLogin} />
         </View>
         

       </View>
    
     );
   }