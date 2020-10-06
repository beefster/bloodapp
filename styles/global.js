// global styles for our app
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      
    },
    container1: {
      flex: 1,
      padding: 10,
      marginTop: 5,
      
    },
    container2: {
      flex: 1,
      padding: 10,
      marginTop: 5,
      
    },
    container3: {
      flex: 1,
      padding: 10,
      marginTop: 5,
      width: "80%"
      
    },
    greeting: {
      fontSize: 40,
      color: 'green',
      //top: '20%',
      
    },
    greeting1: {
      fontSize: 25,
      color: 'green',
      padding: 10,
      
    },
    searchScreen: {
      fontSize: 18,
      color: 'green',
      padding: 10,
      marginTop: 5,
      
      
    },
  
    input:{
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#777',
      padding:8,
      margin: 10,
      width: '80%',
      //top: '-30%',
    },
  
    login:{
      width: '80%',
      fontSize: 30,
      backgroundColor: 'green',
      marginTop:20,
      marginBottom: 10,
      padding: 8,
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
      padding: 8,
      alignItems:"center",
      justifyContent:"center",
    },
    signupinput: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 5,
      fontSize: 18,
      borderRadius: 6,
      marginBottom: 7,

    },
    nameRow: {
      borderWidth: 1,
      width: '48%',
      borderColor: '#ddd',
      padding: 5,
      fontSize: 16,
      borderRadius: 6,
      marginBottom: 7,
      marginRight: 12,

    },
    error: {
      color: 'red',
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 5,
    },
    errorRow: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 11,
      width: "52%"
    },
    

    
    
  });
  