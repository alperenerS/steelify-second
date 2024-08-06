import AsyncStorage from '@react-native-async-storage/async-storage';

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('user_id');
  } catch (error) {
    console.error('Failed to logout:', error);
    throw error;
  }
};
