import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, BackHandler, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhotoInputs from '../components/PhotoInputs';
import PhotoScreenStyles from '../styles/PhotoScreenStyles';
import sendPhoto from '../services/PhotoSendService';
import CustomPopup from '../components/CustomPopup'; 
import LoadingPopup from '../components/LoadingPopup';

const PhotoScreen = ({ route, navigation }) => {
  const { photoUri } = route.params;
  const [error, setError] = useState('');
  const [comment, setComment] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await sendPhoto(photoUri, comment, error);
      setPopupMessage('Başarıyla Kaydedildi!');
      setPopupVisible(true);
    } catch (error) {
      console.error('Error in handleSave:', error);
      setPopupMessage('Fotoğraf gönderilemedi. Lütfen tekrar deneyin.');
      setPopupVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    setPopupVisible(false);
    navigation.replace('Fotoğraf Çek');
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          navigation.replace('Anasayfa');
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation]),
  );

  return (
    <ScrollView contentContainerStyle={PhotoScreenStyles.container}>
      <View style={PhotoScreenStyles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={PhotoScreenStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={PhotoScreenStyles.headerTitle}>Fotoğraf</Text>
      </View>
      <Image source={{ uri: photoUri }} style={PhotoScreenStyles.preview} />
      <PhotoInputs
        error={error}
        setError={setError}
        comment={comment}
        setComment={setComment}
      />
      <View style={PhotoScreenStyles.buttonContainer}>
        <TouchableOpacity
          style={PhotoScreenStyles.button}
          onPress={handleSave}>
          <Text style={PhotoScreenStyles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      <CustomPopup
        visible={isPopupVisible}
        message={popupMessage}
        onConfirm={handleConfirm}
        onClose={() => setPopupVisible(false)}
      />
      <LoadingPopup visible={isLoading} />
    </ScrollView>
  );
};

export default PhotoScreen;
