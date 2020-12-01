import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, Picker, ScrollView, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import  { useState } from 'react';
import * as yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input';
import { Feather } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

export default function Home1(props) {

  
    const [userInfo, setInfo] = useState([
      { fname: props.profile.fname,
        lname: props.profile.lname,
        uname: props.profile.uname,
        usertype:props.profile.usertype,
        blood: props.profile.blood,
        address: props.profile.address,
        city: props.profile.city,
        state: props.profile.state,
        country: props.profile.country,
        email: props.profile.email,
        id: props.profile.id
      }
    ])
    const [showProfile, setProfile] = useState(true);
    const [showPassword, setPassword] = useState(false);
    const [edit, setEdit] = useState(false);

    const [newPass, setNewPass] = useState("");
    const [cnewPass, setCNewPass] = useState("");
    const [currentPass, setCurrentPass] = useState("");

    const [newBlood, setNewBlood] = useState(userInfo[0].blood);
    const [newCity, setNewCity] = useState(userInfo[0].city);
    const [newAddress, setNewAddress] = useState(userInfo[0].address);
    const [newState, setNewState] = useState(userInfo[0].state);
    const [newCountry, setNewCountry] = useState(userInfo[0].country);
    const [newUtype, setNewUtype] = useState(userInfo[0].usertype);
    const [loading, setLoading] = useState(false);

    const [input, setInput] = useState("");
    
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
         // setProfile(true);
         Alert.alert('Information Updated' , 'Success!');

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
    const handleUpdate = async () => {

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

      else if (newState == ""){
        Alert.alert('Input Error' , 'State is a required field');
      }
      else if (newCountry == ""){
        Alert.alert('Input Error' , 'Country is a required field');
      }
      else if (newUtype != "donor" &&
      newUtype != "recipient"
    
      ){
        Alert.alert('Input Error' , 'Wrong user type');
      }

      else if ((newPass.length != 0 && newPass.length <8) || newPass != cnewPass ){
        Alert.alert('Input Error' , 'Password/Confirm password  either don\'t match or have length less than 8');
      }

      else if (newBlood == userInfo[0].blood && newAddress == userInfo[0].address && newCity == userInfo[0].city
        && newState == userInfo[0].state && newPass == "" && cnewPass == ""){
            Alert.alert('Change Info' , 'Nothing to change');
      }

      else{
        setLoading(true);
        var updateBody = {}
        var profileChange = {}
        if(newBlood != userInfo[0].blood) profileChange.bloodType = newBlood
        if(newAddress != userInfo[0].address) profileChange.address = newAddress
        if(newCity != userInfo[0].city) profileChange.city = newCity
        if(newState != userInfo[0].state) profileChange.state = newState
        updateBody.profileChange = profileChange

        if(newPass.length > 0){
          updateBody.passChange={
            old: currentPass,
            new: newPass,
          }
        }

        try{
          const token = await SecureStore.getItemAsync('token');
          fetch('http://192.168.1.7:907/api/updateProfile', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + token
            },
            body: JSON.stringify(updateBody)
          }).then((response) => response.json()).then((responsejson) => {
            console.log(responsejson)
            if (responsejson.code == 200){
              Alert.alert("Success!\n"+responsejson.success);
            } else {
              Alert.alert(responsejson.error);
            }
            setLoading(false);
          });
        } catch(e) {
          console.log(e);
        }

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
  }

    return (
      <ScrollView>
       <TouchableWithoutFeedback style = {globalStyles.scrollPad} onPress={() => {
      Keyboard.dismiss();
      
    }}>
     <View style={globalStyles.container1}>
       <View style={globalStyles.header}>

       </View>
      <Text style = {globalStyles.greeting}>Welcome, {props.profile.fname}!</Text>
      <Text></Text>
        
      
      <View style={{flexDirection: "row"}}>
      
      <Text style = {globalStyles.requestsText} >View/Change Your Profile </Text>
      

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
                placeholder = "A+, A-, AB+, AB-, etc."
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
                value={newState}
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
                <Text> User Type</Text>
              <TextInput
                style={globalStyles.profileRow}
                placeholder = "donor or recipient"
                value={newUtype}
                
                onChangeText={(value) =>setNewUtype(value)}
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

              <Text>*If you don't want to change your password, leave all password fields blank  </Text>

              <View style={{flexDirection: "row"}}>
              <View style = {globalStyles.container1}>
                <Text> New password</Text>
              <TextInput
                style={globalStyles.profileRow}
                placeholder = "Must be 8 characters or longer"
                value={newPass}
                secureTextEntry={true}
                onChangeText={(value) =>setNewPass(value)}
                editable = {edit}

              />
              </View>
              </View> 

              <View style = {globalStyles.container1}>
                <Text> Confirm new password</Text>
              <TextInput
                style={globalStyles.profileRow}
                placeholder = "Must match the new password field"
                secureTextEntry={true}
                value={cnewPass}
                onChangeText={(value) =>setCNewPass(value)}
                editable = {edit}

              />
              </View>
              

              

              <View style={{flexDirection: "row"}}>
              <View style = {globalStyles.container1}>
                <Text> Current Password</Text>
              <TextInput
                style={globalStyles.profileRow}
                placeholder = "Current Password"
                value={currentPass}
                secureTextEntry={true}
                onChangeText={(value) =>setCurrentPass(value)}
                editable = {edit}

              />
              </View>

              
              </View>
              <View style = {globalStyles.scrollPad}>
                { 
                  loading ?
           
                  <ActivityIndicator size = "large" color = 'green'/> : null

                }
                <Text></Text>
              <Button onPress={handleUpdate} title="Update"/>

              </View>
              </View>
              // end profile

              : null

          }

     </View>
    </TouchableWithoutFeedback> 
     </ScrollView>
     );
}

