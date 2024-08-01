import React from 'react';
import { View } from 'react-native';
import Login from '../components/Login';
import globalStyles from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
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
