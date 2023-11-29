import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';


const PrrofileScreen=() => {
  return (
  <View style={styles.container}>
    <Text>Prrofile Screen</Text>
  </View>
  );
}

export default PrrofileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
