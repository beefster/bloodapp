import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Requests from "../screens/requests";
import Maps from "../screens/showMaps";

const Stack = createStackNavigator();



const RequestsStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Requests" component={Requests}  />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}



export { RequestsStackNavigator };