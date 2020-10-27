import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView,  Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import  { useState } from 'react';
import Geocoder from 'react-native-geocoding';
import { Marker } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions';






export default function Maps({ route, navigation }) {
  var temp1 = [];
  temp1 = route.params.data1;
 
  var donor_address = ''.concat(temp1.address,' ', temp1.city,' ', temp1.state);
  
  
  
  var location;
  var ulocation;


 
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

  const [clat, setCLat] = useState(0.0); // current positon
  const [clng, setCLng] = useState(0.0);

  const [userLocation, setLocation] = useState('');

  Geocoder.init("AIzaSyCu2x3J7rLHLmR1lpzkCyO6UdzkAY6XUXw"); // use a valid API key

 
//Geocoder.from("9641 Vanguard Dr Anchorage, AK")
Geocoder.from(donor_address)
        .then(json => {
             location = json.results[0].geometry.location;
            setLat(location.lat);
            setLng(location.lng);
        })
        .catch(error => console.warn(error));

   // directions
   
   handleGetDirections = () => {
    const data = {
       source: {
        latitude: clat,
        longitude: clng
      },
      destination: {
        latitude: lat,
        longitude: lng
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        
      ]
    }
 
    getDirections(data)
  }


  
       
     return (
   
       
        <View style={globalStyles.mapContainer}>
          <Button onPress={handleGetDirections} title="Get Directions" />
     
        <MapView style={globalStyles.mapStyle}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
           <Marker
            coordinate={{latitude: lat, longitude: lng}}
            title={temp1.fname + " " + temp1.lname}
            description={"Blood Type: " + temp1.blood }
          />
            

      </MapView>

       
      </View>
    
     );
   }