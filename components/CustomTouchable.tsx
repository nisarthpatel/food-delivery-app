import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

interface CustomTouchableProps {
    onPress?: () => void;
    component: React.ReactNode
}

const CustomTouchable: React.FC<CustomTouchableProps> = ({ component, onPress, ...props }) => {
    return (
        <TouchableHighlight onPress={onPress} {...props}>{component}</TouchableHighlight>
    )
}

export default CustomTouchable

const styles = StyleSheet.create({})