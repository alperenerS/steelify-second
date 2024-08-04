import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';

export const getUserInfo = async () => {
  try {
    // GET access token and user ID from AsyncStorage
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
  }
};
