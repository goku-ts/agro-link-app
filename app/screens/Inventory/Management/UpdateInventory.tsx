import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../constants';


const UpdateInventory=() => {
  return (
  <View style={styles.container}>
    <Text>Update Inventory</Text>
  </View>
  );
}

export default UpdateInventory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
