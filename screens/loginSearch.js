import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';



export default function Search() {
    
   
     return (
   
       
       <View style={globalStyles.container1}>
         <Text style = {globalStyles.greeting}>Search!</Text>
       </View>
    
     );
   }