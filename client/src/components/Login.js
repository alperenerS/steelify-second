import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import loginStyles from '../styles/LoginStyles';
import colors from '../styles/Colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.inputFocus,
  },
};

const Login = ({ onLogin, onForgotPassword, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await onLogin(email, password);
    } catch (err) {
      setError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={loginStyles.container}>
        <Card style={loginStyles.card}>
          <Card.Title title="Giriş Yap" />
          <Card.Content>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={loginStyles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              label="Şifre"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={loginStyles.input}
              autoCapitalize="none"
            />
            <View style={loginStyles.linkContainer}>
              <TouchableOpacity onPress={onRegister}>
                <Text style={loginStyles.register}>Hesap Oluştur</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onForgotPassword}>
                <Text style={loginStyles.forgotPassword}>Şifreni mi unuttun?</Text>
              </TouchableOpacity>
            </View>
            {error ? <Text style={loginStyles.error}>{error}</Text> : null}
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleLogin} style={loginStyles.button}>
              Giriş Yap
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
  );
};

export default Login;
