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
      {...props}
    />
  );
};

export default InputCommon;

const styles = StyleSheet.create({
  placeholderStyles: {
    borderBottomWidth: 0.5,
    fontWeight: 500,
    fontSize: 15,
    color: '#000000',
  },
});
