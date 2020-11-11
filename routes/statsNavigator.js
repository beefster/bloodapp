import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Stats from "../screens/loginStats";
import StatsResults from "../screens/statsResults";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
   // backgroundColor: "#9AC4F8",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
};

const StatsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Stats" component={Stats}  />
      <Stack.Screen name="Results" component={StatsResults} />

    </Stack.Navigator>
  );
}



export { StatsStackNavigator };