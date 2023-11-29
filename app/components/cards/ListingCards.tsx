import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Button, Card, } from 'react-native-paper';
import { COLORS, SCREEN } from '../../constants/theme';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import { MediumText } from '../texts/MediunText';
import { LargeText } from '../texts/LargeText';
import { SmallText } from '../texts/SmallText';

type ListingCard = {
    name?: string,
    price?: string,
    location?: string,
    category?: string,
    variety?: string,
    image?: string,
    onPress? : any
}

const ListingCard: React.FC<ListingCard> = ({ name, price, location, category, variety, image, onPress }) => (
    <TouchableOpacity style={[styles.container, styles.shadowProp]} activeOpacity={0.8} onPress={onPress}>
        <Card.Cover
            source={{ uri: image }}
            style={styles.image}
        />

        <View style={{ justifyContent: "center", padding: 5 }}>
            <MediumText text={name} />
            {/* <SmallText text={variety}/> */}
            <View style={styles.textContainer}>
                <SmallText text={category} />
                <View style={styles.price}>
                    <MediumText text="GHc" color={COLORS.primary} />
                    <LargeText text={price} color={COLORS.primary} />
                </View>
            </View>
            <SmallText text={location} />

        </View>

    </TouchableOpacity>
);

export default ListingCard;


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: SCREEN.width * 0.45,
        height: SCREEN.height * 0.31,
        borderRadius: 10,
        elevation: 2,
        margin: 5,

        // justifyContent: "center"
    },
    shadowProp: {
        shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.1,
        // shadowRadius: 3,
    },
    price: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    textContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image:{
        width: SCREEN.width * 0.45,
        height: SCREEN.height * 0.2,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }
});
