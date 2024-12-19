import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import {Image, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  OnBoardingScreen: undefined;
  HomeScreen: undefined;
  FavoritesScreen: undefined;
  CartScreen: undefined;
  NotificationsScreen: undefined;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        ...styles.shadow,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons8-home-64.png')}
              label="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons8-favorites-48.png')}
              label="Favorites"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons8-cart-50.png')}
              label="Cart"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons8-notification-48.png')}
              label="Notifications"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon = ({
  source,
  focused,
}: {
  source: any;
  label: string;
  focused: boolean;
}) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={source}
      resizeMode="contain"
      style={[styles.icon, {tintColor: focused ? '#e32f45' : '#748c94'}]}
    />
  </View>
);

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoardingScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});
