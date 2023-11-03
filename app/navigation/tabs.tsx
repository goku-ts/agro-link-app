import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { icons, COLORS } from "../constants";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import { scale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    height: scale(50) ,
                    paddingLeft: 10,
                    paddingRight: 10,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0.5,
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black : COLORS.lightGray4;

                    switch (route.name) {
                        case "Home2":
                            return (
                                <Image
                                    source={icons.home_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                    
                        case "Settings":
                            return (
                                <Image
                                    source={icons.eng_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        

                        case "User":
                            return (
                                <Image
                                    source={icons.user_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home2"
                component={Home}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
            />
            <Tab.Screen
                name="User"
                component={Profile}
            />
           
        </Tab.Navigator>
    )
}

export default Tabs;