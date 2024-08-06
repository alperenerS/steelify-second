import axios from 'axios';
import { API_BASE_URL } from '../config';

export const validatePIN = async (email, pin) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pin/validate`, {
      mail: email,
      pin: pin,
    });
    return response.data;
  } catch (error) {
    console.error('Error validating PIN:', error);
    throw error;
  }
};
