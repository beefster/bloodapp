
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, Modal, FlatList, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
//import { SearchStack } from "../routes/homeStack";
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as yup from 'yup';

const validForm = yup.object({


  City: yup.string()
  ,
  State: yup.string()
    
  ,

  Country: yup.string()
  ,
});


export default function Stats({ navigation }) {
  const [csc, setCSC] = useState(false); // city, state and country
  const [sc, setSC] = useState(false);  // state and country
  const [c, setC] = useState(false);    //country
  const [pick, setPick] = useState("");
  const [loading, setLoading] = useState(false);
  const data = [
    {
      label: "City, State & Country"
     },
     {
      label: "State & Country"
     },
     {
      label: "Country"
     },

    ];
    
    function setInput (str){
      switch (str){
        case "City, State & Country":
          setSC(false);
          setC(false);
          setCSC(true);
          break;
        case "State & Country":
          setCSC(false);
          setC(false);
          setSC(true);
          break;
        case "Country":
          setCSC(false);
          setSC(false);
          setC(true);
          break; 
        default: 
          setCSC(false);
          setSC(false);
          setC(false);
          break;       

      }

    }

    








  //Search submit calls this
  const handleSearch = (values) => {

    if (csc == true && values.City == ""){
      Alert.alert('Input Error' , 'City is a required field');
    }

    else if (csc == true && values.State == ""){
      Alert.alert('Input Error' , 'State is a required field');
    }

    else if (csc == true && values.Country == ""){
      Alert.alert('Input Error' , 'Country is a required field');
    }

    else if (sc == true && values.State == ""){
      Alert.alert('Input Error' , 'State is a required field');
    }

    else if (sc == true && values.Country == ""){
      Alert.alert('Input Error' , 'Country is a required field');
    }

    else if (c == true && values.Country == ""){
      Alert.alert('Input Error' , 'Country is a required field');
    }

    else {
      setLoading(true);
    fetch('http://192.168.1.7:907/api/stats', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((response) => response.json()).then((result) => {
      setLoading(false);
      navigation.navigate('Results', result.stats);

    })
  }
}


  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      
    }}>
    <View style={globalStyles.container1}>
    <View style={globalStyles.header}>

    </View>







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

        <RadioButtonRN
         data={data}
          selectedBtn={(e) => {

          setInput(e.label);
          props.values.City = "";
          props.values.State = ""; 
          props.values.Country = "";

         
        }}
        box = {false}
        circleSize = {14}
        activeColor = "green"
        icon={
          <Icon
          name="check-circle"
          size={20}
          color="green"
        />}
      />
          <Text></Text>



          { csc  ?
            <View >  
            <TextInput
              style={globalStyles.signupinput}
              placeholder='City'
              onChangeText={props.handleChange('City')}
              value={props.values.City}
              onBlur={props.handleBlur('City')}
            />
            <Text style={globalStyles.errorRow}>{props.touched.City && props.errors.City}</Text>
            </View>
            : null 
            }
            
          { sc || csc ?
            <View>
            <TextInput
              style={globalStyles.signupinput}
              placeholder='State'
              onChangeText={props.handleChange('State')}
              value={props.values.State}
              onBlur={props.handleBlur('State')}
            />
            <Text style={globalStyles.errorRow}>{props.touched.State && props.errors.State}</Text>
            </View>
            : null
          }

            

            { c || csc || sc ?
            <View>
            <TextInput
              style={globalStyles.signupinput}

              placeholder='Country'
              onChangeText={props.handleChange('Country')}
              value={props.values.Country}
              onBlur={props.handleBlur('Country')}
            /> 
            <Text style={globalStyles.errorRow}>{props.touched.Country && props.errors.Country}</Text>
            </View>
            
            : null
              }

          
          { 
            loading ?
           
            <ActivityIndicator size = "large" color = 'green'/> : null

          }
          <Text></Text>

            
            <Button color='blue' title="Search" onPress={props.handleSubmit} />
            





          </View>
        )}
      </Formik>
    </View>
   </TouchableWithoutFeedback> 

  );
}