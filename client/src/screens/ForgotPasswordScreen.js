import React from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import forgotPasswordStyles from '../styles/ForgotPasswordStyles';
import { sendResetPasswordEmail } from '../services/ForgotPasswordService';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleForgotPassword = async (email) => {
    try {
      await sendResetPasswordEmail(email);
      navigation.navigate('PIN', { email });
    } catch (error) {
      Alert.alert('Hata', 'Şifre sıfırlama e-postası gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={forgotPasswordStyles.container}>
      <ForgotPasswordForm onSubmit={handleForgotPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
