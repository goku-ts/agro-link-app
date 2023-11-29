import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Register from "../screens/Auth/Register"
import Login from "../screens/Auth/Login"
import Profile from "../screens/Auth/Profile"

// MARKETPLACE SCREENS
import ListingDetails from "../screens/Marketplace/ListingDetails"
import Listings from "../screens/Marketplace/Listings"

//SERVICES SCREEN
import Services from "../screens/Services/Services"
import ServicesDetails from "../screens/Services/ServicesDetails"

//SCAN SCREEN
import ScanScreen from "../screens/Scan/Main"
import ScanDetails from "../screens/Scan/ScanDetails"

//PROFILE SCREEN
import PrrofileScreen from "../screens/Profile"

//INVENTORY SCREEN
import Inventory from "../screens/Inventory/Main"
import AddInventory from "../screens/Inventory/Management/AddInventory copy"
import UpdateInventory from "../screens/Inventory/Management/UpdateInventory"

export const MarketplaceStackScreens = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="listing" screenOptions={{headerShown : false}}>
                <Stack.Screen name="listings" component={Listings} />
                <Stack.Screen name="listing_details" component={ListingDetails} />
            </Stack.Navigator>
    )
}
export const ServiceStackScreens = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="services" screenOptions={{headerShown : false}}>
                <Stack.Screen name="services" component={Services} />
                <Stack.Screen name="service_details" component={ServicesDetails} />
            </Stack.Navigator>
    )
}
export const ScanStackScreens = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="scan" screenOptions={{headerShown : false}}>
                <Stack.Screen name="scan" component={ScanScreen} />
                <Stack.Screen name="scan_details" component={ScanDetails} />
            </Stack.Navigator>
    )
}

export const InventoryStackScreens = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="inventory" screenOptions={{headerShown : false}}>
                <Stack.Screen name="inventory" component={Inventory} />
                <Stack.Screen name="add_inventory" component={AddInventory} />
                <Stack.Screen name="update_inventory" component={UpdateInventory} />
            </Stack.Navigator>
    )
}

export const AuthStack = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="profile" screenOptions={{headerShown : false}}>
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="profile" component={Profile} />
            </Stack.Navigator>
    )
}