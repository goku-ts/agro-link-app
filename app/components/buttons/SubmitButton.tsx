import {TouchableOpacity,StyleSheet,Text} from "react-native"
import { FC } from "react"
import React from "react"
import { SCREEN } from "../../constants/theme"

type buttonType = {
    name : any
    color? : string
    onPress? : any
}

export const SubmitButton : FC<buttonType> = ({ name, onPress }) =>{
    return(
        <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={{fontSize:18,fontWeight:"bold"}}>{name}</Text>
      </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        width: SCREEN.width * 0.85,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
      },
})