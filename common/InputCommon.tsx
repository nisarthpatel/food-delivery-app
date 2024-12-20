import React, { ComponentProps } from 'react';
import { StyleSheet, TextInput } from 'react-native';
interface Props {
  placeholder: string;
  style?: any;
}
const InputCommon: React.FC<Props & ComponentProps<typeof TextInput>> = ({
  placeholder,
  style,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.placeholderStyles, style]}
      placeholder={placeholder} 
      placeholderTextColor={'white'}
      
      {...props}
    />
  );
};

export default InputCommon;

const styles = StyleSheet.create({
  placeholderStyles: {
    fontWeight: 300,
    fontSize: 18,
  },
});
