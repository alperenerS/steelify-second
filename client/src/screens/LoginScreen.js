import React from 'react';
import { View } from 'react-native';
import Login from '../components/Login';
import globalStyles from '../styles/GlobalStyles2';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={globalStyles.container}>
      <Login onLogin={handleLogin} />
    </View>
  );
};

export default LoginScreen;
