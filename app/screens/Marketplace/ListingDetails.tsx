import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS } from '../../constants';

import { dataType } from '../../data';

import { Wrapper } from '../../components/Wrapper';
import Header from '../../components/Header';
import { SCREEN } from '../../constants/theme';

import RowTable from '../../components/RowTable';
import { SubmitButton } from '../../components/buttons/SubmitButton';
import { OutlineButton } from '../../components/buttons/OutlineButton copy';
import { placeholder } from '../../constants/images';


const ListingDetails = ({ navigation, route }) => {


  const [data, setData] = React.useState<any>()
  React.useEffect(() => {
    let getData = route?.params?.item
    setData(getData)
  }, [])


  return (
    <>
      <Header showArrow={true} onPress={() => navigation.goBack()} />
      <Wrapper>

        {/* <View style={{ height: SCREEN.height * 0.2, width: SCREEN.width , justifyContent: "center", alignItems: "center" }}> */}
        {
          data?.image ? <Image source={{ uri: data?.image }} style={styles.banner} />
            : <Image source={placeholder} style={styles.banner} />
        }
        {/* </View> */}
        <View style={{}}>
          <View style={{marginTop : 10, alignItems: "center" }}>
            <RowTable name={"Name:"} value={data?.name.toUpperCase()} />
            <RowTable name={"Variety:"} value={data?.variety.toUpperCase()} />
            <RowTable name={"Origin:"} value={data?.origin.toUpperCase()} />
            <RowTable name={"Harvest Date:"} value={data?.harvest_date.toUpperCase()} />
            <RowTable name={"Unit Price:"} value={`GHc ${data?.unit_price}`} />
            <RowTable name={"Quantity:"} value={data?.quantity} />
            <RowTable name={"Type:"} value={data?.type.toUpperCase()} />
            <RowTable name={"Stock:"} value={data?.isAvailable ? "AVAILABLE" : "OUT OF STOCK"} />
            <RowTable name={"Seller:"} value={data?.seller.toUpperCase()} />
            <OutlineButton name={"View Profile"}/>
            <SubmitButton name={`Contact   ${data?.seller}`} color={COLORS.primary} />
          </View>
        </View>
      </Wrapper>
    </>
  );
}

export default ListingDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: SCREEN.height * 0.3,
    width: SCREEN.width,
    marginLeft: -10
  }
});
