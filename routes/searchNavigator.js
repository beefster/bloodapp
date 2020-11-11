import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/loginSearch";
import Success from "../screens/accountcreated";
import Results from "../screens/searchResults";
import Maps from "../screens/showMaps";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
   // backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search}  />
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator };