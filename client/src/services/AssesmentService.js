import axios from 'axios';
import { API_BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getRandomAssesments = async () => {
  try {
    const bearerToken = await AsyncStorage.getItem('access_token');
    const response = await axios.get(`${API_BASE_URL}/photos/random`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log('Fetched random assessments: ', response.data.data); // Gelen veriyi yazdır
    return response.data.data;
  } catch (error) {
    console.error('Error fetching random assessments:', error);
    throw error;
  }
};
