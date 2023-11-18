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
  maxlength?: number
}

const SizeInputBox: FC<FormInputType> = ({ placeholder, value, onChangeText, onBlur, keyboardType, type, maxlength }) => {
  return (
    <View style={styles.input}>
      <TextInput
        style={{ width: SCREEN.width * 0.7, fontSize: 18, paddingLeft:10 }}
        placeholder={placeholder}
        // placeholderTextColor={COLORS.black}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        maxLength={maxlength}
      />
    </View>
  )
}

export const FarmSize = ({ keyboardType,value, value1 ,onChangeText, onChangeText1,onBlur,onBlur1}) => {
  return (
    <View style={{}}>
      <LableText name={"Farm Size"} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SizeInputBox
          keyboardType={keyboardType}
          placeholder="Length"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
        <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 18, fontWeight: "bold" }}>by</Text>
        <SizeInputBox
          keyboardType={keyboardType}
          placeholder="Width"
          value={value1}
          onChangeText={onChangeText1}
          onBlur={onBlur1}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: SCREEN.width * 0.37,
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