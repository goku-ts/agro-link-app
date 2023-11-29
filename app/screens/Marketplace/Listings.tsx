import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, LogBox } from 'react-native';
import { COLORS } from '../../constants';


import { Wrapper } from '../../components/Wrapper';
import Header from '../../components/Header';
import ListingCard from '../../components/cards/ListingCards';

import { Data } from '../../data';



const Listings = ({navigation}) => {
  return (
    <>
      <Header />
      <Wrapper>
        <FlatList
        showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 20 }} />}
          data={Data}
          numColumns={2}
          style={{ backgroundColor: COLORS.lightGray2 }}
          renderItem={({ item }) =>
            <ListingCard
              key={item.id}
              name={item.name.length > 15 ?`${item.name.toLocaleUpperCase().substring(0, 16)}..`:`${item.name.toLocaleUpperCase()}`}
              price={item.unit_price}
              location={item.origin}
              category={item.type}
              variety={item.variety}
              image={item.image}
              onPress={()=>navigation.navigate("listing_details", {item})}
            />
          }
        />


      </Wrapper>
    </>
  );
}

export default Listings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,

  },
});
