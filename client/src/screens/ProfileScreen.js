import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Profile from '../components/Profile';
import globalStyles from '../styles/GlobalStyles';
import ProfileStyles from '../styles/ProfileStyles';
import { getUserInfo } from '../services/ProfileService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        if (!token) {
          navigation.navigate('Giriş Yap');
          return;
        }

        const data = await getUserInfo();
        setUserInfo(data);
      } catch (err) {
        setError('Kullanıcı bilgileri alınamadı. Lütfen tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <View style={[globalStyles.container, ProfileStyles.screen]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[globalStyles.container, ProfileStyles.screen]}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={[globalStyles.container, ProfileStyles.screen]}>
      {userInfo && (
        <Profile
          name={userInfo.name}
          surname={userInfo.surname}
          email={userInfo.email}
          phone={userInfo.phoneNumber}
        />
      )}
    </View>
  );
};

export default ProfileScreen;
