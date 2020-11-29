import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Stats from "../screens/loginStats";
import StatsResults from "../screens/statsResults";


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

const StatsStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Stats" component={Stats} options = {{
        title: "",
        headerLeft: false,
        headerShown: false
      }} />
      <Stack.Screen name="Results" component={StatsResults} />

    </Stack.Navigator>
  );
}



export { StatsStackNavigator };