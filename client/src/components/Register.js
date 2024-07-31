import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import registerStyles from '../styles/RegisterStyles';
import colors from '../styles/colors2';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.inputFocus,
  },
};

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (name && surname && email && password && confirmPassword && company && position && phone) {
      if (password === confirmPassword) {
        const userInfo = {
          name,
          surname,
          email,
          password,
          company,
          position,
          phone,
        };
        onRegister(userInfo);
      } else {
        setError('Parolalar uyuşmuyor. Lütfen kontrol edin!');
      }
    } else {
      setError('Lütfen tüm alanları doldurun!');
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={registerStyles.container}>
        <Card style={registerStyles.card}>
          <Card.Title title="Kayıt Ol" />
          <Card.Content>
            <TextInput
              label="İsim"
              value={name}
              onChangeText={setName}
              style={registerStyles.input}
            />
            <TextInput
              label="Soyisim"
              value={surname}
              onChangeText={setSurname}
              style={registerStyles.input}
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={registerStyles.input}
            />
            <TextInput
              label="Şifre"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              right={<TextInput.Icon icon={() => <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} onPress={() => setShowPassword(!showPassword)} />} />}
              style={registerStyles.input}
            />
            <TextInput
              label="Şifreyi Onayla"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
              right={<TextInput.Icon icon={() => <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} onPress={() => setShowPassword(!showPassword)} />} />}
              style={registerStyles.input}
            />
            <TextInput
              label="Şirket Adı"
              value={company}
              onChangeText={setCompany}
              style={registerStyles.input}
            />
            <TextInput
              label="Pozisyon"
              value={position}
              onChangeText={setPosition}
              style={registerStyles.input}
            />
            <TextInput
              label="Telefon Numarası"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              style={registerStyles.input}
            />
            {error ? <Text style={registerStyles.error}>{error}</Text> : null}
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleRegister} style={registerStyles.button}>
              Kayıt Ol
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
  );
};

export default Register;
