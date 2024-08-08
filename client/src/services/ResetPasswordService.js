import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';

export const resetPassword = async (newPassword, confirmPassword) => {
  try {
    const userId = await AsyncStorage.getItem('user_id');
    const accessToken = await AsyncStorage.getItem('access_token');

    const response = await axios.put(
      `${API_BASE_URL}/user/updatePasswd/${userId}`,
      { newPassword, confirmPassword },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with an error:', error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error during the request:', error.message);
    }
    throw new Error('Network Error');
  }
};
