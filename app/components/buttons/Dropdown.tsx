import { TouchableOpacity, StyleSheet, Text, View } from "react-native"

import { FC, useRef } from "react"
import React from "react"
import { SCREEN } from "../../constants/theme"
import { Ionicons } from "@expo/vector-icons"

import { LableText } from "../texts/lableText"

type buttonType = {
    name: any
    color?: string
    onPress?: any
    iconname?: any,
    backgroundColor?: string
}



export const Dropdown: FC<buttonType> = ({ name, onPress, iconname, color, backgroundColor }) => {
   
    return (
        <>
           <View style={{}}>
           {/* <LableText name={"Farm Region"}/> */}
            
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, { backgroundColor: backgroundColor }]}
                activeOpacity={0.7}
            >
                <View style={styles.buttonview}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 20 }}>{name}</Text>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Ionicons name={iconname} size={30} color={color} />
                    </View>
                </View>

            </TouchableOpacity>
        </View>
        </>
    )
}



const styles = StyleSheet.create({
    button: {

        width: SCREEN.width * 0.85,
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: "center",
        marginTop: 1,
        marginBottom: 10
    },
    buttonview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    }
})