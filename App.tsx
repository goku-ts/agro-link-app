import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import RootNavigation from './app/navigation/rootNavigation';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme} >
      <RootNavigation />
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


