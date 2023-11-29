import * as React from 'react';
import { View, Text } from 'react-native';

import { SmallText } from './texts/SmallText';
import { MediumText } from './texts/MediunText';
import { LargeText } from './texts/LargeText'
import { COLORS } from '../constants';
import { SCREEN } from '../constants/theme';

type rowType = {
  name: string,
  value: string
}

const RowTable = ({ name, value }) => {
  return (

    <View style={{ 
      flex: 1, 
      flexDirection: "row", 
      justifyContent: "space-between" , 
      marginBottom : 5, 
      backgroundColor : COLORS.lightGray3,
      height : 40,
      alignItems:"center",
      borderBottomWidth : 1,
      borderBottomColor : COLORS.primary,
      }}>
      <View style={{ flex: 2, }}>
        <SmallText text={name} weight='bold'/>
      </View>
      <View style={{ flex: 3}}>
        <SmallText text={value} />
      </View>
    </View>

  );
};


export default RowTable;