import { View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";

import { COLORS, SCREEN } from "../../constants/theme";
import React from "react";
import { LableText } from "../texts/lableText";
type FormInputType = {
    placeholder?: string
    value?: any
    onChangeText?: any
    onBlur?: any
    keyboardType?: KeyboardTypeOptions
    type?: any
    secureTextEntry?: boolean
    maxlength?: number
}

export const MultiTextInput: FC<FormInputType> = ({ placeholder, value, onChangeText, onBlur, keyboardType, type, maxlength }) => {
    return (
        <View style={{}}>
            {/* <LableText name={"Crops Cultivated"} /> */}
            <View style={styles.input}>
                <TextInput
                    style={{ width: SCREEN.width * 0.85, fontSize: 18, paddingLeft:10 }}
                    placeholder={placeholder}
                    // placeholderTextColor={COLORS.black}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}
                    maxLength={maxlength}
                    multiline
                />
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    input: {
        width: SCREEN.width * 0.85,
        height: 50,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray3
    },
});