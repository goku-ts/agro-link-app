import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { FC } from "react"
import React from "react"
import { SCREEN } from "../../constants/theme"
import { Ionicons } from "@expo/vector-icons"

type buttonType = {
  name: any
  color?: string
  onPress?: any,
  iconname?: any
}

export const ChoiceButton: FC<buttonType> = ({ name, onPress, iconname }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <View style={styles.buttonview}>
        <Ionicons name={iconname} size={25} color={"black"}/>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  button: {
    width: SCREEN.width * 0.28,
    height: 60,
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