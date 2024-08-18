import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './src/Login';
import Signup from './src/Signup';
import Forgot from './src/Forgot';
import Otp from './src/Otp';
import New from './src/New';
import Home from './src/Home';
import Camera from './src/Camera';
import Filter from './src/Filter';
import Description from './src/Description';
import Date from './src/Date';
import Profile from './src/Profile';
import Edit from './src/Edit';
import Splash from './src/Splash';
import Rentout1 from './src/Rentout1';
import Rentout3 from './src/Rentout3';
import Rentout2 from './src/Rentout2';
import Calendar1 from './src/Calendar1';
import { Platform, TouchableOpacity } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#fff' : '#f4511e', // Set different background color for iOS
          },
          headerTintColor: Platform.OS === 'ios' ? '#000' : '#fff', // Set different text color for iOS
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: true }} />
        <Stack.Screen name="New" component={New} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Filter" component={Filter} options={{ headerShown: true }} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Date" component={Date} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: null }} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Rentout1" component={Rentout1}
        
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="close" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: '', // Hide the header title
          })} />

        <Stack.Screen name="Rentout2" component={Rentout2} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'Select Subcategory', // Hide the header title
        })}/>

        <Stack.Screen name="Rentout3" component={Rentout3} options={{ headerShown: true }} />

        <Stack.Screen name="Calendar1" component={Calendar1}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="close" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: '', // Hide the header title
          })} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
