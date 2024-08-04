import React from 'react';
import { View, Alert } from 'react-native';
import Login from '../components/Login';
import globalStyles from '../styles/GlobalStyles';
import { loginUser } from '../services/LoginService';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      console.log('User logged in successfully:', response);
      Alert.alert('Giriş Başarılı', 'Giriş işlemi başarıyla tamamlandı.', [
        { text: 'OK', onPress: () => navigation.navigate('Profil') },
      ]);
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Giriş Hatası', 'Giriş işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('Şifremi Unuttum');
  };

  return (
    <View style={globalStyles.container}>
      <Login onLogin={handleLogin} onForgotPassword={handleForgotPassword} />
    </View>
  );
};

export default LoginScreen;
