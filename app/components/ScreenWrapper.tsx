
import React from "react"
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Platform,StyleSheet } from "react-native"
import { COLORS } from "../constants"

export const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            <KeyboardAvoidingView keyboardVerticalOffset={0} style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
container : {
    padding:20,
   justifyContent:"flex-end",
}
})