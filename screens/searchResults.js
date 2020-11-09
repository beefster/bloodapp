import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { NavigationEvents } from 'react-navigation';



export default function Results({ route, navigation }) {

  var temp1 = [];
  temp1 = route.params.data1;
  //console.log(temp1)

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

            
            <View style={globalStyles.resultsRow}>
              <Text >City: </Text>
              <Text >{item.city}</Text>
            
              <Text style={globalStyles.sentRequestsText}>State: </Text>
              <Text >{item.state}</Text>
            </View>
            <View style={globalStyles.resultsRow}>
              <Text >Country: </Text>
              <Text >{item.country}</Text>
            </View>
            <Button onPress={()=>{ Alert.alert('Request Sent' , 'To: '.concat(item.fname).concat("\nBlood Requested: ").concat(item.blood));} } title="Send Request" />
          </Card>
        )} />

    </View>





  );
}