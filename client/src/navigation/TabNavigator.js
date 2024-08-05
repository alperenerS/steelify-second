import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CardScreen from '../screens/CardScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //TODO: Log in & Register screens will remove from the tab bar
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Ana Sayfa') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Fotoğraf') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Kartlar') {
            iconName = focused ? 'albums' : 'albums-outline';
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
      {/* <Tab.Screen name="Ana Sayfa" component={HomeScreen} /> */}
      <Tab.Screen name="Kamera" component={CameraScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
      {/* <Tab.Screen name="Kartlar" component={CardScreen} /> */}
      <Tab.Screen name="Giriş Yap" component={LoginScreen} />
      <Tab.Screen name="Kayıt Ol" component={RegisterScreen} />
      <Tab.Screen name="Şifre Sıfırla" component={ResetPasswordScreen} />
      <Tab.Screen name="Şifremi Unuttum" component={ForgotPasswordScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
