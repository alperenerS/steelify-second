import axios from 'axios';
import {API_BASE_URL} from '../config';

export const registerUser = async userInfo => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userInfo,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error during user registration:',
      error.response || error.message || error,
    );
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
