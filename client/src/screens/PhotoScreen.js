import React, { useState } from 'react';
import { View, Image, ScrollView, Button, Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PhotoInputs from '../components/PhotoInputs';
import PhotoScreenStyles from '../styles/PhotoScreenStyles';
import sendPhoto from '../services/PhotoSendService';

const PhotoScreen = ({ route, navigation }) => {
  const { photoUri } = route.params;
  const [error, setError] = useState('');
  const [comment, setComment] = useState('');

  const handleSave = async () => {
    try {
      await sendPhoto(photoUri, comment, error);
      Alert.alert('Kaydedildi', 'Hata ve yorum başarıyla kaydedildi.');
      navigation.replace('Fotoğraf Çek'); // Replace the current screen with "Fotoğraf Çek"
    } catch (error) {
      Alert.alert('Hata', 'Fotoğraf gönderilemedi. Lütfen tekrar deneyin.');
    }
  };

  // Prevent navigating back to "Fotoğraf" screen
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          navigation.replace('Fotoğraf Çek'); // Replace the current screen with "Fotoğraf Çek"
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  return (
    <ScrollView contentContainerStyle={PhotoScreenStyles.container}>
      <Image source={{ uri: photoUri }} style={PhotoScreenStyles.preview} />
      <PhotoInputs
        error={error}
        setError={setError}
        comment={comment}
        setComment={setComment}
      />
      <View style={PhotoScreenStyles.buttonContainer}>
        <Button title="Kaydet" onPress={handleSave} />
      </View>
    </ScrollView>
  );
};

export default PhotoScreen;
