import {Text,StyleSheet, Platform} from "react-native"
import { COLORS, SIZES } from "../../constants"
import { FC } from "react"
import React from "react"

type smallTextType = {
    text : string
    color? : string
    weight? : "bold" | "normal"
}

export const SmallText : FC<smallTextType> = ({color = COLORS.black,text , weight = "normal"}) =>{
    return(
        <Text style={[styles.smalltext,{color:color, fontWeight : weight}]}>{text}</Text>
    )
}


const styles = StyleSheet.create({
   smalltext:{
    fontSize : SIZES.h4,
    marginLeft:10,
    marginTop : Platform.OS === "ios" ? -3 : -5,
   
   }
})