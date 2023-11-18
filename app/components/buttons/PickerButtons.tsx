import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { FC } from "react"
import React from "react"
import { SCREEN } from "../../constants/theme"
import { Ionicons } from "@expo/vector-icons"

type buttonType = {
    name: any
    color?: string
    onPress?: any
    iconname?: any
    backgroundColor?: string,
    weight ? :any
}

export const PickerButtons: FC<buttonType> = ({ name, onPress, weight="normal", backgroundColor, color }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: backgroundColor }]}
            activeOpacity={0.8}
        >
            <View style={styles.buttonview}>
                {/* <Ionicons name={iconname} size={25} color={color} /> */}
                <Text style={{ fontSize: 18, marginLeft: 20, color: color, fontWeight:weight }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        width: SCREEN.width * 0.85,
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10
    },
    buttonview: {
        flexDirection: "row",
        alignItems: "center"
    }
})