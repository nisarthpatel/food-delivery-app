import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  style?: any;
  onPress?: () => void;
}

const ButtonCommon: React.FC<Props> = ({ title, style, onPress, ...props }) => {
  return (
    <Pressable style={[styles.buttonStyles, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default ButtonCommon;

const styles = StyleSheet.create({
  buttonStyles: {
    paddingVertical: 15,
    width: '80%',
    borderRadius: 16,
    backgroundColor: '#c67c4e',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
