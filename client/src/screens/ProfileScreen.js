import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../components/Profile';
import globalStyles from '../styles/GlobalStyles';
import ProfileStyles from '../styles/ProfileStyles';
import { getUserInfo } from '../services/ProfileService';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data);
      } catch (err) {
        setError('Kullanıcı bilgileri alınamadı. Lütfen tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    if (loggedIn) {
      fetchUserInfo();
    } else {
      navigation.navigate('Anasayfa');
    }
  }, [loggedIn]);

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
      <View style={ProfileStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={ProfileStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={ProfileStyles.headerTitle}>Profilim</Text>
      </View>
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
