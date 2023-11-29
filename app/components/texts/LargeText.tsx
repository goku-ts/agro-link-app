import {Text,StyleSheet, Platform} from "react-native"
import { COLORS } from "../../constants"
import { FC } from "react"
import React from "react"

type largeTextType = {
    text : string
    color? : string
}

export const LargeText : FC<largeTextType> = ({color = COLORS.black,text }) =>{
    return(
        <Text style={[styles.largetext,{color:color}]}>{text}</Text>
    )
}



const styles = StyleSheet.create({
   largetext:{
    fontSize : 20,
    fontWeight:"bold",
    marginTop : Platform.OS === "ios" ? -3 : -5,
    flexWrap :"wrap"
   }
})