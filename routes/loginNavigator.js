import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  { EasingNode } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/loginHome';
import Search from '../screens/loginSearch';
import { MainStackNavigator } from "./searchNavigator";
import Stats from '../screens/loginStats';
import { StatsStackNavigator } from "./statsNavigator";
import { RequestsStackNavigator } from "./requestsNavigator";
import { Fontisto } from '@expo/vector-icons';
import Requests from '../screens/requests';
import * as SecureStore from 'expo-secure-store';

const Tab = createBottomTabNavigator();



export default function BottomTabNavigator({route, navigation}) {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Login" children={() => <Home navigation={navigation} profile={route.params.profile}/>} options={{
          title: "as",
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}
}/>
        <Tab.Screen name="Search" component={MainStackNavigator} 
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" size={size} color={color} />
            ),
          }} />

        <Tab.Screen name="Stats" component={StatsStackNavigator} 
        options={{
            tabBarLabel: 'Stats',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-stats" size={size} color={color} />
            ),
          }} />

          <Tab.Screen name="Requests" component={RequestsStackNavigator} 
        options={{
            tabBarLabel: 'Requests',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="blood-drop" size={size} color={color} />
            ),
          }} />
      </Tab.Navigator>
  );
}