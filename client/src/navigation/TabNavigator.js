import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { AuthContext } from '../context/AuthContext';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { loggedIn, checkLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Anasayfa') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Kamera') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Giriş Yap') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Kayıt Ol') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Şifre Sıfırla') {
            iconName = focused ? 'key' : 'key-outline';
          } else if (route.name === 'Şifremi Unuttum') {
            iconName = focused ? 'help' : 'help-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6F00',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Kamera" component={CameraScreen} />
      {loggedIn ? (
        <Tab.Screen name="Profil" component={ProfileScreen} />
      ) : (
        <>
          <Tab.Screen name="Giriş Yap" component={LoginScreen} />
        </>
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
