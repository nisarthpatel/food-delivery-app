import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    OnBoardingScreen: undefined;
    HomeScreen: undefined;
    FavoritesScreen: undefined;
    CartScreen: undefined;
    NotificationsScreen: undefined;
};

const HomeTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="CartScreen" component={CartScreen} />
        <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Tab.Navigator>
);

export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="OnBoardingScreen"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <Stack.Screen name="HomeScreen" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
