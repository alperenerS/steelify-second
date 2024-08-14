import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const accessToken = response.data.data.access_token;
    const userId = response.data.data.data.id;
    const name = response.data.data.data.name;

    await AsyncStorage.setItem('access_token', accessToken);
    await AsyncStorage.setItem('user_id', userId.toString());
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);
    
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
