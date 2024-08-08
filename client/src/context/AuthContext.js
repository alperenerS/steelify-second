import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('access_token');
    setLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const login = async (token) => {
    await AsyncStorage.setItem('access_token', token);
    setLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('user_id');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, checkLoginStatus, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
