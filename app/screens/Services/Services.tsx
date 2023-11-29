import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, LogBox } from 'react-native';
import { COLORS } from '../../constants';


import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Wrapper } from '../../components/Wrapper';
import Header from '../../components/Header';
import ListingCard from '../../components/cards/ListingCards';


import { serviceData } from '../../data';
import ServiceListingCard from '../../components/cards/ServiceListingCards copy';



const Listings = ({navigation}) => {
  return (
    <>
      <Header />
      <Wrapper>
        <FlatList
        showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 20 }} />}
          data={serviceData}
          numColumns={2}
          style={{ backgroundColor: COLORS.lightGray2 }}
          renderItem={({ item }) =>
            <ServiceListingCard
              key={item.id}
              name={item.name.length > 15 ?`${item.name.toLocaleUpperCase().substring(0, 16)}..`:`${item.name.toLocaleUpperCase()}`}
              rate={item.rate}
              location={item.location}
              type={item.type.length > 23 ?`${item.type.substring(0, 23)}..`:`${item.type}`}
              working_hours={item.working_hours}
              image={item.image}
              onPress={()=>navigation.navigate("service_details", {item})}
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
