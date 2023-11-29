import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, images } from '../constants';
import { SCREEN } from '../constants/theme';




const CategoriesPick = () => {
    return (
        <View style={styles.container}>
            <Image source={images.logo} style={styles.logo}/>
        </View>
    );
}

export default CategoriesPick

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    logo :{
        height : SCREEN.height * 0.05,
        width : SCREEN.width * 0.9
    }
});
