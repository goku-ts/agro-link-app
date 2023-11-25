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

 const BigTextInput: FC<FormInputType> = ({ outlineColor, label, value, onChangeText, onBlur, maxlength, activeColor }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            mode="outlined"
            label={label}
            multiline
            activeOutlineColor={activeColor}
            outlineColor={outlineColor}
            style={{
                width: SCREEN.width * 0.85,
                height: 80,
                marginBottom : 10,
                fontSize : 18,
            
            }}
        />
    )
}

export default BigTextInput


const styles = StyleSheet.create({

});