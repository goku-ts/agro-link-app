import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../constants';
import Card from '../components/Card';
import { images } from "../constants"
import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <View style={{ alignItems:"center"}}>
          <Banner name='BANNER' />
        </View>
        <View style={styles.grid}>
          <Card image={images.science_img} name='Science' />
          <Card image={images.tech_img} name='Technology' />
        </View>
        <View style={styles.grid}>
          <Card image={images.eng_img} name='Engineering' />
          <Card image={images.maths_img} name='Maths' />
        </View>
      </View>
    </>
  );
}

export default Home

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  header: {
    height: "40@ms",
    backgroundColor: COLORS.white,
    marginBottom: "15@ms"
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  }
});
