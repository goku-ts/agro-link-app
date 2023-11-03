import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { SubmitButton } from "../../components/buttons/SubmitButton";
import ProfilePicture from "../../components/ProfilePicture";
import { ChoiceButton } from "../../components/buttons/ChoiceButton";
import { PickerButtons } from "../../components/buttons/PickerButtons";

import {
    FormInput,
} from "../../components/textInputs/TextInputs";

const Profile = ({ navigation, route }) => {
    const initialValues = {
        contact: "",
        location: "",
    };

    const [message, setMessage] = useState();



    const validationSchema = Yup.object({
        contact: Yup.string()
            .required("Mobile Number is required")
            .min(9, "Enter Valid Mobile Number")
            .max(9, "Enter Valid Mobile Number"),
        location: Yup.string().required("Location is required"),
    });

    const submitProfile = (values: typeof initialValues) => {
        console.log(selectedCategory)
        // Perform sign-in logic here
        // axios
        //     .post("", {
        //         contact: values.contact,
        //         location: values.location,
        //     })
        //     .then((response) => {
        //         setMessage(response?.data.message);
        //         if (response?.data?.status === "SUCCESS") {
        //             navigation.navigate("Notes");
        //         }
        //     })
        //     .catch((e) => console.log(e));
    };

    const seller = [
        { category: "Small Holder Farmer", id: 1 },
        { category: "Commercial Farmer", id: 2 },
        { category: "Aggregator", id: 3 },
    ]
    const logistics = [
        {
            category: "Transportation",
            id: 1
        },
        {
            category: "Warehousing",
            id: 2
        },
        {
            category: "Other Services",
            id: 3
        }
    ]
    const buyer = []


    const [submit, isSubmit] = useState(false);
    const [choice, setChoice] = useState("buyer")
    const [selected, setSelected] = useState(buyer)
    const [selectedCategory, setSelectedCategory] = useState<string>("buyer")

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <KeyboardAvoidingView style={styles.container}>
                    <ProfilePicture />
                    {message && (
                        <Text style={[styles.errorText, { fontSize: 12 }]}>{message}</Text>
                    )}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={submitProfile}
                    >
                        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
                            <View >
                                <FormInput
                                    placeholder="Contact Number"
                                    value={values.contact}
                                    onChangeText={handleChange("contact")}
                                    onBlur={handleBlur("contact")}
                                    keyboardType="number-pad"
                                    icon={"person-outline"}
                                />
                                {submit && errors.contact && (
                                    <Text style={styles.errorText}>{errors.contact}</Text>
                                )}
                                <FormInput
                                    placeholder="Location"
                                    value={values.location}
                                    onChangeText={handleChange("location")}
                                    onBlur={handleBlur("location")}
                                    icon={"key-outline"}
                                />

                                {submit && errors.location && (
                                    <Text style={styles.errorText}>{errors.location}</Text>
                                )}
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <ChoiceButton name={"Buyer"} iconname={choice === "buyer" ? "checkmark-outline" : null} onPress={() => { setChoice("buyer"); setSelected(buyer) }} />
                                    <ChoiceButton name={"Seller"} iconname={choice === "Seller" ? "checkmark-outline" : null} onPress={() => { setChoice("Seller"); setSelected(seller) }} />
                                    <ChoiceButton name={"Logistics"} iconname={choice === "Logistics" ? "checkmark-outline" : null} onPress={() => { setChoice("Logistics"); setSelected(logistics) }} />
                                </View>
                                {/* CATEGORY SECTION */}
                                <View>
                                    {
                                        selected.map((item) =>
                                            <PickerButtons
                                                key={item.id}
                                                name={item.category}
                                                iconname={selectedCategory === item.category ? "checkmark-outline" : null}
                                                onPress={() => { setSelectedCategory(item.category) }}
                                            />)
                                    }
                                </View>
                                <SubmitButton name={"Proceed"} onPress={() => {
                                    isSubmit(true);
                                    handleSubmit();
                                }} />
                            </View>
                        )}
                    </Formik>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Powered By: </Text>
                <Text >Eco Fly & Analytics</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
        alignItems: "center",
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 8,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    passwordContainer: {
        width: 300,
        height: 40,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
        flexDirection: "row",

        alignItems: "center",
    },
    visibilityToggle: {
        marginLeft: 8,
        color: "blue",
    },
    errorText: {
        fontSize: 12,
        color: "red",
        marginBottom: 5,
    },
    signUpLink: {
        marginTop: 16,
        textAlign: "center",
        color: "blue",
        textDecorationLine: "underline",
    },
    button: {
        height: 35,
        width: 80,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    icon: {
        marginRight: 10,
    },
    passwordandtoggle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginBottom: 10
    },
    footerText: {
        fontWeight: "bold",
        fontSize: 15
    }
});

export default Profile;
