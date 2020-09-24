// global styles for our app
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
    
  });
  