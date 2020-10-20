
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker,  ScrollView,  Modal, FlatList  } from 'react-native';
//import {Picker} from '@react-native-community/picker';
import { MaterialIcons } from '@expo/vector-icons';
import {Card} from 'react-native-paper';
//import Modal from 'modal-react-native-web';
import {SearchStack} from "../routes/homeStack";
//import Results from "../screens/searchResults";


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
  Blood_type: yup.string()
    
    ,


});


export default function Search({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [people, setPeople] = useState([
    { fname: 'Arzak', lname: 'Bajwa', blood: "O+", address:"123 street apt. 7", city: "Anchorage", state: "Alaska", country: "United States of America",  email: "mabajwa2@gmail.com", id: '1' },
    {fname: 'John', lname: 'Doe', blood: "A+", address:"123 street apt. 8", city: "Anchorage", state: "Alaska", country: "United States of America",  email: "jd2@gmail.com", id: '2' }
  ])
  let [data, setData] = useState([]); 
  var temp = [];

  const getData = (item) =>{
    var Address = item.address;
  }
  
  
  //Search submit calls this
  const handleSearch = (values) => {
    fetch('http://localhost:907/api/search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(values)
      }).then((response) =>response.json()).then((result) => {

        if(result.code == '200'){
          var i = 0;
          
          
              
        
          for(; i < result.records.length; i++){
            const person = {
              fname:    result.records[i]['firstName'],
              lname:    result.records[i]['lastName'],
              blood:    result.records[i]['bloodType'],
              address:  result.records[i]['address'],
              city:     result.records[i]['city'],
              state:    result.records[i]['state'],
              country:  result.records[i]['country'],
              email:    result.records[i]['email'],
              id:       result.records[i]['UserID']
            }
            //insert person into state?
            console.log(person.email);
            temp.push(person);
            //setData([...data, {person}]);
            
          }
          setData(temp);
          console.log(data.length);
          console.log(temp);
          navigation.navigate('Results', temp);
           

        } else console.log(result); //server error
      });
  }
  

     return (
   
       
       <View style={globalStyles.container1}>
         
         
         
         
         
         
         
         
         <Text style={globalStyles.searchScreen}>Search for a donor below</Text>
         
         
    
      
      
         
      <Formik
        initialValues={{City: '', State: '', Country: '', 
        Blood_type: '', }}
        validationSchema={validForm}
        onSubmit={(values, actions) => {

          ///actions.resetForm();
          console.log(values);
          handleSearch(values);
          //navigation.navigate('Success');
         
          
         
          

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
          <Picker.Item label="Any" value="" />
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
            
            

        <View style={globalStyles.container2}>
        
        
        
        <FlatList 

        keyExtractor={(item) => item.id} 
        data={temp} 
        renderItem={({ item }) => ( 
          <Card style={globalStyles.cardStyle} onPress = {() => 
          {
            setModalOpen(true);
            getData(item);
          }} >
              <View style={globalStyles.resultsRow}>
                <Text style={globalStyles.resultsRowText}>Name:</Text>
                <Text style={globalStyles.resultsRowText}>{item.fname}</Text>
                
                <Text style={globalStyles.resultsRowText}>{item.lname}</Text>
                <Text style={globalStyles.resultsRowText}>{data.address}</Text>
              </View>
              <View style={globalStyles.resultsRow}>
    
                <Text style={globalStyles.resultsRowText}>Blood Type :</Text>
                <Text style={globalStyles.resultsRowText}>{item.blood}</Text>
              </View>
              
              <Modal modalData = {item} visible={modalOpen} animationType='slide'>
                  <View style={globalStyles.container2}>
                    <MaterialIcons 
                      name='close'
                       size={24} 
                       style={{...globalStyles.modalToggle, ...globalStyles.modalClose}} 
                       onPress={() => setModalOpen(false)} 
                    />

                <View style={globalStyles.container2}>    
               <Card style={globalStyles.cardStyle}  >
                    
                   <Text style={globalStyles.resultsRowText}>Address:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.address}</Text>
             
                   <Text style={globalStyles.resultsRowText}>City:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.city}</Text>

                   <Text style={globalStyles.resultsRowText}>State:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.state}</Text>

                   <Text style={globalStyles.resultsRowText}>Country:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.country}</Text>

                   <Text style={globalStyles.resultsRowText}>Email:</Text>
                   <Text style={globalStyles.resultsRowText}>{item.email}</Text>
                  
                   
             
           
                 </Card>
               
              </View>
              </View>
             
             </Modal>  

          </Card>
          



          
        )}/>

            </View>

            
          </View>
        )}
      </Formik> 
       </View>
       
    
     );
   }