import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/routes';

type OpeningProps = NativeStackScreenProps<
    RootStackParamList,
    'HomeScreen'
>;

const HomeScreen = ({ navigation }: OpeningProps) => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})