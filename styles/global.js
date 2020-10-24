// global styles for our app
import { StyleSheet, Dimensions } from 'react-native';

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
    resultsRow: {
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      marginLeft: 10,
      
    },
    resultsRowText: {
      padding: 5,
      color:'white'
      
    },

    cardStyle: {
      margin:5,
      backgroundColor: 'green',
      borderRadius: 10
      
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

    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    mapContainer: {
      flex: 1,
      
    },
    

    
    
  });
  