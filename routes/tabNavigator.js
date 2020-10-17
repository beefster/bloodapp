import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/loginSearch";
import Success from "../screens/accountcreated";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search}  />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator };