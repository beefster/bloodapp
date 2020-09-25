import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';


const validForm = yup.object({
  First_name: yup.string()
    .required()
    ,
    
  Last_name: yup.string()
    .required()
    ,

  Address: yup.string()
    .required()
    ,
  City: yup.string()
    .required()
    ,
  State: yup.string()
    .required()
    ,        
  Zip_code: yup.string()
    .required().min(5)
    .test('is-num', 'Zip code must be an integer', (val) => {
      return parseInt(val);
    }),

  Country: yup.string()
    .required()
    ,
  Blood_type: yup.string()
    
    ,
  User_name: yup.string()
    .required()
    ,
  Email: yup.string()
    .required()
    .email(),
  Password: yup.string()
    .required()
    .min(8),
  Confirm_password: yup.string()
    .required()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')

});



export default function Signup() {
 // const [blood, setBlood] = useState('');

  return (

    <ScrollView>
    <View style={globalStyles.container1}>
      <Formik
        initialValues={{ First_name: '', Last_name: '', Address: '', City: '', State: '', Zip_code: '', Country: '', 
        Blood_type: '', User_name: '', Email: '', Password:'', Confirm_password: ''  }}
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
              onChangeText={props.handleChange('First_name')}
              onBlur={props.handleBlur('First_name')} 
              value={props.values.First_name}
              
            />
            
            <TextInput
              style={globalStyles.nameRow}
              placeholder='Last Name'
              onChangeText={props.handleChange('Last_name')}
              value={props.values.Last_name}
              onBlur={props.handleBlur('Last_name')} 
            />
            </View>
            <View style={{flexDirection: "row"}}>
            <Text style={globalStyles.errorRow}>{props.touched.First_name && props.errors.First_name}</Text>
            <Text style={globalStyles.errorRow}>{props.touched.Last_name && props.errors.Last_name}</Text>
            </View>
           
            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Address'
              onChangeText={props.handleChange('Address')}
              value={props.values.Address}
              onBlur={props.handleBlur('Address')} 
              
            />
            <Text style={globalStyles.errorRow}>{props.touched.Address && props.errors.Address}</Text>

            <View style={{flexDirection: "row"}}>

            
              <TextInput
              style={globalStyles.nameRow}
              placeholder='City'
              onChangeText={props.handleChange('City')}
              value={props.values.City}
              onBlur={props.handleBlur('City')} 
              />

              <TextInput
                style={globalStyles.nameRow}
                placeholder='State'
                onChangeText={props.handleChange('State')}
                value={props.values.State}
                onBlur={props.handleBlur('State')} 
              />
            </View>

            
            <View style={{flexDirection: "row"}}>
            <Text style={globalStyles.errorRow}>{props.touched.City && props.errors.City}</Text>
            <Text style={globalStyles.errorRow}>{props.touched.State && props.errors.State}</Text>
            </View>

            <View style={{flexDirection: "row"}}>

            
              <TextInput
              style={globalStyles.nameRow}
              placeholder='Zip Code'
              onChangeText={props.handleChange('Zip_code')}
              value={props.values.Zip_code}
              onBlur={props.handleBlur('Zip_code')} 
              />

              <TextInput
                style={globalStyles.nameRow}
                
                placeholder='Country'
                onChangeText={props.handleChange('Country')}
                value={props.values.Country}
                onBlur={props.handleBlur('Country')} 
              />
            </View>

            
            <View style={{flexDirection: "row"}}>
            <Text style={globalStyles.errorRow}>{props.touched.Zip_code && props.errors.Zip_code}</Text>
            <Text style={globalStyles.errorRow}>{props.touched.Country && props.errors.Country}</Text>
            </View>

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
        <Text style={globalStyles.errorRow}>{props.touched.Blood_type && props.errors.Blood_type}</Text>

            <TextInput 
              style={globalStyles.signupinput}
              placeholder='User Name'
              onChangeText={props.handleChange('User_name')}
              value={props.values.User_name}
              onBlur={props.handleBlur('User_name')} 
              
            />

            <Text style={globalStyles.errorRow}>{props.touched.User_name && props.errors.User_name}</Text>

            <TextInput 
              style={globalStyles.signupinput}
              placeholder='Email'
              onChangeText={props.handleChange('Email')}
              value={props.values.Email}
              onBlur={props.handleBlur('Email')} 
              
            />
             <Text style={globalStyles.errorRow}>{props.touched.Email && props.errors.Email}</Text>
            <TextInput 
              style={globalStyles.signupinput}
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={props.handleChange('Password')}
              value={props.values.Password}
              onBlur={props.handleBlur('Password')} 
              
            />
             <Text style={globalStyles.errorRow}>{props.touched.Password && props.errors.Password}</Text>
            <TextInput 
              style={globalStyles.signupinput}
              secureTextEntry={true}
              placeholder='Confirm Password'
              onChangeText={props.handleChange('Confirm_password')}
              value={props.values.Confirm_password}
              onBlur={props.handleBlur('Confirm_password')} 
            />

            <Text style={globalStyles.errorRow}>{props.touched.Confirm_password && props.errors.Confirm_password}</Text>
        
           
            <Button color='blue' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik> 
    </View>
    </ScrollView>
  );
}