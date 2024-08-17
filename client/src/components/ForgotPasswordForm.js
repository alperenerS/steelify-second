import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import forgotPasswordStyles from '../styles/ForgotPasswordStyles';
import { AuthContext } from '../context/AuthContext';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const { setEmail: setContextEmail } = useContext(AuthContext);

  const handleSubmit = () => {
    setContextEmail(email);
    onSubmit(email);
  };

  return (
    <View style={forgotPasswordStyles.formContainer}>
      <Text style={forgotPasswordStyles.title}>Visual Inspection Hesabını Bul</Text>
      <Text style={forgotPasswordStyles.paragraph}>
        Şifreni değiştirmek için hesabınla ilişkilendirilmiş e-posta adresini gir.
      </Text>
      <View style={forgotPasswordStyles.inputContainer}>
        <TextInput
          style={forgotPasswordStyles.input}
          placeholder="E-posta adresi"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#000"
        />
      </View>
      <TouchableOpacity style={forgotPasswordStyles.button} onPress={handleSubmit}>
        <Text style={forgotPasswordStyles.buttonText}>Şifreyi Sıfırla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordForm;
