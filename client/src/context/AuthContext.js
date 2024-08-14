import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      try {
        await verifyToken(token);
        setLoggedIn(true);
      } catch (error) {
        await logout();
      }
    }
    setLoading(false);
  };

  const verifyToken = async (token) => {
    try {
      await axios.get(`${API_BASE_URL}/auth/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw new Error('Invalid token');
    }
  };

  const login = async (token) => {
    await AsyncStorage.setItem('access_token', token);
    setLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('access_token');
    setLoggedIn(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, checkLoginStatus, email, setEmail, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
