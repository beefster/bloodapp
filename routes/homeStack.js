
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Signup from '../screens/signup'; 
import Login from '../screens/login';
import Success from '../screens/accountcreated';
import Search from '../screens/loginSearch';
import Home1 from '../screens/loginHome';
import App from '../screens/login';
//import BottomTabNavigator, { MainStackNavigator } from "./tabNavigator";
import BottomTabNavigator from "./loginNavigator";



// new code 
const Stack = createStackNavigator();
const FirstStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options = {{
        title: "",
      }}  />
      <Stack.Screen name="Signup" component={Signup}  options = {{
        title: "Sign Up"
      }} />
      <Stack.Screen name="Login" component={BottomTabNavigator} options = {{
        headerLeft: false,
       headerShown: false,
        title: ""
      }} />
      <Stack.Screen name="Success" component={Success} />
      
    </Stack.Navigator>
  );
}

export {FirstStackNavigator};


// new code




/*

const screens = {
  Home: {
    screen: Home,
  },
  Signup: {
    screen: Signup,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerLeft: null
    },
  },
  Success: {
    screen: Success,
  },
  Search: {
    screen: Search,
  },
  Home1: {
    screen: Home1,
  },
  App: {
    screen: App,
  },
};


// home stack navigator screens

const HomeStack = createStackNavigator(screens);


//export default HomeStack;
export default createAppContainer(HomeStack);

*/