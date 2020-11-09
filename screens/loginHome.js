import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';



export default function Home1({navigation}) {
  const handleButton = () => {
     navigation.navigate('Home');
    
     
   }
   
     return (
   
       
       <View style={globalStyles.container1}>
         <Text style = {globalStyles.greeting}>Welcome username!</Text>
         <Button
              onPress={handleButton }
              title="Logout"
              color="#841584"
              
/>
        

       </View>
    
     );
   }