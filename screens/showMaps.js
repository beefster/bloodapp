import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView,  Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import  { useState } from 'react';



export default function Maps({navigation}) {
 
   
     return (
   
       
        <View style={globalStyles.mapContainer}>


        <MapView style={globalStyles.mapStyle} />
      </View>
    
     );
   }