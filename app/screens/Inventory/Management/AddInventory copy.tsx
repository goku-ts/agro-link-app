import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../constants';


const AddInventory=() => {
  return (
  <View style={styles.container}>
    <Text>Add Inventory</Text>
  </View>
  );
}

export default AddInventory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
