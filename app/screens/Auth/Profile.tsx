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

import { PickerButtons } from "../../components/buttons/PickerButtons";
import { Dropdown } from "../../components/buttons/Dropdown";

import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';


import { COLORS, SCREEN } from "../../constants/theme";
import images from "../../constants/images";
import { FarmSize } from "../../components/textInputs/SizeInputBoxes";


import { ScreenWrapper } from "../../components/ScreenWrapper";

import MobileTextInput from "../../components/textInputs/MobileNumberInput";
import RegularInput from "../../components/textInputs/RegularInput";
import SegmentedButton from "../../components/buttons/SegmentedButton";
import BigTextInput from "../../components/textInputs/BigTextInput";

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
    const [choice, setChoice] = useState("Buyer")
    const [selected, setSelected] = useState(buyer)
    const [selectedCategory, setSelectedCategory] = useState<string>("Buyer")
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


    const buttons = [
        {
            value: 'Buyer',
            label: 'Buyer',
            onPress: () => { setSelected(buyer) },
            checkedColor: "white",
            style: choice === "Buyer" ? { backgroundColor: COLORS.primary } : COLORS.white,
            labelStyle: { fontSize: 16, fontWeight: "bold" }
        },
        {
            value: 'Seller',
            label: 'Seller',
            onPress: () => { setSelected(seller) },
            checkedColor: "white",
            style: choice === "Seller" ? { backgroundColor: COLORS.primary } : COLORS.white,
            labelStyle: { fontSize: 16, fontWeight: "bold" }
        },
        {
            value: 'Logistics',
            label: 'Logistics',
            onPress: () => { setSelected(logistics) },
            checkedColor: "white",
            style: choice === "Logistics" ? { backgroundColor: COLORS.primary } : COLORS.white,
            labelStyle: { fontSize: 16, fontWeight: "bold" },
            
        },


    ]


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

                                <SegmentedButton buttons={buttons} setValue={setChoice} value={choice} />

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
                                <MobileTextInput
                                    label="Enter Your Contact Number"
                                    value={values.contact}
                                    onChangeText={handleChange("contact")}
                                    onBlur={handleBlur("contact")}
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
                                <RegularInput
                                    label="Enter Farm Location"
                                    value={values.location}
                                    onChangeText={handleChange("location")}
                                    onBlur={handleBlur("location")}
                                />


                                {/* SIZE INPUT */}
                                <FarmSize
                                    onChangeText={handleChange("farm_size_length")}
                                    onChangeText1={handleChange("farm_size_width")}
                                    value={values?.farm_size_length}
                                    value1={values?.farm_size_width}
                                    onBlur={handleBlur("farm_size_length")}
                                    onBlur1={handleBlur("farm_size_width")}
                                    activeColor={"green"}
                                />

                                <BigTextInput
                                    label="Crops Cultivated"
                                    onBlur={handleBlur("crops_cultivated")}
                                    onChangeText={handleChange("crops_cultivated")}
                                    value={values.crops_cultivated}
                                    activeColor="green"
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
