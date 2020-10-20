import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const handleSignup = () => {
      navigation.navigate('Signup');
    }

    const handleLogin = () => {
      fetch('http://localhost:907/api/login', {
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
          navigation.navigate('Home1');
        } else {
          console.log(responsejson)
        }
      });
    }

    const handleListTest = () => {
      fetch('http://localhost:907/api/list', {
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
    return (
        <View style={globalStyles.container}>
          
            <Text style = {globalStyles.greeting}>Welcome!</Text>
          
          <TextInput
            style = {globalStyles.input}
            placeholder = "Email..."
            onChangeText = {(val) => setEmail(val) } />
             <TextInput
              style = {globalStyles.input}
              secureTextEntry={true}
              placeholder = "Password..."
              onChangeText = {(val) => setPass(val) } />   
            
            
            <TouchableOpacity>
              <Text >Forgot Password?</Text>
            </TouchableOpacity>
            <View style = {globalStyles.login}>
              <TouchableOpacity onPress={handleLogin}>
              <Text style = {globalStyles.logintext}>LOG IN</Text>
              </TouchableOpacity>
            </View>
            <View style = {globalStyles.registerview}>
              <TouchableOpacity onPress={handleSignup} >
              <Text style = {globalStyles.registertext}>SIGN UP </Text>
              </TouchableOpacity>
            </View>

              {/* List test */}
              
            <br /><br /><View style = {globalStyles.registerview}>
              <TouchableOpacity onPress={handleListTest} >
              <Text style = {globalStyles.registertext}>SEARCH TEST</Text>
              </TouchableOpacity>
            </View>

        <StatusBar style="auto" />
      </View>
    );
}
