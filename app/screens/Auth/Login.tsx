import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { SubmitButton } from "../../components/buttons/SubmitButton";

import {
  FormInput,
  PasswordInput,
} from "../../components/textInputs/TextInputs";
import { COLORS, images } from "../../constants";
import { SCREEN } from "../../constants/theme";

const Login = ({ navigation, route }) => {
  const initialValues = {
    phone_number: "",
    password: "",
  };

  const [message, setMessage] = useState();



  const validationSchema = Yup.object({
    phone_number: Yup.string()
      .required("Mobile Number is required")
      .min(9, "Enter Valid Mobile Number")
      .max(9, "Enter Valid Mobile Number"),
    password: Yup.string().required("Password is required"),
  });

  const handleSignIn = (values: typeof initialValues) => {
    // Perform sign-in logic here
    axios
      .post("", {
        phone_number: values.phone_number,
        password: values.password,
      })
      .then((response) => {
        setMessage(response?.data.message);
        if (response?.data?.status === "SUCCESS") {
          navigation.navigate("Notes");
        }
      })
      .catch((e) => console.log(e));
  };

  const [submit, isSubmit] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {message && (
            <Text style={[styles.errorText, { fontSize: 12 }]}>{message}</Text>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignIn}
          >
            {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
              <View style={styles.fieldsandbutton}>
                <View style={{ justifyContent: "center", alignItems: "center", height: SCREEN.height * 0.1 }}>
                  <Image source={images.logo} />
                </View>
                {submit && errors.phone_number && (
                  <Text style={styles.errorText}>{errors.phone_number}</Text>
                )}
                <FormInput
                  placeholder="Mobile Number"
                  value={values.phone_number}
                  onChangeText={handleChange("phone_number")}
                  onBlur={handleBlur("phone_number")}
                  keyboardType="number-pad"
                  type={"phone"}
                // icon={"person-outline"}
                />


                {submit && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <PasswordInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                // icon={"key-outline"}
                />


                <SubmitButton color={COLORS.primary} name={"Login"} onPress={() => {
                  isSubmit(true);
                  handleSubmit();
                }} />
              </View>
            )}
          </Formik>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.signUpLink}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

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
  fieldsandbutton: {
    alignItems: "center",
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

export default Login;
