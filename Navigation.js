import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import SearchMoviesScreen from "./screens/SearchMoviesScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import Ionicons from '@expo/vector-icons/Ionicons';

const MainTab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

function HomeStackNavigator(){
    return(
        <HomeStack.Navigator
            initialRouteName="Home"
        >
            <HomeStack.Screen 
                name="Home"
                component={MainScreen}
            />
            <HomeStack.Screen 
                name="Detail"
            />
        </HomeStack.Navigator>
    )
}

function MyTabs(){

    return(
        <MainTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "blue"
            }}    
        >
            <MainTab.Screen 
                name="Home" 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            /> 
            <MainTab.Screen 
                name="Search" 
                component={SearchMoviesScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="search-sharp" size={size} color={color} />
                    ),
                }}
            />
            <MainTab.Screen 
                name="Profile" 
                component={UserProfileScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />  
        </MainTab.Navigator>
    )
}

export default function TabNavigator() {
    
    return(
        <NavigationContainer>
            <MyTabs /> 
        </NavigationContainer>
    )
}