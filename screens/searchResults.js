import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { NavigationEvents } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';



export default function Results({ route, navigation }) {

  var temp1 = [];
  temp1 = route.params.data1;
  //console.log(temp1)

  const handleRequest = async (id) => {
    try{
      const token = await SecureStore.getItemAsync('token');
      console.log(id)
      fetch('http://192.168.1.7:907/api/createRequest', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + token
        },
        body:JSON.stringify({
          'Recipient':id
        })
      }).then((response) => response.json()).then((responsejson) => {
        if (responsejson.code == 200){
          Alert.alert('Success', 'Request Sent');
        } else {
          console.log(responsejson);
        }
      }).done()
    } catch(e) {
      console.log(e);
    }
  }

  return (

    <View style={globalStyles.container2}>

      <FlatList

        keyExtractor={(item) => item.id.toString()}
        data={temp1}
        renderItem={({ item }) => (
          <Card style={globalStyles.requestsCard}  >
            <View style={globalStyles.resultsRow}>
              <Text >Username: </Text>
              <Text >{item.fname}</Text>

              <Text style={globalStyles.sentRequestsText}>Blood Type :</Text>
              <Text >{item.blood}</Text>
            </View>

            
            {/* <View style={globalStyles.resultsRow}>
              <Text >City: </Text>
              <Text >{item.city}</Text>
            
              <Text style={globalStyles.sentRequestsText}>State: </Text>
              <Text >{item.state}</Text>
            </View>
            <View style={globalStyles.resultsRow}>
              <Text >Country: </Text>
              <Text >{item.country}</Text>
            </View> */}
            <Button onPress={() => {handleRequest(item.id)}}
              title="Send Request" />
          </Card>
        )} />

    </View>





  );
}