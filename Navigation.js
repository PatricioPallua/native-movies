import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import SearchMoviesScreen from "./screens/SearchMoviesScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

const Tab = createBottomTabNavigator()

function MyTabs(){

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainScreen} /> 
            <Tab.Screen name="Search" component={SearchMoviesScreen} />
            <Tab.Screen name="Profile" component={UserProfileScreen} />  
        </Tab.Navigator>
    )
}

export default function TabNavigator() {
    
    return(
        <NavigationContainer>
            <MyTabs /> 
        </NavigationContainer>
    )
}