import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS } from "../constants";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import { scale } from "react-native-size-matters";

import Seller from "../screens/Sellers/Seller";
import { SmallHolderStackScreen, AggregatorStackScreen, CommercialStackScreen } from "./screensStack";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    // const [userCategory, setUserCategory] = React.useState("small_holder")
    // React.useEffect(() => {
    //    setUserCategory("aggregator")
    // }, [])
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                headerShown: false,
                headerShadowVisible: false,
                tabBarLabelStyle :{
fontSize:15
                },
                tabBarStyle: {
                    height: scale(50),
                    paddingLeft: 10,
                    paddingRight: 10,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0.5,
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black : COLORS.lightGray4;

                    switch (route.name) {
                        case "Listings":
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


                        case "Inventory":
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
                name="Listings"
                component={SmallHolderStackScreen}
            />

            <Tab.Screen
                name="Inventory"
                component={Profile}
            />
            <Tab.Screen
                name="Profile"
                component={Settings}
            />
            


        </Tab.Navigator>
    )
}

export default Tabs;