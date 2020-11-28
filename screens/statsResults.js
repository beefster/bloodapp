import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import  { useState } from 'react';
import { 
    BarChart,
    PieChart,
  } from "react-native-chart-kit";

  import { Dimensions } from "react-native";
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

export default function StatsResults({route, navigation}) {
    const chartConfig = {
        backgroundColor: 0,
        backgroundGradientFromOpacity: 0,
                backgroundGradientFrom: 0,
                backgroundGradientTo: 'white',
                fillShadowGradient:'green',
                fillShadowGradientOpacity:1,
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
      };

      var labellist = []
      var datalist = []
      for(var bloodtype in route.params){
        labellist.push(bloodtype);
        datalist.push(route.params[bloodtype]);
      }

      console.log(labellist);
      console.log(datalist);

      const data = {
        labels: labellist,
        datasets: [
          {
            data: datalist
          }
        ]
      };
      
      var sum =  data.datasets[0].data.reduce((a, b) => a + b, 0);

      


     return (
   
        
       <View style={globalStyles.graphView}>
         <ScrollView>
         <Text style={globalStyles.greeting1}>Total Donors: {sum}</Text>
         <Text style={globalStyles.graphHeader}>Number of Donors Per Blood Group</Text>

         <BarChart
            
            data={data}
              width={screenWidth-16}
              height={screenHeight/2}
              yAxisLabel={''}
              chartConfig={chartConfig}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
        />


<Text style={globalStyles.graphHeader}>Blood Group Percentage</Text>
      <PieChart
        data={[
          {
            name: 'A+',
            population: data.datasets[0].data[0],
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'A-',
            population: data.datasets[0].data[1],
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'B+',
            population: data.datasets[0].data[2],
            color: '#000000',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'B-',
            population: data.datasets[0].data[3],
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'O+',
            population: data.datasets[0].data[4],
            color: 'gold',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'O-',
            population: data.datasets[0].data[5],
            color: 'khaki',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'AB+',
            population: data.datasets[0].data[6],
            color: 'yellow',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'AB-',
            population: data.datasets[0].data[7],
            color: 'orange',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={screenHeight/3}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        //absolute //For the absolute number else percentage
      />
        
        
         
         
        </ScrollView>
       </View>
       
     );
   }