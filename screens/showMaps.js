import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView,  Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import  { useState } from 'react';
import Geocoder from 'react-native-geocoding';
import { Marker } from 'react-native-maps';
//import Geolocation from '@react-native-community/geolocation';





export default function Maps({navigation}) {
  var location;
 
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

  const [clat, setCLat] = useState(0.0); // current positon
  const [clng, setCLng] = useState(0.0);

  Geocoder.init("AIzaSyCu2x3J7rLHLmR1lpzkCyO6UdzkAY6XUXw"); // use a valid API key

 
Geocoder.from("9641 Vanguard Dr Anchorage, AK")
        .then(json => {
             location = json.results[0].geometry.location;
            setLat(location.lat);
            setLng(location.lng);
        })
        .catch(error => console.warn(error));
       
     return (
   
       
        <View style={globalStyles.mapContainer}>
          
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
            title={"Blood Donor"}
            description={"Blood donor's address"}
          />
            

      </MapView>

       
      </View>
    
     );
   }