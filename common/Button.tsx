import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
type ButtonProps = {
  name: string;
  onPress: () => void;
};
const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.name} </Text>
    </TouchableOpacity>
  );
};

const ButtonBackgroundColors = {
  primary: 'darkcyan',
  destructive: 'red',
  line: 'white',
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: ButtonBackgroundColors.primary,
    fontSize: 30,
    lineHeight: 80,
    margin: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#DDDDDD',
  },
});
