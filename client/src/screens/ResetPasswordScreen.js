import React from 'react';
import { View, Text } from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';
import resetPasswordStyles from '../styles/ResetPasswordStyles';

const ResetPasswordScreen = () => {
  const handleResetPassword = (newPassword) => {
    // will be connected w/API
    console.log('Yeni şifre:', newPassword);
  };

  return (
    <View style={resetPasswordStyles.container}>
      <Text style={resetPasswordStyles.title}>Şifreyi Yenile</Text>
      <ResetPasswordForm onSubmit={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;
