import React, { useRef, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { SubmitButton } from "../../components/buttons/SubmitButton";
import ProfilePicture from "../../components/ProfilePicture";
import { ChoiceButton } from "../../components/buttons/ChoiceButton";
import { PickerButtons } from "../../components/buttons/PickerButtons";
import { Dropdown } from "../../components/buttons/Dropdown";

import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';

import {
    FormInput,
} from "../../components/textInputs/TextInputs";
import { COLORS, SCREEN } from "../../constants/theme";
import images from "../../constants/images";
import { FarmSize } from "../../components/textInputs/SizeInputBoxes";
import { MultiTextInput } from "../../components/textInputs/MultiTextInput";
import { LableText } from "../../components/texts/lableText";

import { ScreenWrapper } from "../../components/ScreenWrapper";

const Profile = ({ navigation, route }) => {

    const seller = [
        { category: "Small Holder Farmer", id: 1 },
        { category: "Commercial Farmer", id: 2 },
        { category: "Aggregator", id: 3 },
    ]
    const logistics = [
        { category: "Transportation", id: 1 },
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

    const region = [
        'Western Region',
        'Central Region',
        'Greater Accra Region',
        'Volta Region',
        'Eastern Region',
        'Ashanti Region',
        'Brong-Ahafo Region',
        'Northern Region',
        'Upper East Region',
        'Upper West Region',
        'Oti Region',
        'North East Region',
        'Savannah Region',
        'Western North Region',
        'Bono Region',
        'Ahafo Region'
    ];
    const documentType = ["Ghana Card", "Business Registration"]


    const [submit, isSubmit] = useState(false);
    const [choice, setChoice] = useState("buyer")
    const [selected, setSelected] = useState(buyer)
    const [selectedCategory, setSelectedCategory] = useState<string>("buyer")
    const [selectedRegion, setSelectedRegion] = useState("Choose Region")
    const [dropListTtype, setDropListType] = useState("region")
    const [selectedDocument, setSelectedDocument] = useState("Document Type")


    const initialValues = {
        type: "",
        category: "",
        contact: "",
        region: "",
        location: "",
        farm_size_length: "",
        farm_size_width: "",
        crops_cultivated: "",
        registration_type: ""

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
        const cultivated = values.crops_cultivated
        const formData = {
            type: choice,
            category: selectedCategory,
            contact: values.contact,
            region: selectedRegion,
            location: values.location,
            farrm_size: {
                length: values.farm_size_length,
                width: values.farm_size_width
            },
            crops_cultivated: cultivated.split(','),
            registration_type: selectedDocument
        }
        console.log(formData)
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



    const sheetRef = useRef<BottomSheetMethods>(null);

    const Regions = ({ name, onpress }) => {
        return (
            <View style={{ paddingLeft: 40, }}>
                <TouchableOpacity
                    onPress={onpress}
                    activeOpacity={0.5}
                    style={{ marginBottom: 10 }}
                >
                    <View style={{}}>
                        <Text style={{ fontSize: 22, marginLeft: 20 }}>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <ScreenWrapper>
                <View style={{ justifyContent: "center", alignItems: "center", height: SCREEN.height * 0.1 }}>
                    <Image source={images.logo} />
                </View>
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

                            <View style={{ alignItems: "center", marginBottom: 50 }}>

                                <ProfilePicture />

                                <View style={{}}>
                                    {/* <LableText name={"I am a"}/> */}
                                    <View style={{ flexDirection: "row" }}>
                                        <ChoiceButton
                                            name={"Buyer"}
                                            // iconname={choice === "buyer" ? "checkmark-circle-outline" : null} 
                                            backgroundColor={choice === "buyer" ? COLORS.primary : COLORS.lightGray3}
                                            color={choice === "buyer" ? "white" : null}
                                            weight={choice === "buyer" ? "bold" : null}
                                            onPress={() => { setChoice("buyer"); setSelected(buyer) }}
                                        />
                                        <ChoiceButton
                                            name={"Seller"}
                                            // iconname={choice === "Seller" ? "checkmark-circle-outline" : null} 
                                            backgroundColor={choice === "Seller" ? COLORS.primary : COLORS.lightGray3}
                                            color={choice === "Seller" ? "white" : null}
                                            weight={choice === "Seller" ? "bold" : null}
                                            onPress={() => { setChoice("Seller"); setSelected(seller) }}
                                        />
                                        <ChoiceButton
                                            name={"Logistics"}
                                            // iconname={choice === "Logistics" ? "checkmark-circle-outline" : null} 
                                            backgroundColor={choice === "Logistics" ? COLORS.primary : COLORS.lightGray3}
                                            color={choice === "Logistics" ? "white" : null}
                                            weight={choice === "Logistics" ? "bold" : null}
                                            onPress={() => { setChoice("Logistics"); setSelected(logistics) }}
                                        />
                                    </View>
                                </View>
                                {/* CATEGORY SECTION */}
                                <View>
                                    {
                                        selected.map((item) =>
                                            <PickerButtons
                                                key={item.id}
                                                name={item.category}
                                                // iconname={selectedCategory === item.category ? "checkmark-circle-outline" : null}
                                                backgroundColor={selectedCategory === item.category ? COLORS.primary : COLORS.lightGray3}
                                                color={selectedCategory === item.category ? "white" : null}
                                                weight={selectedCategory === item.category ? "bold" : null}
                                                onPress={() => { setSelectedCategory(item.category) }}
                                            />)
                                    }
                                </View>


                                {submit && errors.contact && (
                                    <Text style={styles.errorText}>{errors.contact}</Text>
                                )}
                                <FormInput
                                    placeholder="Enter Your Contact Number"
                                    value={values.contact}
                                    onChangeText={handleChange("contact")}
                                    onBlur={handleBlur("contact")}
                                    keyboardType="number-pad"
                                    type={"phone"}
                                    label="Contact Number"
                                    maxlength={9}
                                />

                                <Dropdown
                                    name={selectedRegion}
                                    iconname={"chevron-down-circle-outline"}
                                    onPress={() => { sheetRef.current.open(); setDropListType("region") }}
                                    backgroundColor={COLORS.lightGray3}
                                />


                                {submit && errors.location && (
                                    <Text style={styles.errorText}>{errors.location}</Text>
                                )}
                                <FormInput
                                    placeholder="Enter Farm Location"
                                    value={values.location}
                                    onChangeText={handleChange("location")}
                                    onBlur={handleBlur("location")}
                                    label="Location"
                                // icon={"key-outline"}
                                />

                                {/* SIZE INPUT */}
                                <FarmSize
                                    keyboardType={"numeric"}
                                    onChangeText={handleChange("farm_size_length")}
                                    onChangeText1={handleChange("farm_size_width")}
                                    value={values?.farm_size_length}
                                    value1={values?.farm_size_width}
                                    onBlur={handleBlur("farm_size_length")}
                                    onBlur1={handleBlur("farm_size_width")}
                                />

                                <MultiTextInput
                                    placeholder="Crops Cultivated"
                                    onBlur={handleBlur("crops_cultivated")}
                                    onChangeText={handleChange("crops_cultivated")}
                                    value={values.crops_cultivated}
                                />

                                <Dropdown
                                    name={selectedDocument}
                                    iconname={"chevron-down-circle-outline"}
                                    onPress={() => { sheetRef.current.open(); setDropListType("documentType") }}
                                    backgroundColor={COLORS.lightGray3}
                                />

                                <SubmitButton color={COLORS.primary} name={"Proceed"} onPress={() => {
                                    isSubmit(true);
                                    handleSubmit();
                                }} />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScreenWrapper>
            <BottomSheet ref={sheetRef} height={SCREEN.height * 0.4}>
                {dropListTtype == "region" && <FlatList
                    data={region}
                    renderItem={({ item }) =>
                        <Regions
                            name={item}
                            onpress={() => { sheetRef.current.close(); setSelectedRegion(item) }}
                        />
                    }
                />}
                {dropListTtype === "documentType" && <FlatList
                    data={documentType}
                    renderItem={({ item }) =>
                        <Regions
                            name={item}
                            onpress={() => { sheetRef.current.close(); setSelectedDocument(item) }}
                        />
                    }
                />}
            </BottomSheet>
            {/* </ScrollView> */}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },

    errorText: {
        fontSize: 12,
        color: "red",
        marginBottom: 5,
    },
});

export default Profile;
