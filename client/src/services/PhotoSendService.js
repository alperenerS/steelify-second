import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { API_BASE_URL } from '../config';

const sendPhoto = async (photoUri, comments, errors) => {
  const formData = new FormData();
  formData.append('comments', comments);
  formData.append('errors', errors);
  formData.append('image_link', {
    uri: photoUri,
    type: 'image/jpeg',
    name: `photo_${Date.now()}.jpg`,
  });

  try {
    const bearerToken = await AsyncStorage.getItem('access_token');

    if (!bearerToken) {
      throw new Error('Bearer token not found');
    }

    const response = await axios.post(`${API_BASE_URL}/photos/send`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    console.log('Photo upload response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Photo upload failed:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
      Alert.alert('Hata', `Sunucu hatası: ${error.response.status}`);
    } else if (error.request) {
      console.error('Error request:', error.request);
      Alert.alert('Hata', 'Sunucuya ulaşamıyor. Lütfen ağ bağlantınızı kontrol edin.');
    } else {
      console.error('Error message:', error.message);
      Alert.alert('Hata', `Bilinmeyen bir hata oluştu: ${error.message}`);
    }
    throw error;
  }
};

export default sendPhoto;
