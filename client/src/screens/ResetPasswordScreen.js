import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';
import resetPasswordStyles from '../styles/ResetPasswordStyles';
import { resetPassword } from '../services/ResetPasswordService';
import { AuthContext } from '../context/AuthContext';

const ResetPasswordScreen = ({ navigation }) => {
  const { email } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (newPassword, confirmPassword) => {
    try {
      await resetPassword(newPassword, confirmPassword, email);
      setMessage('Şifre başarıyla yenilendi.');
      setError('');
      setTimeout(() => {
        navigation.navigate('Giriş Yap');
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
