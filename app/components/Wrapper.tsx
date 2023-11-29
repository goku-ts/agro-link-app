
import React from "react"
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Platform, StyleSheet, View } from "react-native"
import { COLORS } from "../constants"

export const Wrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            <KeyboardAvoidingView keyboardVerticalOffset={0} style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.container}>
                    {children}
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
})