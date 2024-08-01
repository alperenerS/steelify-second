import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CardScreen from '../screens/CardScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //Log in & Register screens will remove from the tab bar
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Ana Sayfa') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Fotoğraf') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Puanlama') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Kartlar') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Giriş Yap') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Kayıt Ol') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6F00',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen name="Fotoğraf" component={PhotoScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Kartlar" component={CardScreen} />
      <Tab.Screen name="Giriş Yap" component={LoginScreen} />
      <Tab.Screen name="Kayıt Ol" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
