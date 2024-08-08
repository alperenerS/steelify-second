import axios from 'axios';
import { API_BASE_URL } from '../config';

export const resetPassword = async (newPassword, confirmPassword, email) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/auth/forgotPassword`, {
      newPassword,
      confirmPassword,
      mail: email,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
