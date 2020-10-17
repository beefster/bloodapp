
import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Signup from '../screens/signup'; 
import Login from '../screens/login';
import Success from '../screens/accountcreated';
import Search from '../screens/loginSearch';
import Home1 from '../screens/loginHome';
import App from '../screens/login';
import BottomTabNavigator from "./tabNavigator";




const screens = {
    Search: {
      screen: Search,
    },
    Success: {
      screen: Success,
    },
    
   
  };

  const SearchStack = createStackNavigator(screens);

  export default SearchStack;