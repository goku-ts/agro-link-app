import React, { useState } from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES } from "../constants";
import PrrofileScreen from "../screens/Profile";
import Settings from "../screens/Settings";
import { scale } from "react-native-size-matters";

import { InventoryStackScreens, MarketplaceStackScreens,ScanStackScreens,ServiceStackScreens } from "./screensStack";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    const [userCategory, setUserCategory] = useState("buyer")
    // React.useEffect(() => {
    //    setUserCategory("aggregator")
    // }, [])


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                headerShown: false,
                headerShadowVisible: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    // height: scale(SCREEN.height * 0.08),
                    // paddingLeft: 10,
                    // paddingRight: 10,
                    paddingTop : 5,
                    borderTopWidth: 0.5,
                    backgroundColor: COLORS.lightGray2,
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.lightGray4;

                    switch (route.name) {
                        case "Market":
                            return (
                                <Image
                                    source={icons.market_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )


                        case "Services":
                            return (
                                <Image
                                    source={icons.services_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Inventory":
                            return (
                                <Image
                                    source={icons.inventory_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Scan":
                            return (
                                <Image
                                    source={icons.scan_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )


                        case "Profile":
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
                name="Market"
                component={MarketplaceStackScreens}
            />

            <Tab.Screen
                name="Services"
                component={ServiceStackScreens}
            />



            {userCategory === "buyer" ? <Tab.Screen
                name="Scan"
                component={ScanStackScreens}
            /> :
                <Tab.Screen
                    name="Inventory"
                    component={InventoryStackScreens}
                />
            }


            <Tab.Screen
                name="Profile"
                component={PrrofileScreen}
            />



        </Tab.Navigator>
    )
}

export default Tabs;