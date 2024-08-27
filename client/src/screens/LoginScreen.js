import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Login from '../components/Login';
import globalStyles from '../styles/GlobalStyles';
import { loginUser } from '../services/LoginService';
import CustomPopup from '../components/CustomPopup';

const LoginScreen = ({ navigation }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [autoClose, setAutoClose] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      setPopupMessage('Giriş işlemi başarıyla tamamlandı.');
      setPopupVisible(true);
      setAutoClose(true);  // Popup'ın otomatik kapanması için ayarlandı
    } catch (error) {
      console.error('Login error:', error);
      setPopupMessage('Giriş işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      setPopupVisible(true);
      setAutoClose(false);  // Hata durumunda otomatik kapanma olmayacak
    }
  };

  useEffect(() => {
    if (popupVisible && autoClose) {
      const timer = setTimeout(() => {
        handleConfirm();
      }, 3000);  // 3 saniye sonra otomatik kapatma

      return () => clearTimeout(timer);  // Cleanup function
    }
  }, [popupVisible, autoClose]);

  const handleConfirm = () => {
    setPopupVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs' }],
    });
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Şifremi Unuttum');
  };

  const handleRegister = () => {
    navigation.navigate('Kayıt Ol');
  };

  return (
    <View style={globalStyles.container}>
      <Login
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onRegister={handleRegister}
      />
      <CustomPopup
        visible={popupVisible}
        message={popupMessage}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </View>
  );
};

export default LoginScreen;
