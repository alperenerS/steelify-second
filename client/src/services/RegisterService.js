import { API_BASE_URL } from '../config';

export const registerUser = async (userInfo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Kayıt işlemi başarısız oldu');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
