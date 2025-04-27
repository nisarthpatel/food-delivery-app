import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './login-project-screens/SignUpScreen';
import VerificationScreen from './login-project-screens/VerificationScreen';
import CreatePasswordScreen from './login-project-screens/CreatePasswordScreen';
import LoginScreen from './login-project-screens/LoginScreen';
import SuccessAccountScreen from './login-project-screens/SuccessAccountScreen';

export type RootStackParamList = {
  SignUpScreen: undefined;
  VerificationScreen: undefined;
  CreatePasswordScreen: undefined;
  SuccessAccountScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
        />
        <Stack.Screen
          name="SuccessAccountScreen"
          component={SuccessAccountScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
