import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  { EasingNode } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './loginHome';
import Search from './loginSearch';
import SearchStack from '../routes/searchStack';
import { MainStackNavigator } from "../routes/tabNavigator";

const Tab = createBottomTabNavigator();



export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
         />
        <Tab.Screen name="Search" component={MainStackNavigator} 
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" size={size} color={color} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}