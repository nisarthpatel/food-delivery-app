import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    OnBoardingScreen: undefined;
    HomeScreen: undefined;
};

export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="OnBoardingScreen"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



const styles = StyleSheet.create({})