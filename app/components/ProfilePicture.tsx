import React from "react"
import {View,TouchableOpacity,Image, StyleSheet} from "react-native"
import { COLORS, images } from "../constants"

const ProfilePicture =()=>{
    return(

    <TouchableOpacity style={styles.profile} activeOpacity={0.7}>
        
            <Image source={images.profile_img} style={{height:100,width:100, borderRadius:50}}/>
        
    </TouchableOpacity>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    profile:{
        height:120,
        width:120,
        borderRadius:60,
        backgroundColor:COLORS.primary,
        justifyContent : "center",
        alignItems:"center" ,
        marginBottom : 10
    }
})