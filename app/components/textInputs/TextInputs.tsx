import { View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";

import { SCREEN } from "../../constants/theme";
import React from "react";
type FormInputType={
    placeholder : string
    value: any
    onChangeText : any
    onBlur? : any
    keyboardType?: KeyboardTypeOptions
    icon? : any
    secureTextEntry?: boolean
    maxlength ? : number
}

export const FormInput :FC<FormInputType>=({placeholder,value,onChangeText,onBlur,keyboardType,icon,maxlength})=>{
    return(
        <View style={styles.input}>
              <View style={styles.icon}>
                <Ionicons name={icon} size={20} />
              </View>
              <TextInput
                 style={{ width: SCREEN.width * 0.7, fontSize : 18 }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                keyboardType={keyboardType}
                maxLength={maxlength}
              />
            </View>
    )
}

export const PasswordInput:FC<FormInputType>=({placeholder,value,onChangeText,onBlur,icon})=>{

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };
  


    return(
        <View style={styles.passwordContainer}>
              <View style={styles.icon}>
                <Ionicons name={icon} size={25} />
              </View>
              <View style={styles.passwordandtoggle}>
                <View>
                  <TextInput
                    style={{ width: SCREEN.width * 0.65, fontSize : 18 }}
                    placeholder={placeholder}
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
      height: 60,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 8,
      paddingHorizontal: 8,
      flexDirection: "row",
      alignItems: "center",
    }, 
    icon: {
      marginRight: 10,
    },
    passwordContainer: {
      width: SCREEN.width * 0.85,
      height: 60,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
        flexDirection: "row",
    
        alignItems: "center",
      },
      passwordandtoggle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
  });