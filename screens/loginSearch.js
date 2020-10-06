import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker,  ScrollView } from 'react-native';
//import {Picker} from '@react-native-community/picker';



import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';

const validForm = yup.object({
 
  
  City: yup.string()
    .required()
    ,
  State: yup.string()
    .required()
    ,        

  Country: yup.string()
    .required()
    ,
  Blood_type: yup.string()
    
    ,


});


export default function Search() {
    
   
     return (
   
       
       <View style={globalStyles.container1}>
         
         <Text style={globalStyles.searchScreen}>Search for a donor below</Text>
         
         
    
      
      
         
      <Formik
        initialValues={{ Blood_type: '', City: '', State: '', Country: '', 
        Blood_type: '', }}
        validationSchema={validForm}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {props => (
          <View style={globalStyles.container2}>
            
              <TextInput
              style={globalStyles.signupinput}
              placeholder='City'
              onChangeText={props.handleChange('City')}
              value={props.values.City}
              onBlur={props.handleBlur('City')} 
              />
              <Text style={globalStyles.errorRow}>{props.touched.City && props.errors.City}</Text>

              <TextInput
                style={globalStyles.signupinput}
                placeholder='State'
                onChangeText={props.handleChange('State')}
                value={props.values.State}
                onBlur={props.handleBlur('State')} 
              />
            
            <Text style={globalStyles.errorRow}>{props.touched.State && props.errors.State}</Text>
        

              <TextInput
                style={globalStyles.signupinput}
                
                placeholder='Country'
                onChangeText={props.handleChange('Country')}
                value={props.values.Country}
                onBlur={props.handleBlur('Country')} 
              />
            
            <Text style={globalStyles.errorRow}>{props.touched.Country && props.errors.Country}</Text>
      

            <Text>Blood Type</Text>
        <Picker
          selectedValue={props.values.Blood_type}
          style={{ height: 50,   padding: 10}}
          //onValueChange={(bvalue) => setBlood(bvalue)}
          onValueChange={props.handleChange('Blood_type')}
          value = {props.values.Blood_type}
          onBlur={props.handleBlur('Blood_type')} 
          >
          <Picker.Item label="A positive" value="A+" />
          <Picker.Item label="A negative" value="A-" />
          <Picker.Item label="B positive" value="B+" />
          <Picker.Item label="B negative" value="B-" />
          <Picker.Item label="O positive" value="O+" />
          <Picker.Item label="O negative" value="O-" />
          <Picker.Item label="AB positive" value="AB+" />
          <Picker.Item label="AB negative" value="AB-" />
          
        </Picker>
        
           
            <Button color='blue' title="Search" onPress={props.handleSubmit} />
            
          </View>
        )}
      </Formik> 
       </View>
    
     );
   }