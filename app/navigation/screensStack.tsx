import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Small from "../screens/Sellers/Small"
import Commercial from "../screens/Sellers/Commercial"
import Aggregator from "../screens/Sellers/Aggregator"
import Seller from "../screens/Sellers/Seller"
import Register from "../screens/Auth/Register"
import Login from "../screens/Auth/Login"

// export const SellerStack = () => {

//     const Stack = createStackNavigator()

//     return (
//             <Stack.Navigator initialRouteName="seller" screenOptions={{headerShown : false}}>
//                 <Stack.Screen name="seller" component={Seller} />
//                 <Stack.Screen name="small" component={Small} />
//                 <Stack.Screen name="commercial" component={Commercial} />
//                 <Stack.Screen name="aggregator" component={Aggregator} />
//             </Stack.Navigator>
//     )
// }

export const SmallHolderStackScreen = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="small" screenOptions={{headerShown : false}}>
                <Stack.Screen name="small" component={Small} />
            </Stack.Navigator>
    )
}
export const AggregatorStackScreen = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="aggregator" screenOptions={{headerShown : false}}>
                <Stack.Screen name="aggregator" component={Aggregator} />
            </Stack.Navigator>
    )
}
export const CommercialStackScreen = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="commercial" screenOptions={{headerShown : false}}>
                <Stack.Screen name="commercial" component={Commercial} />
            </Stack.Navigator>
    )
}

export const AuthStack = () => {

    const Stack = createStackNavigator()

    return (
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown : false}}>
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
    )
}