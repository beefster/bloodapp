import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView,TouchableOpacity,FlatList, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import  { useState } from 'react';
import { Card } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

const getRequests = async () => {
  try{
    const token = await SecureStore.getItemAsync('token');
    fetch('http://192.168.1.7:907/api/getRequests', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + token
      }
    }).then((response) => response.json()).then((responsejson) => {
      if (responsejson.code == 200){
        console.log(responsejson.receivedRequests)
        //array of incoming

        console.log(responsejson.sentRequests)
        //array of outgoing

      } else {
        console.log(responsejson);
      }
    }).done()
  } catch(e) {
    console.log(e);
  }
}


export default function Requests({navigation}) {
    

      const [showSent, setSent] = useState(true);
      const [showApproved, setApproved] = useState(false);
      const [showReceived, setReceived] = useState(false);
      const [showAvailable, setAvailable] = useState(false);

      const handleSent = () => {
        if (showSent == false){
            setApproved(false);
            setReceived(false);
            setAvailable(false);
            setSent(true);
            
        }

    }

      const handleApproved = () => {
        if (showApproved == false){
            setSent(false);
            setReceived(false);
            setAvailable(false);
            setApproved(true);

        }
                
      }

      const handleReceived = () => {
        if (showReceived == false){
            setSent(false);
            setApproved(false);
            setAvailable(false);
            setReceived(true);

        }
                
      }

      const handleAvailable = () => {
        if (showAvailable == false){
            setSent(false);
            setApproved(false);
            setReceived(false);
            setAvailable(true);

        }
                
      }


      const [sentRequests, setSentRequests] = useState([
        { uname: 'mabajwa',  blood: "O+", 
         city: "Anchorage", state: "Alaska", country: "United States", id: 1 },
        { uname: 'Troll',  blood: "A+", 
         city: "Anchorage", state: "Alaska", country: "United States", id: 2 }
      ])


      const [approvedRequests, setApprovedRequest] = useState([
        { uname: "arzak.bajwa", fname: 'Arzak', lname: 'Bajwa', blood: "O+", 
        address: "123 street apt. 7", city: "Anchorage", 
        state: "Alaska", country: "United States", email: "mabajwa2@gmail.com", id: '1' },
        { uname: "johnD", fname: 'John', lname: 'Doe', blood: "A+",
         address: "123 Vanguard Dr apt. 8", city: "Anchorage", 
         state: "Alaska", country: "United States", email: "jd2@gmail.com", id: '2' }
      ])

      const [receivedRequests, setReceivedRequests] = useState([
        { uname: 'mabajwa',  blood: "O+", 
         city: "Anchorage", state: "Alaska", country: "United States", id: 1 },
        { uname: 'Troll',  blood: "A+", 
         city: "Anchorage", state: "Alaska", country: "United States", id: 2 }
      ])
   
     return (
   
       
       <View style={globalStyles.container1}>
         <View style={globalStyles.header}>

        </View>
         
         <View style={{flexDirection: 'row'}}>
            <View style={globalStyles.requestsRow}>

         
                    <TouchableOpacity onPress={handleSent}>
                        <Text style = {globalStyles.requestsText} >Sent </Text>
                    </TouchableOpacity>
            </View>

            <View style={globalStyles.requestsRow}>
                    <TouchableOpacity onPress={handleApproved}>
                        <Text style = {globalStyles.requestsText} >Approved </Text>
                     </TouchableOpacity>
            </View>

            <View style={globalStyles.requestsRow}>
                    <TouchableOpacity onPress={handleReceived}>
                        <Text style = {globalStyles.requestsText} >Received </Text>
                     </TouchableOpacity>
            </View>

            <View style={globalStyles.requestsRow}>
                    <TouchableOpacity onPress={handleAvailable}>
                        <Text style = {globalStyles.requestsText} >Available </Text>
                     </TouchableOpacity>
            </View>

            </View>

        {
            showSent ? 
            
            //show sent 

            <View style={globalStyles.container2}>

                <Text style={globalStyles.greeting2}>Total Sent Requests: {sentRequests.length}</Text>

                <FlatList

                keyExtractor={(item) => item.id.toString()}
                data={sentRequests}
                renderItem={({ item }) => (
                <Card style={globalStyles.requestsCard}>
                    <View style={globalStyles.resultsRow}>
                    <Text >Request id: </Text>
                    <Text >{item.id}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>

                    <Text >Sent to: </Text>
                    <Text >{item.uname}</Text>
                    <Text style={globalStyles.sentRequestsText}>Requested Blood: </Text>
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
            
                    </Card>
                  )} />

            </View>
            // end sent requests
                
                
            : null

            
            

        }

        {
            showApproved ? 
            //show approved requests 

            <View style={globalStyles.container2}>

                <Text style={globalStyles.greeting2}>Total Approved Requests: {sentRequests.length}</Text>

                <FlatList

                keyExtractor={(item) => item.id.toString()}
                data={approvedRequests}
                renderItem={({ item }) => (
                <Card style={globalStyles.requestsCard}>
                    <View style={globalStyles.resultsRow}>
                    <Text >Request id: </Text>
                    <Text >{item.id}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>

                    <Text >For: </Text>
                    <Text >{item.uname}</Text>
                   
                      
                    <Text style={globalStyles.sentRequestsText}>Requested Blood: </Text>
                    <Text >{item.blood}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>
                    
                    <Text >City: </Text>
                    <Text >{item.city}</Text>
            
                    
                    
                    <Text >State: </Text>
                    <Text >{item.state}</Text>   
                    <Text style={globalStyles.sentRequestsText}>Country: </Text>
                    <Text >{item.country}</Text>
                    </View>
                    
            
                    </Card>
                  )} />

            </View>
            // end approved requests
            : null
        }



        {
            showReceived ? 
            
            //show received 

            <View style={globalStyles.container2}>

                <Text style={globalStyles.greeting2}>Total Received Requests: {receivedRequests.length}</Text>

                <FlatList

                keyExtractor={(item) => item.id.toString()}
                data={receivedRequests}
                renderItem={({ item }) => (
                <Card style={globalStyles.requestsCard}>
                    <View style={globalStyles.resultsRow}>
                    <Text >Request id: </Text>
                    <Text >{item.id}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>

                    <Text >From: </Text>
                    <Text >{item.uname}</Text>
                    <Text style={globalStyles.sentRequestsText}>Requested Blood: </Text>
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

                    <Button onPress={()=>{ Alert.alert('Request Approved' , 'For: '.concat(item.uname).concat("\nBlood Requested: ").concat(item.blood));} } title="Approve Request" />
            
                    </Card>
                  )} />

            </View>
            // end received requests
                
                
            : null

            
            

        }


{
            showAvailable ? 
            //show available donors 

            <View style={globalStyles.container2}>

                <Text style={globalStyles.greeting2}>Total Available Donors: {sentRequests.length}</Text>

                <FlatList

                keyExtractor={(item) => item.id.toString()}
                data={approvedRequests}
                renderItem={({ item }) => (
                <Card style={globalStyles.requestsCard}>
                    <View style={globalStyles.resultsRow}>
                    <Text >Request id: </Text>
                    <Text >{item.id}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>

                    <Text >Username: </Text>
                    <Text >{item.uname}</Text>
                    <Text >    Email: </Text>
                    <Text >{item.email}</Text>
                    
                    </View>
                    <View style={globalStyles.resultsRow}>
                    <Text >Name: </Text>
                    <Text >{item.fname }</Text>
                    <Text > {item.lname }</Text>   
                    <Text style={globalStyles.sentRequestsText}>Blood Type: </Text>
                    <Text >{item.blood}</Text>
                    </View>



                    <View style={globalStyles.resultsRow}>
                    <Text >Address: </Text>
                    <Text >{item.address}</Text>
                    <Text style={globalStyles.sentRequestsText}>City: </Text>
                    <Text >{item.city}</Text>
            
                    
                    </View>
                    <View style={globalStyles.resultsRow}>
                    <Text >State: </Text>
                    <Text >{item.state}</Text>   
                    <Text style={globalStyles.sentRequestsText}>Country: </Text>
                    <Text >{item.country}</Text>
                    </View>
                    <Button onPress={()=>{ navigation.navigate('Maps', { data1: item });} } title="Map" />
            
                    </Card>
                  )} />

            </View>
            // end available donors
            : null
        }
        
         
         
         

       </View>
    
     );
   }