import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';


const validForm = yup.object({
  fname: yup.string()
    .required()
    .min(30),
    
  lname: yup.string()
    .required()
    .min(25),
  lname: yup.string()
    .required()
    .min(25),

  addr: yup.string()
    .required()
    .min(5),
  city: yup.string()
    .required()
    .min(3),
  state: yup.string()
    .required()
    .min(2),        
  zcode: yup.string()
    .required()
    .test('is-num', 'Zip code must be an integer', (val) => {
      return parseInt(val);
    }),

  country: yup.string()
    .required()
    .min(4),
  btype: yup.string()
    .required()
    .min(5),
  uname: yup.string()
    .required()
    .min(5),
  email: yup.string()
    .required()
    .email(),
  pass: yup.string()
    .required()
    .min(8),                
});


export default function Signup() {
  const [blood, setBlood] = useState('');

  return (

    
    <View style={globalStyles.container1}>
      <Formik
        initialValues={{ fname: '', lname: '', addr: '', city: '', state: '', zcode: '', country: '', 
        btype: '', uname: '', email: '', pass:''  }}
        validationSchema={validForm}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {props => (
          <View >
            
            <View style={{flexDirection: "row"}}>

            
            <TextInput
              style={globalStyles.nameRow}
              placeholder='First Name'
              onChangeText={props.handleChange('fname')}
              value={props.values.fname}
            />
            <Text style={globalStyles.error}>{props.touched.fname && props.errors.fname}</Text>
            <TextInput
              style={globalStyles.nameRow}
              multiline
              placeholder='Last Name'
              onChangeText={props.handleChange('lname')}
              value={props.values.lname}
            />
            </View>
            
            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Address'
              onChangeText={props.handleChange('addr')}
              value={props.values.addr}
              
            />

            <View style={{flexDirection: "row"}}>

            
              <TextInput
              style={globalStyles.nameRow}
              placeholder='City'
              onChangeText={props.handleChange('city')}
              value={props.values.city}
              />

              <TextInput
                style={globalStyles.nameRow}
                multiline
                placeholder='State'
                onChangeText={props.handleChange('state')}
                value={props.values.state}
              />
            </View>

            <View style={{flexDirection: "row"}}>

            
              <TextInput
              style={globalStyles.nameRow}
              placeholder='Zip Code'
              onChangeText={props.handleChange('zcode')}
              value={props.values.zcode}
              />

              <TextInput
                style={globalStyles.nameRow}
                multiline
                placeholder='Country'
                onChangeText={props.handleChange('country')}
                value={props.values.country}
              />
            </View>

            <Text>Blood Type</Text>
        <Picker
          selectedValue={blood}
          style={{ height: 50,   padding: 10}}
          //onValueChange={(bvalue) => setBlood(bvalue)}
          onValueChange={props.handleChange('btype')}
          value = {props.values.btype}
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

            <TextInput 
              style={globalStyles.signupinput}
              placeholder='User Name'
              onChangeText={props.handleChange('uname')}
              value={props.values.uname}
              
            />


            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              
            />

            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Password'
              onChangeText={props.handleChange('pass')}
              value={props.values.pass}
              
            />

            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Confirm Password'
              onChangeText={props.handleChange('pass')}
              value={props.values.pass}
            />
        
        
           
            <Button color='blue' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik> 
    </View>
  );
}