import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import forgotPasswordStyles from '../styles/ForgotPasswordStyles';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <View style={forgotPasswordStyles.formContainer}>
      <View style={forgotPasswordStyles.inputContainer}>
        <TextInput
          style={forgotPasswordStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button title="Şifreyi Sıfırla" onPress={handleSubmit} />
    </View>
  );
};

export default ForgotPasswordForm;
