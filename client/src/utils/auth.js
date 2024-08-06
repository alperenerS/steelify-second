import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedIn = async () => {
  const token = await AsyncStorage.getItem('access_token');
  return !!token;
};
