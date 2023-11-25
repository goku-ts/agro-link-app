import { View, StyleSheet, KeyboardTypeOptions, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";

import { TextInput } from "react-native-paper";

import { COLORS, SCREEN } from "../../constants/theme";
import React from "react";
import { LableText } from "../texts/lableText";

type FormInputType = {
  label?: string
  value?: any
  value1?: any
  onChangeText?: any
  onChangeText1?: any
  onBlur?: any
  onBlur1?: any
  maxlength?: number,
  activeColor?: string,
  outlineColor?: string,
 

}

const SizeInputBox: FC<FormInputType> = ({ label, value, onChangeText, onBlur, activeColor, outlineColor,  }) => {
  return (

    <TextInput
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      mode="outlined"
      label={label}
      activeOutlineColor={activeColor}
      outlineColor={outlineColor}
      keyboardType={"numeric"}
      style={{
        width: SCREEN.width * 0.37,
        height: 50,
        marginBottom: 10,
        fontSize: 18,

      }}
    />

  )
}

export const FarmSize : FC<FormInputType>= ({ value, value1, onChangeText, onChangeText1, onBlur, onBlur1, activeColor, outlineColor,}) => {
  return (
    <View style={{}}>
      <LableText name={"Farm Size"} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SizeInputBox
          label="Length"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          activeColor={activeColor}
          outlineColor={outlineColor}
        />
        <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 18, fontWeight: "bold" }}>by</Text>
        <SizeInputBox
          label="Width"
          value={value1}
          onChangeText={onChangeText1}
          onBlur={onBlur1}
          activeColor={activeColor}
          outlineColor={outlineColor}
          
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: SCREEN.width * 0.37,
    height: 40,
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