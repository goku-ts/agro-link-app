import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { ScaledSheet } from 'react-native-size-matters';


import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { images } from '../constants';

type BannerType = {
    image?: any,
    name: string
}
const Banner: FC<BannerType> = ({ image,name}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.card}>
           {/*
           <View style={styles.img_view}>
                <Image source={image} style={styles.imageView} />
            </View>
            */} 

            <View style={styles.textView}><Text style={styles.name}>{name}</Text></View>
        </TouchableOpacity>
    );
}

export default Banner

const styles = ScaledSheet.create({
    card: {
        backgroundColor: COLORS.white,
        height: SIZES.height * 0.2,
        width: SIZES.width * 0.9,
        borderRadius : "15@ms",
        elevation :5,
    },
    imageView: {
        width: "150@ms" ,
        height: "150@ms"
    },
    textView: {
        justifyContent: "center",
        alignItems: "center",

    },
    name: {
        ...FONTS.h3
    },
    img_view: {
        justifyContent: "center",
        alignItems: "center",
        height: SIZES.height * 0.23,
        width: SIZES.width * 0.45,
    },
});
