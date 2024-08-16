import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';

export const getUserInfo = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    const userId = await AsyncStorage.getItem('user_id');

    if (!accessToken || !userId) throw new Error('Unauthorized');

    const response = await axios.get(`${API_BASE_URL}/user/info/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserInfo = async (name, surname, phoneNumber) => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    const email = await AsyncStorage.getItem('email');

    if (!accessToken || !email) throw new Error('Unauthorized');

    const response = await axios.put(`${API_BASE_URL}/user/updateData`, {
      email,
      name,
      surname,
      phoneNumber,
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

// Kullanıcının review ettiği fotoğrafları almak için yeni fonksiyon
export const getReviewedPhotos = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    if (!accessToken) throw new Error('Unauthorized');

    const response = await axios.get(`${API_BASE_URL}/reviewed-photos/myReviewedPhotos`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    console.error('Server responded with an error:', error.response.data);
    throw error.response.data;
  } else if (error.request) {
    console.error('No response received:', error.request);
    throw new Error('No response received');
  } else {
    console.error('Error during the request:', error.message);
    throw new Error(error.message);
  }
};
