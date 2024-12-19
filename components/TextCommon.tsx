import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  text: string;
  variant: string;
  style?: any;
}

const TextCommon: React.FC<Props> = ({style, text, variant, ...props}) => {
  let textStyle = {};

  switch (variant) {
    case 'xSmall':
      textStyle = styles.xSmall;
      break;
    case 'small':
      textStyle = styles.small;
      break;
    case 'smallv2':
      textStyle = styles.smallv2;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    case 'large':
      textStyle = styles.large;
      break;
    case 'default':
      textStyle = styles.small;
      break;
  }
  return (
    <Text style={[textStyle, style]} {...props}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  xSmall: {
    fontSize: 12,
  },
  small: {
    fontSize: 14,
  },
  smallv2: {
    fontSize: 18,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
});
export default TextCommon;
