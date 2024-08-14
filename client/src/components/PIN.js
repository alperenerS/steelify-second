import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';
import PINStyles from '../styles/PINStyles';

const PIN = ({ pin, setPin }) => {
  const pinRefs = useRef([]);

  const handleChange = (value, index) => {
    const newPin = pin.split('');
    newPin[index] = value;
    setPin(newPin.join(''));

    // Otomatik geçişi sağlamak için
    if (value && index < 3) {
      pinRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !pin[index]) {
      pinRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={PINStyles.inputContainer}>
      {Array(4).fill(0).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (pinRefs.current[index] = ref)}
          style={PINStyles.input}
          keyboardType="numeric"
          maxLength={1}
          value={pin[index] || ''}
          onChangeText={(value) => handleChange(value, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          placeholderTextColor="black"
        />
      ))}
    </View>
  );
};

export default PIN;
