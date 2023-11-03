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
}

export const PickerButtons: FC<buttonType> = ({ name, onPress,iconname }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <View style={styles.buttonview}>
                <Ionicons name={iconname} size={25} color={"black"} />
                <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft:20 }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        width: SCREEN.width * 0.85,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonview: {
        flexDirection: "row",
        alignItems: "center"
      }
})