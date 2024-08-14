import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Profile from '../components/Profile';
import globalStyles from '../styles/GlobalStyles';
import ProfileStyles from '../styles/ProfileStyles';
import { getUserInfo } from '../services/ProfileService';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { loggedIn } = useContext(AuthContext);
  const navigation = useNavigation();  // useNavigation kancasını kullanarak navigation nesnesini alıyoruz

  const fetchUserInfo = async () => {
    try {
      const data = await getUserInfo();
      setUserInfo(data);
    } catch (err) {
      setError('Failed to load user info.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchUserInfo();
    } else {
      navigation.navigate('Anasayfa');
    }
  }, [loggedIn]);

  useFocusEffect(
    React.useCallback(() => {
      if (loggedIn) {
        fetchUserInfo();
      }
    }, [loggedIn])
  );

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
        {/* <TouchableOpacity style={ProfileStyles.iconWrapper}>
          <Ionicons name="settings-outline" size={24} style={ProfileStyles.icon} />
        </TouchableOpacity> */}
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
