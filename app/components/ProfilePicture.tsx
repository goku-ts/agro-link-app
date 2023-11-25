import React, { useRef, useState } from "react"
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native"
import { COLORS, images } from "../constants"








const ProfilePicture = ({onPress, image}) => {

    
   

    return (
        <>
            <TouchableOpacity style={styles.profile} activeOpacity={0.7} onPress={onPress}>

                {
                    image ? <Image source={{ uri: image }} style={{ height: 120, width: 120, borderRadius: 60 }} />
                        : <Image source={images.profile_img} style={{ height: 120, width: 120, borderRadius: 60 }} />
                }
                {image ? null : <Text>Upload Image</Text>}
            </TouchableOpacity>

         

        </>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    profile: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    }
})