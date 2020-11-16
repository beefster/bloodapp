import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input';

import { Feather } from '@expo/vector-icons';


export default function Home1(props) {

  const [showProfile, setProfile] = useState(false);
  const [showPassword, setPassword] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userInfo, setInfo] = useState([
    { fname: 'Arzak', lname: 'Bajwa', uname: "mabajwa2",blood: "O+", address: "123 street apt. 7", city: "Anchorage", state: "Alaska", country: "United States", email: "mabajwa2@gmail.com", id: '1' },
  ])

  
  const [newPass, setNewPass] = useState("");
  const [cnewPass, setCNewPass] = useState("");

  const [newBlood, setNewBlood] = useState(userInfo[0].blood);
  const [newCity, setNewCity] = useState(userInfo[0].city);
  const [newAddress, setNewAddress] = useState(userInfo[0].address);
  const [newSate, setNewState] = useState(userInfo[0].state);
  const [newCountry, setNewCountry] = useState(userInfo[0].country);

   

 
  


  const [input, setInput] = useState("");
  var userpass = "1234";
  
  const handleButton = () => {
    props.navigation.navigate('Home');
  }

  const handleProfile = () => {
    if (showProfile == false){
        setPassword(true);
        
        
    }

  }


    const checkPass = (input) => {
      if (input == userpass){
        setPassword(false);  
        setProfile(true);
          
      }
    }

    const handleEdit = () => {
      if (edit == false){
          setEdit(true);
      }
      else{
        setEdit(false);
      }
  
    }



    //Update button calls this
  const handleUpdate = () => {

    if (newBlood != "A+" &&
    newBlood != "A-" &&
    newBlood != "B+" &&
    newBlood != "B-" &&
    newBlood != "AB+" &&
    newBlood != "AB-" &&
    newBlood != "O+" &&
    newBlood != "O-"
    
    ){
      Alert.alert('Input Error' , 'Wrong blood type');
    }

    else if (newAddress == ""){
      Alert.alert('Input Error' , 'Address is a required field');
    }

    

    else if (newCity == ""){
      Alert.alert('Input Error' , 'City is a required field');
    }

    else if (newSate == ""){
      Alert.alert('Input Error' , 'State is a required field');
    }
    else if (newCountry == ""){
      Alert.alert('Input Error' , 'Country is a required field');
    }

    else if ((newPass.length != 0 && newPass.length <8) || newPass != cnewPass ){
      Alert.alert('Input Error' , 'Password/Confirm password  either don\'t match or have length less than 8');
    }

    else {
      Alert.alert('Information Updated' , 'Success!');
    
  }
}




  return (
    <ScrollView>
   <View style={globalStyles.container1}>
    <Text style = {globalStyles.greeting}>Welcome, {props.fname}!</Text>
    <View style={{flexDirection: "row"}}>
    <TouchableOpacity onPress={handleProfile}>
                    <Text style = {globalStyles.requestsText} >View/Change Profile </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleButton}>
                    <Text style = {globalStyles.requestsText} >Logout </Text>
    </TouchableOpacity>
    </View>

    <Text> </Text>
    
    
    
    




        <DialogInput isDialogVisible={showPassword}
            title={"View/Change Profile"}
            message={"Enter your password to continue"}
            textInputProps={{secureTextEntry:true}}
            hintInput ={"Your password"}
            submitInput={ (inputText) => {checkPass(inputText)} }
            closeDialog={ () => {setPassword(false)}}>
        </DialogInput>
    {
            showProfile? 
            
            //show profile  

            <View >

            <TouchableOpacity onPress={handleEdit}>
            <View style={{flexDirection: "row"}}>
                    <Text >Edit Information </Text>
                    <Feather name="edit" size={20} color="black" />
                    </View>
            </TouchableOpacity>    
            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> First Name</Text>
            <TextInput
              style={globalStyles.profileRow}
              
              value={userInfo[0].fname}
              editable = {false}
              
            />
            </View>

            <View style = {globalStyles.container1}>
              <Text> Last Name</Text>
            <TextInput
              style={globalStyles.profileRow}
             
              value={userInfo[0].lname}
              editable = {false}
               
            />
            </View>
            </View> 


            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> Username</Text>
            <TextInput
              style={globalStyles.profileRow}
              value={userInfo[0].uname}
              editable = {false}
              
            />
            </View>

            <View style = {globalStyles.container1}>
              <Text> Blood Type</Text>
            <TextInput
              style={globalStyles.profileRow}
              value={newBlood}
              onChangeText={(v) =>setNewBlood(v)}
              editable = {edit}
               
            />
            </View>
            </View> 
            

            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> Address</Text>
            <TextInput
              style={globalStyles.profileRow}
              value={newAddress}
              onChangeText={(v) =>setNewAddress(v)}
              editable = {edit}
              
            />
            </View>

            <View style = {globalStyles.container1}>
              <Text> City</Text>
            <TextInput
              style={globalStyles.profileRow}
              
              value={newCity}
              onChangeText={(v) =>setNewCity(v)}
              editable = {edit}
               
            />
            </View>
            </View> 

            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> State</Text>
            <TextInput
              style={globalStyles.profileRow}
              value={newSate}
              onChangeText={(value) =>setNewState(value)}
              editable = {edit}
              
            />
            </View>

            <View style = {globalStyles.container1}>
              <Text> Country</Text>
            <TextInput
              style={globalStyles.profileRow}
              
              value={newCountry}
              onChangeText={(value) =>setNewCountry(value)}
              editable = {edit}
               
            />
            </View>
            </View> 

            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> Email</Text>
            <TextInput
              style={globalStyles.profileRow}
              value={userInfo[0].email}
              editable = {false}
              
            />
            </View>
            </View> 

            <Text>*If you don't want to change your password, then leave both password fields blank  </Text>

            <View style={{flexDirection: "row"}}>
            <View style = {globalStyles.container1}>
              <Text> New password</Text>
            <TextInput
              style={globalStyles.profileRow}
              placeholder = "New password"
              value={newPass}
              secureTextEntry={true}
              onChangeText={(value) =>setNewPass(value)}
              editable = {edit}
              
            />
            </View>

            <View style = {globalStyles.container1}>
              <Text> Confirm new password</Text>
            <TextInput
              style={globalStyles.profileRow}
              placeholder = "Confirm new password"
              secureTextEntry={true}
              value={cnewPass}
              onChangeText={(value) =>setCNewPass(value)}
              editable = {edit}
               
            />
            </View>
            </View> 
             
            <Button onPress={ handleUpdate} title="Update" />
            </View>
            // end profile
                
                
            : null

            
            

        }
    
    
    

   </View>
   </ScrollView>
   );
   
}