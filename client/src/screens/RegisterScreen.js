import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Register from '../components/Register';
import GlobalStyles from '../styles/GlobalStyles';
import { registerUser } from '../services/RegisterService';
import CustomPopup from '../components/CustomPopup';

const RegisterScreen = ({ navigation }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = async (userInfo) => {
    try {
      const response = await registerUser(userInfo);
      console.log('User registered successfully:', response);
      setPopupMessage('Kayıt işlemi başarıyla tamamlandı.');
      setIsSuccess(true);
      setPopupVisible(true);
    } catch (error) {
      console.error('Registration error:', error);
      setPopupMessage('Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      setIsSuccess(false);
      setPopupVisible(true);
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    if (isSuccess) {
      navigation.navigate('Giriş Yap');
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Register onRegister={handleRegister} />
      <CustomPopup
        visible={popupVisible}
        message={popupMessage}
        onConfirm={handlePopupClose}
        onClose={handlePopupClose}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
