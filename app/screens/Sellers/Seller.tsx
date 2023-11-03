import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants';
import Card from '../../components/Card';
import { images } from "../../constants"
import Banner from '../../components/Banner';


const Seller = ({navigation}) => {
  return (
    <>
      <View style={styles.header}></View>
      <View style={styles.container}>
        {/* <View style={{ alignItems:"center"}}>
          <Banner name='Buyer Page' />
        </View> */}
        <View style={styles.grid}>
          <Card  name='Commercial Farmer' onpress={()=>navigation.navigate("commercial")}/>
          <Card  name='Small Holder Farmer' onpress={()=>navigation.navigate("small holder")}/>
        </View>
        <View style={styles.grid}>
          <Card  name='Aggregator' onpress={()=>navigation.navigate("aggregator")}/>
        </View>
      </View>
    </>
  );
}

export default Seller

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent:"center",
  },
  header: {
    height: "40@ms",
    backgroundColor: COLORS.white,
    // marginBottom: "15@ms"
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  }
});
