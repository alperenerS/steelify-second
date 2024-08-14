import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AssesmentScreen from '../screens/AssesmentScreen';
import PINScreen from '../screens/PINScreen';
import HomepageScreen from '../screens/HomepageScreen';
import AllVideosScreen from '../screens/AllVideosScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Anasayfa" component={HomepageScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Giriş Yap" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Kayıt Ol" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Şifre Sıfırla" component={ResetPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Şifremi Unuttum" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fotoğraf Çek" component={CameraScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fotoğraf" component={PhotoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profil" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Değerlendir" component={AssesmentScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PIN" component={PINScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Bütün Videolar" component={AllVideosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Blog" component={BlogDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profili Düzenle" component={EditProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
