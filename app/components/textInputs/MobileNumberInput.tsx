import React, { FC } from "react";
import { KeyboardTypeOptions, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { SCREEN } from "../../constants/theme";

type FormInputType = {
    label?: string
    value?: any
    onChangeText?: any
    onBlur?: any
    maxlength?: number,
    activeColor?: string,
    outlineColor? : string

}

 const MobileTextInput: FC<FormInputType> = ({ outlineColor, label, value, onChangeText, onBlur, maxlength, activeColor }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            maxLength={maxlength}
            keyboardType={"number-pad"}
            mode="outlined"
            label={label}
            activeOutlineColor={activeColor}
            outlineColor={outlineColor}
            style={{
                width: SCREEN.width * 0.85,
                height: 50,
                marginBottom : 10,
                fontSize : 18,
            
            }}
        />
    )
}

export default MobileTextInput


const styles = StyleSheet.create({

});