
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, images } from '../constants';
import { SCREEN } from '../constants/theme';

import Ionicons from '@expo/vector-icons/Ionicons';



type headerType = {
    onPress? : any,
    showArrow? : boolean
}

const Header : FC<headerType> = ({ onPress, showArrow}) => {
    return (
        <SafeAreaView style={styles.container}>
           { showArrow && <TouchableOpacity onPress={onPress}>
                <Ionicons name='arrow-back' size={25} />
            </TouchableOpacity>}
            <Image source={images.logo} style={styles.logo} />
        </SafeAreaView>
    );
}

export default Header

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent :"center"
    },
    logo: {
        height: SCREEN.height * 0.05,
        width: SCREEN.width * 0.9
    }
});
