import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';

export const sendAssesmentComment = async (imageId, comments, errors, reviewedImageLink, name) => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    if (!accessToken) throw new Error('Unauthorized');

    const formData = new FormData();
    formData.append('image_id', imageId);
    formData.append('comments', comments);
    formData.append('errors', errors);
    formData.append('reviewed_image_link', {
      uri: reviewedImageLink,
      name: `${name}.jpg`,
      type: 'image/jpeg',
    });

    const response = await axios.post(`${API_BASE_URL}/assessment/send`, formData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
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
