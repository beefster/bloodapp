import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';



export default function Home() {
    
   
     return (
   
       
       <View style={globalStyles.container1}>
         <Text style = {globalStyles.greeting}>Welcome user name!</Text>
         <Ionicons name="md-checkmark-circle" size={80} color="green" />

       </View>
    
     );
   }