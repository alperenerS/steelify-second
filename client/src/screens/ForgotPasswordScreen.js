import React from 'react';
import { View, Text } from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import forgotPasswordStyles from '../styles/ForgotPasswordStyles';

const ForgotPasswordScreen = () => {
  const handleForgotPassword = (email) => {
    // TODO: connect with API
    console.log('Şifre sıfırlama için e-posta:', email);
    // TODO: Mail send
};

  return (
    <View style={forgotPasswordStyles.container}>
      <Text style={forgotPasswordStyles.title}>Şifreni mi Unuttun?</Text>
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
