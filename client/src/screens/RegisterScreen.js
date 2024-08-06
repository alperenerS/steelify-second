import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Register from '../components/Register';
import GlobalStyles from '../styles/GlobalStyles';
import { registerUser } from '../services/RegisterService';

const RegisterScreen = ({ navigation }) => {
  const handleRegister = async (userInfo) => {
    try {
      const response = await registerUser(userInfo);
      console.log('User registered successfully:', response);
      Alert.alert('Kayıt Başarılı', 'Kayıt işlemi başarıyla tamamlandı.', [
        { text: 'OK', onPress: () => navigation.navigate('Giriş Yap') },
      ]);
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Kayıt Hatası', 'Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Register onRegister={handleRegister} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
