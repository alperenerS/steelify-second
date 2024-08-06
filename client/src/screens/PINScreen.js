import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import PIN from '../components/PIN';
import PINStyles from '../styles/PINStyles';
import { validatePIN } from '../services/PINService';

const PINScreen = ({ navigation, route }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const email = route.params?.email;

  const handleSubmit = async () => {
    if (pin.length === 4) {
      try {
        await validatePIN(email, pin);
        navigation.navigate('NextScreen'); // Doğruysa yönlendirilecek ekran
      } catch (error) {
        setError('PIN doğrulaması sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } else {
      setError('Lütfen 4 haneli PIN kodunu girin.');
    }
  };

  return (
    <View style={PINStyles.container}>
      <Text style={PINStyles.title}>PIN Kodunuzu Girin</Text>
      <PIN pin={pin} setPin={setPin} />
      {error && <Text style={PINStyles.errorText}>{error}</Text>}
      <Button title="Gönder" onPress={handleSubmit} />
    </View>
  );
};

export default PINScreen;
