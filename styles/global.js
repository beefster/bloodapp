// global styles for our app
import { StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-navigation-stack';

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

    requestsRow: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 6,
      flexDirection: 'row',
      padding: 0,
      marginLeft: 0,
      marginRight: 0,
      
    },

    

    requestsText: {
      fontSize: 15,
      color: 'black',
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      
    },
    resultsRowText: {
      padding: 5,
      color:'white'
      
    },

    sentRequestsText: {
      
      marginLeft: 30,
      
    },

    cardStyle: {
      margin:5,
      backgroundColor: 'green',
      borderRadius: 10,
      marginBottom: 10
      
    },

    requestsCard: {
      margin:5,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 10
      
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
      fontSize: 20,
      color: 'green',
      padding: 10,
      
    },
    greeting2: {
      fontSize: 18,
      color: 'black',
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
    l1:{
      width: '80%',
      fontSize: 30,
      
      marginTop:10,
      marginBottom: 3,
     // padding: 8,
      
    },
    header:{
      width: '100%',
      height: "5%",
      
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

    profileRow: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 5,
      fontSize: 16,
      borderRadius: 6,
      marginBottom: 7,
      marginRight: 3,

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
    Logo: {
      resizeMode: "contain",
      height: 200,
      width: 200
      
    },

    graphView: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    graphHeader: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
      color: "green"
    },
    scrollPad: {
      paddingBottom: 100
    }

    
    
  });
  