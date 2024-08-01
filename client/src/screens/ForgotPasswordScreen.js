import React from 'react';
import { View } from 'react-native';
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
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
