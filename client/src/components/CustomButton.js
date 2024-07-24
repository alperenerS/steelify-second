import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CustomButton = ({ title, onPress, type = 'primary' }) => {
  const buttonStyle = type === 'primary' ? globalStyles.buttonPrimary : globalStyles.buttonSecondary;
  const textStyle = type === 'primary' ? globalStyles.buttonPrimaryText : globalStyles.buttonSecondaryText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
