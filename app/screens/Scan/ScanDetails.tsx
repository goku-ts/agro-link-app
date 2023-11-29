import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';


const ScanDetails=() => {
  return (
  <View style={styles.container}>
    <Text>Scan Details</Text>
  </View>
  );
}

export default ScanDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
