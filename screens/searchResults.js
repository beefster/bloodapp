import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView , FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import {Card} from 'react-native-paper';



export default function Results({route,navigation}) {
    
      var temp1 = [];
      temp1 = route.params.data1;
      //console.log(temp1)
   
     return (
   
       
       
         
         <View style={globalStyles.container2}>
        
        
        
        <FlatList 

        keyExtractor={(item) => item.id} 
        data={temp1} 
        renderItem={({ item }) => ( 
          <Card style={globalStyles.cardStyle} onPress = {() => 
          {
            
            //getData(item);
          }} >
              <View style={globalStyles.resultsRow}>
                <Text style={globalStyles.resultsRowText}>Name:</Text>
                <Text style={globalStyles.resultsRowText}>{item.fname}</Text>
                
                <Text style={globalStyles.resultsRowText}>{item.lname}</Text>
               
              </View>
              <View style={globalStyles.resultsRow}>
    
                <Text style={globalStyles.resultsRowText}>Blood Type :</Text>
                <Text style={globalStyles.resultsRowText}>{item.blood}</Text>
              </View>
              
              
                  
    
              <View style={globalStyles.resultsRow}>
                   <Text style={globalStyles.resultsRowText}>Address:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.address}</Text>
              </View>
              <View style={globalStyles.resultsRow}>
                   <Text style={globalStyles.resultsRowText}>City:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.city}</Text>
              </View>
              <View style={globalStyles.resultsRow}>
                   <Text style={globalStyles.resultsRowText}>State:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.state}</Text>
              </View>
              <View style={globalStyles.resultsRow}>
                   <Text style={globalStyles.resultsRowText}>Country:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.country}</Text>
                </View>
              <View style={globalStyles.resultsRow}>
                   <Text style={globalStyles.resultsRowText}>Email:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.email}</Text>
                   </View>
              
                   
             
           
                 
               
              
             
             

          </Card>
          



          
        )}/>

            </View>

         
        
         
    
     );
   }