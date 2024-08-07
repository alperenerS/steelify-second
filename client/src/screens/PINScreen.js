import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import PIN from '../components/PIN';
import PINStyles from '../styles/PINStyles';

const PINScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (pin.length === 4) {
      Alert.alert('Başarılı', 'PIN kodu doğru.');
    } else {
      Alert.alert('Hata', 'Lütfen 4 haneli PIN kodunu girin.');
    }
  };

  return (
    <View style={PINStyles.container}>
      <Text style={PINStyles.title}>PIN Kodunuzu Girin</Text>
      <PIN pin={pin} setPin={setPin} />
      <Button title="Gönder" onPress={handleSubmit} />
    </View>
  );
};

export default PINScreen;
