import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { FC } from "react"
import React from "react"
import { SCREEN } from "../../constants/theme"
import { Ionicons } from "@expo/vector-icons"

type buttonType = {
  name: any
  color?: string
  onPress?: any,
  iconname?: any,
  backgroundColor?: string,
  weight ?: any
}

export const ChoiceButton: FC<buttonType> = ({ name, onPress, weight, backgroundColor, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: backgroundColor }]}
      activeOpacity={0.9}
    >
      <View style={styles.buttonview}>
        {/* <Ionicons name={iconname} size={25} color={color}/> */}
        <Text style={{ fontSize: 16, fontWeight: weight, color: color }}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  button: {
    width: SCREEN.width * 0.26,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginRight: 10,
    marginBottom:10
  },
  buttonview: {
    flexDirection: "row",
    alignItems: "center"
  }
})