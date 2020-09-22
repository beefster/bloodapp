import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  return (
    <View style={styles.container}>
      
      
      <Text style = {styles.greeting}>Welcome!</Text>
      <TextInput
        style = {styles.input}
        placeholder = "Email..."
        onChangeText = {(val) => setEmail(val) } />
      <TextInput
        style = {styles.input}
        secureTextEntry={true}
        placeholder = "Password..."
        onChangeText = {(val) => setPass(val) } />   
      <TouchableOpacity>
          <Text >Forgot Password?</Text>
      </TouchableOpacity>
      <View style = {styles.login}>
      <TouchableOpacity>
          <Text style = {styles.logintext}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.registerview}>
      <TouchableOpacity>
          <Text style = {styles.registertext}>SIGNUP </Text>
      </TouchableOpacity>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  greeting: {
    fontSize: 40,
    color: 'green',
    position: 'absolute',
    top: '20%',
    
  },

  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width: '80%',
    top: '-5%',
  },

  login:{
    width: '80%',
    fontSize: 30,
    backgroundColor: 'green',
    marginTop:20,
    marginBottom: 10,
    padding: 10,
    alignItems:"center",
    justifyContent:"center",
  },

  logintext: {
    color: 'white'
  },
  registertext: {
    color: 'white'
  },
  registerview:{
    width: '80%',
    fontSize: 30,
    backgroundColor: 'blue',
    marginTop:0,
    marginBottom: 0,
    padding: 10,
    alignItems:"center",
    justifyContent:"center",
  },
  
});
