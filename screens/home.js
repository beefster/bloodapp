import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image, ScrollView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

import * as SecureStore from 'expo-secure-store';

export default function Home({navigation}) {

    const handleSignup = () => {
      navigation.navigate('Signup');
    }

    const handleLogin = () => {
      fetch('http://192.168.1.7:907/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'email':email,
          'password':pass
        })
      }).then((response) => response.json()).then((responsejson) => {
        if (responsejson.code == 200){
          try{
            SecureStore.setItemAsync('token', responsejson.token)
            navigation.navigate('Login', { profile: responsejson.profile });
          }catch(e){
            console.log(e)
          }
        } else {
          console.log(responsejson);
          Alert.alert('Login Error' , 'Invalid Email or Password');
        }
      });
    }

    // const getProfile = async () => {
    //   try{
    //     const token = await SecureStore.getItemAsync('token');
    //     const response = await fetch('http://192.168.1.7:907/api/getProfile', {
    //       method: 'GET',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type':'application/json',
    //         'Authorization':'Bearer ' + token
    //       }
    //     })
    //     const responsejson = await response.json();
    //     if (responsejson.code == 200){
    //       return responsejson.record
    //     } else {
    //       console.log('error getting profile')
    //     }
    //   } catch(e) {
    //     console.log(e);
    //   }
    // }

    const handleListTest = () => {
      fetch('http://192.168.1.7:907/api/list', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
      }).then((response) =>response.json()).then((responsejson) => {
        console.log(responsejson.records);
      })
    }
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(true);

    const handlePass = () =>{
      if (showPass == false){
        setShowPass(true);
      } 
      else{
        setShowPass(false);
      }
    }
    return (
        
      
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      
    }}>
      
        <View style={globalStyles.container}>
         
            <Image
             style={globalStyles.Logo}
              source={require('../assets/blood-app-icon.png')}
            />
            <Text style = {globalStyles.greeting}>Welcome</Text>
            <Text></Text>
          
          <TextInput
            style = {globalStyles.input}
            placeholder = "Email..."
            onChangeText = {(val) => setEmail(val) } />
             <TextInput
              style = {globalStyles.input}
              secureTextEntry={showPass}
              placeholder = "Password..."
              onChangeText = {(val) => setPass(val) } />   
            
            <View>
            <TouchableOpacity onPress={handlePass}>
              <Text >Show/Hide Password</Text>
            </TouchableOpacity>
            </View>
            
            <View style = {globalStyles.l1}>
            <Button color='green' onPress={ handleLogin} title="LOG IN" />
            </View >

            <View style = {globalStyles.l1}>
            <Button  onPress={handleSignup} title="SIGN UP" />
            </View >
              

        <StatusBar style="auto" />
        
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
      
    );
}
