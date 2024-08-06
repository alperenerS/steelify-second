import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://localhost:8082/api';

export const getRandomAssesments = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await axios.get(`${API_BASE_URL}/assessment/random`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; // Veriyi direkt olarak döndürüyoruz
  } catch (error) {
    console.error('Error fetching assessments:', error);
    throw error;
  }
};
