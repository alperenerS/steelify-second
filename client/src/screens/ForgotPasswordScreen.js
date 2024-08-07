import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import forgotPasswordStyles from '../styles/ForgotPasswordStyles';
import { sendResetPasswordEmail } from '../services/ForgotPasswordService';

const ForgotPasswordScreen = () => {
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleForgotPassword = async (email) => {
    try {
      await sendResetPasswordEmail(email);
      navigation.navigate('PIN');
    } catch (error) {
      setError('Şifre sıfırlama e-postası gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={forgotPasswordStyles.container}>
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
      {error && <Text style={forgotPasswordStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default ForgotPasswordScreen;
