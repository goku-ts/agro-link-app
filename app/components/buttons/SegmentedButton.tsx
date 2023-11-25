import React, { FC } from "react";
import { KeyboardTypeOptions, StyleSheet, Text } from "react-native";
import { SegmentedButtons, TextInput } from "react-native-paper";
import { SCREEN } from "../../constants/theme";

type FormInputType = {
    setValue?: any
    value?: any
    buttons? : any
   onPress? : any
}

 const SegmentedButton: FC<FormInputType> = ({ setValue, value, buttons, onPress}) => {
    return (
        <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={buttons}
        style={{
            marginBottom : 8,
            width: SCREEN.width * 0.85,
            height: 40,
        }}
      />
    )
}

export default SegmentedButton


const styles = StyleSheet.create({

});