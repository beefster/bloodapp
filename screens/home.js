import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const handleSignup = () => {
        navigation.navigate('Signup');
    }
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
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
        <TouchableOpacity>
            <Text style = {globalStyles.logintext}>LOG IN</Text>
        </TouchableOpacity>
        </View>
        <View style = {globalStyles.registerview}>
        <TouchableOpacity onPress={handleSignup} >
            <Text style = {globalStyles.registertext}>SIGN UP </Text>
        </TouchableOpacity>
        </View>
        
        
        <StatusBar style="auto" />
      </View>
    );
}
