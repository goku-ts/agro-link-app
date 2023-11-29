import {Text,StyleSheet, Platform} from "react-native"
import { COLORS, SIZES } from "../../constants"
import { FC } from "react"
import React from "react"

type mediumTextType = {
    text : string
    color? : string
}

export const MediumText : FC<mediumTextType> = ({color = COLORS.black,text }) =>{
    return(
        <Text style={[styles.mediumtext,{color:color}]}>{text}</Text>
    )
}



const styles = StyleSheet.create({
   mediumtext:{
    fontSize : SIZES.h3,
    marginLeft : 10,
    fontWeight : "bold",
    marginTop : Platform.OS === "ios" ? 0 : 0,
    flexWrap :"wrap"
   }
})