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
  
  },
  title: "as", 
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerLeft: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Search" component={Search}  options = {{
        title: "",
        headerLeft: false,
        headerShown: false
      }}/>
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator };