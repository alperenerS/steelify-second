import axios from 'axios';
import { API_BASE_URL } from '../config';

export const sendResetPasswordEmail = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/mail/resPasswdPin`, {
      to: email,
      subject: 'Steelify Hesabın için Şifre Sıfırlama İsteği',
    });
    return response.data;
  } catch (error) {
    console.error('Error sending reset password email:', error);
    throw error;
  }
};
