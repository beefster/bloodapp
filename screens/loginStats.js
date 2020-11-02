
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, Modal, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
//import { SearchStack } from "../routes/homeStack";
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

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
});


export default function Stats({ navigation }) {
  

  //Search submit calls this
  const handleSearch = (values) => {
    
    navigation.navigate('Results');
  }


  return (


    <View style={globalStyles.container1}>








      <Text style={globalStyles.searchScreen}>Search for donor statistics</Text>






      <Formik
        initialValues={{
          City: '', State: '', Country: '',
        }}
        validationSchema={validForm}
        onSubmit={(values, actions) => {

          ///actions.resetForm();
          console.log(values);
          handleSearch(values);
          




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
            <Button color='blue' title="Search" onPress={props.handleSubmit} />
            





          </View>
        )}
      </Formik>
    </View>


  );
}