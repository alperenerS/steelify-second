import React from 'react';
import { SafeAreaView } from 'react-native';
import Register from '../components/Register';
import GlobalStyles from '../styles/GlobalStyles';

const RegisterScreen = ({ navigation }) => {
  const handleRegister = (userInfo) => {
    console.log('User Info:', userInfo);
    navigation.navigate('Giriş Yap');
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Register onRegister={handleRegister} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
