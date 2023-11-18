import { View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";

import { COLORS, SCREEN } from "../../constants/theme";
import React from "react";
import { LableText } from "../texts/lableText";
type FormInputType = {
  placeholder: string
  value: any
  onChangeText: any
  onBlur?: any
  keyboardType?: KeyboardTypeOptions
  type?: any
  secureTextEntry?: boolean
  maxlength?: number,
  label: string
}

export const FormInput: FC<FormInputType> = ({ placeholder, value, onChangeText, onBlur, keyboardType, type, maxlength, label }) => {
  return (
    <View style={{}}>
      {/* <LableText name={label} /> */}
      <View style={styles.input}>
        <View style={styles.icon}>
          {type === "phone" && <Text style={{ fontSize: 18,paddingLeft:10 }}>+233</Text>}
        </View>
        <TextInput
          style={{ width: SCREEN.width * 0.7, fontSize: 18 }}
          placeholder={placeholder}
          // placeholderTextColor={{}}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          keyboardType={keyboardType}
          maxLength={maxlength}
        />
      </View>
    </View>
  )
}

export const PasswordInput: FC<FormInputType> = ({ placeholder, value, onChangeText, onBlur, }) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };



  return (
    <View style={styles.passwordContainer}>
      <View style={styles.icon}>
        {/* <Ionicons name={icon} size={25} /> */}
      </View>
      <View style={styles.passwordandtoggle}>
        <View>
          <TextInput
            style={{ width: SCREEN.width * 0.65, fontSize: 18 }}
            placeholder={placeholder}
            placeholderTextColor={COLORS.black}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={!isPasswordVisible}
          />
        </View>
        <View>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <View style={styles.icon}>
                <Ionicons name="eye-off-outline" size={25} />
              </View>
            ) : (
              <View style={styles.icon}>
                <Ionicons name="eye-outline" size={25} />
              </View>
            )}
          </TouchableOpacity>
        </View>
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
  icon: {
    marginRight: 10,
  },
  passwordContainer: {
    width: SCREEN.width * 0.85,
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    backgroundColor: COLORS.lightGray3,
    alignItems: "center",
  },
  passwordandtoggle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});