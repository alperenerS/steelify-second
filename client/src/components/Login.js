import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import loginStyles from '../styles/LoginStyles';
import colors from '../styles/colors2';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.inputFocus,
  },
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
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
              label="Kullanıcı Adı"
              value={username}
              onChangeText={setUsername}
              style={loginStyles.input}
            />
            <TextInput
              label="Şifre"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={loginStyles.input}
            />
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
