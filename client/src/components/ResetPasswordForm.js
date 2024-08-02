import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import resetPasswordStyles from '../styles/ResetPasswordStyles';

const ResetPasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (password === confirmPassword) {
      onSubmit(password);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <View style={resetPasswordStyles.formContainer}>
      <View style={resetPasswordStyles.inputContainer}>
        <TextInput
          style={resetPasswordStyles.input}
          placeholder="Yeni Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor="#000"
        />
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          style={resetPasswordStyles.icon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={resetPasswordStyles.inputContainer}>
        <TextInput
          style={resetPasswordStyles.input}
          placeholder="Şifreyi Onayla"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          placeholderTextColor="#000"
        />
        <Ionicons
          name={showConfirmPassword ? "eye-off" : "eye"}
          size={24}
          style={resetPasswordStyles.icon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </View>
      <Button title="Şifreyi Yenile" onPress={handleSubmit} />
    </View>
  );
};

export default ResetPasswordForm;
