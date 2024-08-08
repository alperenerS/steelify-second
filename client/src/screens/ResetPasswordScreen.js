import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';
import resetPasswordStyles from '../styles/ResetPasswordStyles';
import { resetPassword } from '../services/ResetPasswordService';

const ResetPasswordScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (newPassword) => {
    try {
      await resetPassword(newPassword);
      setMessage('Şifre başarıyla yenilendi.');
      setError('');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } catch (error) {
      setMessage('');
      setError('Şifre yenilenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={resetPasswordStyles.container}>
      <Text style={resetPasswordStyles.title}>Şifreyi Yenile</Text>
      <ResetPasswordForm onSubmit={handleResetPassword} />
      {message ? <Text style={resetPasswordStyles.successMessage}>{message}</Text> : null}
      {error ? <Text style={resetPasswordStyles.errorMessage}>{error}</Text> : null}
    </View>
  );
};

export default ResetPasswordScreen;
