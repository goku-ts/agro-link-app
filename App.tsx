import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './app/navigation/tabs';
import Home from './app/screens/Home';
import Profile from './app/screens/Auth/Profile';
import theme from './app/constants/theme';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Register from './app/screens/Auth/Register';
import Login from './app/screens/Auth/Login';
import { AuthStack } from './app/navigation/screensStack';


type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'Home'}
    >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Login" component={Profile} />

        {/* Screens */}
         {/*  */}
        
    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


