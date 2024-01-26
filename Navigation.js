import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import SearchMoviesScreen from "./screens/SearchMoviesScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import MovieDetailScreen from "./screens/MovieDetailScreen";

const MainTab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const SearchStack = createNativeStackNavigator()

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
                component={MovieDetailScreen}
            />
        </HomeStack.Navigator>
    )
}

function SearchStackNavigator(){
    return(
        <SearchStack.Navigator
            initialRouteName="Search"
        >
            <SearchStack.Screen 
                name="Search"
                component={SearchMoviesScreen}
            />
            <SearchStack.Screen 
                name="Detail"
                component={MovieDetailScreen}
            />
        </SearchStack.Navigator>
    )
}

function MyTabs(){

    return(
        <MainTab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                tabBarActiveTintColor: "blue"
            }}    
        >
            <MainTab.Screen 
                name="HomeTab" 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            /> 
            <MainTab.Screen 
                name="SearchTab" 
                component={SearchStackNavigator} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="search-sharp" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <MainTab.Screen 
                name="ProfileTab" 
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